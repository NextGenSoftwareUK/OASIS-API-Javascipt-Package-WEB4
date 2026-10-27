'use strict';

const DEFAULT_BASE_URL = 'https://api.web4.oasisomniverse.one';

/**
 * Recursively converts PascalCase object keys to camelCase so callers always
 * receive consistent casing regardless of how the server serialises the response.
 * Primitive values and array contents are passed through unchanged.
 */
function normalizeKeys(value) {
  if (Array.isArray(value)) return value.map(normalizeKeys);
  if (value !== null && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const camel = k.length > 0 ? k[0].toLowerCase() + k.slice(1) : k;
      out[camel] = normalizeKeys(v);
    }
    return out;
  }
  return value;
}

/**
 * OASIS HyperDrive V2 requires a stable operation id on every write: without one the
 * API rejects the call with COSMIC_WRITE_INTENT_INVALID ("Stable operation intent and
 * bounded valid conditions are required."). The id makes the write idempotent: a retry
 * that reuses it is not applied twice. Sent as this header; a body OperationId, if the
 * caller supplied one, must agree with it (see ONODE Helpers/HolonWriteEndpoint.cs).
 */
const OPERATION_HEADER = 'X-COSMIC-Operation-Id';

function newOperationId() {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === 'function') return c.randomUUID();
  // RFC 4122 v4 fallback for runtimes without crypto.randomUUID.
  const b = new Uint8Array(16);
  if (c && typeof c.getRandomValues === 'function') c.getRandomValues(b);
  else for (let i = 0; i < 16; i++) b[i] = Math.floor(Math.random() * 256);
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

/** The operation id for a write: the caller's, else the body's, else a fresh one. */
function operationIdFor(operationId, body) {
  if (operationId) return String(operationId);
  if (body && !(body instanceof FormData)) {
    const fromBody = body.OperationId || body.operationId;
    if (fromBody) return String(fromBody);
  }
  return newOperationId();
}

function buildQueryString(query) {
  const entries = Object.entries(query || {}).filter(([, v]) => v !== undefined && v !== null);
  if (!entries.length) return '';
  const params = new URLSearchParams();
  for (const [key, value] of entries) {
    params.set(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
  }
  return `?${params.toString()}`;
}

/**
 * Thin isomorphic HTTP client around the global fetch API (Node 18+, all modern browsers).
 * Every OASIS API call ultimately goes through `request()` below - there are no mocked
 * or stubbed responses anywhere in this SDK.
 */
class HttpClient {
  constructor({ baseUrl = DEFAULT_BASE_URL, tokenStore, fetchImpl = globalThis.fetch } = {}) {
    if (!fetchImpl) {
      throw new Error(
        'No global fetch implementation found. Use Node 18+, a modern browser, or pass { fetchImpl } explicitly.'
      );
    }
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.tokenStore = tokenStore;
    // Store custom fetchImpl only if explicitly provided; otherwise always use globalThis.fetch
    // directly at call-time so it retains its window receiver in browsers.
    this._customFetch = fetchImpl !== globalThis.fetch ? fetchImpl : null;
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
  }

  /**
   * @param {string} verb GET | POST | PUT | DELETE
   * @param {string} path e.g. "api/avatar/authenticate"
   * @param {object} [options]
   * @param {object} [options.query] query string params (GET/DELETE)
   * @param {object} [options.body] JSON body (POST/PUT/DELETE)
   * @param {boolean} [options.auth] attach Authorization: Bearer <token> (default true)
   * @param {string} [options.token] override token for this single request
   * @param {string} [options.operationId] write operation id (non-GET). Reuse the same
   *   id when retrying a write so it is applied once. Default: the body's OperationId,
   *   else a fresh id per call.
   */
  async request(verb, path, { query, body, auth = true, token, operationId } = {}) {
    const url = `${this.baseUrl}/${path.replace(/^\/+/, '')}${buildQueryString(query)}`;
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    const bearer = token || (auth ? this.tokenStore?.getToken() : null);
    if (bearer) headers.Authorization = `Bearer ${bearer}`;
    if (verb !== 'GET') headers[OPERATION_HEADER] = operationIdFor(operationId, body);

    const init = { method: verb, headers };
    if (body !== undefined && verb !== 'GET') {
      if (body instanceof FormData) {
        // Multipart: let fetch set Content-Type with the boundary automatically.
        delete headers['Content-Type'];
        init.body = body;
      } else {
        init.body = JSON.stringify(body);
      }
    }

    let res;
    try {
      res = await (this._customFetch ? this._customFetch(url, init) : globalThis.fetch(url, init));
    } catch (err) {
      return { isError: true, message: `Network error calling ${url}: ${err.message}`, exception: err };
    }

    const text = await res.text();
    let json;
    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      json = null;
    }

    if (!res.ok) {
      const message =
        json?.result?.message || json?.message || json?.title || `Request failed with status ${res.status}`;
      return { isError: true, message, statusCode: res.status, raw: json };
    }

    // OASIS responses are typically { isError, message, result: { isError, message, result: <payload> } }.
    // We surface the innermost payload as `.result` while keeping the full envelope available as `.raw`.
    const inner = json?.result !== undefined ? json.result : json;
    const payload = inner?.result !== undefined ? inner.result : inner;

    return {
      isError: Boolean(inner?.isError || json?.isError),
      message: inner?.message || json?.message || null,
      result: normalizeKeys(payload),
      raw: json,
      statusCode: res.status
    };
  }

  get(path, options) {
    return this.request('GET', path, options);
  }

  post(path, options) {
    return this.request('POST', path, options);
  }

  put(path, options) {
    return this.request('PUT', path, options);
  }

  delete(path, options) {
    return this.request('DELETE', path, options);
  }
}

module.exports = { HttpClient, DEFAULT_BASE_URL, OPERATION_HEADER };
