/** Where a message is in its life on this device. Only ever advances (except `failed`). */
export type MessageState = 'sending' | 'queued' | 'sent' | 'delivered' | 'read' | 'received' | 'failed';
export interface ChatMessage {
    id: string;
    conversationId: string;
    fromAvatarId: string;
    /** Direct messages only. */
    toAvatarId?: string;
    content: string;
    /** When the sender composed it (ISO). Offline sends keep this even if received much later. */
    createdAt: string;
    /** When the server received it (ISO), once known. */
    serverReceivedAt?: string;
    state: MessageState;
    isOwn: boolean;
    /** Group messages: avatars that have read it. */
    readBy?: string[];
}
export interface Conversation {
    id: string;
    isGroup: boolean;
    title?: string;
    otherAvatarId?: string;
    participantIds?: string[];
    lastMessage?: ChatMessage;
    unreadCount: number;
    lastActivity: string;
}
export type ConnectionStatus = 'offline' | 'connecting' | 'online';
export interface MessagingState {
    connection: ConnectionStatus;
    conversations: Conversation[];
    /** Messages per conversation id, oldest first. */
    messages: Record<string, ChatMessage[]>;
    /** conversationId -> avatar ids currently typing. */
    typing: Record<string, string[]>;
    /** Messages not yet accepted by the server (sending or queued). */
    pendingCount: number;
    lastError?: string;
}
/** Wire shapes returned by the hosted `api/messaging` endpoints (camelCase). */
export interface ServerMessage {
    id: string;
    conversationId?: string;
    fromAvatarId: string;
    toAvatarId?: string;
    content: string;
    messageType?: number | string;
    timestamp?: string;
    clientTimestamp?: string | null;
    receivedAt?: string;
    deliveryState?: number | string;
    isRead?: boolean;
    readBy?: string[];
}
export interface ServerConversation {
    conversationId: string;
    otherAvatarId?: string;
    lastMessage?: ServerMessage;
    unreadCount: number;
    lastActivity: string;
    isGroup?: boolean;
    title?: string;
    participantIds?: string[];
}
export interface ServerGroup {
    id: string;
    title: string;
    createdByAvatarId: string;
    createdAt: string;
    participantIds: string[];
}
export interface SyncPage {
    messages: ServerMessage[];
    nextCursor?: string | null;
    hasMore: boolean;
}
export interface SendRequest {
    id: string;
    toAvatarId?: string;
    conversationId?: string;
    content: string;
    clientTimestamp?: string;
}
/** Push events from `/ws/messaging`. */
export type RealtimeEvent = {
    type: 'message';
    message: ServerMessage;
} | {
    type: 'receipt';
    messageId: string;
    conversationId: string;
    state: string;
    byAvatarId: string;
} | {
    type: 'typing';
    fromAvatarId: string;
    conversationId: string;
};
