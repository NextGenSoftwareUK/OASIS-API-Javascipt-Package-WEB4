"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingController = void 0;
const api_1 = require("./api");
const ids_1 = require("./ids");
const storage_1 = require("./storage");
const RANK = { sending: 0, queued: 1, sent: 2, delivered: 3, received: 3, read: 4, failed: -1 };
const TYPING_TTL_MS = 4000;
const TYPING_SEND_INTERVAL_MS = 1500;
const MAX_STORED_MESSAGES_PER_CONVERSATION = 500;
/**
 * Offline-first messaging engine used by every OASIS UI kit.
 *
 *  - Sends are stored locally first and queued in an outbox; the server accepts them idempotently by id,
 *    so retries after a drop never duplicate.
 *  - `syncNow()` pulls everything after a server cursor; real-time push only makes delivery immediate and
 *    is always backed by that cursor, so nothing is lost across disconnects.
 *  - State is persisted via a pluggable storage and survives reloads.
 */
class MessagingController {
    constructor(options) {
        this.listeners = new Set();
        this.messageIndex = new Map();
        this.byConversation = new Map();
        this.conversations = new Map();
        this.cursor = null;
        this.pendingDelivered = new Set();
        this.pendingRead = new Set();
        this.typing = new Map();
        this.lastTypingSent = new Map();
        this.connection = 'offline';
        this.authRequired = false;
        this.socket = null;
        this.reconnectAttempt = 0;
        this.reconnectHandle = null;
        this.started = false;
        this.stopped = false;
        this.flushing = null;
        this.persistChain = Promise.resolve();
        this.cached = null;
        this.options = options;
        this.api = options.api;
        this.avatarId = options.avatarId;
        this.storage = options.storage ?? new storage_1.MemoryStorage();
    }
    get now() { return this.options.now ? this.options.now() : Date.now(); }
    get timers() {
        return this.options.timers ?? { setTimeout: (fn, ms) => setTimeout(fn, ms), clearTimeout: (h) => clearTimeout(h) };
    }
    get storageKey() { return `oasis.messaging.${this.avatarId}.v1`; }
    // ---- state & subscription -------------------------------------------------
    subscribe(listener) {
        this.listeners.add(listener);
        listener(this.getState());
        return () => { this.listeners.delete(listener); };
    }
    getState() {
        if (this.cached)
            return this.cached;
        const messages = {};
        this.byConversation.forEach((list, id) => { messages[id] = list.slice(); });
        const typing = {};
        const t = this.now;
        this.typing.forEach((who, convo) => {
            const active = Array.from(who.entries()).filter(([, until]) => until > t).map(([id]) => id);
            if (active.length)
                typing[convo] = active;
        });
        let pending = 0;
        this.messageIndex.forEach(m => { if (m.isOwn && (m.state === 'sending' || m.state === 'queued'))
            pending++; });
        this.cached = {
            connection: this.connection,
            conversations: Array.from(this.conversations.values()).sort((a, b) => b.lastActivity.localeCompare(a.lastActivity)),
            messages, typing, pendingCount: pending, lastError: this.lastError, authRequired: this.authRequired
        };
        return this.cached;
    }
    emit() {
        this.cached = null;
        const state = this.getState();
        this.listeners.forEach(l => l(state));
    }
    // ---- lifecycle -------------------------------------------------------------
    /** Loads persisted state, syncs with the server and opens the real-time channel. Safe to call once. */
    async start() {
        if (this.started)
            return;
        this.started = true;
        this.stopped = false;
        await this.load();
        this.emit();
        await this.syncNow();
        if (this.options.realtime !== false)
            this.connectRealtime();
    }
    stop() {
        this.stopped = true;
        this.started = false;
        if (this.reconnectHandle !== null)
            this.timers.clearTimeout(this.reconnectHandle);
        this.reconnectHandle = null;
        if (this.socket) {
            const s = this.socket;
            this.socket = null;
            s.onclose = null;
            try {
                s.close();
            }
            catch { /* already closed */ }
        }
        this.connection = 'offline';
        this.emit();
    }
    /** Call when the host learns the network came back (window 'online' event, app foreground). */
    async onNetworkRestored() {
        await this.syncNow();
        if (this.options.realtime !== false && !this.socket && !this.stopped)
            this.connectRealtime();
    }
    /**
     * Hooks the browser's online/offline events so queued messages go out the moment connectivity returns.
     * Returns a function that removes the listeners. No-op where there is no event target (SSR, native).
     */
    watchNetwork(target = globalThis.window) {
        if (!target)
            return () => undefined;
        const online = () => { void this.onNetworkRestored(); };
        const offline = () => { this.setConnection('offline'); };
        target.addEventListener('online', online);
        target.addEventListener('offline', offline);
        return () => { target.removeEventListener('online', online); target.removeEventListener('offline', offline); };
    }
    // ---- sending ---------------------------------------------------------------
    /** Stores the message locally at once (visible immediately, even offline) and queues it for the server. */
    async sendDirect(toAvatarId, content) {
        return this.enqueue({ toAvatarId, conversationId: this.directKey(toAvatarId) }, content);
    }
    async sendToGroup(conversationId, content) {
        return this.enqueue({ conversationId }, content);
    }
    async enqueue(target, content) {
        const text = content.trim();
        if (!text)
            throw new Error('A message needs some content.');
        const message = {
            id: (0, ids_1.newId)(), conversationId: target.conversationId, fromAvatarId: this.avatarId, toAvatarId: target.toAvatarId,
            content: text, createdAt: new Date(this.now).toISOString(), state: 'sending', isOwn: true
        };
        this.upsert(message);
        this.refreshConversation(target.conversationId);
        this.emit();
        await this.persist();
        void this.flushOutbox();
        return message;
    }
    /** Re-queues a failed message so the user can retry it. */
    async retry(messageId) {
        const m = this.messageIndex.get(messageId);
        if (!m || m.state !== 'failed')
            return;
        m.state = 'sending';
        this.emit();
        await this.persist();
        void this.flushOutbox();
    }
    /** Sends queued messages in order. Stops at the first network failure; a rejected message is marked failed. */
    flushOutbox() {
        if (this.flushing)
            return this.flushing;
        this.flushing = (async () => {
            try {
                const queue = Array.from(this.messageIndex.values())
                    .filter(m => m.isOwn && (m.state === 'sending' || m.state === 'queued'))
                    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
                for (const m of queue) {
                    try {
                        const accepted = await this.withAuth(() => this.api.send({
                            id: m.id, toAvatarId: m.toAvatarId, conversationId: m.toAvatarId ? undefined : m.conversationId,
                            content: m.content, clientTimestamp: m.createdAt
                        }));
                        this.advance(m, 'sent');
                        if (accepted?.receivedAt)
                            m.serverReceivedAt = accepted.receivedAt;
                        this.lastError = undefined;
                    }
                    catch (e) {
                        const err = e;
                        if (err instanceof api_1.MessagingApiError && err.auth) {
                            // An expired session is not a rejection: keep the message queued for when the avatar signs in again.
                            m.state = 'queued';
                            this.lastError = err.message;
                            this.emit();
                            break;
                        }
                        if (err instanceof api_1.MessagingApiError && err.network) {
                            m.state = 'queued';
                            this.setConnection('offline');
                            break;
                        }
                        m.state = 'failed';
                        this.lastError = err.message;
                    }
                    this.emit();
                    await this.persist();
                }
                this.emit();
                await this.persist();
            }
            finally {
                this.flushing = null;
            }
        })();
        return this.flushing;
    }
    // ---- receiving / sync ------------------------------------------------------
    /** Pulls everything after the stored cursor, merges it idempotently, then sends pending outbox and receipts. */
    async syncNow() {
        try {
            for (;;) {
                const page = await this.withAuth(() => this.api.sync(this.cursor, 200));
                for (const sm of page.messages)
                    this.mergeServerMessage(sm);
                if (page.nextCursor)
                    this.cursor = page.nextCursor;
                if (!page.hasMore)
                    break;
            }
            await this.mergeServerConversations();
            this.lastError = undefined;
            if (this.connection === 'offline' && !this.socket)
                this.setConnection('online');
        }
        catch (e) {
            if (e instanceof api_1.MessagingApiError && e.network)
                this.setConnection('offline');
            else
                this.lastError = e.message;
            this.emit();
            await this.persist();
            return;
        }
        this.emit();
        await this.persist();
        await this.flushOutbox();
        await this.flushReceipts();
    }
    /**
     * Runs an API call; on an expired token asks the host to refresh and retries once.
     * Anything else (including a failed refresh) propagates to the caller.
     */
    async withAuth(call) {
        try {
            const value = await call();
            this.authRequired = false;
            return value;
        }
        catch (e) {
            if (!(e instanceof api_1.MessagingApiError) || !e.auth)
                throw e;
            let refreshed = false;
            try {
                refreshed = (await this.options.onAuthRequired?.()) === true;
            }
            catch {
                refreshed = false;
            }
            if (!refreshed) {
                this.authRequired = true;
                throw e;
            }
            const value = await call();
            this.authRequired = false;
            return value;
        }
    }
    async mergeServerConversations() {
        const list = await this.withAuth(() => this.api.conversations());
        for (const sc of list) {
            const id = sc.isGroup ? sc.conversationId : this.directKey(sc.otherAvatarId);
            const existing = this.conversations.get(id);
            this.conversations.set(id, {
                id, isGroup: !!sc.isGroup, title: sc.title, otherAvatarId: sc.otherAvatarId || undefined,
                participantIds: sc.participantIds, unreadCount: sc.unreadCount, lastActivity: sc.lastActivity,
                lastMessage: this.byConversation.get(id)?.slice(-1)[0] ?? existing?.lastMessage
            });
        }
    }
    mergeServerMessage(sm) {
        const isGroup = sm.messageType === 1 || sm.messageType === 'Group';
        const own = sm.fromAvatarId === this.avatarId;
        const other = own ? sm.toAvatarId : sm.fromAvatarId;
        const conversationId = isGroup ? sm.conversationId : this.directKey(other);
        const server = decodeDeliveryState(sm.deliveryState, !!sm.isRead);
        const state = own
            ? (server === 'read' ? 'read' : server === 'delivered' ? 'delivered' : 'sent')
            : (server === 'read' || (sm.readBy ?? []).includes(this.avatarId) ? 'read' : 'received');
        const message = {
            id: sm.id, conversationId, fromAvatarId: sm.fromAvatarId,
            toAvatarId: isGroup ? undefined : sm.toAvatarId,
            content: sm.content, createdAt: sm.clientTimestamp || sm.timestamp || sm.receivedAt || new Date(this.now).toISOString(),
            serverReceivedAt: sm.receivedAt, state, isOwn: own, readBy: sm.readBy
        };
        const merged = this.upsert(message);
        if (!own && merged.state === 'received')
            this.pendingDelivered.add(merged.id);
        this.refreshConversation(conversationId);
        return merged;
    }
    // ---- receipts ---------------------------------------------------------------
    /** Marks everything unread in the conversation as read (locally now, on the server when reachable). */
    async markConversationRead(conversationId) {
        const unread = (this.byConversation.get(conversationId) ?? []).filter(m => !m.isOwn && m.state !== 'read');
        if (!unread.length)
            return;
        for (const m of unread) {
            m.state = 'read';
            this.pendingRead.add(m.id);
            this.pendingDelivered.delete(m.id);
        }
        this.refreshConversation(conversationId);
        this.emit();
        await this.persist();
        await this.flushReceipts();
    }
    async flushReceipts() {
        try {
            if (this.pendingDelivered.size) {
                const ids = Array.from(this.pendingDelivered);
                await this.withAuth(() => this.api.markDelivered(ids));
                ids.forEach(id => this.pendingDelivered.delete(id));
            }
            if (this.pendingRead.size) {
                const ids = Array.from(this.pendingRead);
                await this.withAuth(() => this.api.markRead(ids));
                ids.forEach(id => this.pendingRead.delete(id));
            }
        }
        catch (e) {
            if (e instanceof api_1.MessagingApiError && e.network)
                this.setConnection('offline');
            else
                this.lastError = e.message;
        }
        await this.persist();
    }
    // ---- groups ------------------------------------------------------------------
    async createGroup(title, participantIds) {
        const group = await this.api.createGroup(title, participantIds);
        const convo = {
            id: group.id, isGroup: true, title: group.title, participantIds: group.participantIds,
            unreadCount: 0, lastActivity: group.createdAt
        };
        this.conversations.set(convo.id, convo);
        this.emit();
        await this.persist();
        return convo;
    }
    async addGroupMembers(conversationId, avatarIds) {
        const group = await this.api.addGroupMembers(conversationId, avatarIds);
        const c = this.conversations.get(conversationId);
        if (c) {
            c.participantIds = group.participantIds;
            this.emit();
            await this.persist();
        }
    }
    async leaveGroup(conversationId) {
        await this.api.leaveGroup(conversationId);
        this.conversations.delete(conversationId);
        this.byConversation.delete(conversationId);
        this.emit();
        await this.persist();
    }
    // ---- typing ------------------------------------------------------------------
    /** Throttled. Direct: pass the other avatar; group: pass the conversation id. */
    sendTyping(target) {
        const key = target.conversationId ?? `direct:${target.toAvatarId}`;
        const t = this.now;
        if (!this.socket || this.socket.readyState !== 1)
            return;
        if (t - (this.lastTypingSent.get(key) ?? 0) < TYPING_SEND_INTERVAL_MS)
            return;
        this.lastTypingSent.set(key, t);
        this.socket.send(JSON.stringify({ type: 'typing', ...target }));
    }
    // ---- realtime ----------------------------------------------------------------
    async connectRealtime() {
        if (this.stopped || this.socket)
            return;
        this.setConnection('connecting');
        let ticket;
        try {
            ticket = await this.withAuth(() => this.api.realtimeTicket());
        }
        catch (e) {
            this.scheduleReconnect();
            return;
        }
        if (this.stopped)
            return;
        const factory = this.options.socketFactory ?? (url => new globalThis.WebSocket(url));
        const wsBase = this.api.origin.replace(/^http/i, 'ws');
        const socket = factory(`${wsBase}/ws/messaging?ticket=${encodeURIComponent(ticket)}`);
        this.socket = socket;
        socket.onopen = () => {
            this.reconnectAttempt = 0;
            this.setConnection('online');
            // Anything missed while disconnected comes from the durable cursor.
            void this.syncNow();
        };
        socket.onmessage = ev => this.onRealtime(ev.data);
        socket.onerror = () => { };
        socket.onclose = () => {
            if (this.socket === socket)
                this.socket = null;
            if (this.stopped)
                return;
            this.setConnection('offline');
            this.scheduleReconnect();
        };
    }
    scheduleReconnect() {
        if (this.stopped || this.reconnectHandle !== null)
            return;
        const min = this.options.reconnectMinMs ?? 1000;
        const max = this.options.reconnectMaxMs ?? 30000;
        const delay = Math.min(max, min * 2 ** this.reconnectAttempt++);
        this.reconnectHandle = this.timers.setTimeout(() => {
            this.reconnectHandle = null;
            void this.connectRealtime();
        }, delay);
    }
    onRealtime(raw) {
        let ev;
        try {
            ev = JSON.parse(typeof raw === 'string' ? raw : String(raw));
        }
        catch {
            return;
        }
        if (ev.type === 'message') {
            const m = this.mergeServerMessage(ev.message);
            this.emit();
            if (!m.isOwn)
                void this.persist().then(() => this.flushReceipts());
            else
                void this.persist();
        }
        else if (ev.type === 'receipt') {
            const m = this.messageIndex.get(ev.messageId);
            if (m && m.isOwn) {
                const next = ev.state.toLowerCase() === 'read' ? 'read' : 'delivered';
                this.advance(m, next);
                if (m.conversationId && this.byConversation.has(m.conversationId))
                    this.refreshConversation(m.conversationId);
                this.emit();
                void this.persist();
            }
        }
        else if (ev.type === 'typing') {
            const key = ev.conversationId;
            const convo = this.findConversationForServerId(key, ev.fromAvatarId);
            const map = this.typing.get(convo) ?? new Map();
            map.set(ev.fromAvatarId, this.now + TYPING_TTL_MS);
            this.typing.set(convo, map);
            this.emit();
            this.timers.setTimeout(() => this.emit(), TYPING_TTL_MS + 50);
        }
    }
    /** Typing events carry the server's direct conversation id; map it to the local `direct:<avatar>` key. */
    findConversationForServerId(serverId, fromAvatarId) {
        return this.conversations.has(serverId) ? serverId : this.directKey(fromAvatarId);
    }
    // ---- internals ----------------------------------------------------------------
    directKey(otherAvatarId) { return `direct:${otherAvatarId}`; }
    setConnection(c) {
        if (this.connection !== c) {
            this.connection = c;
            this.emit();
        }
    }
    /** Inserts or merges. Content is immutable once stored; state only advances. */
    upsert(incoming) {
        const existing = this.messageIndex.get(incoming.id);
        if (existing) {
            this.advance(existing, incoming.state);
            existing.serverReceivedAt = existing.serverReceivedAt ?? incoming.serverReceivedAt;
            if (incoming.readBy)
                existing.readBy = incoming.readBy;
            return existing;
        }
        this.messageIndex.set(incoming.id, incoming);
        const list = this.byConversation.get(incoming.conversationId) ?? [];
        list.push(incoming);
        list.sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.id.localeCompare(b.id));
        while (list.length > MAX_STORED_MESSAGES_PER_CONVERSATION) {
            const dropped = list.shift();
            this.messageIndex.delete(dropped.id);
        }
        this.byConversation.set(incoming.conversationId, list);
        return incoming;
    }
    advance(m, next) {
        if (m.state === 'failed' && next !== 'failed') {
            m.state = next;
            return;
        }
        if (next !== 'failed' && RANK[next] > RANK[m.state])
            m.state = next;
    }
    refreshConversation(id) {
        const list = this.byConversation.get(id) ?? [];
        const last = list[list.length - 1];
        const existing = this.conversations.get(id);
        const isGroup = existing?.isGroup ?? !id.startsWith('direct:');
        const other = existing?.otherAvatarId ?? (isGroup ? undefined : id.slice('direct:'.length));
        this.conversations.set(id, {
            id, isGroup, title: existing?.title, otherAvatarId: other, participantIds: existing?.participantIds,
            lastMessage: last ?? existing?.lastMessage,
            unreadCount: list.filter(m => !m.isOwn && m.state !== 'read').length,
            lastActivity: last?.serverReceivedAt ?? last?.createdAt ?? existing?.lastActivity ?? new Date(this.now).toISOString()
        });
    }
    // ---- persistence ---------------------------------------------------------------
    async load() {
        let raw = null;
        try {
            raw = await this.storage.get(this.storageKey);
        }
        catch {
            raw = null;
        }
        if (!raw)
            return;
        let data;
        try {
            data = JSON.parse(raw);
        }
        catch {
            return;
        }
        if (data.v !== 1)
            return;
        this.cursor = data.cursor;
        data.messages.forEach(m => this.upsert(m));
        data.conversations.forEach(c => this.conversations.set(c.id, c));
        this.pendingDelivered = new Set(data.pendingDelivered);
        this.pendingRead = new Set(data.pendingRead);
        // A message that was mid-send when the app closed is retried; the server dedupes by id.
        this.messageIndex.forEach(m => { if (m.isOwn && m.state === 'sending')
            m.state = 'queued'; });
    }
    persist() {
        const snapshot = {
            v: 1, cursor: this.cursor,
            messages: Array.from(this.messageIndex.values()),
            conversations: Array.from(this.conversations.values()),
            pendingDelivered: Array.from(this.pendingDelivered),
            pendingRead: Array.from(this.pendingRead)
        };
        const json = JSON.stringify(snapshot);
        this.persistChain = this.persistChain.then(() => this.storage.set(this.storageKey, json)).catch(e => {
            this.lastError = `Could not save messages locally: ${e.message}`;
        });
        return this.persistChain;
    }
}
exports.MessagingController = MessagingController;
function decodeDeliveryState(value, isRead) {
    if (isRead)
        return 'read';
    if (value === 2 || value === 'Read')
        return 'read';
    if (value === 1 || value === 'Delivered')
        return 'delivered';
    return 'sent';
}
