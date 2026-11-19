// messaging-src/api.ts
var MessagingApiError = class extends Error {
  constructor(message, opts) {
    super(message);
    this.name = "MessagingApiError";
    this.network = opts.network;
    this.status = opts.status;
  }
};
var MessagingApi = class {
  constructor(options) {
    this.options = options;
    this.base = options.baseUrl.replace(/\/+$/, "");
    this.fetchImpl = options.fetch ?? ((...a) => globalThis.fetch(...a));
  }
  get origin() {
    return this.base;
  }
  async call(method, path, body) {
    const token = await this.options.getToken();
    let response;
    try {
      response = await this.fetchImpl(`${this.base}/api/messaging/${path}`, {
        method,
        headers: {
          Accept: "application/json",
          ...body !== void 0 ? { "Content-Type": "application/json" } : {},
          ...token ? { Authorization: `Bearer ${token}` } : {}
        },
        body: body !== void 0 ? JSON.stringify(body) : void 0
      });
    } catch (e) {
      throw new MessagingApiError(`Network error: ${e.message}`, { network: true });
    }
    if (response.status === 502 || response.status === 503 || response.status === 504 || response.status === 408) {
      throw new MessagingApiError(`Service unavailable (${response.status})`, { network: true, status: response.status });
    }
    let envelope = null;
    try {
      envelope = await response.json();
    } catch {
    }
    if (!response.ok || !envelope || envelope.isError) {
      throw new MessagingApiError(envelope?.message || `Request failed (${response.status})`, { network: false, status: response.status });
    }
    return envelope.result;
  }
  /** Idempotent: re-sending the same `id` never creates a duplicate. */
  send(request) {
    return this.call("POST", "send", request);
  }
  sync(since, limit = 100) {
    const q = `limit=${limit}` + (since ? `&since=${encodeURIComponent(since)}` : "");
    return this.call("GET", `sync?${q}`);
  }
  conversations() {
    return this.call("GET", "conversations");
  }
  markDelivered(ids) {
    return this.call("POST", "mark-messages-delivered", ids);
  }
  markRead(ids) {
    return this.call("POST", "mark-messages-read", ids);
  }
  realtimeTicket() {
    return this.call("POST", "realtime-ticket");
  }
  createGroup(title, participantIds) {
    return this.call("POST", "groups", { title, participantIds });
  }
  groups() {
    return this.call("GET", "groups");
  }
  addGroupMembers(conversationId, avatarIds) {
    return this.call("POST", `groups/${conversationId}/members`, avatarIds);
  }
  leaveGroup(conversationId) {
    return this.call("POST", `groups/${conversationId}/leave`);
  }
  groupMessages(conversationId, limit = 50, offset = 0) {
    return this.call("GET", `groups/${conversationId}/messages?limit=${limit}&offset=${offset}`);
  }
  presence(avatarIds) {
    return this.call("GET", `presence?${avatarIds.map((id) => `avatarIds=${encodeURIComponent(id)}`).join("&")}`);
  }
};

// messaging-src/storage.ts
var MemoryStorage = class {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
  }
  async get(key) {
    return this.data.has(key) ? this.data.get(key) : null;
  }
  async set(key, value) {
    this.data.set(key, value);
  }
  async remove(key) {
    this.data.delete(key);
  }
};
var BrowserStorage = class {
  constructor() {
    this.fallback = new MemoryStorage();
  }
  usable() {
    try {
      const s = globalThis.localStorage;
      if (!s) return null;
      s.setItem("__oasis_probe__", "1");
      s.removeItem("__oasis_probe__");
      return s;
    } catch {
      return null;
    }
  }
  async get(key) {
    const s = this.usable();
    return s ? s.getItem(key) : this.fallback.get(key);
  }
  async set(key, value) {
    const s = this.usable();
    if (s) s.setItem(key, value);
    else await this.fallback.set(key, value);
  }
  async remove(key) {
    const s = this.usable();
    if (s) s.removeItem(key);
    else await this.fallback.remove(key);
  }
};

