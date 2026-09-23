'use strict';

const { makeOperation } = require('../core/routeHelper');

/**
 * Wrapper for api/admin/olandunit (source: ONODE WebAPI OlandUnitController.cs).
 * Admin-only CRUD for OLand unit definitions.
 */
class OlandUnitModule {
  constructor(http) {
    this._http = http;

    // POST api/admin/olandunit
    this.create = makeOperation(http, "api/admin/olandunit", "POST", "");
    // PUT api/admin/olandunit/{id}
    this.update = makeOperation(http, "api/admin/olandunit", "PUT", "{id}");
    // DELETE api/admin/olandunit/{id}
    this.delete = makeOperation(http, "api/admin/olandunit", "DELETE", "{id}");
    // GET api/admin/olandunit/{id}
    this.getById = makeOperation(http, "api/admin/olandunit", "GET", "{id}");
    // GET api/admin/olandunit/GetAll
    this.getAll = makeOperation(http, "api/admin/olandunit", "GET", "GetAll");
  }
}

module.exports = { OlandUnitModule };
