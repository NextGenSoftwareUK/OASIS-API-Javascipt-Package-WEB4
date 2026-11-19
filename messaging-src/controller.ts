import { MessagingApi, MessagingApiError } from './api';
import { newId } from './ids';
import { MemoryStorage, type MessagingStorage } from './storage';
import type {
  ChatMessage, ConnectionStatus, Conversation, MessagingState, MessageState,
  RealtimeEvent, ServerConversation, ServerGroup, ServerMessage
} from './types';

/** Minimal WebSocket surface so browsers, Node (ws) and React Native all work. */
export interface SocketLike {
  onopen: ((ev?: any) => void) | null;
  onmessage: ((ev: { data: any }) => void) | null;
  onclose: ((ev?: any) => void) | null;
  onerror: ((ev?: any) => void) | null;
  send(data: string): void;
  close(): void;
  readyState: number;
}
export type SocketFactory = (url: string) => SocketLike;

export interface MessagingControllerOptions {
  api: MessagingApi;
  avatarId: string;
  storage?: MessagingStorage;
  /** Defaults to the browser WebSocket. */
  socketFactory?: SocketFactory;
  /** Set false to run without real-time push (polling via `syncNow`). */
  realtime?: boolean;
  reconnectMinMs?: number;
  reconnectMaxMs?: number;
  /**
   * Called when the server says the token expired (JWTs are short-lived). Refresh the session and return true to
   * retry at once; return false (or omit) to keep messages queued and flag `authRequired`.
   */
  onAuthRequired?: () => Promise<boolean | void> | boolean | void;
  now?: () => number;
  timers?: { setTimeout: (fn: () => void, ms: number) => any; clearTimeout: (h: any) => void };
}

const RANK: Record<MessageState, number> = { sending: 0, queued: 1, sent: 2, delivered: 3, received: 3, read: 4, failed: -1 };
const TYPING_TTL_MS = 4000;
const TYPING_SEND_INTERVAL_MS = 1500;
const MAX_STORED_MESSAGES_PER_CONVERSATION = 500;

interface Persisted {
  v: 1;
  cursor: string | null;
  messages: ChatMessage[];
  conversations: Conversation[];
  pendingDelivered: string[];
  pendingRead: string[];
}

/**
 * Offline-first messaging engine used by every OASIS UI kit.
 *
 *  - Sends are stored locally first and queued in an outbox; the server accepts them idempotently by id,
 *    so retries after a drop never duplicate.
 *  - `syncNow()` pulls everything after a server cursor; real-time push only makes delivery immediate and
 *    is always backed by that cursor, so nothing is lost across disconnects.
 *  - State is persisted via a pluggable storage and survives reloads.
 */
export class MessagingController {
  private readonly api: MessagingApi;
  private readonly avatarId: string;
  private readonly storage: MessagingStorage;
  private readonly options: MessagingControllerOptions;
  private readonly listeners = new Set<(s: MessagingState) => void>();
  private readonly messageIndex = new Map<string, ChatMessage>();
  private readonly byConversation = new Map<string, ChatMessage[]>();
  private conversations = new Map<string, Conversation>();
  private cursor: string | null = null;
  private pendingDelivered = new Set<string>();
  private pendingRead = new Set<string>();
  private typing = new Map<string, Map<string, number>>();
  private lastTypingSent = new Map<string, number>();
  private connection: ConnectionStatus = 'offline';
  private lastError: string | undefined;
  private authRequired = false;
  private socket: SocketLike | null = null;
  private reconnectAttempt = 0;
  private reconnectHandle: any = null;
  private started = false;
  private stopped = false;
  private flushing: Promise<void> | null = null;
  private persistChain: Promise<void> = Promise.resolve();
  private cached: MessagingState | null = null;

  constructor(options: MessagingControllerOptions) {
    this.options = options;
    this.api = options.api;
    this.avatarId = options.avatarId;
    this.storage = options.storage ?? new MemoryStorage();
  }

