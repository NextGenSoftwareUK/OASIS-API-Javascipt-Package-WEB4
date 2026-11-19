'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { OASISClient } = require('../index.js');
const messaging = require('../messaging');

test('messaging module exposes the full api/messaging surface', () => {
  const oasis = new OASISClient({ baseUrl: 'https://api.test' });
  for (const op of ['send', 'sync', 'conversations', 'markMessagesDelivered', 'markMessagesAsRead',
    'realtimeTicket', 'presence', 'createGroup', 'groups', 'addGroupMembers', 'leaveGroup', 'groupMessages', 'sendMessageToAvatar']) {
    assert.equal(typeof oasis.messaging[op], 'function', op);
  }
});

test('send posts to api/messaging/send with the bearer token', async () => {
  const calls = [];
  const fetchImpl = async (url, init) => { calls.push({ url, init }); return { ok: true, status: 200, text: async () => JSON.stringify({ isError: false, result: { id: 'm1' } }) }; };
  const oasis = new OASISClient({ baseUrl: 'https://api.test', fetchImpl });
  oasis.setToken('jwt-1');
  await oasis.messaging.send({ id: 'm1', toAvatarId: 'b', content: 'hi' });
  assert.equal(calls[0].url, 'https://api.test/api/messaging/send');
  assert.equal(calls[0].init.method, 'POST');
  assert.equal(calls[0].init.headers.Authorization, 'Bearer jwt-1');
});

test('the messaging subpath builds a controller from an OASISClient session', () => {
  const oasis = new OASISClient({ baseUrl: 'https://api.test' });
  oasis.setToken('jwt-2');
  const chat = messaging.messagingFromClient(oasis, 'avatar-1', { realtime: false });
  assert.equal(chat.getState().connection, 'offline');
  assert.equal(typeof messaging.createMessagingView, 'function');
  chat.dispose();
});

test('an expired JWT is refreshed with the stored refresh token and queued messages go out', async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    const auth = init.headers?.Authorization;
    calls.push({ url, auth });
    const json = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
    if (url.endsWith('api/avatar/refresh-token')) return json(200, { isError: false, result: { jwtToken: 'new-jwt', refreshToken: 'r2' } });
    if (auth === 'Bearer old-jwt') return json(401, { isError: true, message: 'expired' });
    if (url.includes('api/messaging/sync')) return json(200, { isError: false, result: { messages: [], hasMore: false } });
    if (url.includes('api/messaging/conversations')) return json(200, { isError: false, result: [] });
    return json(200, { isError: false, result: { id: 'm', fromAvatarId: 'me', content: 'hi', receivedAt: '2026-01-01T00:00:00Z' } });
  };
  const oasis = new OASISClient({ baseUrl: 'https://api.test', fetchImpl, persistSession: false });
  oasis.setToken('old-jwt', { refreshToken: 'r1', avatarId: 'me' });
  const chat = messaging.messagingFromClient(oasis, 'me', { realtime: false });
  await chat.start();
  await chat.sendDirect('bob', 'after a long offline period');
  await new Promise((r) => setTimeout(r, 50));

  assert.equal(oasis.tokenStore.getToken(), 'new-jwt');
  assert.equal(oasis.tokenStore.getSession().refreshToken, 'r2');
  const sendCalls = calls.filter((c) => c.url.endsWith('api/messaging/send'));
  assert.ok(sendCalls.length >= 1 && sendCalls[sendCalls.length - 1].auth === 'Bearer new-jwt');
  assert.equal(chat.getState().authRequired, false);
  assert.equal(chat.getState().messages['direct:bob'][0].state, 'sent');
  chat.dispose();
});
