# Karma — `oasis.karma`

Source controller: [`KarmaController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/KarmaController.cs)
Route prefix: `api/karma`
12 operation(s).

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

### `addKarmaToAvatar`

Add positive karma to the given avatar. karmaType = The type of positive karma, karmaSourceType = Where the karma was earnt (App, dApp, hApp, Website, Game, karamSourceTitle/karamSourceDesc = The name/desc of the app/website/game where the karma was earnt. They must be logged in &amp; authenticated for this method to work.

**POST** `api/karma/add-karma-to-avatar/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

Body type: `AddRemoveKarmaToAvatarRequest`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `KarmaType` | `KarmaTypePositive` |
| `karmaSourceType` | `KarmaSourceType` |
| `Avatar` | `IAvatar` |
| `KaramSourceTitle` | `string` |
| `KarmaSourceDesc` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `KarmaAkashicRecord`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `Date` | `DateTime` |
| `Karma` | `int` |
| `TotalKarma` | `long` |
| `KarmaSourceTitle` | `string` |
| `KarmaSourceDesc` | `string` |
| `WebLink` | `string` |
| `KarmaSource` | `EnumValue<KarmaSourceType>` |
| `KarmaEarntOrLost` | `EnumValue<KarmaEarntOrLost>` |
| `KarmaTypePositive` | `EnumValue<KarmaTypePositive>` |
| `KarmaTypeNegative` | `EnumValue<KarmaTypeNegative>` |
| `Provider` | `EnumValue<ProviderType>` |

**Example**

```js
const { isError, message, result } = await oasis.karma.addKarmaToAvatar({
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    karmaType: {  },
    karmaSourceType: {  },
    avatar: { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 },
    karamSourceTitle: "example string",
    karmaSourceDesc: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "TotalKarma": 1, "KarmaSourceTitle": "example string", "KarmaSourceDesc": "example string", "WebLink": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "KarmaTypeNegative": { "Score": 1.0 }, "Provider": { "Score": 1.0 } }
}
```

---

### `getKarmaAkashicRecordsForAvatar`

Get's the karma akashic records for a given avatar.

**GET** `api/karma/get-karma-akashic-records-for-avatar/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IKarmaAkashicRecord` (array)

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `Date` | `DateTime` |
| `Karma` | `int` |
| `KarmaEarntOrLost` | `EnumValue<KarmaEarntOrLost>` |
| `KarmaSource` | `EnumValue<KarmaSourceType>` |
| `KarmaSourceDesc` | `string` |
| `KarmaSourceTitle` | `string` |
| `KarmaTypeNegative` | `EnumValue<KarmaTypeNegative>` |
| `KarmaTypePositive` | `EnumValue<KarmaTypePositive>` |
| `Provider` | `EnumValue<ProviderType>` |
| `TotalKarma` | `long` |
| `WebLink` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.karma.getKarmaAkashicRecordsForAvatar({
    avatarId: '<avatarId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": { "Score": 1.0 }, "TotalKarma": 1, "WebLink": "example string" }]
}
```

---

### `getKarmaForAvatar`

Get's the karma for a given avatar.

**GET** `api/karma/get-karma-for-avatar/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `long`

**Example**

```js
const { isError, message, result } = await oasis.karma.getKarmaForAvatar({
    avatarId: '<avatarId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": 1
}
```

---

### `getKarmaHistory`

Gets karma history (paged) for a given avatar.

**GET** `api/karma/get-karma-history/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `limit` | `int (optional)` |
| `offset` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `KarmaTransaction` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `Amount` | `long` |
| `SourceType` | `KarmaSourceType` |
| `Description` | `string` |
| `RelatedEntityId` | `Guid?` |
| `Timestamp` | `DateTime` |

**Example**

```js
const { isError, message, result } = await oasis.karma.getKarmaHistory({
    avatarId: '<avatarId>',
    limit: 1,
    offset: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Amount": 1, "SourceType": {  }, "Description": "example string", "RelatedEntityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Timestamp": "2026-01-01T00:00:00Z" }]
}
```

---

### `getKarmaStats`

Gets karma statistics (totals, distributions, recent activity) for a given avatar.

**GET** `api/karma/get-karma-stats/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` - a key/value map keyed by `string`, each value a `object`.

**Example**

```js
const { isError, message, result } = await oasis.karma.getKarmaStats({
    avatarId: '<avatarId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "<string>": {} }
}
```

---

### `getNegativeKarmaWeighting`

Get karma weighting for a given negative karma category.

**GET** `api/karma/get-negative-karma-weighting/{karmaType}`

Route parameters:

| Field | Type |
| --- | --- |
| `karmaType` | `KarmaTypeNegative` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.karma.getNegativeKarmaWeighting({
    karmaType: '<karmaType>'
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

### `getPositiveKarmaWeighting`

Get karma weighting for a given positive karma category.

**GET** `api/karma/get-positive-karma-weighting/{karmaType}`

Route parameters:

| Field | Type |
| --- | --- |
| `karmaType` | `KarmaTypePositive` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.karma.getPositiveKarmaWeighting({
    karmaType: '<karmaType>'
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

### `removeKarmaFromAvatar`

Remove karma from the given avatar. They must be logged in &amp; authenticated for this method to work. karmaType = The type of negative karma, karmaSourceType = Where the karma was lost (App, dApp, hApp, Website, Game, karamSourceTitle/karamSourceDesc = The name/desc of the app/website/game where the karma was lost.

**POST** `api/karma/remove-karma-from-avatar/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

Body type: `AddRemoveKarmaToAvatarRequest`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `KarmaType` | `KarmaTypePositive` |
| `karmaSourceType` | `KarmaSourceType` |
| `Avatar` | `IAvatar` |
| `KaramSourceTitle` | `string` |
| `KarmaSourceDesc` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `KarmaAkashicRecord`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `Date` | `DateTime` |
| `Karma` | `int` |
| `TotalKarma` | `long` |
| `KarmaSourceTitle` | `string` |
| `KarmaSourceDesc` | `string` |
| `WebLink` | `string` |
| `KarmaSource` | `EnumValue<KarmaSourceType>` |
| `KarmaEarntOrLost` | `EnumValue<KarmaEarntOrLost>` |
| `KarmaTypePositive` | `EnumValue<KarmaTypePositive>` |
| `KarmaTypeNegative` | `EnumValue<KarmaTypeNegative>` |
| `Provider` | `EnumValue<ProviderType>` |

**Example**

```js
const { isError, message, result } = await oasis.karma.removeKarmaFromAvatar({
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    karmaType: {  },
    karmaSourceType: {  },
    avatar: { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 },
    karamSourceTitle: "example string",
    karmaSourceDesc: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "TotalKarma": 1, "KarmaSourceTitle": "example string", "KarmaSourceDesc": "example string", "WebLink": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "KarmaTypeNegative": { "Score": 1.0 }, "Provider": { "Score": 1.0 } }
}
```

---

### `setNegativeKarmaWeighting`

Set's the weighting for a given negative karma category.

**POST** `api/karma/set-negative-karma-weighting/{karmaType}/{weighting}`

Route parameters:

| Field | Type |
| --- | --- |
| `karmaType` | `KarmaTypeNegative` |
| `weighting` | `int` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.karma.setNegativeKarmaWeighting({
    karmaType: '<karmaType>',
    weighting: '<weighting>'
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

### `setPositiveKarmaWeighting`

Set's the weighting for a given positive karma category.

**POST** `api/karma/set-positive-karma-weighting/{karmaType}/{weighting}`

Route parameters:

| Field | Type |
| --- | --- |
| `karmaType` | `KarmaTypePositive` |
| `weighting` | `int` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.karma.setPositiveKarmaWeighting({
    karmaType: '<karmaType>',
    weighting: '<weighting>'
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

### `voteForNegativeKarmaWeighting`

Allows people to vote what they feel should be the weighting for a given negative karma category.

**POST** `api/karma/vote-for-negative-karma-weighting/{karmaType}/{weighting}`

Route parameters:

| Field | Type |
| --- | --- |
| `karmaType` | `KarmaTypeNegative` |
| `weighting` | `int` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.karma.voteForNegativeKarmaWeighting({
    karmaType: '<karmaType>',
    weighting: '<weighting>'
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

### `voteForPositiveKarmaWeighting`

Allows people to vote what they feel should be the weighting for a given positive karma category.

**POST** `api/karma/vote-for-positive-karma-weighting/{karmaType}/{weighting}`

Route parameters:

| Field | Type |
| --- | --- |
| `karmaType` | `KarmaTypePositive` |
| `weighting` | `int` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.karma.voteForPositiveKarmaWeighting({
    karmaType: '<karmaType>',
    weighting: '<weighting>'
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

