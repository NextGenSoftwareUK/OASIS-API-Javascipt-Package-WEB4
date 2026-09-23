'use strict';

const { makeOperation } = require('../core/routeHelper');

/**
 * Wrapper for api/hyperdrive/sync (source: ONODE WebAPI HyperDriveSyncController.cs).
 */
class HyperDriveSyncModule {
  constructor(http) {
    this._http = http;

    // POST api/hyperdrive/sync/exchange
    this.exchange = makeOperation(http, "api/hyperdrive/sync", "POST", "exchange");
  }
}

module.exports = { HyperDriveSyncModule };
