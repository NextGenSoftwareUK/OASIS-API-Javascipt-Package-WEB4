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

`result` type: `SocialProvider` (array)

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `AccessToken` | `string` |
| `AvatarId` | `Guid` |
| `IsActive` | `bool` |
| `RegisteredAt` | `DateTime` |
| `Settings` | `Dictionary<string, object>` |

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
  "result": [{ "Id": "example string", "Name": "example string", "AccessToken": "example string", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "IsActive": true, "RegisteredAt": "2026-01-01T00:00:00Z", "Settings": { "<string>": {} } }]
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

`result` type: `SocialPost` (array)

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `ProviderId` | `string` |
| `ProviderName` | `string` |
| `Content` | `string` |
| `Timestamp` | `DateTime` |
| `AvatarId` | `Guid` |
| `Metadata` | `Dictionary<string, object>` |

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
  "result": [{ "Id": "example string", "ProviderId": "example string", "ProviderName": "example string", "Content": "example string", "Timestamp": "2026-01-01T00:00:00Z", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Metadata": { "<string>": {} } }]
}
```

---

### `registerSocialProvider`

Register a given social provider (FaceBook, Twitter, Instagram, LinkedIn, etc)

**POST** `api/social/register-social-provider`

**Request**

Body type: `Dictionary<string, object>` - a key/value map keyed by `string`, each value a `object`.

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

Body type: `string` (array)

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

