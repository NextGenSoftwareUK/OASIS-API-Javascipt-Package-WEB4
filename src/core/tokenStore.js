'use strict';

const hasLocalStorage = typeof globalThis.localStorage !== 'undefined';
const STORAGE_KEY = 'oasis_session';

/**
 * Holds the current JWT/avatar session for the SDK.
 * In the browser it persists to localStorage by default; in Node (or when
 * persistence is disabled) it simply lives in memory for the lifetime of
 * the client instance. Callers can always set/get/clear explicitly.
 */
class TokenStore {
  constructor({ persist = hasLocalStorage } = {}) {
    this.persist = persist;
    this._session = null;

    if (this.persist) {
      try {
        const raw = globalThis.localStorage.getItem(STORAGE_KEY);
        if (raw) this._session = JSON.parse(raw);
      } catch {
        this._session = null;
      }
    }
  }

  getSession() {
    return this._session;
  }

  getToken() {
    return this._session?.jwtToken || this._session?.token || null;
  }

  setSession(session) {
    this._session = session || null;
    if (this.persist) {
      try {
        if (session) globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
        else globalThis.localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Storage unavailable (e.g. private browsing) - in-memory session still works.
      }
    }
  }

  clear() {
    this.setSession(null);
  }
}

module.exports = { TokenStore };
