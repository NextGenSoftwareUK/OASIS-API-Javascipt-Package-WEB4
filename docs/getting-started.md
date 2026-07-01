# Getting Started

`@oasisomniverse/web4-api` is an isomorphic client for the WEB4 OASIS API - it runs the
same way in Node.js 18+ and in the browser, has zero dependencies (it uses the
global `fetch`), and covers every controller on the OASIS2 ONODE WebAPI.

## Install

```bash
npm install @oasisomniverse/web4-api
```

## Create a client

```js
// CommonJS
const { OASISClient } = require('@oasisomniverse/web4-api');
// or ESM
import { OASISClient } from '@oasisomniverse/web4-api';

const oasis = new OASISClient({
  baseUrl: 'https://api.oasisweb4.one', // optional, this is the default
  persistSession: true                 // optional, see "Sessions" below
});
```

| Option | Default | Notes |
| --- | --- | --- |
| `baseUrl` | `https://api.oasisweb4.one` | Point at any OASIS node (your own ONODE, a staging environment, etc). |
| `persistSession` | `true` in browsers, `false` in Node | Whether the session is written to `localStorage`. |
| `fetchImpl` | `globalThis.fetch` | Override for testing or non-standard runtimes. |

## Authenticate

```js
const { isError, message, session } = await oasis.auth.login({
  username: 'me@example.com', // username or email both work
  password: 'correct-horse-battery-staple'
});

if (isError) throw new Error(message);
console.log('Signed in as', session.username, session.avatarId);
```

From here on, every call automatically sends `Authorization: Bearer <jwtToken>`
- you don't need to attach it yourself. See [Auth & Sessions](./auth.md) for
registration, logout, and how to manage sessions in stateless environments
(serverless functions, SSR, etc).

## Calling any endpoint

Every controller on the OASIS2 WebAPI is exposed as a lowerCamel property on
the client, e.g. `oasis.avatar`, `oasis.data`, `oasis.karma`, `oasis.nft`,
`oasis.wallet`, `oasis.map`, `oasis.search`, `oasis.hyperDrive`. See the
[Module Reference](./README.md#module-reference) for the full list (32
modules, 485 operations).

### Calling convention

Every generated method takes **one args object**:

1. Any key in that object whose name matches a `{token}` in the endpoint's
   route is substituted into the URL.
2. Everything else you pass becomes the **query string** (for `GET`/`DELETE`)
   or the **JSON body** (for `POST`/`PUT`) - exactly what the underlying
   ASP.NET controller expects, so body field names must match the C# request
   model's property names (PascalCase, e.g. `KarmaType`, `Holon`, `Id`).

```js
// GET api/karma/get-karma-for-avatar/{avatarId} -> avatarId is a route token
const karma = await oasis.karma.getKarmaForAvatar({ avatarId });

// POST api/karma/add-karma-to-avatar/{avatarId} -> avatarId is a route token,
// everything else becomes the JSON body (AddRemoveKarmaToAvatarRequest)
await oasis.karma.addKarmaToAvatar({
  avatarId,
  KarmaType: 'ContributingToTheOASISWithCode',
  karmaSourceType: 'Website',
  KaramSourceTitle: 'Shipped a feature',
  KarmaSourceDesc: 'Added full WEB4 OASIS API coverage'
});

// POST api/data/save-holon -> no route tokens at all, the whole object is the body
await oasis.data.saveHolon({
  Holon: { Name: 'My Trust', HolonType: 'Trust', ParentHolonId: avatarId, MetaData: { foo: 'bar' } },
  SaveChildren: true
});
```

### Response shape

Every call resolves to:

```ts
{
  isError: boolean,
  message: string | null,
  result: any,      // the unwrapped payload
  raw: any,          // the full OASIS response envelope, if you need it
  statusCode: number
}
```

Network failures (DNS, connection refused, timeout) are caught and returned
in this same shape (`isError: true`) rather than thrown, so you only need one
error-handling path:

```js
const { isError, message, result } = await oasis.nft.getAllNfts({});
if (isError) {
  console.error(message);
  return;
}
console.log(result);
```

## TypeScript

The package ships as plain JS (CommonJS + ESM dual entry) without bundled
`.d.ts` files yet. Method signatures are uniform (`(args?: object) => Promise<Response>`),
so a minimal ambient declaration is usually enough if you need one - see the
[Module Reference](./README.md#module-reference) for exact argument shapes per
endpoint.

## Next steps

- [Auth & Sessions](./auth.md)
- [Module Reference](./README.md#module-reference)
- [Regenerating modules/docs](../README.md#regenerating-module-coverage) when the OASIS2 API changes
