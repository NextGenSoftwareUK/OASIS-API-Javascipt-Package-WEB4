# Avatar — `oasis.avatar`

Source controller: [`AvatarController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/AvatarController.cs)
Route prefix: `api/avatar`
61 operation(s).

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

### `addItemToAvatarInventory`

Adds an item to the avatar's inventory. Quantity (default 1): amount to add; if item with same name exists and Stack is true, this is added to existing Quantity. Stack (default true): if true and item exists by name, increment Quantity; if false and item exists, returns error "Item already exists". Accepts InventoryItem with Name, Description, optional Quantity, optional Stack, and optional MetaData.

**POST** `api/avatar/inventory`

**Request**

Body type: `InventoryItem`

| Field | Type |
| --- | --- |
| `Image2D` | `byte[]` |
| `Image2DURI` | `Uri` |
| `ThumbnailUrl` | `string` |
| `Object3D` | `byte[]` |
| `Object3DURI` | `Uri` |
| `Quantity` | `int` |
| `Stack` | `bool` |
| `GameSource` | `string` |
| `ItemType` | `string` |
| `NftId` | `string` |
| `InventoryItemType` | `InventoryItemType` |
| `Rarity` | `string` |
| `MaxQuantity` | `int` |
| `Weight` | `float` |
| `IsUsable` | `bool` |
| `IsTradeable` | `bool` |
| `OwnerAvatarId` | `string` |
| `AcquiredOn` | `DateTime` |
| `LastUsedOn` | `DateTime` |
| `Properties` | `Dictionary<string, object>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IInventoryItem`

| Field | Type |
| --- | --- |
| `Image2D` | `byte[]` |
| `Image2DURI` | `Uri` |
| `ThumbnailUrl` | `string` |
| `Object3D` | `byte[]` |
| `Object3DURI` | `Uri` |
| `Quantity` | `int` |
| `Stack` | `bool` |
| `IsStackable` | `bool` |
| `GameSource` | `string` |
| `ItemType` | `string` |
| `NftId` | `string` |
| `Rarity` | `string` |
| `MaxQuantity` | `int` |
| `Weight` | `float` |
| `IsUsable` | `bool` |
| `IsTradeable` | `bool` |
| `OwnerAvatarId` | `string` |
| `AcquiredOn` | `DateTime` |
| `LastUsedOn` | `DateTime` |
| `Properties` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.addItemToAvatarInventory({
    image2D: "<base64-bytes>",
    image2DURI: "https://example.com/asset.png",
    thumbnailUrl: "example string",
    object3D: "<base64-bytes>",
    object3DURI: "https://example.com/asset.png",
    quantity: 1,
    stack: true,
    gameSource: "example string",
    itemType: "example string",
    nftId: "example string",
    inventoryItemType: {  },
    rarity: "example string",
    maxQuantity: 1,
    weight: 1.0,
    isUsable: true,
    isTradeable: true,
    ownerAvatarId: "example string",
    acquiredOn: "2026-01-01T00:00:00Z",
    lastUsedOn: "2026-01-01T00:00:00Z",
    properties: { "<string>": {} }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }
}
```

---

### `addKarmaToAvatar`

Add positive karma to the given avatar. karmaType = The type of positive karma, karmaSourceType = Where the karma was earnt (App, dApp, hApp, Website, Game, karamSourceTitle/karamSourceDesc = The name/desc of the app/website/game where the karma was earnt. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/add-karma-to-avatar/{avatarId}`

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
const { isError, message, result } = await oasis.avatar.addKarmaToAvatar({
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

### `addXp`

Add experience points to the logged-in avatar (e.g. from game actions like killing monsters). Only works for logged-in users. Amount 0 is allowed: returns current XP without changing it (used by clients to refresh XP cache after beam-in).

**POST** `api/avatar/add-xp`

**Request**

Body type: `AddXpRequest`

| Field | Type |
| --- | --- |
| `Amount` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `AddXpResponse`

| Field | Type |
| --- | --- |
| `NewTotal` | `int` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.addXp({
    amount: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "NewTotal": 1 }
}
```

---

### `authenticate`

Authenticate and log in using avatar credentials.

**POST** `api/avatar/authenticate`

**Request**

Body type: `AuthenticateRequest`

_No fields._

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
const { isError, message, result } = await oasis.avatar.authenticate({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `avatarHasItem`

Checks if the avatar has a specific item in their inventory.

**GET** `api/avatar/inventory/{itemId}/has`

Route parameters:

| Field | Type |
| --- | --- |
| `itemId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.avatarHasItem({
    itemId: '<itemId>'
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

### `avatarHasItemByName`

Checks if the avatar has a specific item by name in their inventory.

**GET** `api/avatar/inventory/has-by-name`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `itemName` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.avatarHasItemByName({
    itemName: 'example string'
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

### `create`

Allows a Wizard(Admin) to create new avatars including other wizards. Only works for logged in &amp; authenticated Wizards (Admins) or your own avatar. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/create/{model}`

Route parameters:

| Field | Type |
| --- | --- |
| `model` | `CreateRequest` |

**Request**

No request body.

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
const { isError, message, result } = await oasis.avatar.create({
    model: '<model>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `createAvatarSession`

Create a new session for an avatar (OASIS SSO System)

**POST** `api/avatar/{avatarId}/sessions`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

Body type: `CreateSessionRequest`

| Field | Type |
| --- | --- |
| `ServiceName` | `string` |
| `ServiceType` | `string` |
| `DeviceType` | `string` |
| `DeviceName` | `string` |
| `Location` | `string` |
| `IpAddress` | `string` |
| `UserAgent` | `string` |
| `Platform` | `string` |
| `Version` | `string` |
| `Metadata` | `string` |
| `ExpiresAt` | `DateTime?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `AvatarSession`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `AvatarId` | `Guid` |
| `ServiceName` | `string` |
| `ServiceType` | `string` |
| `DeviceType` | `string` |
| `DeviceName` | `string` |
| `Location` | `string` |
| `IpAddress` | `string` |
| `IsActive` | `bool` |
| `LastActivity` | `DateTime` |
| `LoginTime` | `DateTime` |
| `UserAgent` | `string` |
| `Platform` | `string` |
| `Version` | `string` |
| `CreatedAt` | `DateTime` |
| `UpdatedAt` | `DateTime` |
| `Metadata` | `string` |
| `SecurityToken` | `string` |
| `ExpiresAt` | `DateTime?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.createAvatarSession({
    avatarId: '<avatarId>',
    serviceName: "example string",
    serviceType: "example string",
    deviceType: "example string",
    deviceName: "example string",
    location: "example string",
    ipAddress: "example string",
    userAgent: "example string",
    platform: "example string",
    version: "example string",
    metadata: "example string",
    expiresAt: "2026-01-01T00:00:00Z"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ServiceName": "example string", "ServiceType": "example string", "DeviceType": "example string", "DeviceName": "example string", "Location": "example string", "IpAddress": "example string", "IsActive": true, "LastActivity": "2026-01-01T00:00:00Z", "LoginTime": "2026-01-01T00:00:00Z", "UserAgent": "example string", "Platform": "example string", "Version": "example string", "CreatedAt": "2026-01-01T00:00:00Z", "UpdatedAt": "2026-01-01T00:00:00Z", "Metadata": "example string", "SecurityToken": "example string", "ExpiresAt": "2026-01-01T00:00:00Z" }
}
```

---

### `delete`

Delete the given avatar using their id. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**DELETE** `api/avatar/{id:Guid}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.delete({
    id: '<id>'
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

### `deleteByEmail`

Delete the given avatar using their email. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**DELETE** `api/avatar/delete-by-email/{email}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.deleteByEmail({
    email: '<email>'
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

### `deleteByUsername`

Delete the given avatar using their username. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**DELETE** `api/avatar/delete-by-username/{username}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.deleteByUsername({
    username: '<username>'
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

### `forgotPassword`

This will send a password reset email allowing the user to reset their password. Call the avatar/validate-reset-token method passing in the reset token received in the email.

**POST** `api/avatar/forgot-password`

**Request**

Body type: `ForgotPasswordRequest`

| Field | Type |
| --- | --- |
| `Email` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.avatar.forgotPassword({
    email: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "example string"
}
```

---

### `getAll`

Get's all avatars within The OASIS. Only works for logged in &amp; authenticated Wizards (Admins). Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-all-avatars`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatar` (array)

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
const { isError, message, result } = await oasis.avatar.getAll({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }]
}
```

---

### `getAllAvatarDetails`

Get's all the avatar details within The OASIS. Only works for logged in &amp; authenticated Wizards (Admins). Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-all-avatar-details`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail` (array)

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAllAvatarDetails({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }]
}
```

---

### `getAllAvatarNames`

Get's a list of all of the avatar names within The OASIS. Only works for logged in &amp; authenticated users. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-all-avatar-names/{includeUsernames}/{includeIds}`

Route parameters:

| Field | Type |
| --- | --- |
| `includeUsernames` | `bool` |
| `includeIds` | `bool` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string` (array)

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAllAvatarNames({
    includeUsernames: '<includeUsernames>',
    includeIds: '<includeIds>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": ["example string"]
}
```

---

### `getAllAvatarNamesGroupedByName`

Get's a list of all of the avatar names within The OASIS along with their respective id's. Only works for logged in &amp; authenticated users. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-all-avatar-names-grouped-by-name/{includeUsernames}/{includeIds}`

Route parameters:

| Field | Type |
| --- | --- |
| `includeUsernames` | `bool` |
| `includeIds` | `bool` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, List<string>>` - a key/value map keyed by `string`, each value a `List<string>`.

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAllAvatarNamesGroupedByName({
    includeUsernames: '<includeUsernames>',
    includeIds: '<includeIds>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "<string>": ["example string"] }
}
```

---

### `getAvatarDetail`

Get's the avatar's details for a given id. Contains their address, DOB, Karma, XP, Level, Portrait (2D Image), 3DModel, HeartRateData, Chakras, Aurua, Gifts, Stats (HP, Mana, Energy &amp; Staminia), GeneKeys, HumanDesign, Skills, Attributes (Strength, Speed, Dexterity, Toughness, Wisdom, Intelligence, Magic, Vitality &amp; Endurance), SuperPowers, Spells, Achievements &amp; Inventory. They can also access the full Omniverse from inside their avatar. More to come soon... ;-) Only works for logged in &amp; authenticated Wizards (Admins) or your own avatar. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-avatar-detail-by-id/{id:guid}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail`

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAvatarDetail({
    id: '<id>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `getAvatarDetailByEmail`

Get's the avatar's details for a given email. Contains their address, DOB, Karma, XP, Level, Portrait (2D Image), 3DModel, HeartRateData, Chakras, Aurua, Gifts, Stats (HP, Mana, Energy &amp; Staminia), GeneKeys, HumanDesign, Skills, Attributes (Strength, Speed, Dexterity, Toughness, Wisdom, Intelligence, Magic, Vitality &amp; Endurance), SuperPowers, Spells, Achievements &amp; Inventory. They can also access the full Omniverse from inside their avatar. More to come soon... ;-) Only works for logged in &amp; authenticated Wizards (Admins) or your own avatar. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-avatar-detail-by-email/{email}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail`

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAvatarDetailByEmail({
    email: '<email>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `getAvatarDetailByUsername`

Get's the avatar's details for a given username. Contains their address, DOB, Karma, XP, Level, Portrait (2D Image), 3DModel, HeartRateData, Chakras, Aurua, Gifts, Stats (HP, Mana, Energy &amp; Staminia), GeneKeys, HumanDesign, Skills, Attributes (Strength, Speed, Dexterity, Toughness, Wisdom, Intelligence, Magic, Vitality &amp; Endurance), SuperPowers, Spells, Achievements &amp; Inventory. They can also access the full Omniverse from inside their avatar. More to come soon... ;-) Only works for logged in &amp; authenticated Wizards (Admins). Use Authenticate endpoint first to obtain JWT Token.

**GET** `api/avatar/get-avatar-detail-by-username/{username}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail`

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAvatarDetailByUsername({
    username: '<username>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `getAvatarInventory`

Gets all inventory items owned by the authenticated avatar. This is the avatar's actual inventory (items they own), not items they created. Inventory is shared across all games, apps, websites, and services.

**GET** `api/avatar/inventory`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IInventoryItem` (array)

| Field | Type |
| --- | --- |
| `Image2D` | `byte[]` |
| `Image2DURI` | `Uri` |
| `ThumbnailUrl` | `string` |
| `Object3D` | `byte[]` |
| `Object3DURI` | `Uri` |
| `Quantity` | `int` |
| `Stack` | `bool` |
| `IsStackable` | `bool` |
| `GameSource` | `string` |
| `ItemType` | `string` |
| `NftId` | `string` |
| `Rarity` | `string` |
| `MaxQuantity` | `int` |
| `Weight` | `float` |
| `IsUsable` | `bool` |
| `IsTradeable` | `bool` |
| `OwnerAvatarId` | `string` |
| `AcquiredOn` | `DateTime` |
| `LastUsedOn` | `DateTime` |
| `Properties` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAvatarInventory({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }]
}
```

---

### `getAvatarInventoryItem`

Gets a specific item from the avatar's inventory by ID.

**GET** `api/avatar/inventory/{itemId}`

Route parameters:

| Field | Type |
| --- | --- |
| `itemId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IInventoryItem`

| Field | Type |
| --- | --- |
| `Image2D` | `byte[]` |
| `Image2DURI` | `Uri` |
| `ThumbnailUrl` | `string` |
| `Object3D` | `byte[]` |
| `Object3DURI` | `Uri` |
| `Quantity` | `int` |
| `Stack` | `bool` |
| `IsStackable` | `bool` |
| `GameSource` | `string` |
| `ItemType` | `string` |
| `NftId` | `string` |
| `Rarity` | `string` |
| `MaxQuantity` | `int` |
| `Weight` | `float` |
| `IsUsable` | `bool` |
| `IsTradeable` | `bool` |
| `OwnerAvatarId` | `string` |
| `AcquiredOn` | `DateTime` |
| `LastUsedOn` | `DateTime` |
| `Properties` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAvatarInventoryItem({
    itemId: '<itemId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }
}
```

---

### `getAvatarPortraitByEmail`

Get's the avatar's portrait (2D Image) using their email.

**GET** `api/avatar/get-avatar-portrait-by-email/{email}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `AvatarPortrait`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `ImageBase64` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAvatarPortraitByEmail({
    email: '<email>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Username": "example string", "Email": "example string", "ImageBase64": "example string" }
}
```

---

### `getAvatarPortraitById`

Get's the avatar's portrait (2D Image) using their id. Pass in the provider you wish to use. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-avatar-portrait/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `AvatarPortrait`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `ImageBase64` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAvatarPortraitById({
    id: '<id>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Username": "example string", "Email": "example string", "ImageBase64": "example string" }
}
```

---

### `getAvatarPortraitByUsername`

Get's the avatar's portrait (2D Image) using their username. Only works for logged in users. Use Authenticate endpoint first to obtain JWT Token.

**GET** `api/avatar/get-avatar-portrait-by-username/{username}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `AvatarPortrait`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `ImageBase64` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAvatarPortraitByUsername({
    username: '<username>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Username": "example string", "Email": "example string", "ImageBase64": "example string" }
}
```

---

### `getAvatarSessionStats`

Get session statistics for an avatar (OASIS SSO System)

**GET** `api/avatar/{avatarId}/sessions/stats`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `AvatarSessionStats`

| Field | Type |
| --- | --- |
| `TotalSessionsCreated` | `int` |
| `ActiveSessions` | `int` |
| `SessionsLast24Hours` | `int` |
| `SessionsLast7Days` | `int` |
| `SessionsLast30Days` | `int` |
| `AverageSessionDurationMinutes` | `double` |
| `LongestSessionDurationMinutes` | `double` |
| `MostUsedDeviceType` | `string` |
| `MostUsedServiceType` | `string` |
| `MostCommonLocation` | `string` |
| `LastSessionTime` | `DateTime?` |
| `SecurityIncidents` | `int` |
| `UniqueDevicesUsed` | `int` |
| `UniqueLocationsUsed` | `int` |
| `TrustScore` | `int` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAvatarSessionStats({
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
  "result": { "TotalSessionsCreated": 1, "ActiveSessions": 1, "SessionsLast24Hours": 1, "SessionsLast7Days": 1, "SessionsLast30Days": 1, "AverageSessionDurationMinutes": 1.0, "LongestSessionDurationMinutes": 1.0, "MostUsedDeviceType": "example string", "MostUsedServiceType": "example string", "MostCommonLocation": "example string", "LastSessionTime": "2026-01-01T00:00:00Z", "SecurityIncidents": 1, "UniqueDevicesUsed": 1, "UniqueLocationsUsed": 1, "TrustScore": 1 }
}
```

---

### `getAvatarSessions`

Get all active sessions for a specific avatar (OASIS SSO System)

**GET** `api/avatar/{avatarId}/sessions`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `AvatarSessionManagement`

| Field | Type |
| --- | --- |
| `TotalSessions` | `int` |
| `ActiveSessions` | `int` |
| `Sessions` | `List<AvatarSession>` |
| `CurrentLocation` | `string` |
| `LastLogin` | `DateTime?` |
| `SecurityStatus` | `string` |
| `FailedLoginAttempts` | `int` |
| `TwoFactorEnabled` | `bool` |
| `SessionTimeoutMinutes` | `int` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getAvatarSessions({
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
  "result": { "TotalSessions": 1, "ActiveSessions": 1, "Sessions": [{ "Id": "example string", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ServiceName": "example string", "ServiceType": "example string", "DeviceType": "example string", "DeviceName": "example string", "Location": "example string", "IpAddress": "example string", "IsActive": true, "LastActivity": "2026-01-01T00:00:00Z", "LoginTime": "2026-01-01T00:00:00Z", "UserAgent": "example string", "Platform": "example string", "Version": "example string", "CreatedAt": "2026-01-01T00:00:00Z", "UpdatedAt": "2026-01-01T00:00:00Z", "Metadata": "example string", "SecurityToken": "example string", "ExpiresAt": "2026-01-01T00:00:00Z" }], "CurrentLocation": "example string", "LastLogin": "2026-01-01T00:00:00Z", "SecurityStatus": "example string", "FailedLoginAttempts": 1, "TwoFactorEnabled": true, "SessionTimeoutMinutes": 1 }
}
```

---

### `getByEmail`

Get's the avatar for the given email. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-by-email/{email}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

No request body.

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
const { isError, message, result } = await oasis.avatar.getByEmail({
    email: '<email>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `getById`

Get's the avatar for the given id. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-by-id/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

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
const { isError, message, result } = await oasis.avatar.getById({
    id: '<id>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `getByUsername`

Get's the avatar for the given username. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-by-username/{username}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

No request body.

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
const { isError, message, result } = await oasis.avatar.getByUsername({
    username: '<username>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `getLoggedInAvatar`

Get's the logged in avatar. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-logged-in-avatar`

**Request**

No request body.

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
const { isError, message, result } = await oasis.avatar.getLoggedInAvatar({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `getLoggedInAvatarWithXp`

Gets the logged-in avatar with XP (AvatarDetail). Used by STAR API GET /api/avatar/current so clients can refresh XP after beam-in.

**GET** `api/avatar/get-logged-in-avatar-with-xp`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `LoggedInAvatarResponse`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `FirstName` | `string` |
| `LastName` | `string` |
| `XP` | `int` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.getLoggedInAvatarWithXp({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Username": "example string", "Email": "example string", "FirstName": "example string", "LastName": "example string", "XP": 1, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `getTerms`

Get's the terms &amp; services agreement for creating an avatar and joining the OASIS.

**GET** `api/avatar/get-terms`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.avatar.getTerms({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "example string"
}
```

---

### `getUmaJsonByEmail`

Get's the 3D Model UMA JSON for a given avatar using their email. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-uma-json-by-email/{email}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.avatar.getUmaJsonByEmail({
    email: '<email>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "example string"
}
```

---

### `getUmaJsonById`

Get's the 3D Model UMA JSON for a given avatar using their id. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-uma-json-by-id/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.avatar.getUmaJsonById({
    id: '<id>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "example string"
}
```

---

### `getUmaJsonByUsername`

Get's the 3D Model UMA JSON for a given avatar using their username. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**GET** `api/avatar/get-uma-json-by-username/{username}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.avatar.getUmaJsonByUsername({
    username: '<username>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "example string"
}
```

---

### `linkEOSIOAccountToAvatar`

Link's a given eosioAccountName to the given avatar.

**POST** `api/avatar/{avatarId}/{eosioAccountName}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `eosioAccountName` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail`

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.linkEOSIOAccountToAvatar({
    avatarId: '<avatarId>',
    eosioAccountName: '<eosioAccountName>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `linkHolochainAgentIDToAvatar`

Link's a given holochain AgentID to the given avatar.

**POST** `api/avatar/{avatarId}/{holochainAgentID}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `holochainAgentID` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail`

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.linkHolochainAgentIDToAvatar({
    avatarId: '<avatarId>',
    holochainAgentID: '<holochainAgentID>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `linkTelosAccountToAvatar`

Link's a given telosAccount to the given avatar.

**POST** `api/avatar/{id:Guid}/{telosAccountName}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |
| `telosAccountName` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail`

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.linkTelosAccountToAvatar({
    id: '<id>',
    telosAccountName: '<telosAccountName>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `linkTelosAccountToAvatar2`

Link's a given telosAccount to the given avatar.

**POST** `api/avatar`

**Request**

Body type: `LinkProviderKeyToAvatar` _(type definition not found in the OASIS source - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail`

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.linkTelosAccountToAvatar2({
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
  "result": { "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `logoutAllAvatarSessions`

Logout avatar from all sessions (OASIS SSO System)

**POST** `api/avatar/{avatarId}/sessions/logout-all`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.logoutAllAvatarSessions({
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
  "result": true
}
```

---

### `logoutAvatarSessions`

Logout avatar from specific sessions (OASIS SSO System)

**POST** `api/avatar/{avatarId}/sessions/logout`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

Body type: `string` (array)

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.logoutAvatarSessions({
    avatarId: '<avatarId>',
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

### `register`

Register a new avatar with the OASIS system.

**POST** `api/avatar/register`

**Request**

Body type: `RegisterRequest`

| Field | Type |
| --- | --- |
| `Title` | `string` |
| `FirstName` | `string` |
| `LastName` | `string` |
| `Email` | `string` |
| `Password` | `string` |
| `ConfirmPassword` | `string` |
| `AcceptTerms` | `bool` |

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
const { isError, message, result } = await oasis.avatar.register({
    title: "example string",
    firstName: "example string",
    lastName: "example string",
    email: "example string",
    password: "example string",
    confirmPassword: "example string",
    acceptTerms: true
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `removeItemFromAvatarInventory`

Decrements an item's quantity in the avatar's inventory. quantity must be 1 or greater. The item is removed only when its quantity reaches 0 after the decrement.

**DELETE** `api/avatar/inventory/{itemId}`

Route parameters:

| Field | Type |
| --- | --- |
| `itemId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `quantity` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.removeItemFromAvatarInventory({
    itemId: '<itemId>',
    quantity: 1
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

Remove karma from the given avatar. karmaType = The type of negative karma, karmaSourceType = Where the karma was lost (App, dApp, hApp, Website, Game, karamSourceTitle/karamSourceDesc = The name/desc of the app/website/game where the karma was lost. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/remove-karma-from-avatar/{avatarId}`

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
const { isError, message, result } = await oasis.avatar.removeKarmaFromAvatar({
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

### `resetPassword`

Call this method passing in the reset token received in the forgotten password email after first calling the avatar/forgot-password method.

**POST** `api/avatar/reset-password`

**Request**

Body type: `ResetPasswordRequest`

| Field | Type |
| --- | --- |
| `Token` | `string` |
| `OldPassword` | `string` |
| `NewPassword` | `string` |
| `ConfirmNewPassword` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.avatar.resetPassword({
    token: "example string",
    oldPassword: "example string",
    newPassword: "example string",
    confirmNewPassword: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "example string"
}
```

---

### `revokeToken`

Revoke a given JWT Token (for example, if a user logs out). Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/revoke-token`

**Request**

Body type: `RevokeTokenRequest`

| Field | Type |
| --- | --- |
| `Token` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.avatar.revokeToken({
    token: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "example string"
}
```

---

### `searchAvatar`

Search avatars for the given search term. Coming soon...

**POST** `api/avatar/search`

**Request**

Body type: `SearchParams`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `ParentId` | `Guid` |
| `FilterByMetaData` | `Dictionary<string, string>` |
| `MetaKeyValuePairMatchMode` | `MetaKeyValuePairMatchMode` |
| `Recursive` | `bool` |
| `SearchOnlyForCurrentAvatar` | `bool` |
| `SearchGroups` | `List<ISearchGroupBase>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ISearchResults`

| Field | Type |
| --- | --- |
| `NumberOfResults` | `int` |
| `NumberOfDuplicates` | `int` |
| `SearchResultAvatars` | `List<IAvatar>` |
| `SearchResultHolons` | `List<IHolon>` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.searchAvatar({
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    parentId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    filterByMetaData: { "<string>": "example string" },
    metaKeyValuePairMatchMode: {  },
    recursive: true,
    searchOnlyForCurrentAvatar: true,
    searchGroups: [{ "HolonType": {  }, "SearchOnlyForCurrentAvatar": true, "PreviousSearchGroupOperator": {  }, "SearchAvatars": true, "SearchHolons": true, "AvatarSearchParams": { "SearchAvatarWalletParams": { "WalletId": true, "PublicKey": true, "WalletAddress": true, "ProviderType": true, "Balance": true, "IsDefaultWallet": true, "SearchAvatarWalletTransactionParams": { "Amount": true, "FromWalletAddress": true, "ToWalletAddress": true, "Token": true, "MemoText": true, "ProviderType": true } }, "ProviderUsername": true, "AvatarId": true, "Title": true, "FirstName": true, "LastName": true, "Username": true, "Email": true, "AvatarType": true, "AcceptTerms": true, "IsVerified": true, "VerifiedDate": true, "LastBeamedIn": true, "LastBeamedOut": true, "IsBeamedIn": true, "ProviderUniqueStorageKey": true, "ProviderMetaData": true, "MetaData": true, "Version": true, "VersionId": true, "PreviousVersionId": true, "PreviousVersionProviderUniqueStorageKey": true, "IsActive": true, "CreatedByAvatarId": true, "CreatedDate": true, "ModifiedByAvatarId": true, "ModifiedDate": true, "DeletedByAvatarId": true, "DeletedDate": true, "CreatedProviderType": true, "CreatedOASISType": true, "SearchFirstName": true, "SearchLastName": true, "SearchUsername": true, "SearchAddress": true, "SearchCreatedDate": true, "SearchCreatedBy": true, "SearchModifedBy": true, "SearchModifedDate": true, "SearchDeletedBy": true, "SearchDeletedDate": true }, "HolonSearchParams": { "Children": true, "Nodes": true, "HolonType": true, "Name": true, "Description": true, "ProviderUniqueStorageKey": true, "ProviderMetaData": true, "MetaData": true, "MetaDataKey": "example string", "Version": true, "VersionId": true, "PreviousVersionId": true, "PreviousVersionProviderUniqueStorageKey": true, "IsActive": true, "CreatedByAvatarId": true, "CreatedDate": true, "ModifiedByAvatarId": true, "ModifiedDate": true, "DeletedByAvatarId": true, "DeletedDate": true, "CreatedProviderType": true, "CreatedOASISType": true } }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "NumberOfResults": 1, "NumberOfDuplicates": 1, "SearchResultAvatars": [{ "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }], "SearchResultHolons": [{ "CreatedOASISType": { "Score": 1.0 }, "CreatedProviderType": { "Score": 1.0 }, "GlobalHolonData": {  }, "InstanceSavedOnProviderType": {}, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": {}, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [{ "HoloNETClient": { "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": {  } }, "ZomeName": "example string", "Holons": [{ "GlobalHolonData": {}, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "CreatedProviderType": {}, "InstanceSavedOnProviderType": {}, "CreatedOASISType": {}, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }] }] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }] }
}
```

---

### `searchAvatarInventory`

Searches the avatar's inventory by name or description.

**GET** `api/avatar/inventory/search`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `searchTerm` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IInventoryItem` (array)

| Field | Type |
| --- | --- |
| `Image2D` | `byte[]` |
| `Image2DURI` | `Uri` |
| `ThumbnailUrl` | `string` |
| `Object3D` | `byte[]` |
| `Object3DURI` | `Uri` |
| `Quantity` | `int` |
| `Stack` | `bool` |
| `IsStackable` | `bool` |
| `GameSource` | `string` |
| `ItemType` | `string` |
| `NftId` | `string` |
| `Rarity` | `string` |
| `MaxQuantity` | `int` |
| `Weight` | `float` |
| `IsUsable` | `bool` |
| `IsTradeable` | `bool` |
| `OwnerAvatarId` | `string` |
| `AcquiredOn` | `DateTime` |
| `LastUsedOn` | `DateTime` |
| `Properties` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.searchAvatarInventory({
    searchTerm: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }]
}
```

---

### `sendItemToAvatar`

Sends an item from the authenticated avatar's inventory to another avatar. Target is the recipient's username or avatar Id. Works for all items (STAR and local).

**POST** `api/avatar/inventory/send-to-avatar`

**Request**

Body type: `SendItemRequest`

| Field | Type |
| --- | --- |
| `Target` | `string` |
| `ItemName` | `string` |
| `ItemId` | `Guid?` |
| `Quantity` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.sendItemToAvatar({
    target: "example string",
    itemName: "example string",
    itemId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    quantity: 1
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

### `sendItemToClan`

Sends an item from the authenticated avatar's inventory to a clan. Target is the clan name (or username when clan resolution is not yet implemented). Works for all items (STAR and local).

**POST** `api/avatar/inventory/send-to-clan`

**Request**

Body type: `SendItemRequest`

| Field | Type |
| --- | --- |
| `Target` | `string` |
| `ItemName` | `string` |
| `ItemId` | `Guid?` |
| `Quantity` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.sendItemToClan({
    target: "example string",
    itemName: "example string",
    itemId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    quantity: 1
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

### `setActiveQuest`

Sets the active quest and objective for the logged-in avatar (tracker state). Persisted on AvatarDetail so they are restored after beam-in.

**POST** `api/avatar/set-active-quest`

**Request**

Body type: `SetActiveQuestRequest`

| Field | Type |
| --- | --- |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.setActiveQuest({
    activeQuestId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    activeObjectiveId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
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

### `update`

Update the given avatar using their id. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/update-by-id/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `UpdateRequest`

| Field | Type |
| --- | --- |
| `Title` | `string` |
| `FirstName` | `string` |
| `LastName` | `string` |
| `Username` | `string` |

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
const { isError, message, result } = await oasis.avatar.update({
    id: '<id>',
    title: "example string",
    firstName: "example string",
    lastName: "example string",
    username: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `updateAvatarDetail`

Update the given avatar detail with their avatar id. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/update-avatar-detail-by-id/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `AvatarDetail`

| Field | Type |
| --- | --- |
| `Username` | `string` |
| `Email` | `string` |
| `AvatarType` | `EnumValue<AvatarType>` |
| `Password` | `string` |
| `Title` | `string` |
| `FirstName` | `string` |
| `LastName` | `string` |
| `FavouriteColour` | `ConsoleColor` |
| `STARCLIColour` | `ConsoleColor` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Mobile` | `string` |
| `Landline` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `Model3D` | `string` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `CreatedOASISType` | `EnumValue<OASISType>` |
| `Karma` | `int` |
| `XP` | `int` |
| `Omniverse` | `IOmiverse` |
| `Gifts` | `IList<IAvatarGift>` |
| `Chakras` | `List<Chakra>` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `Aura` | `IAvatarAura` |
| `Stats` | `IAvatarStats` |
| `GeneKeys` | `IList<IGeneKey>` |
| `HumanDesign` | `IHumanDesign` |
| `Skills` | `IAvatarSkills` |
| `Attributes` | `IAvatarAttributes` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `Spells` | `IList<ISpell>` |
| `Achievements` | `IList<IAchievement>` |
| `Inventory` | `IList<IInventoryItem>` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail`

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.updateAvatarDetail({
    id: '<id>',
    username: "example string",
    email: "example string",
    avatarType: { "Score": 1.0 },
    password: "example string",
    title: "example string",
    firstName: "example string",
    lastName: "example string",
    favouriteColour: /* <ConsoleColor> */,
    sTARCLIColour: /* <ConsoleColor> */,
    dOB: "2026-01-01T00:00:00Z",
    address: "example string",
    town: "example string",
    county: "example string",
    country: "example string",
    postcode: "example string",
    mobile: "example string",
    landline: "example string",
    umaJson: "example string",
    portrait: "example string",
    model3D: "example string",
    heartRateData: [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }],
    createdOASISType: { "Score": 1.0 },
    karma: 1,
    xP: 1,
    omniverse: { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] },
    gifts: [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {  }, "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }],
    chakras: [{ "Name": "example string", "SanskritName": "example string", "Description": "example string", "WhatItControls": "example string", "YogaPose": { "Score": 1.0 }, "WhenItDevelops": "example string", "Element": { "Score": 1.0 }, "Crystal": { "Name": { "Score": 1.0 }, "Type": { "Score": 1.0 }, "Description": "example string", "ProtectionLevel": 1, "EnergisingLevel": 1, "GroundingLevel": 1, "CleansingLevel": 1, "AmplifyicationLevel": 1 }, "Color": { "Default": /* <static Color> */, "R": 1, "G": 1, "B": 1, "Number": /* <internal byte> */, "IsDefault": /* <internal bool> */ }, "Level": 1, "Progress": 1, "XP": 1, "Type": { "Score": 1.0 }, "GiftsUnlocked": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftType": {  }, "GiftEarnt": "2026-01-01T00:00:00Z", "KarmaSourceTitle": "example string", "KarmaSourceDesc": "example string", "WebLink": "example string", "KarmaSource": { "Score": 1.0 }, "Provider": { "Score": 1.0 } }] }],
    dimensionLevelIds: /* <IDictionary<DimensionLevel, Guid>> */,
    dimensionLevels: /* <IDictionary<DimensionLevel, IHolon>> */,
    aura: { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 },
    stats: { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} },
    geneKeys: [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }],
    humanDesign: { "Type": "example string" },
    skills: { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 },
    attributes: { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 },
    superPowers: { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 },
    spells: [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }],
    achievements: [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }],
    inventory: [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }],
    activeQuestId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    activeObjectiveId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    karmaAkashicRecords: [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": { "Score": 1.0 }, "TotalKarma": 1, "WebLink": "example string" }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `updateAvatarDetailByEmail`

Update the given avatar detail with their avatar email address. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/update-avatar-detail-by-email/{email}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

Body type: `AvatarDetail`

| Field | Type |
| --- | --- |
| `Username` | `string` |
| `Email` | `string` |
| `AvatarType` | `EnumValue<AvatarType>` |
| `Password` | `string` |
| `Title` | `string` |
| `FirstName` | `string` |
| `LastName` | `string` |
| `FavouriteColour` | `ConsoleColor` |
| `STARCLIColour` | `ConsoleColor` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Mobile` | `string` |
| `Landline` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `Model3D` | `string` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `CreatedOASISType` | `EnumValue<OASISType>` |
| `Karma` | `int` |
| `XP` | `int` |
| `Omniverse` | `IOmiverse` |
| `Gifts` | `IList<IAvatarGift>` |
| `Chakras` | `List<Chakra>` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `Aura` | `IAvatarAura` |
| `Stats` | `IAvatarStats` |
| `GeneKeys` | `IList<IGeneKey>` |
| `HumanDesign` | `IHumanDesign` |
| `Skills` | `IAvatarSkills` |
| `Attributes` | `IAvatarAttributes` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `Spells` | `IList<ISpell>` |
| `Achievements` | `IList<IAchievement>` |
| `Inventory` | `IList<IInventoryItem>` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail`

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.updateAvatarDetailByEmail({
    email: "example string",
    username: "example string",
    avatarType: { "Score": 1.0 },
    password: "example string",
    title: "example string",
    firstName: "example string",
    lastName: "example string",
    favouriteColour: /* <ConsoleColor> */,
    sTARCLIColour: /* <ConsoleColor> */,
    dOB: "2026-01-01T00:00:00Z",
    address: "example string",
    town: "example string",
    county: "example string",
    country: "example string",
    postcode: "example string",
    mobile: "example string",
    landline: "example string",
    umaJson: "example string",
    portrait: "example string",
    model3D: "example string",
    heartRateData: [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }],
    createdOASISType: { "Score": 1.0 },
    karma: 1,
    xP: 1,
    omniverse: { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] },
    gifts: [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {  }, "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }],
    chakras: [{ "Name": "example string", "SanskritName": "example string", "Description": "example string", "WhatItControls": "example string", "YogaPose": { "Score": 1.0 }, "WhenItDevelops": "example string", "Element": { "Score": 1.0 }, "Crystal": { "Name": { "Score": 1.0 }, "Type": { "Score": 1.0 }, "Description": "example string", "ProtectionLevel": 1, "EnergisingLevel": 1, "GroundingLevel": 1, "CleansingLevel": 1, "AmplifyicationLevel": 1 }, "Color": { "Default": /* <static Color> */, "R": 1, "G": 1, "B": 1, "Number": /* <internal byte> */, "IsDefault": /* <internal bool> */ }, "Level": 1, "Progress": 1, "XP": 1, "Type": { "Score": 1.0 }, "GiftsUnlocked": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftType": {  }, "GiftEarnt": "2026-01-01T00:00:00Z", "KarmaSourceTitle": "example string", "KarmaSourceDesc": "example string", "WebLink": "example string", "KarmaSource": { "Score": 1.0 }, "Provider": { "Score": 1.0 } }] }],
    dimensionLevelIds: /* <IDictionary<DimensionLevel, Guid>> */,
    dimensionLevels: /* <IDictionary<DimensionLevel, IHolon>> */,
    aura: { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 },
    stats: { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} },
    geneKeys: [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }],
    humanDesign: { "Type": "example string" },
    skills: { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 },
    attributes: { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 },
    superPowers: { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 },
    spells: [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }],
    achievements: [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }],
    inventory: [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }],
    activeQuestId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    activeObjectiveId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    karmaAkashicRecords: [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": { "Score": 1.0 }, "TotalKarma": 1, "WebLink": "example string" }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `updateAvatarDetailByUsername`

Update the given avatar detail with their avatar username. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/update-avatar-detail-by-username/{username}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

Body type: `AvatarDetail`

| Field | Type |
| --- | --- |
| `Username` | `string` |
| `Email` | `string` |
| `AvatarType` | `EnumValue<AvatarType>` |
| `Password` | `string` |
| `Title` | `string` |
| `FirstName` | `string` |
| `LastName` | `string` |
| `FavouriteColour` | `ConsoleColor` |
| `STARCLIColour` | `ConsoleColor` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Mobile` | `string` |
| `Landline` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `Model3D` | `string` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `CreatedOASISType` | `EnumValue<OASISType>` |
| `Karma` | `int` |
| `XP` | `int` |
| `Omniverse` | `IOmiverse` |
| `Gifts` | `IList<IAvatarGift>` |
| `Chakras` | `List<Chakra>` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `Aura` | `IAvatarAura` |
| `Stats` | `IAvatarStats` |
| `GeneKeys` | `IList<IGeneKey>` |
| `HumanDesign` | `IHumanDesign` |
| `Skills` | `IAvatarSkills` |
| `Attributes` | `IAvatarAttributes` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `Spells` | `IList<ISpell>` |
| `Achievements` | `IList<IAchievement>` |
| `Inventory` | `IList<IInventoryItem>` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IAvatarDetail`

| Field | Type |
| --- | --- |
| `Id` | `new Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `Karma` | `long` |
| `Level` | `int` |
| `XP` | `int` |
| `Model3D` | `string` |
| `UmaJson` | `string` |
| `Portrait` | `string` |
| `DOB` | `DateTime` |
| `Address` | `string` |
| `Town` | `string` |
| `County` | `string` |
| `Country` | `string` |
| `Postcode` | `string` |
| `Landline` | `string` |
| `Mobile` | `string` |
| `Achievements` | `IList<IAchievement>` |
| `Attributes` | `IAvatarAttributes` |
| `Aura` | `IAvatarAura` |
| `Chakras` | `IAvatarChakras` |
| `DimensionLevelIds` | `IDictionary<DimensionLevel, Guid>` |
| `DimensionLevels` | `IDictionary<DimensionLevel, IHolon>` |
| `FavouriteColour` | `ConsoleColor` |
| `GeneKeys` | `IList<IGeneKey>` |
| `Gifts` | `IList<IAvatarGift>` |
| `HeartRateData` | `IList<IHeartRateEntry>` |
| `HumanDesign` | `IHumanDesign` |
| `Inventory` | `IList<IInventoryItem>` |
| `KarmaAkashicRecords` | `IList<IKarmaAkashicRecord>` |
| `Omniverse` | `IOmiverse` |
| `Skills` | `IAvatarSkills` |
| `Spells` | `IList<ISpell>` |
| `STARCLIColour` | `ConsoleColor` |
| `Stats` | `IAvatarStats` |
| `SuperPowers` | `IAvatarSuperPowers` |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.updateAvatarDetailByUsername({
    username: "example string",
    email: "example string",
    avatarType: { "Score": 1.0 },
    password: "example string",
    title: "example string",
    firstName: "example string",
    lastName: "example string",
    favouriteColour: /* <ConsoleColor> */,
    sTARCLIColour: /* <ConsoleColor> */,
    dOB: "2026-01-01T00:00:00Z",
    address: "example string",
    town: "example string",
    county: "example string",
    country: "example string",
    postcode: "example string",
    mobile: "example string",
    landline: "example string",
    umaJson: "example string",
    portrait: "example string",
    model3D: "example string",
    heartRateData: [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }],
    createdOASISType: { "Score": 1.0 },
    karma: 1,
    xP: 1,
    omniverse: { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] },
    gifts: [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {  }, "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }],
    chakras: [{ "Name": "example string", "SanskritName": "example string", "Description": "example string", "WhatItControls": "example string", "YogaPose": { "Score": 1.0 }, "WhenItDevelops": "example string", "Element": { "Score": 1.0 }, "Crystal": { "Name": { "Score": 1.0 }, "Type": { "Score": 1.0 }, "Description": "example string", "ProtectionLevel": 1, "EnergisingLevel": 1, "GroundingLevel": 1, "CleansingLevel": 1, "AmplifyicationLevel": 1 }, "Color": { "Default": /* <static Color> */, "R": 1, "G": 1, "B": 1, "Number": /* <internal byte> */, "IsDefault": /* <internal bool> */ }, "Level": 1, "Progress": 1, "XP": 1, "Type": { "Score": 1.0 }, "GiftsUnlocked": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftType": {  }, "GiftEarnt": "2026-01-01T00:00:00Z", "KarmaSourceTitle": "example string", "KarmaSourceDesc": "example string", "WebLink": "example string", "KarmaSource": { "Score": 1.0 }, "Provider": { "Score": 1.0 } }] }],
    dimensionLevelIds: /* <IDictionary<DimensionLevel, Guid>> */,
    dimensionLevels: /* <IDictionary<DimensionLevel, IHolon>> */,
    aura: { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 },
    stats: { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} },
    geneKeys: [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }],
    humanDesign: { "Type": "example string" },
    skills: { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 },
    attributes: { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 },
    superPowers: { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 },
    spells: [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }],
    achievements: [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }],
    inventory: [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }],
    activeQuestId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    activeObjectiveId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    karmaAkashicRecords: [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": { "Score": 1.0 }, "TotalKarma": 1, "WebLink": "example string" }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <new Guid> */, "Username": "example string", "Email": "example string", "Karma": 1, "Level": 1, "XP": 1, "Model3D": "example string", "UmaJson": "example string", "Portrait": "example string", "DOB": "2026-01-01T00:00:00Z", "Address": "example string", "Town": "example string", "County": "example string", "Country": "example string", "Postcode": "example string", "Landline": "example string", "Mobile": "example string", "Achievements": [{ "AchievementEarnt": "2026-01-01T00:00:00Z", "AchievementType": {  }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Description": "example string", "KarmaSource": { "Score": 1.0 }, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Name": "example string", "Provider": { "Score": 1.0 }, "WebLink": "example string" }], "Attributes": { "Dexterity": 1, "Intelligence": 1, "Magic": 1, "Speed": 1, "Strength": 1, "Toughness": 1, "Wisdom": 1, "Vitality": 1, "Endurance": 1 }, "Aura": { "Progress": 1, "Brightness": 1, "Size": 1, "ColourBlue": 1, "ColourGreen": 1, "ColourRed": 1, "Level": 1, "Value": 1 }, "Chakras": { "Crown": {  }, "Heart": {  }, "Root": {  }, "Sacral": {  }, "SolarPlexus": {  }, "ThirdEye": {  }, "Throat": {  } }, "DimensionLevelIds": /* <IDictionary<DimensionLevel, Guid>> */, "DimensionLevels": /* <IDictionary<DimensionLevel, IHolon>> */, "FavouriteColour": /* <ConsoleColor> */, "GeneKeys": [{ "Description": "example string", "Gift": "example string", "Name": "example string", "Shadow": "example string", "Sidhi": "example string" }], "Gifts": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GiftEarnt": "2026-01-01T00:00:00Z", "GiftType": {}, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "Provider": {}, "WebLink": "example string" }], "HeartRateData": [{ "HeartRateValue": 1, "TimeStamp": "2026-01-01T00:00:00Z" }], "HumanDesign": { "Type": "example string" }, "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "KarmaAkashicRecords": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Date": "2026-01-01T00:00:00Z", "Karma": 1, "KarmaEarntOrLost": { "Score": 1.0 }, "KarmaSource": {}, "KarmaSourceDesc": "example string", "KarmaSourceTitle": "example string", "KarmaTypeNegative": { "Score": 1.0 }, "KarmaTypePositive": { "Score": 1.0 }, "Provider": {}, "TotalKarma": 1, "WebLink": "example string" }], "Omniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "Skills": { "Computers": 1, "Engineering": 1, "Farming": 1, "FireStarting": 1, "Fishing": 1, "Languages": 1, "Meditation": 1, "MeleeCombat": 1, "Mindfulness": 1, "Negotiating": 1, "RangedCombat": 1, "Research": 1, "Science": 1, "SpellCasting": 1, "Translating": 1, "Yoga": 1 }, "Spells": [{ "Description": "example string", "FireDamage": 1, "HealingPower": 1, "IceDamage": 1, "LightningDamage": 1, "Name": "example string", "PoisonDamage": 1, "WaterDamage": 1, "WindDamage": 1 }], "STARCLIColour": /* <ConsoleColor> */, "Stats": { "Energy": { "Current": 1, "Max": 1 }, "HP": {}, "Mana": {}, "Stamina": {} }, "SuperPowers": { "AstralProjection": 1, "BioLocatation": 1, "Flight": 1, "FreezeBreath": 1, "HeatVision": 1, "Invulnerability": 1, "RemoteViewing": 1, "SuperSpeed": 1, "SuperStrength": 1, "Telekinesis": 1, "Telepathy": 1, "Teleportation": 1, "XRayVision": 1 }, "ActiveQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ActiveObjectiveId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `updateAvatarSession`

Update an existing session (OASIS SSO System)

**PUT** `api/avatar/{avatarId}/sessions/{sessionId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `sessionId` | `string` |

**Request**

Body type: `UpdateSessionRequest`

| Field | Type |
| --- | --- |
| `IsActive` | `bool?` |
| `LastActivity` | `DateTime?` |
| `Location` | `string` |
| `IpAddress` | `string` |
| `UserAgent` | `string` |
| `Platform` | `string` |
| `Version` | `string` |
| `Metadata` | `string` |
| `ExpiresAt` | `DateTime?` |
| `SecurityToken` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `AvatarSession`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `AvatarId` | `Guid` |
| `ServiceName` | `string` |
| `ServiceType` | `string` |
| `DeviceType` | `string` |
| `DeviceName` | `string` |
| `Location` | `string` |
| `IpAddress` | `string` |
| `IsActive` | `bool` |
| `LastActivity` | `DateTime` |
| `LoginTime` | `DateTime` |
| `UserAgent` | `string` |
| `Platform` | `string` |
| `Version` | `string` |
| `CreatedAt` | `DateTime` |
| `UpdatedAt` | `DateTime` |
| `Metadata` | `string` |
| `SecurityToken` | `string` |
| `ExpiresAt` | `DateTime?` |

**Example**

```js
const { isError, message, result } = await oasis.avatar.updateAvatarSession({
    avatarId: '<avatarId>',
    sessionId: '<sessionId>',
    isActive: true,
    lastActivity: "2026-01-01T00:00:00Z",
    location: "example string",
    ipAddress: "example string",
    userAgent: "example string",
    platform: "example string",
    version: "example string",
    metadata: "example string",
    expiresAt: "2026-01-01T00:00:00Z",
    securityToken: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ServiceName": "example string", "ServiceType": "example string", "DeviceType": "example string", "DeviceName": "example string", "Location": "example string", "IpAddress": "example string", "IsActive": true, "LastActivity": "2026-01-01T00:00:00Z", "LoginTime": "2026-01-01T00:00:00Z", "UserAgent": "example string", "Platform": "example string", "Version": "example string", "CreatedAt": "2026-01-01T00:00:00Z", "UpdatedAt": "2026-01-01T00:00:00Z", "Metadata": "example string", "SecurityToken": "example string", "ExpiresAt": "2026-01-01T00:00:00Z" }
}
```

---

### `updateByEmail`

Update the given avatar using their email address. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/update-by-email/{email}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

Body type: `UpdateRequest`

| Field | Type |
| --- | --- |
| `Title` | `string` |
| `FirstName` | `string` |
| `LastName` | `string` |
| `Username` | `string` |

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
const { isError, message, result } = await oasis.avatar.updateByEmail({
    email: '<email>',
    title: "example string",
    firstName: "example string",
    lastName: "example string",
    username: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `updateByUsername`

Update the given avatar using their username. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/update-by-username/{username}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

Body type: `UpdateRequest`

| Field | Type |
| --- | --- |
| `Title` | `string` |
| `FirstName` | `string` |
| `LastName` | `string` |
| `Username` | `string` |

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
const { isError, message, result } = await oasis.avatar.updateByUsername({
    username: "example string",
    title: "example string",
    firstName: "example string",
    lastName: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 }
}
```

---

### `uploadAvatarPortrait`

Upload's the avatar's portrait (2D Image), which is displayed on the web portal or on web OApp's. Only works for logged in users. Use Authenticate endpoint first to obtain a JWT Token.

**POST** `api/avatar/upload-avatar-portrait`

**Request**

Body type: `AvatarPortrait`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `Username` | `string` |
| `Email` | `string` |
| `ImageBase64` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.uploadAvatarPortrait({
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    username: "example string",
    email: "example string",
    imageBase64: "example string"
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

### `validateResetToken`

Call this method passing in the reset token received in the forgotten password email after first calling the avatar/forgot-password method.

**POST** `api/avatar/validate-reset-token`

**Request**

Body type: `ValidateResetTokenRequest`

| Field | Type |
| --- | --- |
| `Token` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.avatar.validateResetToken({
    token: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "example string"
}
```

---

### `verifyEmail`

Verify a newly created avatar by passing in the validation token sent in the verify email. This method is used by the link in the email.

**GET** `api/avatar/verify-email`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `token` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.avatar.verifyEmail({
    token: 'example string'
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

