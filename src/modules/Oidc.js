'use strict';

const { makeOperation } = require('../core/routeHelper');

/**
 * Wrapper for OIDC/OAuth2 endpoints (source: ONODE WebAPI OidcController.cs).
 * These are public endpoints — no bearer token required.
 */
class OidcModule {
  constructor(http) {
    this._http = http;

    // GET .well-known/openid-configuration
    this.getDiscoveryDocument = makeOperation(http, "", "GET", ".well-known/openid-configuration");
    // GET oauth/jwks
    this.getJwks = makeOperation(http, "", "GET", "oauth/jwks");
    // GET oauth/userinfo
    this.getUserInfo = makeOperation(http, "", "GET", "oauth/userinfo");
    // GET oauth/authorize
    this.authorize = makeOperation(http, "", "GET", "oauth/authorize");
    // POST oauth/token
    this.token = makeOperation(http, "", "POST", "oauth/token");
  }
}

module.exports = { OidcModule };
