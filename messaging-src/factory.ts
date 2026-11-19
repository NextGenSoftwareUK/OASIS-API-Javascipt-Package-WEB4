import { MessagingApi } from './api';
import { MessagingController, type SocketFactory } from './controller';
import { BrowserStorage, type MessagingStorage } from './storage';

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
export function createMessagingController(connection: MessagingConnection): MessagingController & { dispose(): void } {
  const controller = new MessagingController({
    api: new MessagingApi({ baseUrl: connection.baseUrl, getToken: connection.getToken }),
    avatarId: connection.avatarId,
    storage: connection.storage ?? new BrowserStorage(),
    socketFactory: connection.socketFactory,
    realtime: connection.realtime
  }) as MessagingController & { dispose(): void };
  const unwatch = controller.watchNetwork();
  controller.dispose = () => { unwatch(); controller.stop(); };
  return controller;
}
