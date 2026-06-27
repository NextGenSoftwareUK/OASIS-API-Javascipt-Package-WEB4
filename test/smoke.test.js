'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { OASISClient } = require('../index.js');

function fakeFetch(responses) {
  const calls = [];
  const impl = async (url, init) => {
    calls.push({ url, init });
    const match = responses.find((r) => url.includes(r.match));
    const body = match ? match.body : { isError: false, result: {} };
    return {
      ok: match ? match.ok !== false : true,
      status: match?.status || 200,
      text: async () => JSON.stringify(body)
    };
  };
  impl.calls = calls;
  return impl;
}

test('login stores session and subsequent calls send Bearer token', async () => {
  const fetchImpl = fakeFetch([
    {
      match: 'api/avatar/authenticate',
      body: { isError: false, result: { id: 'avatar-123', username: 'dave', jwtToken: 'jwt-abc' } }
    },
    {
      match: 'api/karma/get-karma-for-avatar/avatar-123',
      body: { isError: false, result: 42 }
    }
  ]);

  const oasis = new OASISClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  const loginRes = await oasis.auth.login({ username: 'dave', password: 'pw' });
  assert.equal(loginRes.isError, false);
  assert.equal(loginRes.session.avatarId, 'avatar-123');
  assert.equal(oasis.auth.isAuthenticated(), true);

  const karmaRes = await oasis.karma.getKarmaForAvatar({ avatarId: 'avatar-123' });
  assert.equal(karmaRes.result, 42);

  const karmaCall = fetchImpl.calls.find((c) => c.url.includes('get-karma-for-avatar'));
  assert.equal(karmaCall.init.headers.Authorization, 'Bearer jwt-abc');
  assert.equal(karmaCall.url, 'https://example.test/api/karma/get-karma-for-avatar/avatar-123');
});

test('route tokens are consumed from the URL, remaining args become the body', async () => {
  const fetchImpl = fakeFetch([{ match: 'api/karma/add-karma-to-avatar/avatar-123', body: { isError: false, result: {} } }]);
  const oasis = new OASISClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  await oasis.karma.addKarmaToAvatar({ avatarId: 'avatar-123', KarmaType: 'Other', karmaSourceType: 'Website' });

  const call = fetchImpl.calls[0];
  assert.equal(call.url, 'https://example.test/api/karma/add-karma-to-avatar/avatar-123');
  assert.equal(call.init.method, 'POST');
  const body = JSON.parse(call.init.body);
  assert.deepEqual(body, { KarmaType: 'Other', karmaSourceType: 'Website' });
});

test('missing required route param throws a clear error', async () => {
  const oasis = new OASISClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl: fakeFetch([]) });
  await assert.rejects(() => oasis.karma.getKarmaForAvatar({}), /Missing required route parameter "avatarId"/);
});

test('logout clears the session', async () => {
  const fetchImpl = fakeFetch([
    { match: 'api/avatar/authenticate', body: { isError: false, result: { id: 'a1', jwtToken: 'jwt-1' } } },
    { match: 'api/avatar/revoke-token', body: { isError: false, result: true } }
  ]);
  const oasis = new OASISClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  await oasis.auth.login({ username: 'dave', password: 'pw' });
  assert.equal(oasis.auth.isAuthenticated(), true);

  await oasis.auth.logout();
  assert.equal(oasis.auth.isAuthenticated(), false);
  assert.equal(oasis.auth.getSession(), null);
});

test('all 32 generated modules are attached and every method is callable', async () => {
  const oasis = new OASISClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl: fakeFetch([]) });
  const expectedModules = [
    'avatar', 'data', 'karma', 'nft', 'wallet', 'map', 'search', 'hyperDrive',
    'provider', 'holochain', 'solana', 'eOSIO', 'bridge', 'keys', 'files',
    'messaging', 'chat', 'social', 'clan', 'gifts', 'eggs', 'video',
    'competition', 'subscription', 'settings', 'share', 'seeds', 'stats',
    'health', 'oLand', 'oNET', 'oNODE'
  ];
  for (const name of expectedModules) {
    assert.ok(oasis[name], `expected oasis.${name} to be attached`);
  }
});
