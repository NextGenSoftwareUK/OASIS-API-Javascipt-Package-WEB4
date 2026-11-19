import { type MessagingConnection } from './factory';
/** Structural view of an `OASISClient` from the main package (avoids a hard dependency on it). */
interface OASISClientLike {
    http: {
        baseUrl: string;
    };
    tokenStore: {
        getToken(): string | null;
    };
}
/**
 * Builds a messaging controller from an existing `OASISClient`, reusing its base URL and signed-in session:
 *
 *   const oasis = new OASISClient({ baseUrl });
 *   await oasis.auth.login({ username, password });
 *   const chat = messagingFromClient(oasis, oasis.auth.getSession().avatarId);
 *   await chat.start();
 */
export declare function messagingFromClient(client: OASISClientLike, avatarId: string, extras?: Partial<Omit<MessagingConnection, 'baseUrl' | 'avatarId' | 'getToken'>>): import("./controller").MessagingController & {
    dispose(): void;
};
export {};
