import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MessagingController } from '../controller';
import { MemoryStorage } from '../storage';
import type { ServerMessage } from '../types';
import { FakeApi, FakeSocket, asApi, makeTimers, settle } from './fakes';

const ME = 'me';
const BOB = 'bob';
const srv = (id: string, from: string, to: string, content: string, at: string, extra: Partial<ServerMessage> = {}): ServerMessage =>
  ({ id, fromAvatarId: from, toAvatarId: to, content, receivedAt: at, timestamp: at, deliveryState: 0, messageType: 0, ...extra });

function setup(opts: { realtime?: boolean } = {}) {
  const api = new FakeApi();
  const storage = new MemoryStorage();
  const sockets: FakeSocket[] = [];
  const t = makeTimers();
  const make = () => new MessagingController({
    api: asApi(api), avatarId: ME, storage, realtime: opts.realtime ?? false, timers: t.timers,
    socketFactory: url => { const s = new FakeSocket(url); sockets.push(s); return s; }
  });
  return { api, storage, sockets, t, make };
}

test('offline send is visible at once, queued, and sent exactly once when back online', async () => {
  const { api, make } = setup();
  const c = make();
  await c.start();
  api.online = false;

  const m = await c.sendDirect(BOB, 'hello offline');
  await settle();

  assert.equal(c.getState().messages['direct:bob'][0].state, 'queued');
  assert.equal(c.getState().pendingCount, 1);
  assert.equal(api.sent.length, 0);

  api.online = true;
  await c.onNetworkRestored();
  await c.onNetworkRestored();
  assert.equal(api.sent.length, 1);
  assert.equal(api.sent[0].id, m.id);
  assert.equal(c.getState().messages['direct:bob'][0].state, 'sent');
  assert.equal(c.getState().pendingCount, 0);
});

test('queued messages survive a restart and are sent by the new controller', async () => {
  const { api, make } = setup();
  const first = make();
  await first.start();
  api.online = false;
  const m = await first.sendDirect(BOB, 'persist me');
  await settle();
  first.stop();

  api.online = true;
  const second = make();
  await second.start();
  await settle();

  assert.equal(second.getState().messages['direct:bob'].length, 1);
  assert.equal(api.sent.filter(s => s.id === m.id).length, 1);
});

test('outbox preserves order and stops at the first network failure', async () => {
  const { api, make } = setup();
  const c = make();
  await c.start();
  api.online = false;
  await c.sendDirect(BOB, 'one');
  await new Promise(r => setTimeout(r, 2));
  await c.sendDirect(BOB, 'two');
  await settle();
  api.online = true;
  await c.onNetworkRestored();
  assert.deepEqual(api.sent.map(s => s.content), ['one', 'two']);
});

test('a rejected message is marked failed (not retried forever) and can be retried by the user', async () => {
  const { api, make } = setup();
  const c = make();
  await c.start();
  api.reject = 'Not allowed';
  const m = await c.sendDirect(BOB, 'nope');
  await settle();
  assert.equal(c.getState().messages['direct:bob'][0].state, 'failed');
  assert.equal(c.getState().lastError, 'Not allowed');

  api.reject = null;
  await c.retry(m.id);
  await settle();
  assert.equal(c.getState().messages['direct:bob'][0].state, 'sent');
});

test('empty messages are refused', async () => {
  const { make } = setup();
  const c = make();
  await c.start();
  await assert.rejects(() => c.sendDirect(BOB, '   '));
});

test('sync pages through the cursor, dedupes, and queues delivery receipts once', async () => {
  const { api, make } = setup();
  api.pageSize = 2;
  api.serverMessages = [
    srv('1', BOB, ME, 'a', '2026-01-01T00:00:01Z'),
    srv('2', BOB, ME, 'b', '2026-01-01T00:00:02Z'),
    srv('3', BOB, ME, 'c', '2026-01-01T00:00:03Z')
  ];
  const c = make();
  await c.start();
  await c.syncNow();

  const msgs = c.getState().messages['direct:bob'];
  assert.deepEqual(msgs.map(m => m.content), ['a', 'b', 'c']);
  assert.equal(c.getState().conversations[0].unreadCount, 3);
  assert.deepEqual(api.delivered.flat().sort(), ['1', '2', '3']);
  assert.equal(api.syncCalls[api.syncCalls.length - 1], '2026-01-01T00:00:03Z');
});

