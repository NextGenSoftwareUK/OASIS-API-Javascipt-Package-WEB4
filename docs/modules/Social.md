# Social — `oasis.social`

Source controller: [`SocialController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SocialController.cs)
Route prefix: `api/social`
4 operation(s).

Every method takes a single args object: any key matching a `{token}` in the route is substituted into the URL; everything else becomes the query string (GET/DELETE) or JSON body (POST/PUT). Every call resolves to the standard OASIS envelope:

```ts
{
  isError: boolean;
  isWarning: boolean;
  message: string;
  errorCode?: string;
  result: T; // see each endpoint's Response section below
}
```

## Operations

### `getRegisteredProviders`

Get registered social providers for the current avatar

**GET** `api/social/registered-providers`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<SocialProvider>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.social.getRegisteredProviders({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <SocialProvider> */ ]
}
```

---

### `getSocialFeed`

Get's the social feed from all registered social providers for the currently logged in avatar

**GET** `api/social/social-feed`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<SocialPost>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.social.getSocialFeed({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <SocialPost> */ ]
}
```

---

### `registerSocialProvider`

Register a given social provider (FaceBook, Twitter, Instagram, LinkedIn, etc)

**POST** `api/social/register-social-provider`

**Request**

Body type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.social.registerSocialProvider({
    providerName: 'example string',
    accessToken: 'example string',
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `shareHolon`

Share a holon to social media

**POST** `api/social/share-holon`

**Request**

Body: `List<string>`

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.social.shareHolon({
    holonId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    message: 'example string',
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

