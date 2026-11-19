import { MessagingApi } from './api';
import { type MessagingStorage } from './storage';
import type { ChatMessage, Conversation, MessagingState } from './types';
/** Minimal WebSocket surface so browsers, Node (ws) and React Native all work. */
export interface SocketLike {
    onopen: ((ev?: any) => void) | null;
    onmessage: ((ev: {
        data: any;
    }) => void) | null;
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
    now?: () => number;
    timers?: {
        setTimeout: (fn: () => void, ms: number) => any;
        clearTimeout: (h: any) => void;
    };
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
export declare class MessagingController {
    private readonly api;
    private readonly avatarId;
    private readonly storage;
    private readonly options;
    private readonly listeners;
    private readonly messageIndex;
    private readonly byConversation;
    private conversations;
    private cursor;
    private pendingDelivered;
    private pendingRead;
    private typing;
    private lastTypingSent;
    private connection;
    private lastError;
    private socket;
    private reconnectAttempt;
    private reconnectHandle;
    private started;
    private stopped;
    private flushing;
    private persistChain;
    private cached;
    constructor(options: MessagingControllerOptions);
    private get now();
    private get timers();
    private get storageKey();
    subscribe(listener: (state: MessagingState) => void): () => void;
    getState(): MessagingState;
    private emit;
    /** Loads persisted state, syncs with the server and opens the real-time channel. Safe to call once. */
    start(): Promise<void>;
    stop(): void;
    /** Call when the host learns the network came back (window 'online' event, app foreground). */
    onNetworkRestored(): Promise<void>;
    /**
     * Hooks the browser's online/offline events so queued messages go out the moment connectivity returns.
     * Returns a function that removes the listeners. No-op where there is no event target (SSR, native).
     */
    watchNetwork(target?: {
        addEventListener: Function;
        removeEventListener: Function;
    } | undefined): () => void;
    /** Stores the message locally at once (visible immediately, even offline) and queues it for the server. */
    sendDirect(toAvatarId: string, content: string): Promise<ChatMessage>;
    sendToGroup(conversationId: string, content: string): Promise<ChatMessage>;
    private enqueue;
    /** Re-queues a failed message so the user can retry it. */
    retry(messageId: string): Promise<void>;
    /** Sends queued messages in order. Stops at the first network failure; a rejected message is marked failed. */
    flushOutbox(): Promise<void>;
    /** Pulls everything after the stored cursor, merges it idempotently, then sends pending outbox and receipts. */
    syncNow(): Promise<void>;
    private mergeServerConversations;
    private mergeServerMessage;
    /** Marks everything unread in the conversation as read (locally now, on the server when reachable). */
    markConversationRead(conversationId: string): Promise<void>;
    private flushReceipts;
    createGroup(title: string, participantIds: string[]): Promise<Conversation>;
    addGroupMembers(conversationId: string, avatarIds: string[]): Promise<void>;
    leaveGroup(conversationId: string): Promise<void>;
    /** Throttled. Direct: pass the other avatar; group: pass the conversation id. */
    sendTyping(target: {
        toAvatarId?: string;
        conversationId?: string;
    }): void;
    private connectRealtime;
    private scheduleReconnect;
    private onRealtime;
    /** Typing events carry the server's direct conversation id; map it to the local `direct:<avatar>` key. */
    private findConversationForServerId;
    private directKey;
    private setConnection;
    /** Inserts or merges. Content is immutable once stored; state only advances. */
    private upsert;
    private advance;
    private refreshConversation;
    private load;
    private persist;
}
