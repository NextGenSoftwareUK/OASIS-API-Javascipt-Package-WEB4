'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { OASISClient } = require('..');

for (const [name, route, args] of [
  ['sql', 'query-cql/sql', { query: 'SELECT * FROM MongoDBOASIS WHERE Version >= @v', parameters: { v: 1 } }],
  ['ask', 'query-cql/ask', { question: 'Show five records', execute: false }]
]) {
  test(`data.${name} posts its arguments to api/data/${route}`, async () => {
    let sent;
    const oasis = new OASISClient({
      baseUrl: 'https://web4.test', persistSession: false,
      fetchImpl: async (url, init) => {
        sent = { url, init };
        return new Response(JSON.stringify({ isError: false, result: {} }), { headers: { 'Content-Type': 'application/json' } });
      }
    });
    await oasis.data[name](args);
    assert.strictEqual(sent.url, `https://web4.test/api/data/${route}`);
    assert.strictEqual(sent.init.method, 'POST');
    assert.deepStrictEqual(JSON.parse(sent.init.body), args);
  });
}