test('markConversationRead sends a read receipt and zeroes unread; works offline and flushes later', async () => {
  const { api, make } = setup();
  api.serverMessages = [srv('1', BOB, ME, 'hi', '2026-01-01T00:00:01Z')];
  const c = make();
  await c.start();
  api.online = false;
  await c.markConversationRead('direct:bob');
  assert.equal(c.getState().conversations[0].unreadCount, 0);
  assert.equal(api.read.length, 0);

  api.online = true;
  await c.onNetworkRestored();
  assert.deepEqual(api.read.flat(), ['1']);
});

test('server state for own messages advances and never regresses', async () => {
  const { api, make } = setup();
  const c = make();
  await c.start();
  const m = await c.sendDirect(BOB, 'x');
  await settle();
  api.serverMessages = [srv(m.id, ME, BOB, 'x', '2026-01-01T00:00:05Z', { deliveryState: 2 })];
  await c.syncNow();
  assert.equal(c.getState().messages['direct:bob'][0].state, 'read');

  api.serverMessages = [srv(m.id, ME, BOB, 'x', '2026-01-01T00:00:06Z', { deliveryState: 0 })];
  await c.syncNow();
  assert.equal(c.getState().messages['direct:bob'][0].state, 'read');
});

test('group messages are keyed by conversation id; groups can be created', async () => {
  const { api, make } = setup();
  api.serverMessages = [srv('9', BOB, '00000000-0000-0000-0000-000000000000', 'team hi', '2026-01-01T00:00:09Z', { messageType: 1, conversationId: 'g1' })];
  api.conversationList = [{ conversationId: 'g1', isGroup: true, title: 'Team', unreadCount: 1, lastActivity: '2026-01-01T00:00:09Z', participantIds: [ME, BOB] }];
  const c = make();
  await c.start();
  assert.equal(c.getState().messages['g1'][0].content, 'team hi');
  assert.equal(c.getState().conversations[0].title, 'Team');

  const g = await c.createGroup('Crew', [BOB]);
  assert.equal(g.title, 'Crew');
  const m = await c.sendToGroup('g1', 'reply');
  await settle();
  assert.equal(api.sent[0].conversationId, 'g1');
  assert.equal(api.sent[0].toAvatarId, undefined);
  assert.equal(m.conversationId, 'g1');
});

test('realtime: ticket -> socket, push message arrives and is acknowledged, receipts advance state', async () => {
  const { api, sockets, make } = setup({ realtime: true });
  const c = make();
  await c.start();
  await settle();
  assert.equal(sockets.length, 1);
  assert.match(sockets[0].url, /^wss?:\/\/api\.test\/ws\/messaging\?ticket=tkt-1$/);
  sockets[0].open();
  await settle();
  assert.equal(c.getState().connection, 'online');

  sockets[0].push({ type: 'message', message: srv('p1', BOB, ME, 'live', '2026-01-01T00:00:10Z') });
  await settle();
  assert.equal(c.getState().messages['direct:bob'][0].content, 'live');
  assert.ok(api.delivered.flat().includes('p1'));

  const mine = await c.sendDirect(BOB, 'out');
  await settle();
  sockets[0].push({ type: 'receipt', messageId: mine.id, conversationId: 'srv', state: 'Read', byAvatarId: BOB });
  await settle();
  assert.equal(c.getState().messages['direct:bob'].find(m => m.id === mine.id)!.state, 'read');
});

test('realtime: typing appears for the sender and expires', async () => {
  let now = 1_000_000;
  const api = new FakeApi();
  const sockets: FakeSocket[] = [];
  const t = makeTimers();
  const c = new MessagingController({ api: asApi(api), avatarId: ME, realtime: true, timers: t.timers, now: () => now,
    socketFactory: u => { const s = new FakeSocket(u); sockets.push(s); return s; } });
  await c.start(); await settle();
  sockets[0].open(); await settle();

  sockets[0].push({ type: 'typing', fromAvatarId: BOB, conversationId: 'whatever' });
  await settle();
  assert.deepEqual(c.getState().typing['direct:bob'], [BOB]);
  now += 5000;
  c['emit']();
  assert.equal(c.getState().typing['direct:bob'], undefined);
});

