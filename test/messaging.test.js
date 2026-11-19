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
