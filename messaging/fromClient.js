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
        avatarId,
        getToken: () => client.tokenStore.getToken()
    });
}
exports.messagingFromClient = messagingFromClient;
