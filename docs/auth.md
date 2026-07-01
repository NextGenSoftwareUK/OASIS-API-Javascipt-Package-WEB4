# Auth & Sessions

`oasis.auth` is the one hand-written module in this SDK (everything else is
generated straight from the OASIS controller source - see
[Module Reference](./README.md#module-reference)). It wraps the generated
`oasis.avatar.authenticate` / `register` / `revokeToken` calls and manages
the session/token for you.

## Login

```js
const { isError, message, session } = await oasis.auth.login({
  username: 'me@example.com', // username or email both work, OASIS treats them the same here
  password: 'correct-horse-battery-staple'
});

if (isError) throw new Error(message);
// session = { avatarId, username, email, firstName, lastName, jwtToken, refreshToken }
```

On success the returned `jwtToken` is stored in the client's `TokenStore` and
automatically attached as `Authorization: Bearer <token>` to every subsequent
call made through this `oasis` instance.

## Register

```js
const { isError, message, session } = await oasis.auth.register({
  firstName: 'Ada',
  lastName: 'Lovelace',
  email: 'ada@example.com',
  password: 'correct-horse-battery-staple',
  confirmPassword: 'correct-horse-battery-staple', // defaults to `password` if omitted
  avatarType: 'User',                              // default
  title: 'Mx',                                      // default
  acceptTerms: true                                  // default
});

if (isError) throw new Error(message);
```

Like `login`, a successful registration also stores the session and JWT.

## Reading the current session

```js
oasis.auth.getSession();      // { avatarId, username, ... jwtToken } or null
oasis.auth.isAuthenticated(); // boolean
```

## Logout

```js
await oasis.auth.logout();
```

This calls `api/avatar/revoke-token` on the server (best-effort - failures
there don't throw) and always clears the local session.

## Sessions in stateless environments (serverless functions, SSR, CLIs)

By default `persistSession` is `false` in Node, so a fresh `OASISClient`
starts with no session - there's nothing to read from `localStorage` server-side
anyway. The usual pattern in a serverless function is: take the JWT from the
incoming request's `Authorization` header, attach it to a fresh client per
request, and never call `oasis.auth.login()` server-side at all unless that
request *is* the login request itself:

```js
function createClientForRequest(req) {
  const oasis = new OASISClient({ baseUrl: process.env.OASIS_API_URL, persistSession: false });
  const authHeader = req.headers.authorization || '';
  if (authHeader.startsWith('Bearer ')) {
    oasis.setToken(authHeader.slice('Bearer '.length));
  }
  return oasis;
}
```

`oasis.setToken(jwtToken, sessionExtras?)` lets you attach an externally-held
JWT (e.g. one your own backend already obtained) without going through
`oasis.auth.login()` again.

## In the browser

By default `persistSession` is `true` in the browser, so the session survives
page reloads via `localStorage`. To opt out (e.g. you're managing your own
storage, or building for an environment without `localStorage`), pass
`persistSession: false` explicitly.