  private get now() { return this.options.now ? this.options.now() : Date.now(); }
  private get timers() {
    return this.options.timers ?? { setTimeout: (fn: () => void, ms: number) => setTimeout(fn, ms), clearTimeout: (h: any) => clearTimeout(h) };
  }
  private get storageKey() { return `oasis.messaging.${this.avatarId}.v1`; }

  // ---- state & subscription -------------------------------------------------

  subscribe(listener: (state: MessagingState) => void): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => { this.listeners.delete(listener); };
  }

  getState(): MessagingState {
    if (this.cached) return this.cached;
    const messages: Record<string, ChatMessage[]> = {};
    this.byConversation.forEach((list, id) => { messages[id] = list.slice(); });
    const typing: Record<string, string[]> = {};
    const t = this.now;
    this.typing.forEach((who, convo) => {
      const active = Array.from(who.entries()).filter(([, until]) => until > t).map(([id]) => id);
      if (active.length) typing[convo] = active;
    });
    let pending = 0;
    this.messageIndex.forEach(m => { if (m.isOwn && (m.state === 'sending' || m.state === 'queued')) pending++; });
    this.cached = {
      connection: this.connection,
      conversations: Array.from(this.conversations.values()).sort((a, b) => b.lastActivity.localeCompare(a.lastActivity)),
      messages, typing, pendingCount: pending, lastError: this.lastError, authRequired: this.authRequired
    };
    return this.cached;
  }

  private emit() {
    this.cached = null;
    const state = this.getState();
    this.listeners.forEach(l => l(state));
  }

  // ---- lifecycle -------------------------------------------------------------

  /** Loads persisted state, syncs with the server and opens the real-time channel. Safe to call once. */
  async start(): Promise<void> {
    if (this.started) return;
    this.started = true;
    this.stopped = false;
    await this.load();
    this.emit();
    await this.syncNow();
    if (this.options.realtime !== false) this.connectRealtime();
  }

  stop(): void {
    this.stopped = true;
    this.started = false;
    if (this.reconnectHandle !== null) this.timers.clearTimeout(this.reconnectHandle);
    this.reconnectHandle = null;
    if (this.socket) { const s = this.socket; this.socket = null; s.onclose = null; try { s.close(); } catch { /* already closed */ } }
    this.connection = 'offline';
    this.emit();
  }

  /** Call when the host learns the network came back (window 'online' event, app foreground). */
  async onNetworkRestored(): Promise<void> {
    await this.syncNow();
    if (this.options.realtime !== false && !this.socket && !this.stopped) this.connectRealtime();
  }

  /**
   * Hooks the browser's online/offline events so queued messages go out the moment connectivity returns.
   * Returns a function that removes the listeners. No-op where there is no event target (SSR, native).
   */
  watchNetwork(target: { addEventListener: Function; removeEventListener: Function } | undefined = (globalThis as any).window): () => void {
    if (!target) return () => undefined;
    const online = () => { void this.onNetworkRestored(); };
    const offline = () => { this.setConnection('offline'); };
    target.addEventListener('online', online);
    target.addEventListener('offline', offline);
    return () => { target.removeEventListener('online', online); target.removeEventListener('offline', offline); };
  }

  // ---- sending ---------------------------------------------------------------

  /** Stores the message locally at once (visible immediately, even offline) and queues it for the server. */
  async sendDirect(toAvatarId: string, content: string): Promise<ChatMessage> {
    return this.enqueue({ toAvatarId, conversationId: this.directKey(toAvatarId) }, content);
  }

  async sendToGroup(conversationId: string, content: string): Promise<ChatMessage> {
    return this.enqueue({ conversationId }, content);
  }

  private async enqueue(target: { toAvatarId?: string; conversationId: string }, content: string): Promise<ChatMessage> {
    const text = content.trim();
    if (!text) throw new Error('A message needs some content.');
    const message: ChatMessage = {
      id: newId(), conversationId: target.conversationId, fromAvatarId: this.avatarId, toAvatarId: target.toAvatarId,
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
  async retry(messageId: string): Promise<void> {
    const m = this.messageIndex.get(messageId);
    if (!m || m.state !== 'failed') return;
    m.state = 'sending';
    this.emit();
    await this.persist();
    void this.flushOutbox();
  }

  /** Sends queued messages in order. Stops at the first network failure; a rejected message is marked failed. */
  flushOutbox(): Promise<void> {
    if (this.flushing) return this.flushing;
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
            if (accepted?.receivedAt) m.serverReceivedAt = accepted.receivedAt;
            this.lastError = undefined;
          } catch (e) {
            const err = e as MessagingApiError;
            if (err instanceof MessagingApiError && err.auth) {
              // An expired session is not a rejection: keep the message queued for when the avatar signs in again.
              m.state = 'queued';
              this.lastError = err.message;
              this.emit();
              break;
            }
            if (err instanceof MessagingApiError && err.network) {
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
      } finally {
        this.flushing = null;
      }
    })();
    return this.flushing;
  }

  // ---- receiving / sync ------------------------------------------------------

  /** Pulls everything after the stored cursor, merges it idempotently, then sends pending outbox and receipts. */
  async syncNow(): Promise<void> {
    try {
      for (;;) {
        const page = await this.withAuth(() => this.api.sync(this.cursor, 200));
        for (const sm of page.messages) this.mergeServerMessage(sm);
        if (page.nextCursor) this.cursor = page.nextCursor;
        if (!page.hasMore) break;
      }
      await this.mergeServerConversations();
      this.lastError = undefined;
      if (this.connection === 'offline' && !this.socket) this.setConnection('online');
    } catch (e) {
      if (e instanceof MessagingApiError && e.network) this.setConnection('offline');
      else this.lastError = (e as Error).message;
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
  private async withAuth<T>(call: () => Promise<T>): Promise<T> {
    try {
      const value = await call();
      this.authRequired = false;
      return value;
    } catch (e) {
      if (!(e instanceof MessagingApiError) || !e.auth) throw e;
      let refreshed = false;
      try { refreshed = (await this.options.onAuthRequired?.()) === true; } catch { refreshed = false; }
      if (!refreshed) { this.authRequired = true; throw e; }
      const value = await call();
      this.authRequired = false;
      return value;
    }
  }

  private async mergeServerConversations() {
    const list: ServerConversation[] = await this.withAuth(() => this.api.conversations());
    for (const sc of list) {
      const id = sc.isGroup ? sc.conversationId : this.directKey(sc.otherAvatarId as string);
      const existing = this.conversations.get(id);
      this.conversations.set(id, {
        id, isGroup: !!sc.isGroup, title: sc.title, otherAvatarId: sc.otherAvatarId || undefined,
        participantIds: sc.participantIds, unreadCount: sc.unreadCount, lastActivity: sc.lastActivity,
        lastMessage: this.byConversation.get(id)?.slice(-1)[0] ?? existing?.lastMessage
      });
    }
  }

  private mergeServerMessage(sm: ServerMessage): ChatMessage {
    const isGroup = sm.messageType === 1 || sm.messageType === 'Group';
    const own = sm.fromAvatarId === this.avatarId;
    const other = own ? sm.toAvatarId : sm.fromAvatarId;
    const conversationId = isGroup ? (sm.conversationId as string) : this.directKey(other as string);
    const server = decodeDeliveryState(sm.deliveryState, !!sm.isRead);
    const state: MessageState = own
      ? (server === 'read' ? 'read' : server === 'delivered' ? 'delivered' : 'sent')
      : (server === 'read' || (sm.readBy ?? []).includes(this.avatarId) ? 'read' : 'received');
    const message: ChatMessage = {
      id: sm.id, conversationId, fromAvatarId: sm.fromAvatarId,
      toAvatarId: isGroup ? undefined : sm.toAvatarId,
      content: sm.content, createdAt: sm.clientTimestamp || sm.timestamp || sm.receivedAt || new Date(this.now).toISOString(),
      serverReceivedAt: sm.receivedAt, state, isOwn: own, readBy: sm.readBy
    };
    const merged = this.upsert(message);
    if (!own && merged.state === 'received') this.pendingDelivered.add(merged.id);
    this.refreshConversation(conversationId);
    return merged;
  }

  // ---- receipts ---------------------------------------------------------------

  /** Marks everything unread in the conversation as read (locally now, on the server when reachable). */
  async markConversationRead(conversationId: string): Promise<void> {
    const unread = (this.byConversation.get(conversationId) ?? []).filter(m => !m.isOwn && m.state !== 'read');
    if (!unread.length) return;
    for (const m of unread) { m.state = 'read'; this.pendingRead.add(m.id); this.pendingDelivered.delete(m.id); }
    this.refreshConversation(conversationId);
    this.emit();
    await this.persist();
    await this.flushReceipts();
  }

  private async flushReceipts(): Promise<void> {
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
    } catch (e) {
      if (e instanceof MessagingApiError && e.network) this.setConnection('offline');
      else this.lastError = (e as Error).message;
    }
    await this.persist();
  }

  // ---- groups ------------------------------------------------------------------

  async createGroup(title: string, participantIds: string[]): Promise<Conversation> {
    const group: ServerGroup = await this.api.createGroup(title, participantIds);
    const convo: Conversation = {
      id: group.id, isGroup: true, title: group.title, participantIds: group.participantIds,
      unreadCount: 0, lastActivity: group.createdAt
    };
    this.conversations.set(convo.id, convo);
    this.emit();
    await this.persist();
    return convo;
  }

  async addGroupMembers(conversationId: string, avatarIds: string[]): Promise<void> {
    const group = await this.api.addGroupMembers(conversationId, avatarIds);
    const c = this.conversations.get(conversationId);
    if (c) { c.participantIds = group.participantIds; this.emit(); await this.persist(); }
  }

  async leaveGroup(conversationId: string): Promise<void> {
    await this.api.leaveGroup(conversationId);
    this.conversations.delete(conversationId);
    this.byConversation.delete(conversationId);
    this.emit();
    await this.persist();
  }

  // ---- typing ------------------------------------------------------------------

  /** Throttled. Direct: pass the other avatar; group: pass the conversation id. */
  sendTyping(target: { toAvatarId?: string; conversationId?: string }): void {
    const key = target.conversationId ?? `direct:${target.toAvatarId}`;
    const t = this.now;
    if (!this.socket || this.socket.readyState !== 1) return;
    if (t - (this.lastTypingSent.get(key) ?? 0) < TYPING_SEND_INTERVAL_MS) return;
    this.lastTypingSent.set(key, t);
    this.socket.send(JSON.stringify({ type: 'typing', ...target }));
  }

  // ---- realtime ----------------------------------------------------------------

  private async connectRealtime(): Promise<void> {
    if (this.stopped || this.socket) return;
    this.setConnection('connecting');
    let ticket: string;
    try {
      ticket = await this.withAuth(() => this.api.realtimeTicket());
    } catch (e) {
      this.scheduleReconnect();
      return;
    }
    if (this.stopped) return;
    const factory: SocketFactory = this.options.socketFactory ?? (url => new (globalThis as any).WebSocket(url));
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
    socket.onerror = () => { /* onclose follows */ };
    socket.onclose = () => {
      if (this.socket === socket) this.socket = null;
      if (this.stopped) return;
      this.setConnection('offline');
      this.scheduleReconnect();
    };
  }

  private scheduleReconnect() {
    if (this.stopped || this.reconnectHandle !== null) return;
    const min = this.options.reconnectMinMs ?? 1000;
    const max = this.options.reconnectMaxMs ?? 30000;
    const delay = Math.min(max, min * 2 ** this.reconnectAttempt++);
    this.reconnectHandle = this.timers.setTimeout(() => {
      this.reconnectHandle = null;
      void this.connectRealtime();
    }, delay);
  }

  private onRealtime(raw: any) {
    let ev: RealtimeEvent;
    try { ev = JSON.parse(typeof raw === 'string' ? raw : String(raw)); } catch { return; }
    if (ev.type === 'message') {
      const m = this.mergeServerMessage(ev.message);
      this.emit();
      if (!m.isOwn) void this.persist().then(() => this.flushReceipts());
      else void this.persist();
    } else if (ev.type === 'receipt') {
      const m = this.messageIndex.get(ev.messageId);
      if (m && m.isOwn) {
        const next = ev.state.toLowerCase() === 'read' ? 'read' : 'delivered';
        this.advance(m, next);
        if (m.conversationId && this.byConversation.has(m.conversationId)) this.refreshConversation(m.conversationId);
        this.emit();
        void this.persist();
      }
    } else if (ev.type === 'typing') {
      const key = ev.conversationId;
      const convo = this.findConversationForServerId(key, ev.fromAvatarId);
      const map = this.typing.get(convo) ?? new Map<string, number>();
      map.set(ev.fromAvatarId, this.now + TYPING_TTL_MS);
      this.typing.set(convo, map);
      this.emit();
      this.timers.setTimeout(() => this.emit(), TYPING_TTL_MS + 50);
    }
  }

  /** Typing events carry the server's direct conversation id; map it to the local `direct:<avatar>` key. */
  private findConversationForServerId(serverId: string, fromAvatarId: string): string {
    return this.conversations.has(serverId) ? serverId : this.directKey(fromAvatarId);
  }

  // ---- internals ----------------------------------------------------------------

  private directKey(otherAvatarId: string) { return `direct:${otherAvatarId}`; }

  private setConnection(c: ConnectionStatus) {
    if (this.connection !== c) { this.connection = c; this.emit(); }
  }

  /** Inserts or merges. Content is immutable once stored; state only advances. */
  private upsert(incoming: ChatMessage): ChatMessage {
    const existing = this.messageIndex.get(incoming.id);
    if (existing) {
      this.advance(existing, incoming.state);
      existing.serverReceivedAt = existing.serverReceivedAt ?? incoming.serverReceivedAt;
      if (incoming.readBy) existing.readBy = incoming.readBy;
      return existing;
    }
    this.messageIndex.set(incoming.id, incoming);
    const list = this.byConversation.get(incoming.conversationId) ?? [];
    list.push(incoming);
    list.sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.id.localeCompare(b.id));
    while (list.length > MAX_STORED_MESSAGES_PER_CONVERSATION) {
      const dropped = list.shift() as ChatMessage;
      this.messageIndex.delete(dropped.id);
    }
    this.byConversation.set(incoming.conversationId, list);
    return incoming;
  }

  private advance(m: ChatMessage, next: MessageState) {
    if (m.state === 'failed' && next !== 'failed') { m.state = next; return; }
    if (next !== 'failed' && RANK[next] > RANK[m.state]) m.state = next;
  }

  private refreshConversation(id: string) {
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

  private async load() {
    let raw: string | null = null;
    try { raw = await this.storage.get(this.storageKey); } catch { raw = null; }
    if (!raw) return;
    let data: Persisted;
    try { data = JSON.parse(raw) as Persisted; } catch { return; }
    if (data.v !== 1) return;
    this.cursor = data.cursor;
    data.messages.forEach(m => this.upsert(m));
    data.conversations.forEach(c => this.conversations.set(c.id, c));
    this.pendingDelivered = new Set(data.pendingDelivered);
    this.pendingRead = new Set(data.pendingRead);
    // A message that was mid-send when the app closed is retried; the server dedupes by id.
    this.messageIndex.forEach(m => { if (m.isOwn && m.state === 'sending') m.state = 'queued'; });
  }

  private persist(): Promise<void> {
    const snapshot: Persisted = {
      v: 1, cursor: this.cursor,
      messages: Array.from(this.messageIndex.values()),
      conversations: Array.from(this.conversations.values()),
      pendingDelivered: Array.from(this.pendingDelivered),
      pendingRead: Array.from(this.pendingRead)
    };
    const json = JSON.stringify(snapshot);
    this.persistChain = this.persistChain.then(() => this.storage.set(this.storageKey, json)).catch(e => {
      this.lastError = `Could not save messages locally: ${(e as Error).message}`;
    });
    return this.persistChain;
  }
}

function decodeDeliveryState(value: number | string | undefined, isRead: boolean): 'sent' | 'delivered' | 'read' {
  if (isRead) return 'read';
  if (value === 2 || value === 'Read') return 'read';
  if (value === 1 || value === 'Delivered') return 'delivered';
  return 'sent';
}
