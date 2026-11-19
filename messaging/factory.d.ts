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
    socketFactory?: SocketFactory;
    realtime?: boolean;
}
/** Builds a controller with browser storage and online/offline wiring. Call `start()`, and `dispose()` on teardown. */
export declare function createMessagingController(connection: MessagingConnection): MessagingController & {
    dispose(): void;
};
