# Changelog

## 2.1.0

Offline-first messaging.

- New subpath **`@oasisomniverse/web4-api/messaging`**: a framework-agnostic messaging engine (`MessagingController`,
  `MessagingApi`, `createMessagingController`, `messagingFromClient`) plus a themable, XSS-safe chat view
  (`createMessagingView`). Messages are saved locally and queued in an outbox; the server accepts sends
  idempotently by client-generated id; a server cursor (`GET api/messaging/sync`) catches up after any disconnect;
  real-time push (`/ws/messaging`, single-use ticket) makes delivery immediate. Delivery/read receipts, typing,
  group conversations and persistence are included. Used by the `@oasisomniverse/*` UI component libraries.
- `oasis.messaging` now covers the full `api/messaging` surface: idempotent `send`, `sync`, `conversations`,
  `markMessagesDelivered`, `realtimeTicket`, `presence`, groups (`createGroup`, `groups`, `addGroupMembers`,
  `leaveGroup`, `groupMessages`) and `getCurrentAvatarMessageSummary`.
- `scripts/extract-endpoints.js` now parses expression-bodied (`=>`) controller methods; previously they were
  silently skipped.

## 2.0.0

Full rewrite (previous release was 1.0.8, from 2022).

- **Isomorphic**: works in Node.js 18+ and the browser. The old package only
  worked in the browser (it hard-depended on `localStorage` and had broken
  `token` variable references in `avatar.js` that would throw in Node).
- **Zero dependencies**: uses the global `fetch` instead of `axios`.
- **Full WEB4 OASIS API coverage**: 485 operations across all 32 active
  controllers on the OASIS ONODE WebAPI (previously: Auth, Avatar, Data,
  Karma, NFT (partial), Holochain, Solana, Seeds only).
- **Configurable base URL**: no more hardcoded `api.oasisplatform.world`.
  Defaults to `https://api.oasisweb4.one`, override via `new OASISClient({ baseUrl })`.
- **Injectable token store**: `persistSession` controls whether the session
  is written to `localStorage`; `setToken()` lets server-side code attach an
  externally-issued JWT per request.
- Generated modules are produced by `scripts/generate-modules.js` from the
  real controller source (`endpoints.json`), so coverage can be refreshed as
  the OASIS API grows.

### Breaking changes

- Package no longer ships per-feature subfolders (`avatar/`, `data/`, ...) as
  separate import paths - everything is accessed through `OASISClient`.
- `Auth.login`/`Auth.register` now return `{ isError, message, session, ... }`
  instead of `{ error, data }`.
- Removed the implicit auto-login-from-`localStorage` behavior in the old
  `Avatar`/`Data`/`Karma` classes; sessions are explicit via `oasis.auth` or
  `oasis.setToken()`.
