# Settings — `oasis.settings`

Source controller: [`SettingsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SettingsController.cs)
Route prefix: `api/settings`
13 operation(s).

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

### `getAllSettingsForCurrentLoggedInAvatar`

Get all OASIS settings for the currently logged in avatar

**GET** `api/settings/get-all-settings-for-current-logged-in-avatar`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.settings.getAllSettingsForCurrentLoggedInAvatar({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `getHyperDriveSettings`

Get HyperDrive settings for the current avatar

**GET** `api/settings/hyperdrive-settings`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.settings.getHyperDriveSettings({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `getNotificationPreferences`

Get notification preferences

**GET** `api/settings/notification-preferences`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.settings.getNotificationPreferences({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `getPrivacySettings`

Get privacy settings

**GET** `api/settings/privacy-settings`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.settings.getPrivacySettings({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `getSubscriptionSettings`

Get subscription settings for the current avatar

**GET** `api/settings/subscription-settings`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.settings.getSubscriptionSettings({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `getSystemConfig`

Get system configuration

**GET** `api/settings/system-config`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.settings.getSystemConfig({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `getSystemSettings`

Get system settings for the current avatar

**GET** `api/settings/system-settings`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.settings.getSystemSettings({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `updateHyperDriveSettings`

Update HyperDrive settings

**PUT** `api/settings/hyperdrive-settings`

**Request**

Body type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.settings.updateHyperDriveSettings({
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

### `updateNotificationPreferences`

Update notification preferences

**PUT** `api/settings/notification-preferences`

**Request**

Body type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.settings.updateNotificationPreferences({
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

### `updatePrivacySettings`

Update privacy settings

**PUT** `api/settings/privacy-settings`

**Request**

Body type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.settings.updatePrivacySettings({
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

### `updateSettings`

Update avatar settings

**PUT** `api/settings/update-settings`

**Request**

Body type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatar`

| Field | Type |
| --- | --- |
| `ProviderWallets` | `Dictionary<ProviderType, List<IProviderWallet>>` |
| `ProviderPrivateKey` | `Dictionary<ProviderType, string>` |
| `ProviderPublicKey` | `Dictionary<ProviderType, List<string>>` |
| `ProviderUsername` | `Dictionary<ProviderType, string>` |
| `ProviderWalletAddress` | `Dictionary<ProviderType, List<string>>` |
| `AvatarId` | `Guid` |
| `Title` | `string` |
| `FirstName` | `string` |
| `LastName` | `string` |
| `FullName` | `string` |
| `FullNameWithTitle` | `string` |
| `Username` | `string` |
| `Email` | `string` |
| `Password` | `string` |
| `AvatarType` | `EnumValue<AvatarType>` |
| `AcceptTerms` | `bool` |
| `IsVerified` | `bool` |
| `JwtToken` | `string` |
| `PasswordReset` | `DateTime?` |
| `RefreshToken` | `string` |
| `RefreshTokens` | `List<RefreshToken>` |
| `ResetToken` | `string` |
| `ResetTokenExpires` | `DateTime?` |
| `VerificationToken` | `string` |
| `Verified` | `DateTime?` |
| `LastBeamedIn` | `DateTime?` |
| `LastBeamedOut` | `DateTime?` |
| `IsBeamedIn` | `bool` |
| `Image2D` | `string` |
| `Karma` | `int` |
| `Level` | `int` |
| `XP` | `int` |

**Example**

```js
const { isError, message, result } = await oasis.settings.updateSettings({
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
  "result": { "ProviderWallets": /* <Dictionary<ProviderType, List<IProviderWallet>>> */, "ProviderPrivateKey": /* <Dictionary<ProviderType, string>> */, "ProviderPublicKey": /* <Dictionary<ProviderType, List<string>>> */, "ProviderUsername": /* <Dictionary<ProviderType, string>> */, "ProviderWalletAddress": /* <Dictionary<ProviderType, List<string>>> */, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": /* <EnumValue<AvatarType>> */, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `updateSubscriptionSettings`

Update subscription settings

**PUT** `api/settings/subscription-settings`

**Request**

Body type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.settings.updateSubscriptionSettings({
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

### `updateSystemSettings`

Update system settings

**PUT** `api/settings/system-settings`

**Request**

Body type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.settings.updateSystemSettings({
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