// messaging-src/ids.ts
function newId() {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();
  const bytes = new Uint8Array(16);
  if (c && typeof c.getRandomValues === "function") c.getRandomValues(bytes);
  else for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  bytes[6] = bytes[6] & 15 | 64;
  bytes[8] = bytes[8] & 63 | 128;
  const h = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

// messaging-src/controller.ts
var RANK = { sending: 0, queued: 1, sent: 2, delivered: 3, received: 3, read: 4, failed: -1 };
var TYPING_TTL_MS = 4e3;
var TYPING_SEND_INTERVAL_MS = 1500;
var MAX_STORED_MESSAGES_PER_CONVERSATION = 500;
var MessagingController = class {
  constructor(options) {
    this.listeners = /* @__PURE__ */ new Set();
    this.messageIndex = /* @__PURE__ */ new Map();
    this.byConversation = /* @__PURE__ */ new Map();
    this.conversations = /* @__PURE__ */ new Map();
    this.cursor = null;
    this.pendingDelivered = /* @__PURE__ */ new Set();
    this.pendingRead = /* @__PURE__ */ new Set();
    this.typing = /* @__PURE__ */ new Map();
    this.lastTypingSent = /* @__PURE__ */ new Map();
    this.connection = "offline";
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
    this.storage = options.storage ?? new MemoryStorage();
  }
  get now() {
    return this.options.now ? this.options.now() : Date.now();
  }
  get timers() {
    return this.options.timers ?? { setTimeout: (fn, ms) => setTimeout(fn, ms), clearTimeout: (h) => clearTimeout(h) };
  }
  get storageKey() {
    return `oasis.messaging.${this.avatarId}.v1`;
  }
  // ---- state & subscription -------------------------------------------------
  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }
  getState() {
    if (this.cached) return this.cached;
    const messages = {};
    this.byConversation.forEach((list, id) => {
      messages[id] = list.slice();
    });
    const typing = {};
    const t = this.now;
    this.typing.forEach((who, convo) => {
      const active = Array.from(who.entries()).filter(([, until]) => until > t).map(([id]) => id);
      if (active.length) typing[convo] = active;
    });
    let pending = 0;
    this.messageIndex.forEach((m) => {
      if (m.isOwn && (m.state === "sending" || m.state === "queued")) pending++;
    });
    this.cached = {
      connection: this.connection,
      conversations: Array.from(this.conversations.values()).sort((a, b) => b.lastActivity.localeCompare(a.lastActivity)),
      messages,
      typing,
      pendingCount: pending,
      lastError: this.lastError
    };
    return this.cached;
  }
  emit() {
    this.cached = null;
    const state = this.getState();
    this.listeners.forEach((l) => l(state));
  }
  // ---- lifecycle -------------------------------------------------------------
  /** Loads persisted state, syncs with the server and opens the real-time channel. Safe to call once. */
  async start() {
    if (this.started) return;
    this.started = true;
    this.stopped = false;
    await this.load();
    this.emit();
    await this.syncNow();
    if (this.options.realtime !== false) this.connectRealtime();
  }
  stop() {
    this.stopped = true;
    this.started = false;
    if (this.reconnectHandle !== null) this.timers.clearTimeout(this.reconnectHandle);
    this.reconnectHandle = null;
    if (this.socket) {
      const s = this.socket;
      this.socket = null;
      s.onclose = null;
      try {
        s.close();
      } catch {
      }
    }
    this.connection = "offline";
    this.emit();
  }
  /** Call when the host learns the network came back (window 'online' event, app foreground). */
  async onNetworkRestored() {
    await this.syncNow();
    if (this.options.realtime !== false && !this.socket && !this.stopped) this.connectRealtime();
  }
  /**
   * Hooks the browser's online/offline events so queued messages go out the moment connectivity returns.
   * Returns a function that removes the listeners. No-op where there is no event target (SSR, native).
   */
  watchNetwork(target = globalThis.window) {
    if (!target) return () => void 0;
    const online = () => {
      void this.onNetworkRestored();
    };
    const offline = () => {
      this.setConnection("offline");
    };
    target.addEventListener("online", online);
    target.addEventListener("offline", offline);
    return () => {
      target.removeEventListener("online", online);
      target.removeEventListener("offline", offline);
    };
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
    if (!text) throw new Error("A message needs some content.");
    const message = {
      id: newId(),
      conversationId: target.conversationId,
      fromAvatarId: this.avatarId,
      toAvatarId: target.toAvatarId,
      content: text,
      createdAt: new Date(this.now).toISOString(),
      state: "sending",
      isOwn: true
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
    if (!m || m.state !== "failed") return;
    m.state = "sending";
    this.emit();
    await this.persist();
    void this.flushOutbox();
  }
  /** Sends queued messages in order. Stops at the first network failure; a rejected message is marked failed. */
  flushOutbox() {
    if (this.flushing) return this.flushing;
    this.flushing = (async () => {
      try {
        const queue = Array.from(this.messageIndex.values()).filter((m) => m.isOwn && (m.state === "sending" || m.state === "queued")).sort((a, b) => a.createdAt.localeCompare(b.createdAt));
        for (const m of queue) {
          try {
            const accepted = await this.api.send({
              id: m.id,
              toAvatarId: m.toAvatarId,
              conversationId: m.toAvatarId ? void 0 : m.conversationId,
              content: m.content,
              clientTimestamp: m.createdAt
            });
            this.advance(m, "sent");
            if (accepted?.receivedAt) m.serverReceivedAt = accepted.receivedAt;
            this.lastError = void 0;
          } catch (e) {
            const err = e;
            if (err instanceof MessagingApiError && err.network) {
              m.state = "queued";
              this.setConnection("offline");
              break;
            }
            m.state = "failed";
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
  async syncNow() {
    try {
      for (; ; ) {
        const page = await this.api.sync(this.cursor, 200);
        for (const sm of page.messages) this.mergeServerMessage(sm);
        if (page.nextCursor) this.cursor = page.nextCursor;
        if (!page.hasMore) break;
      }
      await this.mergeServerConversations();
      this.lastError = void 0;
      if (this.connection === "offline" && !this.socket) this.setConnection("online");
    } catch (e) {
      if (e instanceof MessagingApiError && e.network) this.setConnection("offline");
      else this.lastError = e.message;
      this.emit();
      await this.persist();
      return;
    }
    this.emit();
    await this.persist();
    await this.flushOutbox();
    await this.flushReceipts();
  }
  async mergeServerConversations() {
    const list = await this.api.conversations();
    for (const sc of list) {
      const id = sc.isGroup ? sc.conversationId : this.directKey(sc.otherAvatarId);
      const existing = this.conversations.get(id);
      this.conversations.set(id, {
        id,
        isGroup: !!sc.isGroup,
        title: sc.title,
        otherAvatarId: sc.otherAvatarId || void 0,
        participantIds: sc.participantIds,
        unreadCount: sc.unreadCount,
        lastActivity: sc.lastActivity,
        lastMessage: this.byConversation.get(id)?.slice(-1)[0] ?? existing?.lastMessage
      });
    }
  }
  mergeServerMessage(sm) {
    const isGroup = sm.messageType === 1 || sm.messageType === "Group";
    const own = sm.fromAvatarId === this.avatarId;
    const other = own ? sm.toAvatarId : sm.fromAvatarId;
    const conversationId = isGroup ? sm.conversationId : this.directKey(other);
    const server = decodeDeliveryState(sm.deliveryState, !!sm.isRead);
    const state = own ? server === "read" ? "read" : server === "delivered" ? "delivered" : "sent" : server === "read" || (sm.readBy ?? []).includes(this.avatarId) ? "read" : "received";
    const message = {
      id: sm.id,
      conversationId,
      fromAvatarId: sm.fromAvatarId,
      toAvatarId: isGroup ? void 0 : sm.toAvatarId,
      content: sm.content,
      createdAt: sm.clientTimestamp || sm.timestamp || sm.receivedAt || new Date(this.now).toISOString(),
      serverReceivedAt: sm.receivedAt,
      state,
      isOwn: own,
      readBy: sm.readBy
    };
    const merged = this.upsert(message);
    if (!own && merged.state === "received") this.pendingDelivered.add(merged.id);
    this.refreshConversation(conversationId);
    return merged;
  }
  // ---- receipts ---------------------------------------------------------------
  /** Marks everything unread in the conversation as read (locally now, on the server when reachable). */
  async markConversationRead(conversationId) {
    const unread = (this.byConversation.get(conversationId) ?? []).filter((m) => !m.isOwn && m.state !== "read");
    if (!unread.length) return;
    for (const m of unread) {
      m.state = "read";
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
        await this.api.markDelivered(ids);
        ids.forEach((id) => this.pendingDelivered.delete(id));
      }
      if (this.pendingRead.size) {
        const ids = Array.from(this.pendingRead);
        await this.api.markRead(ids);
        ids.forEach((id) => this.pendingRead.delete(id));
      }
    } catch (e) {
      if (e instanceof MessagingApiError && e.network) this.setConnection("offline");
      else this.lastError = e.message;
    }
    await this.persist();
  }
  // ---- groups ------------------------------------------------------------------
  async createGroup(title, participantIds) {
    const group = await this.api.createGroup(title, participantIds);
    const convo = {
      id: group.id,
      isGroup: true,
      title: group.title,
      participantIds: group.participantIds,
      unreadCount: 0,
      lastActivity: group.createdAt
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
    if (!this.socket || this.socket.readyState !== 1) return;
    if (t - (this.lastTypingSent.get(key) ?? 0) < TYPING_SEND_INTERVAL_MS) return;
    this.lastTypingSent.set(key, t);
    this.socket.send(JSON.stringify({ type: "typing", ...target }));
  }
  // ---- realtime ----------------------------------------------------------------
  async connectRealtime() {
    if (this.stopped || this.socket) return;
    this.setConnection("connecting");
    let ticket;
    try {
      ticket = await this.api.realtimeTicket();
    } catch (e) {
      this.scheduleReconnect();
      return;
    }
    if (this.stopped) return;
    const factory = this.options.socketFactory ?? ((url) => new globalThis.WebSocket(url));
    const wsBase = this.api.origin.replace(/^http/i, "ws");
    const socket = factory(`${wsBase}/ws/messaging?ticket=${encodeURIComponent(ticket)}`);
    this.socket = socket;
    socket.onopen = () => {
      this.reconnectAttempt = 0;
      this.setConnection("online");
      void this.syncNow();
    };
    socket.onmessage = (ev) => this.onRealtime(ev.data);
    socket.onerror = () => {
    };
    socket.onclose = () => {
      if (this.socket === socket) this.socket = null;
      if (this.stopped) return;
      this.setConnection("offline");
      this.scheduleReconnect();
    };
  }
  scheduleReconnect() {
    if (this.stopped || this.reconnectHandle !== null) return;
    const min = this.options.reconnectMinMs ?? 1e3;
    const max = this.options.reconnectMaxMs ?? 3e4;
    const delay = Math.min(max, min * 2 ** this.reconnectAttempt++);
    this.reconnectHandle = this.timers.setTimeout(() => {
      this.reconnectHandle = null;
      void this.connectRealtime();
    }, delay);
  }
  onRealtime(raw) {
    let ev;
    try {
      ev = JSON.parse(typeof raw === "string" ? raw : String(raw));
    } catch {
      return;
    }
    if (ev.type === "message") {
      const m = this.mergeServerMessage(ev.message);
      this.emit();
      if (!m.isOwn) void this.persist().then(() => this.flushReceipts());
      else void this.persist();
    } else if (ev.type === "receipt") {
      const m = this.messageIndex.get(ev.messageId);
      if (m && m.isOwn) {
        const next = ev.state.toLowerCase() === "read" ? "read" : "delivered";
        this.advance(m, next);
        if (m.conversationId && this.byConversation.has(m.conversationId)) this.refreshConversation(m.conversationId);
        this.emit();
        void this.persist();
      }
    } else if (ev.type === "typing") {
      const key = ev.conversationId;
      const convo = this.findConversationForServerId(key, ev.fromAvatarId);
      const map = this.typing.get(convo) ?? /* @__PURE__ */ new Map();
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
  directKey(otherAvatarId) {
    return `direct:${otherAvatarId}`;
  }
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
      if (incoming.readBy) existing.readBy = incoming.readBy;
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
    if (m.state === "failed" && next !== "failed") {
      m.state = next;
      return;
    }
    if (next !== "failed" && RANK[next] > RANK[m.state]) m.state = next;
  }
  refreshConversation(id) {
    const list = this.byConversation.get(id) ?? [];
    const last = list[list.length - 1];
    const existing = this.conversations.get(id);
    const isGroup = existing?.isGroup ?? !id.startsWith("direct:");
    const other = existing?.otherAvatarId ?? (isGroup ? void 0 : id.slice("direct:".length));
    this.conversations.set(id, {
      id,
      isGroup,
      title: existing?.title,
      otherAvatarId: other,
      participantIds: existing?.participantIds,
      lastMessage: last ?? existing?.lastMessage,
      unreadCount: list.filter((m) => !m.isOwn && m.state !== "read").length,
      lastActivity: last?.serverReceivedAt ?? last?.createdAt ?? existing?.lastActivity ?? new Date(this.now).toISOString()
    });
  }
  // ---- persistence ---------------------------------------------------------------
  async load() {
    let raw = null;
    try {
      raw = await this.storage.get(this.storageKey);
    } catch {
      raw = null;
    }
    if (!raw) return;
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      return;
    }
    if (data.v !== 1) return;
    this.cursor = data.cursor;
    data.messages.forEach((m) => this.upsert(m));
    data.conversations.forEach((c) => this.conversations.set(c.id, c));
    this.pendingDelivered = new Set(data.pendingDelivered);
    this.pendingRead = new Set(data.pendingRead);
    this.messageIndex.forEach((m) => {
      if (m.isOwn && m.state === "sending") m.state = "queued";
    });
  }
  persist() {
    const snapshot = {
      v: 1,
      cursor: this.cursor,
      messages: Array.from(this.messageIndex.values()),
      conversations: Array.from(this.conversations.values()),
      pendingDelivered: Array.from(this.pendingDelivered),
      pendingRead: Array.from(this.pendingRead)
    };
    const json = JSON.stringify(snapshot);
    this.persistChain = this.persistChain.then(() => this.storage.set(this.storageKey, json)).catch((e) => {
      this.lastError = `Could not save messages locally: ${e.message}`;
    });
    return this.persistChain;
  }
};
function decodeDeliveryState(value, isRead) {
  if (isRead) return "read";
  if (value === 2 || value === "Read") return "read";
  if (value === 1 || value === "Delivered") return "delivered";
  return "sent";
}

// messaging-src/styles.ts
var MESSAGING_CSS = `
.oasis-chat{--oasis-chat-bg:#fff;--oasis-chat-fg:#14213d;--oasis-chat-muted:#6b7280;--oasis-chat-accent:#2563eb;--oasis-chat-bubble-own:#dbeafe;--oasis-chat-bubble-other:#f1f5f9;--oasis-chat-border:#e2e8f0;
display:flex;height:100%;min-height:320px;background:var(--oasis-chat-bg);color:var(--oasis-chat-fg);font:14px/1.4 system-ui,sans-serif;border:1px solid var(--oasis-chat-border);border-radius:8px;overflow:hidden;position:relative}
.oasis-chat[data-theme=dark]{--oasis-chat-bg:#0b1020;--oasis-chat-fg:#e5e7eb;--oasis-chat-muted:#94a3b8;--oasis-chat-accent:#60a5fa;--oasis-chat-bubble-own:#1e3a5f;--oasis-chat-bubble-other:#1f2937;--oasis-chat-border:#243049}
.oasis-chat *{box-sizing:border-box}
.oasis-chat__side{width:260px;flex:0 0 260px;border-right:1px solid var(--oasis-chat-border);display:flex;flex-direction:column;min-width:0}
.oasis-chat__main{flex:1;display:flex;flex-direction:column;min-width:0}
.oasis-chat__banner{padding:6px 10px;font-size:12px;background:#fef3c7;color:#92400e}
.oasis-chat[data-theme=dark] .oasis-chat__banner{background:#422006;color:#fde68a}
.oasis-chat__list{flex:1;overflow:auto;margin:0;padding:0;list-style:none}
.oasis-chat__item{padding:10px 12px;border-bottom:1px solid var(--oasis-chat-border);cursor:pointer;display:flex;justify-content:space-between;gap:8px}
.oasis-chat__item:hover,.oasis-chat__item[aria-selected=true]{background:var(--oasis-chat-bubble-other)}
.oasis-chat__name{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.oasis-chat__preview{color:var(--oasis-chat-muted);font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.oasis-chat__badge{background:var(--oasis-chat-accent);color:#fff;border-radius:10px;padding:0 7px;font-size:12px;align-self:center}
.oasis-chat__new{padding:8px;display:flex;gap:6px;border-top:1px solid var(--oasis-chat-border)}
.oasis-chat__thread{flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:6px}
.oasis-chat__msg{max-width:78%;padding:7px 10px;border-radius:12px;background:var(--oasis-chat-bubble-other);align-self:flex-start;word-wrap:break-word;overflow-wrap:anywhere}
.oasis-chat__msg[data-own=true]{background:var(--oasis-chat-bubble-own);align-self:flex-end}
.oasis-chat__meta{font-size:11px;color:var(--oasis-chat-muted);margin-top:2px;display:flex;gap:6px;justify-content:flex-end}
.oasis-chat__typing{padding:0 12px 4px;font-size:12px;color:var(--oasis-chat-muted);min-height:18px}
.oasis-chat__composer{display:flex;gap:6px;padding:8px;border-top:1px solid var(--oasis-chat-border)}
.oasis-chat input,.oasis-chat button{font:inherit}
.oasis-chat input{flex:1;min-width:0;padding:8px 10px;border:1px solid var(--oasis-chat-border);border-radius:6px;background:var(--oasis-chat-bg);color:var(--oasis-chat-fg)}
.oasis-chat button{padding:8px 12px;border:0;border-radius:6px;background:var(--oasis-chat-accent);color:#fff;cursor:pointer}
.oasis-chat button.oasis-chat__link{background:none;color:var(--oasis-chat-accent);padding:0 2px}
.oasis-chat__empty{margin:auto;color:var(--oasis-chat-muted);padding:20px;text-align:center}
.oasis-chat__back{display:none}
@media (max-width:560px){
 .oasis-chat__side{width:100%;flex-basis:100%;border-right:0}
 .oasis-chat[data-view=thread] .oasis-chat__side{display:none}
 .oasis-chat[data-view=list] .oasis-chat__main{display:none}
 .oasis-chat__back{display:inline-block}
}
`;

// messaging-src/view.ts
var STYLE_ID = "oasis-messaging-styles";
function el(doc, tag, cls, text) {
  const e = doc.createElement(tag);
  if (cls) e.className = cls;
  if (text !== void 0) e.textContent = text;
  return e;
}
function tick(m) {
  if (!m.isOwn) return "";
  switch (m.state) {
    case "sending":
      return "\u{1F553}";
    case "queued":
      return "\u{1F553} queued";
    case "sent":
      return "\u2713";
    case "delivered":
      return "\u2713\u2713";
    case "read":
      return "\u2713\u2713 read";
    case "failed":
      return "\u26A0 failed";
    default:
      return "";
  }
}
function createMessagingView(container, controller, options = {}) {
  const doc = container.ownerDocument;
  if (!doc.getElementById(STYLE_ID)) {
    const style = el(doc, "style");
    style.id = STYLE_ID;
    style.textContent = MESSAGING_CSS;
    (doc.head || doc.documentElement).appendChild(style);
  }
  const name = options.resolveName ?? ((id) => id.slice(0, 8));
  let selected = options.initialConversationId ?? null;
  let state = controller.getState();
  const root = el(doc, "div", "oasis-chat");
  root.setAttribute("data-theme", options.theme ?? "light");
  root.setAttribute("data-view", selected ? "thread" : "list");
  const side = el(doc, "div", "oasis-chat__side");
  const banner = el(doc, "div", "oasis-chat__banner");
  banner.setAttribute("role", "status");
  const list = el(doc, "ul", "oasis-chat__list");
  list.setAttribute("role", "listbox");
  side.append(banner, list);
  if (options.allowNewConversations !== false) {
    const form = el(doc, "form", "oasis-chat__new");
    const idInput = el(doc, "input");
    idInput.placeholder = "Avatar id to chat with";
    idInput.setAttribute("aria-label", "Avatar id to chat with");
    const go = el(doc, "button", void 0, "Chat");
    go.type = "submit";
    form.append(idInput, go);
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const id = idInput.value.trim();
      if (!id) return;
      idInput.value = "";
      select(`direct:${id}`);
    });
    side.appendChild(form);
  }
  const main = el(doc, "div", "oasis-chat__main");
  const header = el(doc, "div", "oasis-chat__item");
  const back = el(doc, "button", "oasis-chat__back oasis-chat__link", "\u2190");
  back.type = "button";
  back.setAttribute("aria-label", "Back to conversations");
  back.addEventListener("click", () => {
    selected = null;
    root.setAttribute("data-view", "list");
    render();
  });
  const title = el(doc, "div", "oasis-chat__name");
  header.append(back, title);
  const thread = el(doc, "div", "oasis-chat__thread");
  thread.setAttribute("role", "log");
  thread.setAttribute("aria-live", "polite");
  const typing = el(doc, "div", "oasis-chat__typing");
  const composer = el(doc, "form", "oasis-chat__composer");
  const input = el(doc, "input");
  input.placeholder = options.placeholder ?? "Type a message\u2026";
  input.setAttribute("aria-label", "Message");
  input.autocomplete = "off";
  const send = el(doc, "button", void 0, "Send");
  send.type = "submit";
  composer.append(input, send);
  main.append(header, thread, typing, composer);
  root.append(side, main);
  container.appendChild(root);
  function convoOf(id) {
    return state.conversations.find((c) => c.id === id);
  }
  function convoTitle(id) {
    const c = convoOf(id);
    if (c?.isGroup) return c.title || "Group";
    const other = c?.otherAvatarId ?? (id.startsWith("direct:") ? id.slice(7) : id);
    return name(other);
  }
  function select(id) {
    selected = id;
    root.setAttribute("data-view", "thread");
    void controller.markConversationRead(id);
    render();
    input.focus();
  }
  input.addEventListener("input", () => {
    if (!selected) return;
    const c = convoOf(selected);
    if (c?.isGroup) controller.sendTyping({ conversationId: selected });
    else controller.sendTyping({ toAvatarId: c?.otherAvatarId ?? selected.replace(/^direct:/, "") });
  });
  composer.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const text = input.value.trim();
    if (!text || !selected) return;
    input.value = "";
    const c = convoOf(selected);
    if (c?.isGroup || !selected.startsWith("direct:")) void controller.sendToGroup(selected, text);
    else void controller.sendDirect(selected.slice(7), text);
  });
  function render() {
    banner.hidden = state.connection === "online" && state.pendingCount === 0;
    banner.textContent = state.connection === "online" ? `${state.pendingCount} message(s) sending\u2026` : state.connection === "connecting" ? "Connecting\u2026" : `Offline \u2014 messages are saved and will send when you reconnect${state.pendingCount ? ` (${state.pendingCount} waiting)` : ""}.`;
    list.textContent = "";
    if (!state.conversations.length && !selected) list.appendChild(el(doc, "li", "oasis-chat__empty", "No conversations yet."));
    for (const c of state.conversations) {
      const li = el(doc, "li", "oasis-chat__item");
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", String(c.id === selected));
      li.tabIndex = 0;
      const text = el(doc, "div");
      text.style.minWidth = "0";
      text.append(el(doc, "div", "oasis-chat__name", convoTitle(c.id)), el(doc, "div", "oasis-chat__preview", c.lastMessage?.content ?? ""));
      li.appendChild(text);
      if (c.unreadCount > 0) li.appendChild(el(doc, "span", "oasis-chat__badge", String(c.unreadCount)));
      li.addEventListener("click", () => select(c.id));
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter") select(c.id);
      });
      list.appendChild(li);
    }
    const has = !!selected;
    header.hidden = !has;
    thread.hidden = !has;
    composer.hidden = !has;
    typing.hidden = !has;
    if (!has) return;
    title.textContent = convoTitle(selected);
    const msgs = state.messages[selected] ?? [];
    const atBottom = thread.scrollHeight - thread.scrollTop - thread.clientHeight < 60;
    thread.textContent = "";
    if (!msgs.length) thread.appendChild(el(doc, "div", "oasis-chat__empty", "Say hello \u{1F44B}"));
    for (const m of msgs) {
      const bubble = el(doc, "div", "oasis-chat__msg");
      bubble.setAttribute("data-own", String(m.isOwn));
      bubble.setAttribute("data-state", m.state);
      if (!m.isOwn && convoOf(selected)?.isGroup) bubble.appendChild(el(doc, "div", "oasis-chat__preview", name(m.fromAvatarId)));
      bubble.appendChild(el(doc, "div", void 0, m.content));
      const meta = el(doc, "div", "oasis-chat__meta");
      meta.appendChild(el(doc, "span", void 0, new Date(m.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })));
      const t = tick(m);
      if (t) meta.appendChild(el(doc, "span", void 0, t));
      if (m.state === "failed") {
        const retry = el(doc, "button", "oasis-chat__link", "Retry");
        retry.type = "button";
        retry.addEventListener("click", () => void controller.retry(m.id));
        meta.appendChild(retry);
      }
      bubble.appendChild(meta);
      thread.appendChild(bubble);
    }
    if (atBottom) thread.scrollTop = thread.scrollHeight;
    const who = (state.typing[selected] ?? []).map(name);
    typing.textContent = who.length ? `${who.join(", ")} ${who.length > 1 ? "are" : "is"} typing\u2026` : "";
  }
  const unsubscribe = controller.subscribe((s) => {
    state = s;
    render();
    if (selected && (s.messages[selected] ?? []).some((m) => !m.isOwn && m.state !== "read")) void controller.markConversationRead(selected);
  });
  return {
    select,
    destroy() {
      unsubscribe();
      root.remove();
    }
  };
}

// messaging-src/factory.ts
function createMessagingController(connection) {
  const controller = new MessagingController({
    api: new MessagingApi({ baseUrl: connection.baseUrl, getToken: connection.getToken }),
    avatarId: connection.avatarId,
    storage: connection.storage ?? new BrowserStorage(),
    socketFactory: connection.socketFactory,
    realtime: connection.realtime
  });
  const unwatch = controller.watchNetwork();
  controller.dispose = () => {
    unwatch();
    controller.stop();
  };
  return controller;
}

// messaging-src/fromClient.ts
function messagingFromClient(client, avatarId, extras = {}) {
  return createMessagingController({
    ...extras,
    baseUrl: client.http.baseUrl,
    avatarId,
    getToken: () => client.tokenStore.getToken()
  });
}
export {
  BrowserStorage,
  MemoryStorage,
  MessagingApi,
  MessagingApiError,
  MessagingController,
  createMessagingController,
  createMessagingView,
  messagingFromClient,
  newId,
  tick
};
