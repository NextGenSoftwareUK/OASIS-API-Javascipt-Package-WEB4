# Wallet — `oasis.wallet`

Source controller: [`WalletController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/WalletController.cs)
Route prefix: `api/wallet`
32 operation(s).

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

### `createWalletForAvatarByEmailAsync`

Create a new wallet for an avatar by email.

**POST** `api/wallet/avatar/email/{email}/create-wallet`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

Body type: `CreateWalletRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.createWalletForAvatarByEmailAsync({
    email: '<email>',
    providerTypeToLoadSave: '<providerTypeToLoadSave>',
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
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `createWalletForAvatarByIdAsync`

Create a new wallet for an avatar by ID.

**POST** `api/wallet/avatar/{avatarId}/create-wallet`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

Body type: `CreateWalletRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.createWalletForAvatarByIdAsync({
    avatarId: '<avatarId>',
    providerTypeToLoadSave: '<providerTypeToLoadSave>',
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
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `createWalletForAvatarByUsernameAsync`

Create a new wallet for an avatar by username.

**POST** `api/wallet/avatar/username/{username}/create-wallet`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

Body type: `CreateWalletRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.createWalletForAvatarByUsernameAsync({
    username: '<username>',
    providerTypeToLoadSave: '<providerTypeToLoadSave>',
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
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `getAvatarDefaultWalletByEmailAsync`

Get the default wallet for an avatar by email.

**GET** `api/wallet/avatar/email/{email}/default-wallet`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.getAvatarDefaultWalletByEmailAsync({
    email: '<email>',
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `getAvatarDefaultWalletByIdAsync`

Get the default wallet for an avatar by ID.

**GET** `api/wallet/avatar/{id}/default-wallet`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.getAvatarDefaultWalletByIdAsync({
    id: '<id>',
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `getAvatarDefaultWalletByUsernameAsync`

Get the default wallet for an avatar by username.

**GET** `api/wallet/avatar/username/{username}/default-wallet/{showOnlyDefault}/{decryptPrivateKeys}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |
| `showOnlyDefault` | `bool` |
| `decryptPrivateKeys` | `bool` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.getAvatarDefaultWalletByUsernameAsync({
    username: '<username>',
    showOnlyDefault: '<showOnlyDefault>',
    decryptPrivateKeys: '<decryptPrivateKeys>',
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `getPortfolioValueAsync`

Get total portfolio value across all wallets for an avatar.

**GET** `api/wallet/avatar/{avatarId}/portfolio/value`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await oasis.wallet.getPortfolioValueAsync({
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
  "result": {}
}
```

---

### `getSupportedChains`

Get supported chains.

**GET** `api/wallet/supported-chains`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<object>`

**Example**

```js
const { isError, message, result } = await oasis.wallet.getSupportedChains({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{}]
}
```

---

### `getWalletAnalyticsAsync`

Get wallet analytics for an avatar.

**GET** `api/wallet/avatar/{avatarId}/wallet/{walletId}/analytics`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `walletId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await oasis.wallet.getWalletAnalyticsAsync({
    avatarId: '<avatarId>',
    walletId: '<walletId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": {}
}
```

---

### `getWalletThatPublicKeyBelongsTo`

Get the wallet that a public key belongs to.

**GET** `api/wallet/find-wallet`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |
| `providerType` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.getWalletThatPublicKeyBelongsTo({
    providerKey: 'example string',
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `getWalletTokensAsync`

Get wallet tokens for an avatar.

**GET** `api/wallet/avatar/{avatarId}/wallet/{walletId}/tokens`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `walletId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<object>`

**Example**

```js
const { isError, message, result } = await oasis.wallet.getWalletTokensAsync({
    avatarId: '<avatarId>',
    walletId: '<walletId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{}]
}
```

---

### `getWalletsByChainAsync`

Get wallets by chain for an avatar.

**GET** `api/wallet/avatar/{avatarId}/wallets/chain/{chain}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `chain` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<IProviderWallet>` (array)

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.getWalletsByChainAsync({
    avatarId: '<avatarId>',
    chain: '<chain>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }]
}
```

---

### `importWalletUsingPrivateKeyByEmail`

Import a wallet using private key by email.

**POST** `api/wallet/avatar/email/{email}/import/private-key`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `key` | `string` |
| `providerToImportTo` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.importWalletUsingPrivateKeyByEmail({
    email: '<email>',
    key: 'example string',
    providerToImportTo: '<providerToImportTo>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `importWalletUsingPrivateKeyById`

Import a wallet using private key by avatar ID.

**POST** `api/wallet/avatar/{avatarId}/import/private-key`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `key` | `string` |
| `providerToImportTo` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.importWalletUsingPrivateKeyById({
    avatarId: '<avatarId>',
    key: 'example string',
    providerToImportTo: '<providerToImportTo>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `importWalletUsingPrivateKeyByUsername`

Import a wallet using private key by username.

**POST** `api/wallet/avatar/username/{username}/import/private-key`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `key` | `string` |
| `providerToImportTo` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.importWalletUsingPrivateKeyByUsername({
    username: '<username>',
    key: 'example string',
    providerToImportTo: '<providerToImportTo>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `importWalletUsingPublicKeyByEmail`

Import a wallet using public key by email.

**POST** `api/wallet/avatar/email/{email}/import/public-key`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `key` | `string` |
| `walletAddress` | `string` |
| `providerToImportTo` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.importWalletUsingPublicKeyByEmail({
    email: '<email>',
    key: 'example string',
    walletAddress: 'example string',
    providerToImportTo: '<providerToImportTo>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `importWalletUsingPublicKeyById`

Import a wallet using public key by avatar ID.

**POST** `api/wallet/avatar/{avatarId}/import/public-key`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `key` | `string` |
| `walletAddress` | `string` |
| `providerToImportTo` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.importWalletUsingPublicKeyById({
    avatarId: '<avatarId>',
    key: 'example string',
    walletAddress: 'example string',
    providerToImportTo: '<providerToImportTo>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `importWalletUsingPublicKeyByUsername`

Import a wallet using public key by username.

**POST** `api/wallet/avatar/username/{username}/import/public-key`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `key` | `string` |
| `walletAddress` | `string` |
| `providerToImportTo` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.importWalletUsingPublicKeyByUsername({
    username: '<username>',
    key: 'example string',
    walletAddress: 'example string',
    providerToImportTo: '<providerToImportTo>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `loadProviderWalletsForAvatarByEmailAsync`

Load all provider wallets for an avatar by email.

**GET** `api/wallet/avatar/email/{email}/wallets`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, List<IProviderWallet>>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.wallet.loadProviderWalletsForAvatarByEmailAsync({
    email: '<email>',
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<ProviderType, List<IProviderWallet>>> */
}
```

---

### `loadProviderWalletsForAvatarByIdAsync`

Load all provider wallets for an avatar by ID.

**GET** `api/wallet/avatar/{id}/wallets/{showOnlyDefault}/{decryptPrivateKeys}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |
| `showOnlyDefault` | `bool` |
| `decryptPrivateKeys` | `bool` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, List<IProviderWallet>>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.wallet.loadProviderWalletsForAvatarByIdAsync({
    id: '<id>',
    showOnlyDefault: '<showOnlyDefault>',
    decryptPrivateKeys: '<decryptPrivateKeys>',
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<ProviderType, List<IProviderWallet>>> */
}
```

---

### `loadProviderWalletsForAvatarByUsernameAsync`

Load all provider wallets for an avatar by username.

**GET** `api/wallet/avatar/username/{username}/wallets/{showOnlyDefault}/{decryptPrivateKeys}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |
| `showOnlyDefault` | `bool` |
| `decryptPrivateKeys` | `bool` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, List<IProviderWallet>>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.wallet.loadProviderWalletsForAvatarByUsernameAsync({
    username: '<username>',
    showOnlyDefault: '<showOnlyDefault>',
    decryptPrivateKeys: '<decryptPrivateKeys>',
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<ProviderType, List<IProviderWallet>>> */
}
```

---

### `saveProviderWalletsForAvatarByEmailAsync`

Save provider wallets for an avatar by email.

**POST** `api/wallet/avatar/email/{email}/wallets`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

Body type: `Dictionary<ProviderType, List<IProviderWallet>>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.wallet.saveProviderWalletsForAvatarByEmailAsync({
    email: '<email>',
    providerType: '<providerType>',
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

### `saveProviderWalletsForAvatarByIdAsync`

Save provider wallets for an avatar by ID.

**POST** `api/wallet/avatar/{id}/wallets`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `Dictionary<ProviderType, List<IProviderWallet>>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.wallet.saveProviderWalletsForAvatarByIdAsync({
    id: '<id>',
    providerType: '<providerType>',
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

### `saveProviderWalletsForAvatarByUsernameAsync`

Save provider wallets for an avatar by username.

**POST** `api/wallet/avatar/username/{username}/wallets`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

Body type: `Dictionary<ProviderType, List<IProviderWallet>>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.wallet.saveProviderWalletsForAvatarByUsernameAsync({
    username: '<username>',
    providerType: '<providerType>',
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

### `sendTokenAsync`

Send's a given token to the target provider.

**POST** `api/wallet/send_token`

**Request**

Body type: `ISendWeb4TokenRequest`

| Field | Type |
| --- | --- |
| `FromProvider` | `EnumValue<ProviderType>` |
| `ToProvider` | `EnumValue<ProviderType>` |
| `FromAvatarId` | `Guid` |
| `FromAvatarUsername` | `string` |
| `FromAvatarEmail` | `string` |
| `ToAvatarId` | `Guid` |
| `ToAvatarUsername` | `string` |
| `ToAvatarEmail` | `string` |
| `WaitTillTokenSent` | `bool` |
| `WaitForTokenToSendInSeconds` | `int` |
| `AttemptToSendTokenEveryXSeconds` | `int` |
| `WaitTillTokenLocked` | `bool` |
| `WaitForTokenToLockInSeconds` | `int` |
| `AttemptToLockEveryXSeconds` | `int` |
| `WaitTillTokenBurnt` | `bool` |
| `WaitForTokenToBurnInSeconds` | `int` |
| `AttemptToBurnEveryXSeconds` | `int` |
| `WaitTillTokenUnlocked` | `bool` |
| `WaitForTokenToUnlockInSeconds` | `int` |
| `AttemptToUnlockEveryXSeconds` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ISendWeb4TokenResponse`

| Field | Type |
| --- | --- |
| `SendTransactionResult` | `string` |
| `LockTransactionResult` | `string` |
| `BurnTransactionResult` | `string` |
| `UnlockTransactionResult` | `string` |
| `BridgeOrderId` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.sendTokenAsync({
    fromProvider: /* <EnumValue<ProviderType>> */,
    toProvider: /* <EnumValue<ProviderType>> */,
    fromAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    fromAvatarUsername: "example string",
    fromAvatarEmail: "example string",
    toAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    toAvatarUsername: "example string",
    toAvatarEmail: "example string",
    waitTillTokenSent: true,
    waitForTokenToSendInSeconds: 1,
    attemptToSendTokenEveryXSeconds: 1,
    waitTillTokenLocked: true,
    waitForTokenToLockInSeconds: 1,
    attemptToLockEveryXSeconds: 1,
    waitTillTokenBurnt: true,
    waitForTokenToBurnInSeconds: 1,
    attemptToBurnEveryXSeconds: 1,
    waitTillTokenUnlocked: true,
    waitForTokenToUnlockInSeconds: 1,
    attemptToUnlockEveryXSeconds: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "SendTransactionResult": "example string", "LockTransactionResult": "example string", "BurnTransactionResult": "example string", "UnlockTransactionResult": "example string", "BridgeOrderId": "example string" }
}
```

---

### `setAvatarDefaultWalletByEmailAsync`

Set the default wallet for an avatar by email.

**POST** `api/wallet/avatar/email/{email}/default-wallet/{walletId}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |
| `walletId` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.setAvatarDefaultWalletByEmailAsync({
    email: '<email>',
    walletId: '<walletId>',
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `setAvatarDefaultWalletByIdAsync`

Set the default wallet for an avatar by ID.

**POST** `api/wallet/avatar/{id}/default-wallet/{walletId}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |
| `walletId` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.setAvatarDefaultWalletByIdAsync({
    id: '<id>',
    walletId: '<walletId>',
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `setAvatarDefaultWalletByUsernameAsync`

Set the default wallet for an avatar by username.

**POST** `api/wallet/avatar/username/{username}/default-wallet/{walletId}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |
| `walletId` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.setAvatarDefaultWalletByUsernameAsync({
    username: '<username>',
    walletId: '<walletId>',
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `transferBetweenWalletsAsync`

Transfer tokens between wallets.

**POST** `api/wallet/transfer`

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `request` | `object` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await oasis.wallet.transferBetweenWalletsAsync({
    request: {}
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": {}
}
```

---

### `updateWalletForAvatarByEmailAsync`

Update a wallet for an avatar by email.

**PUT** `api/wallet/avatar/email/{email}/wallet/{walletId}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |
| `walletId` | `Guid` |

**Request**

Body type: `UpdateWalletRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.updateWalletForAvatarByEmailAsync({
    email: '<email>',
    walletId: '<walletId>',
    providerTypeToLoadSave: '<providerTypeToLoadSave>',
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
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `updateWalletForAvatarByIdAsync`

Update a wallet for an avatar by ID.

**PUT** `api/wallet/avatar/{avatarId}/wallet/{walletId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `walletId` | `Guid` |

**Request**

Body type: `UpdateWalletRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.updateWalletForAvatarByIdAsync({
    avatarId: '<avatarId>',
    walletId: '<walletId>',
    providerTypeToLoadSave: '<providerTypeToLoadSave>',
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
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

---

### `updateWalletForAvatarByUsernameAsync`

Update a wallet for an avatar by username.

**PUT** `api/wallet/avatar/username/{username}/wallet/{walletId}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |
| `walletId` | `Guid` |

**Request**

Body type: `UpdateWalletRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IProviderWallet`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `WalletId` | `Guid` |
| `Name` | `string` |
| `Description` | `new string` |
| `PrivateKey` | `string` |
| `PublicKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `SecretRecoveryPhrase` | `string` |
| `Transactions` | `List<IWalletTransaction>` |
| `ProviderType` | `ProviderType` |
| `Balance` | `double` |
| `IsDefaultWallet` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.wallet.updateWalletForAvatarByUsernameAsync({
    username: '<username>',
    walletId: '<walletId>',
    providerTypeToLoadSave: '<providerTypeToLoadSave>',
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
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }
}
```

