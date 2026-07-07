# Troubleshooting

## `Failed to execute 'fetch' on 'Window': Illegal invocation`

**When it happens:** Any SDK call (avatar update, wallet create, etc.) throws this error when the SDK is loaded via a bundler (esbuild, Webpack, Rollup, Vite) that wraps the CommonJS module in an IIFE or similar closure. Inside that wrapper, `fetch` loses its `window` receiver binding.

**Fix 1 — one-liner before your SDK script (recommended for browser/CDN setups):**

```html
<script>if(window.fetch) window.fetch = window.fetch.bind(window);</script>
<script src="your-bundled-sdk.js"></script>
```

**Fix 2 — pass a bound `fetchImpl` to the constructor:**

```js
const client = new OASISClient({
  baseUrl: 'https://api.web4.oasisomniverse.one',
  fetchImpl: window.fetch.bind(window)
});
```

**Fix 3 — ESM import (no bundler wrapping, no problem):**

```js
import { OASISClient } from 'https://esm.sh/@oasisomniverse/web4-api@2.0.4';
const client = new OASISClient({ baseUrl: 'https://api.web4.oasisomniverse.one' });
```

ESM imports via a CDN like `esm.sh` run at the top level without any CommonJS wrapping, so the binding issue never occurs.

---

## `No global fetch implementation found`

**When it happens:** Running in Node.js below version 18, which doesn't have a built-in `fetch`.

**Fix:** Upgrade to Node 18+ or pass a fetch polyfill:

```js
import fetch from 'node-fetch';
const client = new OASISClient({ baseUrl: '...', fetchImpl: fetch });
```

---

## API calls return `{ isError: true }` with no message

**Likely causes:**

1. **No token** — call `client.auth.login()` first or pass a stored JWT via `client.setToken(jwt)`.
2. **Expired token** — re-authenticate or implement a refresh loop.
3. **CORS** — if calling from a browser to a self-hosted ONODE, ensure the server has `Access-Control-Allow-Origin` set. The public `api.web4.oasisomniverse.one` endpoint allows any origin.
4. **Wrong `baseUrl`** — the default points to the public OASIS endpoint; override if self-hosting.

---

## Avatar type shows `[object Object]`

The API returns `AvatarType` as an `EnumValue<T>` object (`{ value: 0, name: "Human", score: 0 }`), not a plain string. Extract the name before displaying:

```js
function getAvatarTypeName(avatarType) {
  if (!avatarType) return 'Human';
  if (typeof avatarType === 'string') return avatarType;
  return avatarType.name || avatarType.Name || String(avatarType.value ?? avatarType.Value) || 'Human';
}
```
