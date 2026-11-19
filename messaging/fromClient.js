"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagingFromClient = void 0;
const factory_1 = require("./factory");
/**
 * Builds a messaging controller from an existing `OASISClient`, reusing its base URL and signed-in session:
 *
 *   const oasis = new OASISClient({ baseUrl });
 *   await oasis.auth.login({ username, password });
 *   const chat = messagingFromClient(oasis, oasis.auth.getSession().avatarId);
 *   await chat.start();
 */
function messagingFromClient(client, avatarId, extras = {}) {
    return (0, factory_1.createMessagingController)({
        ...extras,
        baseUrl: client.http.baseUrl,
        fetch: extras.fetch ?? client.http._customFetch ?? undefined,
        avatarId,
        getToken: () => client.tokenStore.getToken(),
        onAuthRequired: extras.onAuthRequired ?? (() => refreshSession(client))
    });
}
exports.messagingFromClient = messagingFromClient;
/**
 * JWTs are short-lived (15 minutes by default). After a long offline period the first call returns 401; this
 * exchanges the stored refresh token for a new JWT so queued messages go out without the user re-signing in.
 * Returns false when there is no refresh token or the refresh is refused (the host must then sign in again).
 */
async function refreshSession(client) {
    const session = client.tokenStore.getSession?.();
    const refresh = session?.refreshToken;
    if (!refresh || !client.avatar?.refreshToken || !client.setToken)
        return false;
    const response = await client.avatar.refreshToken({ refreshToken: refresh });
    const jwt = response?.result?.jwtToken;
    if (response?.isError || !jwt)
        return false;
    client.setToken(jwt, { ...session, refreshToken: response.result?.refreshToken ?? refresh });
    return true;
}
