import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MessagingApi, MessagingApiError } from '../api';

function api(fetchImpl: any, token: string | null = 'jwt') {
  return new MessagingApi({ baseUrl: 'https://api.test/', getToken: () => token, fetch: fetchImpl });
}
const ok = (result: unknown, status = 200) => ({ ok: status < 400, status, json: async () => ({ result, isError: false }) });

test('sends the bearer token and unwraps the OASIS result envelope', async () => {
  let seen: any;
  const a = api(async (url: string, init: any) => { seen = { url, init }; return ok({ id: 'x' }); });
  const r = await a.send({ id: 'x', toAvatarId: 'b', content: 'hi' });
  assert.equal(r.id, 'x');
  assert.equal(seen.url, 'https://api.test/api/messaging/send');
  assert.equal(seen.init.headers.Authorization, 'Bearer jwt');
  assert.equal(JSON.parse(seen.init.body).content, 'hi');
});

test('sync encodes the cursor', async () => {
  let url = '';
  await api(async (u: string) => { url = u; return ok({ messages: [], hasMore: false }); }).sync('2026-01-01T00:00:00+00:00', 50);
  assert.equal(url, 'https://api.test/api/messaging/sync?limit=50&since=2026-01-01T00%3A00%3A00%2B00%3A00');
});

test('server rejections are non-network errors carrying the server message', async () => {
  const a = api(async () => ({ ok: false, status: 400, json: async () => ({ isError: true, message: 'Bad content' }) }));
  await assert.rejects(a.send({ id: 'x', content: '' }), (e: MessagingApiError) => e.network === false && e.message === 'Bad content' && e.status === 400);
});

test('thrown fetch and gateway errors are network errors (retry later)', async () => {
  await assert.rejects(api(async () => { throw new TypeError('Failed to fetch'); }).conversations(), (e: MessagingApiError) => e.network);
  await assert.rejects(api(async () => ({ ok: false, status: 503, json: async () => ({}) })).conversations(), (e: MessagingApiError) => e.network && e.status === 503);
});

test('omits Authorization without a token and handles non-JSON error bodies', async () => {
  let headers: any;
  const a = api(async (_u: string, init: any) => { headers = init.headers; return { ok: false, status: 401, json: async () => { throw new Error('html'); } }; }, null);
  await assert.rejects(a.conversations(), (e: MessagingApiError) => !e.network && e.status === 401);
  assert.equal(headers.Authorization, undefined);
});

test('401 and 403 are auth errors (refresh and retry), not request rejections', async () => {
  for (const status of [401, 403]) {
    const a = api(async () => ({ ok: false, status, json: async () => ({ isError: true, message: 'x' }) }));
    await assert.rejects(a.send({ id: 'x', content: 'y' }), (e: MessagingApiError) => e.auth === true && e.network === false && e.status === status);
  }
});