test('sendTyping is throttled and only sent on an open socket', async () => {
  let now = 5_000_000;
  const api = new FakeApi();
  const sockets: FakeSocket[] = [];
  const t = makeTimers();
  const c = new MessagingController({ api: asApi(api), avatarId: ME, realtime: true, timers: t.timers, now: () => now,
    socketFactory: u => { const s = new FakeSocket(u); sockets.push(s); return s; } });
  await c.start(); await settle();
  c.sendTyping({ toAvatarId: BOB });
  assert.equal(sockets[0].sentFrames.length, 0);
  sockets[0].open(); await settle();
  c.sendTyping({ toAvatarId: BOB });
  c.sendTyping({ toAvatarId: BOB });
  assert.equal(sockets[0].sentFrames.length, 1);
  now += 2000;
  c.sendTyping({ toAvatarId: BOB });
  assert.equal(sockets[0].sentFrames.length, 2);
});

test('a dropped socket reconnects with backoff and catches up from the cursor', async () => {
  const { api, sockets, t, make } = setup({ realtime: true });
  const c = make();
  await c.start(); await settle();
  sockets[0].open(); await settle();
  const before = api.syncCalls.length;

  api.serverMessages = [srv('m1', BOB, ME, 'missed while down', '2026-01-01T00:01:00Z')];
  sockets[0].drop();
  assert.equal(c.getState().connection, 'offline');
  const delay1 = t.fireNext();
  assert.equal(delay1, 1000);
  await settle();
  assert.equal(sockets.length, 2);
  sockets[1].open(); await settle();

  assert.ok(api.syncCalls.length > before);
  assert.equal(c.getState().messages['direct:bob'][0].content, 'missed while down');
});

test('stop() closes the socket and does not reconnect', async () => {
  const { sockets, t, make } = setup({ realtime: true });
  const c = make();
  await c.start(); await settle();
  sockets[0].open(); await settle();
  c.stop();
  assert.equal(sockets[0].readyState, 3);
  assert.equal(t.pending.filter(p => p.alive).length, 0);
});

test('a corrupt stored snapshot is ignored instead of crashing startup', async () => {
  const { storage, make } = setup();
  await storage.set(`oasis.messaging.${ME}.v1`, '{not json');
  const c = make();
  await c.start();
  assert.equal(c.getState().conversations.length, 0);
});

test('watchNetwork flushes the outbox when the browser reports it is online again, and detaches cleanly', async () => {
  const { api, make } = setup();
  const c = make();
  await c.start();
  const listeners: Record<string, () => void> = {};
  const target = {
    addEventListener: (n: string, f: () => void) => { listeners[n] = f; },
    removeEventListener: (n: string) => { delete listeners[n]; }
  };
  const detach = c.watchNetwork(target);
  api.online = false;
  await c.sendDirect(BOB, 'later');
  await settle();
  listeners.offline();
  assert.equal(c.getState().connection, 'offline');

  api.online = true;
  listeners.online();
  await settle(12);
  assert.equal(api.sent.length, 1);

  detach();
  assert.deepEqual(Object.keys(listeners), []);
});

test('an expired token keeps messages queued (never failed) and flags authRequired', async () => {
  const { api, make } = setup();
  const c = make();
  await c.start();
  api.authExpired = true;
  const m = await c.sendDirect(BOB, 'sent after a long offline period');
  await settle();
  const state = c.getState();
  assert.equal(state.messages['direct:bob'][0].state, 'queued');
  assert.equal(state.authRequired, true);
  assert.equal(state.pendingCount, 1);

  api.authExpired = false;
  await c.onNetworkRestored();
  assert.equal(api.sent.filter(s => s.id === m.id).length, 1);
  assert.equal(c.getState().authRequired, false);
  assert.equal(c.getState().messages['direct:bob'][0].state, 'sent');
});

test('onAuthRequired refreshes the session and the call is retried once', async () => {
  const api = new FakeApi();
  let refreshes = 0;
  const c = new MessagingController({
    api: asApi(api), avatarId: ME, realtime: false,
    onAuthRequired: () => { refreshes++; api.authExpired = false; return true; }
  });
  await c.start();
  api.authExpired = true;
  await c.sendDirect(BOB, 'hello');
  await settle();
  assert.equal(refreshes, 1);
  assert.equal(api.sent.length, 1);
  assert.equal(c.getState().messages['direct:bob'][0].state, 'sent');
  assert.equal(c.getState().authRequired, false);
});

test('a failed refresh leaves the message queued and requires sign-in', async () => {
  const api = new FakeApi();
  const c = new MessagingController({ api: asApi(api), avatarId: ME, realtime: false, onAuthRequired: () => false });
  await c.start();
  api.authExpired = true;
  await c.sendDirect(BOB, 'hi');
  await settle();
  assert.equal(c.getState().messages['direct:bob'][0].state, 'queued');
  assert.equal(c.getState().authRequired, true);
});
