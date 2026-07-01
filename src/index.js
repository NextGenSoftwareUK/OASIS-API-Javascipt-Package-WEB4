'use strict';

const { HttpClient, DEFAULT_BASE_URL } = require('./core/httpClient');
const { TokenStore } = require('./core/tokenStore');
const { attachGeneratedModules } = require('./modules/index');
const { AuthModule } = require('./modules/Auth');

/**
 * Main SDK entry point. Works in Node 18+ and any modern browser.
 *
 *   const { OASISClient } = require('@oasisomniverse/web4-api');
 *   const oasis = new OASISClient({ baseUrl: 'https://api.oasisweb4.one' });
 *   await oasis.auth.login({ username: 'me@example.com', password: '...' });
 *   const karma = await oasis.karma.getKarmaForAvatar({ avatarId: oasis.auth.getSession().avatarId });
 *
 * Every controller on the OASIS2 ONODE WebAPI is reachable as a lowerCamel
 * property (oasis.avatar, oasis.data, oasis.karma, oasis.nft, oasis.wallet,
 * oasis.hyperDrive, oasis.map, oasis.search, ...). Generated methods take a
 * single args object; route template tokens (e.g. {id}) are consumed from it
 * automatically, remaining keys become the query string (GET/DELETE) or JSON
 * body (POST/PUT). oasis.auth is a hand-written convenience wrapper that also
 * manages the session/token for you.
 */
class OASISClient {
  constructor({ baseUrl = DEFAULT_BASE_URL, persistSession, fetchImpl } = {}) {
    this.tokenStore = new TokenStore({ persist: persistSession });
    this.http = new HttpClient({ baseUrl, tokenStore: this.tokenStore, fetchImpl });

    attachGeneratedModules(this, this.http);

    // Hand-written ergonomic wrapper, built on top of the generated avatar module.
    this.auth = new AuthModule(this.http, this.tokenStore, this.avatar);
  }

  setBaseUrl(baseUrl) {
    this.http.setBaseUrl(baseUrl);
  }

  /** Use an externally-issued JWT (e.g. one your server already obtained) for subsequent calls. */
  setToken(jwtToken, sessionExtras = {}) {
    this.tokenStore.setSession({ ...sessionExtras, jwtToken });
  }
}

module.exports = { OASISClient, HttpClient, TokenStore, DEFAULT_BASE_URL };
module.exports.default = OASISClient;
