"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessagingController = void 0;
const api_1 = require("./api");
const controller_1 = require("./controller");
const storage_1 = require("./storage");
/** Builds a controller with browser storage and online/offline wiring. Call `start()`, and `dispose()` on teardown. */
function createMessagingController(connection) {
    const controller = new controller_1.MessagingController({
        api: new api_1.MessagingApi({ baseUrl: connection.baseUrl, getToken: connection.getToken, fetch: connection.fetch }),
        avatarId: connection.avatarId,
        storage: connection.storage ?? new storage_1.BrowserStorage(),
        socketFactory: connection.socketFactory,
        realtime: connection.realtime,
        onAuthRequired: connection.onAuthRequired
    });
    const unwatch = controller.watchNetwork();
    controller.dispose = () => { unwatch(); controller.stop(); };
    return controller;
}
exports.createMessagingController = createMessagingController;
