import type { MessagingController } from './controller';
import type { ChatMessage } from './types';
export interface MessagingViewOptions {
    theme?: 'light' | 'dark';
    /** Display name for an avatar id. Defaults to a shortened id. */
    resolveName?: (avatarId: string) => string;
    /** Pre-select a conversation (conversation id, e.g. `direct:<avatarId>` or a group id). */
    initialConversationId?: string;
    /** Show the "new chat / new group" controls. */
    allowNewConversations?: boolean;
    placeholder?: string;
}
export interface MessagingView {
    destroy(): void;
    select(conversationId: string): void;
}
export declare function tick(m: ChatMessage): string;
/**
 * Mounts a complete chat UI (conversation list, thread, composer, offline banner, receipts, typing, groups) into
 * `container`. Plain DOM with no framework: every OASIS UI kit wraps this, and all user text is set via
 * textContent, never innerHTML.
 */
export declare function createMessagingView(container: HTMLElement, controller: MessagingController, options?: MessagingViewOptions): MessagingView;
