import { MessagingController, type SocketFactory } from './controller';
import { type MessagingStorage } from './storage';
/** What every UI kit needs from the host app to talk to OASIS. */
export interface MessagingConnection {
    /** e.g. https://api.oasisweb4.com */
    baseUrl: string;
    /** The signed-in avatar (HerzID, OASIS SSO, ...). */
    avatarId: string;
    /** Returns the avatar's current JWT. */
    getToken: () => string | null | Promise<string | null>;
    storage?: MessagingStorage;
    /** Custom fetch (SSR, tests). Defaults to the global fetch. */
    fetch?: typeof fetch;
    socketFactory?: SocketFactory;
    realtime?: boolean;
    /** Refresh an expired JWT; return true to retry. See MessagingControllerOptions.onAuthRequired. */
    onAuthRequired?: () => Promise<boolean | void> | boolean | void;
}
/** Builds a controller with browser storage and online/offline wiring. Call `start()`, and `dispose()` on teardown. */
export declare function createMessagingController(connection: MessagingConnection): MessagingController & {
    dispose(): void;
};
