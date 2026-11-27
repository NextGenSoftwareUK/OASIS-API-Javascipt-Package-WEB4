'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { CqlSidecarsModule } = require('../src/modules/CqlSidecars');

test('cqlSidecars.getStatus reads the Wizard sidecar status route', async () => {
  const calls = [];
  const module = new CqlSidecarsModule({ get: async (path, options) => { calls.push([path, options.query]); return []; } });
  await module.getStatus();
  assert.deepStrictEqual(calls, [['api/admin/cql/sidecars', undefined]]);
});
