import type { ServerConversation, ServerGroup, ServerMessage, SendRequest, SyncPage } from './types';

export class MessagingApiError extends Error {
  /** True when the request never reached the server (offline, DNS, timeout). Retry later. */
  readonly network: boolean;
  readonly status?: number;
  /** 401/403: the token is missing or expired. Not a rejection of the request; refresh the session and retry. */
  readonly auth: boolean;
  constructor(message: string, opts: { network: boolean; status?: number; auth?: boolean }) {
    super(message);
    this.name = 'MessagingApiError';
    this.network = opts.network;
    this.status = opts.status;
    this.auth = opts.auth === true;
  }
}

export interface MessagingApiOptions {
  /** e.g. https://api.oasisweb4.com (no trailing slash needed). */
  baseUrl: string;
  /** Returns the avatar's JWT. Called per request so refreshed tokens are picked up. */
  getToken: () => string | null | Promise<string | null>;
  fetch?: typeof fetch;
}

interface OASISResultEnvelope<T> { result: T; isError?: boolean; message?: string }

/** Typed client for the hosted `api/messaging` endpoints. */
export class MessagingApi {
  private readonly base: string;
  private readonly fetchImpl: typeof fetch;

  constructor(private readonly options: MessagingApiOptions) {
    this.base = options.baseUrl.replace(/\/+$/, '');
    this.fetchImpl = options.fetch ?? ((...a) => (globalThis as any).fetch(...a));
  }

  get origin(): string { return this.base; }

  private async call<T>(method: 'GET' | 'POST', path: string, body?: unknown): Promise<T> {
    const token = await this.options.getToken();
    let response: Response;
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
    } catch (e) {
      throw new MessagingApiError(`Network error: ${(e as Error).message}`, { network: true });
    }
    // Gateway/availability failures are transient, not a rejection of the request.
    if (response.status === 502 || response.status === 503 || response.status === 504 || response.status === 408) {
      throw new MessagingApiError(`Service unavailable (${response.status})`, { network: true, status: response.status });
    }
    if (response.status === 401 || response.status === 403) {
      throw new MessagingApiError('Your session has expired. Please sign in again.', { network: false, status: response.status, auth: true });
    }
    let envelope: OASISResultEnvelope<T> | null = null;
    try { envelope = (await response.json()) as OASISResultEnvelope<T>; } catch { /* non-JSON error body */ }
    if (!response.ok || !envelope || envelope.isError) {
      throw new MessagingApiError(envelope?.message || `Request failed (${response.status})`, { network: false, status: response.status });
    }
    return envelope.result;
  }

  /** Idempotent: re-sending the same `id` never creates a duplicate. */
  send(request: SendRequest): Promise<ServerMessage> { return this.call('POST', 'send', request); }

  sync(since: string | null | undefined, limit = 100): Promise<SyncPage> {
    const q = `limit=${limit}` + (since ? `&since=${encodeURIComponent(since)}` : '');
    return this.call('GET', `sync?${q}`);
  }

  conversations(): Promise<ServerConversation[]> { return this.call('GET', 'conversations'); }
  markDelivered(ids: string[]): Promise<boolean> { return this.call('POST', 'mark-messages-delivered', ids); }
  markRead(ids: string[]): Promise<boolean> { return this.call('POST', 'mark-messages-read', ids); }
  realtimeTicket(): Promise<string> { return this.call('POST', 'realtime-ticket'); }
  createGroup(title: string, participantIds: string[]): Promise<ServerGroup> { return this.call('POST', 'groups', { title, participantIds }); }
  groups(): Promise<ServerGroup[]> { return this.call('GET', 'groups'); }
  addGroupMembers(conversationId: string, avatarIds: string[]): Promise<ServerGroup> { return this.call('POST', `groups/${conversationId}/members`, avatarIds); }
  leaveGroup(conversationId: string): Promise<boolean> { return this.call('POST', `groups/${conversationId}/leave`); }
  groupMessages(conversationId: string, limit = 50, offset = 0): Promise<ServerMessage[]> {
    return this.call('GET', `groups/${conversationId}/messages?limit=${limit}&offset=${offset}`);
  }
  presence(avatarIds: string[]): Promise<Record<string, boolean>> {
    return this.call('GET', `presence?${avatarIds.map(id => `avatarIds=${encodeURIComponent(id)}`).join('&')}`);
  }
}
