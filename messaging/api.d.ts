import type { ServerConversation, ServerGroup, ServerMessage, SendRequest, SyncPage } from './types';
export declare class MessagingApiError extends Error {
    /** True when the request never reached the server (offline, DNS, timeout). Retry later. */
    readonly network: boolean;
    readonly status?: number;
    /** 401/403: the token is missing or expired. Not a rejection of the request; refresh the session and retry. */
    readonly auth: boolean;
    constructor(message: string, opts: {
        network: boolean;
        status?: number;
        auth?: boolean;
    });
}
export interface MessagingApiOptions {
    /** e.g. https://api.oasisweb4.com (no trailing slash needed). */
    baseUrl: string;
    /** Returns the avatar's JWT. Called per request so refreshed tokens are picked up. */
    getToken: () => string | null | Promise<string | null>;
    fetch?: typeof fetch;
}
/** Typed client for the hosted `api/messaging` endpoints. */
export declare class MessagingApi {
    private readonly options;
    private readonly base;
    private readonly fetchImpl;
    constructor(options: MessagingApiOptions);
    get origin(): string;
    private call;
    /** Idempotent: re-sending the same `id` never creates a duplicate. */
    send(request: SendRequest): Promise<ServerMessage>;
    sync(since: string | null | undefined, limit?: number): Promise<SyncPage>;
    conversations(): Promise<ServerConversation[]>;
    markDelivered(ids: string[]): Promise<boolean>;
    markRead(ids: string[]): Promise<boolean>;
    realtimeTicket(): Promise<string>;
    createGroup(title: string, participantIds: string[]): Promise<ServerGroup>;
    groups(): Promise<ServerGroup[]>;
    addGroupMembers(conversationId: string, avatarIds: string[]): Promise<ServerGroup>;
    leaveGroup(conversationId: string): Promise<boolean>;
    groupMessages(conversationId: string, limit?: number, offset?: number): Promise<ServerMessage[]>;
    presence(avatarIds: string[]): Promise<Record<string, boolean>>;
}
