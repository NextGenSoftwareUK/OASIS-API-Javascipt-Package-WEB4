# Changelog

## 2.0.0

Full rewrite (previous release was 1.0.8, from 2022).

- **Isomorphic**: works in Node.js 18+ and the browser. The old package only
  worked in the browser (it hard-depended on `localStorage` and had broken
  `token` variable references in `avatar.js` that would throw in Node).
- **Zero dependencies**: uses the global `fetch` instead of `axios`.
- **Full WEB4 OASIS API coverage**: 485 operations across all 32 active
  controllers on the OASIS2 ONODE WebAPI (previously: Auth, Avatar, Data,
  Karma, NFT (partial), Holochain, Solana, Seeds only).
- **Configurable base URL**: no more hardcoded `api.oasisplatform.world`.
  Defaults to `https://api.oasisweb4.one`, override via `new OASISClient({ baseUrl })`.
- **Injectable token store**: `persistSession` controls whether the session
  is written to `localStorage`; `setToken()` lets server-side code attach an
  externally-issued JWT per request.
- Generated modules are produced by `scripts/generate-modules.js` from the
  real controller source (`endpoints.json`), so coverage can be refreshed as
  the OASIS2 API grows.

### Breaking changes

- Package no longer ships per-feature subfolders (`avatar/`, `data/`, ...) as
  separate import paths - everything is accessed through `OASISClient`.
- `Auth.login`/`Auth.register` now return `{ isError, message, session, ... }`
  instead of `{ error, data }`.
- Removed the implicit auto-login-from-`localStorage` behavior in the old
  `Avatar`/`Data`/`Karma` classes; sessions are explicit via `oasis.auth` or
  `oasis.setToken()`.
