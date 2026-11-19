"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingApi = exports.MessagingApiError = void 0;
class MessagingApiError extends Error {
    constructor(message, opts) {
        super(message);
        this.name = 'MessagingApiError';
        this.network = opts.network;
        this.status = opts.status;
    }
}
exports.MessagingApiError = MessagingApiError;
/** Typed client for the hosted `api/messaging` endpoints. */
class MessagingApi {
    constructor(options) {
        this.options = options;
        this.base = options.baseUrl.replace(/\/+$/, '');
        this.fetchImpl = options.fetch ?? ((...a) => globalThis.fetch(...a));
    }
    get origin() { return this.base; }
    async call(method, path, body) {
        const token = await this.options.getToken();
        let response;
        try {
            response = await this.fetchImpl(`${this.base}/api/messaging/${path}`, {
                method,
                headers: {
                    Accept: 'application/json',
                    ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: body !== undefined ? JSON.stringify(body) : undefined
            });
        }
        catch (e) {
            throw new MessagingApiError(`Network error: ${e.message}`, { network: true });
        }
        // Gateway/availability failures are transient, not a rejection of the request.
        if (response.status === 502 || response.status === 503 || response.status === 504 || response.status === 408) {
            throw new MessagingApiError(`Service unavailable (${response.status})`, { network: true, status: response.status });
        }
        let envelope = null;
        try {
            envelope = (await response.json());
        }
        catch { /* non-JSON error body */ }
        if (!response.ok || !envelope || envelope.isError) {
            throw new MessagingApiError(envelope?.message || `Request failed (${response.status})`, { network: false, status: response.status });
        }
        return envelope.result;
    }
    /** Idempotent: re-sending the same `id` never creates a duplicate. */
    send(request) { return this.call('POST', 'send', request); }
    sync(since, limit = 100) {
        const q = `limit=${limit}` + (since ? `&since=${encodeURIComponent(since)}` : '');
        return this.call('GET', `sync?${q}`);
    }
    conversations() { return this.call('GET', 'conversations'); }
    markDelivered(ids) { return this.call('POST', 'mark-messages-delivered', ids); }
    markRead(ids) { return this.call('POST', 'mark-messages-read', ids); }
    realtimeTicket() { return this.call('POST', 'realtime-ticket'); }
    createGroup(title, participantIds) { return this.call('POST', 'groups', { title, participantIds }); }
    groups() { return this.call('GET', 'groups'); }
    addGroupMembers(conversationId, avatarIds) { return this.call('POST', `groups/${conversationId}/members`, avatarIds); }
    leaveGroup(conversationId) { return this.call('POST', `groups/${conversationId}/leave`); }
    groupMessages(conversationId, limit = 50, offset = 0) {
        return this.call('GET', `groups/${conversationId}/messages?limit=${limit}&offset=${offset}`);
    }
    presence(avatarIds) {
        return this.call('GET', `presence?${avatarIds.map(id => `avatarIds=${encodeURIComponent(id)}`).join('&')}`);
    }
}
exports.MessagingApi = MessagingApi;
