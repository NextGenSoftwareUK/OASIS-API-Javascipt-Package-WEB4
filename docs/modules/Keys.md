# Keys — `oasis.keys`

Source controller: [`KeysController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/KeysController.cs)
Route prefix: `api/keys`
59 operation(s).

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

### `base58CheckDecode`

Decodes.

**POST** `api/keys/base58_check_decode/{data}`

Route parameters:

| Field | Type |
| --- | --- |
| `data` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `byte[]`

**Example**

```js
const { isError, message, result } = await oasis.keys.base58CheckDecode({
    data: '<data>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "<base64-bytes>"
}
```

---

### `clearCache`

Clear's the KeyManager's internal cache of keys.

**POST** `api/keys/clear_cache`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.keys.clearCache({});
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

### `createKey`

Creates a new key for the authenticated avatar

**POST** `api/keys/create`

**Request**

Body type: `CreateKeyRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Type` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `KeyInfo`

| Field | Type |
| --- | --- |
| `Id` | `MultiHash` |
| `Name` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.keys.createKey({
    name: "example string",
    type: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <MultiHash> */, "Name": "example string" }
}
```

---

### `decodePrivateWif`

Decode's the private WIF.

**POST** `api/keys/decode_private_wif/{data}`

Route parameters:

| Field | Type |
| --- | --- |
| `data` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `byte[]`

**Example**

```js
const { isError, message, result } = await oasis.keys.decodePrivateWif({
    data: '<data>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "<base64-bytes>"
}
```

---

### `deleteKey`

Deletes a key

**DELETE** `api/keys/{keyId}`

Route parameters:

| Field | Type |
| --- | --- |
| `keyId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.keys.deleteKey({
    keyId: '<keyId>'
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

### `encodeSignature`

Encode's the signature.

**POST** `api/keys/encode_signature/{source}`

Route parameters:

| Field | Type |
| --- | --- |
| `source` | `byte[]` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.encodeSignature({
    source: '<source>'
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

### `generateKeyPairAndLinkProviderKeysToAvatarByAvatarEmail`

Generate's a new unique private/public keypair &amp; then links to the given avatar for the given provider type.

**POST** `api/keys/generate_keypair_and_link_provider_keys_to_avatar_by_email`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.generateKeyPairAndLinkProviderKeysToAvatarByAvatarEmail({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `generateKeyPairAndLinkProviderKeysToAvatarByAvatarId`

Generate's a new unique private/public keypair &amp; then links to the given avatar for the given provider type.

**POST** `api/keys/generate_keypair_and_link_provider_keys_to_avatar_by_id`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.generateKeyPairAndLinkProviderKeysToAvatarByAvatarId({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `generateKeyPairAndLinkProviderKeysToAvatarByAvatarUsername`

Generate's a new unique private/public keypair &amp; then links to the given avatar for the given provider type.

**POST** `api/keys/generate_keypair_and_link_provider_keys_to_avatar_by_username`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.generateKeyPairAndLinkProviderKeysToAvatarByAvatarUsername({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `generateKeyPairForProvider`

Generate's a new unique private/public keypair for a given provider type.

**POST** `api/keys/generate_keypair_for_provider/{providerType}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IKeyPairAndWallet` _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.keys.generateKeyPairForProvider({
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
  "result": /* <IKeyPairAndWallet> */
}
```

---

### `generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarByEmail`

Generate's a new unique private/public keypair with wallet address &amp; then links to the given avatar for the given provider type by email.

**POST** `api/keys/generate_keypair_with_wallet_address_and_link_provider_keys_to_avatar_by_email`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarByEmail({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarById`

Generate's a new unique private/public keypair with wallet address &amp; then links to the given avatar for the given provider type by avatar ID.

**POST** `api/keys/generate_keypair_with_wallet_address_and_link_provider_keys_to_avatar_by_id`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarById({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarByUsername`

Generate's a new unique private/public keypair with wallet address &amp; then links to the given avatar for the given provider type by username.

**POST** `api/keys/generate_keypair_with_wallet_address_and_link_provider_keys_to_avatar_by_username`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarByUsername({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `generateKeyPairWithWalletAddressForProvider`

Generate's a new unique private/public keypair with wallet address for a given provider type.

**POST** `api/keys/generate_keypair_with_wallet_address_for_provider/{providerType}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IKeyPairAndWallet` _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.keys.generateKeyPairWithWalletAddressForProvider({
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
  "result": /* <IKeyPairAndWallet> */
}
```

---

### `getAllKeysForAvatar`

Gets all keys for the authenticated avatar

**GET** `api/keys/all`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `KeyInfo` (array)

| Field | Type |
| --- | --- |
| `Id` | `MultiHash` |
| `Name` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.keys.getAllKeysForAvatar({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": /* <MultiHash> */, "Name": "example string" }]
}
```

---

### `getAllProviderPrivateKeysForAvatarById`

Get's a given avatar's private keys for the given avatar with their id.

**GET** `api/keys/get_all_provider_private_keys_for_avatar_by_id/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, List<string>>` - a key/value map keyed by `ProviderType`, each value a `List<string>`.

**Example**

```js
const { isError, message, result } = await oasis.keys.getAllProviderPrivateKeysForAvatarById({
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
  "result": { "<ProviderType>": ["example string"] }
}
```

---

### `getAllProviderPrivateKeysForAvatarByUsername`

Get's a given avatar's private keys for the given avatar with their username.

**GET** `api/keys/get_all_provider_private_keys_for_avatar_by_username/{username}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, List<string>>` - a key/value map keyed by `ProviderType`, each value a `List<string>`.

**Example**

```js
const { isError, message, result } = await oasis.keys.getAllProviderPrivateKeysForAvatarByUsername({
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
  "result": { "<ProviderType>": ["example string"] }
}
```

---

### `getAllProviderPublicKeysForAvatarByEmail`

Get's a given avatar's public keys for the given avatar with their email.

**GET** `api/keys/get_all_provider_public_keys_for_avatar_by_email/{email}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, List<string>>` - a key/value map keyed by `ProviderType`, each value a `List<string>`.

**Example**

```js
const { isError, message, result } = await oasis.keys.getAllProviderPublicKeysForAvatarByEmail({
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
  "result": { "<ProviderType>": ["example string"] }
}
```

---

### `getAllProviderPublicKeysForAvatarById`

Get's a given avatar's public keys for the given avatar with their id.

**GET** `api/keys/get_all_provider_public_keys_for_avatar_by_id/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, List<string>>` - a key/value map keyed by `ProviderType`, each value a `List<string>`.

**Example**

```js
const { isError, message, result } = await oasis.keys.getAllProviderPublicKeysForAvatarById({
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
  "result": { "<ProviderType>": ["example string"] }
}
```

---

### `getAllProviderPublicKeysForAvatarByUsername`

Get's a given avatar's public keys for the given avatar with their username.

**GET** `api/keys/get_all_provider_public_keys_for_avatar_by_username/{username}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, List<string>>` - a key/value map keyed by `ProviderType`, each value a `List<string>`.

**Example**

```js
const { isError, message, result } = await oasis.keys.getAllProviderPublicKeysForAvatarByUsername({
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
  "result": { "<ProviderType>": ["example string"] }
}
```

---

### `getAllProviderUniqueStorageKeysForAvatarByEmail`

Get's a given avatar's unique storage keys for the given avatar with their email.

**GET** `api/keys/get_all_provider_unique_storage_keys_for_avatar_by_email/{email}`

Route parameters:

| Field | Type |
| --- | --- |
| `email` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, string>` - a key/value map keyed by `ProviderType`, each value a `string`.

**Example**

```js
const { isError, message, result } = await oasis.keys.getAllProviderUniqueStorageKeysForAvatarByEmail({
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
  "result": { "<ProviderType>": "example string" }
}
```

---

### `getAllProviderUniqueStorageKeysForAvatarById`

Get's a given avatar's unique storage keys for the given avatar with their id.

**GET** `api/keys/get_all_provider_unique_storage_keys_for_avatar_by_id/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, string>` - a key/value map keyed by `ProviderType`, each value a `string`.

**Example**

```js
const { isError, message, result } = await oasis.keys.getAllProviderUniqueStorageKeysForAvatarById({
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
  "result": { "<ProviderType>": "example string" }
}
```

---

### `getAllProviderUniqueStorageKeysForAvatarByUsername`

Get's a given avatar's unique storage keys for the given avatar with their username.

**GET** `api/keys/get_all_provider_unique_storage_keys_for_avatar_by_username/{username}`

Route parameters:

| Field | Type |
| --- | --- |
| `username` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, string>` - a key/value map keyed by `ProviderType`, each value a `string`.

**Example**

```js
const { isError, message, result } = await oasis.keys.getAllProviderUniqueStorageKeysForAvatarByUsername({
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
  "result": { "<ProviderType>": "example string" }
}
```

---

### `getAvatarEmailForProviderPublicKey`

Get's the avatar email for a given public key.

**GET** `api/keys/get_avatar_email_for_provider_public_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.getAvatarEmailForProviderPublicKey({
    providerKey: '<providerKey>'
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

### `getAvatarEmailForProviderUniqueStorageKey`

Get's the avatar email for a given unique storage key.

**GET** `api/keys/get_avatar_email_for_provider_unique_storage_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.getAvatarEmailForProviderUniqueStorageKey({
    providerKey: '<providerKey>'
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

### `getAvatarForProviderPrivateKey`

Get's the avatar for a given private key.

**GET** `api/keys/get_avatar_for_provider_private_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

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
const { isError, message, result } = await oasis.keys.getAvatarForProviderPrivateKey({
    providerKey: '<providerKey>'
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

### `getAvatarForProviderPublicKey`

Get's the avatar for a given public key.

**GET** `api/keys/get_avatar_for_provider_public_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

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
const { isError, message, result } = await oasis.keys.getAvatarForProviderPublicKey({
    providerKey: '<providerKey>'
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

### `getAvatarForProviderUniqueStorageKey`

Get's the avatar for a given unique storage key.

**GET** `api/keys/get_avatar_for_provider_unique_storage_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

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
const { isError, message, result } = await oasis.keys.getAvatarForProviderUniqueStorageKey({
    providerKey: '<providerKey>'
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

### `getAvatarIdForProviderPrivateKey`

Get's the avatar id for a given private key.

**GET** `api/keys/get_avatar_id_for_provider_private_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Guid`

**Example**

```js
const { isError, message, result } = await oasis.keys.getAvatarIdForProviderPrivateKey({
    providerKey: '<providerKey>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

---

### `getAvatarIdForProviderPublicKey`

Get's the avatar id for a given public key.

**GET** `api/keys/get_avatar_id_for_provider_public_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Guid`

**Example**

```js
const { isError, message, result } = await oasis.keys.getAvatarIdForProviderPublicKey({
    providerKey: '<providerKey>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

---

### `getAvatarIdForProviderUniqueStorageKey`

Get's the avatar id for a given unique storage key.

**GET** `api/keys/get_avatar_id_for_provider_unique_storage_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Guid`

**Example**

```js
const { isError, message, result } = await oasis.keys.getAvatarIdForProviderUniqueStorageKey({
    providerKey: '<providerKey>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

---

### `getAvatarUsernameForProviderPrivateKey`

Get's the avatar username for a given private key.

**GET** `api/keys/get_avatar_username_for_provider_private_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.getAvatarUsernameForProviderPrivateKey({
    providerKey: '<providerKey>'
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

### `getAvatarUsernameForProviderPublicKey`

Get's the avatar username for a given public key.

**GET** `api/keys/get_avatar_username_for_provider_public_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.getAvatarUsernameForProviderPublicKey({
    providerKey: '<providerKey>'
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

### `getAvatarUsernameForProviderUniqueStorageKey`

Get's the avatar username for a given unique storage key.

**GET** `api/keys/get_avatar_username_for_provider_unique_storage_key/{providerKey}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerKey` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.getAvatarUsernameForProviderUniqueStorageKey({
    providerKey: '<providerKey>'
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

### `getKeyStats`

Gets key statistics for the authenticated avatar

**GET** `api/keys/stats`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` - a key/value map keyed by `string`, each value a `object`.

**Example**

```js
const { isError, message, result } = await oasis.keys.getKeyStats({});
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

### `getPrivateWif`

Get's the private WIF.

**POST** `api/keys/get_private_wifi/{source}`

Route parameters:

| Field | Type |
| --- | --- |
| `source` | `byte[]` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.getPrivateWif({
    source: '<source>'
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

### `getProviderPrivateKeyForAvatarById`

Get's a given avatar's private key for the given provider type using the avatar's id.

**GET** `api/keys/get_provider_private_key_for_avatar_by_id`

**Request**

Body type: `ProviderKeyForAvatarParams`

| Field | Type |
| --- | --- |
| `AvatarID` | `string` |
| `AvatarUsername` | `string` |
| `AvatarEmail` | `string` |
| `ProviderType` | `string` |
| `ProviderTypeToLoadAvatarFrom` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string` (array)

**Example**

```js
const { isError, message, result } = await oasis.keys.getProviderPrivateKeyForAvatarById({
    avatarID: "example string",
    avatarUsername: "example string",
    avatarEmail: "example string",
    providerType: "example string",
    providerTypeToLoadAvatarFrom: "example string"
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

### `getProviderPrivateKeyForAvatarByUsername`

Get's a given avatar's private key for the given provider type using the avatar's username.

**GET** `api/keys/get_provider_private_key_for_avatar_by_username`

**Request**

Body type: `ProviderKeyForAvatarParams`

| Field | Type |
| --- | --- |
| `AvatarID` | `string` |
| `AvatarUsername` | `string` |
| `AvatarEmail` | `string` |
| `ProviderType` | `string` |
| `ProviderTypeToLoadAvatarFrom` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string` (array)

**Example**

```js
const { isError, message, result } = await oasis.keys.getProviderPrivateKeyForAvatarByUsername({
    avatarID: "example string",
    avatarUsername: "example string",
    avatarEmail: "example string",
    providerType: "example string",
    providerTypeToLoadAvatarFrom: "example string"
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

### `getProviderPublicKeysForAvatarByEmail`

Get's a given avatar's public keys for the given provider type using the avatar's email.

**GET** `api/keys/get_provider_public_keys_for_avatar_by_email`

**Request**

Body type: `ProviderKeyForAvatarParams`

| Field | Type |
| --- | --- |
| `AvatarID` | `string` |
| `AvatarUsername` | `string` |
| `AvatarEmail` | `string` |
| `ProviderType` | `string` |
| `ProviderTypeToLoadAvatarFrom` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string` (array)

**Example**

```js
const { isError, message, result } = await oasis.keys.getProviderPublicKeysForAvatarByEmail({
    avatarID: "example string",
    avatarUsername: "example string",
    avatarEmail: "example string",
    providerType: "example string",
    providerTypeToLoadAvatarFrom: "example string"
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

### `getProviderPublicKeysForAvatarById`

Get's a given avatar's public keys for the given provider type using the avatar's id.

**GET** `api/keys/get_provider_public_keys_for_avatar_by_id`

**Request**

Body type: `ProviderKeyForAvatarParams`

| Field | Type |
| --- | --- |
| `AvatarID` | `string` |
| `AvatarUsername` | `string` |
| `AvatarEmail` | `string` |
| `ProviderType` | `string` |
| `ProviderTypeToLoadAvatarFrom` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string` (array)

**Example**

```js
const { isError, message, result } = await oasis.keys.getProviderPublicKeysForAvatarById({
    avatarID: "example string",
    avatarUsername: "example string",
    avatarEmail: "example string",
    providerType: "example string",
    providerTypeToLoadAvatarFrom: "example string"
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

### `getProviderPublicKeysForAvatarByUsername`

Get's a given avatar's public keys for the given provider type using the avatar's username.

**GET** `api/keys/get_provider_public_keys_for_avatar_by_username`

**Request**

Body type: `ProviderKeyForAvatarParams`

| Field | Type |
| --- | --- |
| `AvatarID` | `string` |
| `AvatarUsername` | `string` |
| `AvatarEmail` | `string` |
| `ProviderType` | `string` |
| `ProviderTypeToLoadAvatarFrom` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string` (array)

**Example**

```js
const { isError, message, result } = await oasis.keys.getProviderPublicKeysForAvatarByUsername({
    avatarID: "example string",
    avatarUsername: "example string",
    avatarEmail: "example string",
    providerType: "example string",
    providerTypeToLoadAvatarFrom: "example string"
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

### `getProviderUniqueStorageKeyForAvatarByEmail`

Get's a given avatar's unique storage key for the given provider type using the avatar's username.

**GET** `api/keys/get_provider_unique_storage_key_for_avatar_by_email`

**Request**

Body type: `ProviderKeyForAvatarParams`

| Field | Type |
| --- | --- |
| `AvatarID` | `string` |
| `AvatarUsername` | `string` |
| `AvatarEmail` | `string` |
| `ProviderType` | `string` |
| `ProviderTypeToLoadAvatarFrom` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.getProviderUniqueStorageKeyForAvatarByEmail({
    avatarID: "example string",
    avatarUsername: "example string",
    avatarEmail: "example string",
    providerType: "example string",
    providerTypeToLoadAvatarFrom: "example string"
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

### `getProviderUniqueStorageKeyForAvatarById`

Get's a given avatar's unique storage key for the given provider type using the avatar's id.

**GET** `api/keys/get_provider_unique_storage_key_for_avatar_by_id`

**Request**

Body type: `ProviderKeyForAvatarParams`

| Field | Type |
| --- | --- |
| `AvatarID` | `string` |
| `AvatarUsername` | `string` |
| `AvatarEmail` | `string` |
| `ProviderType` | `string` |
| `ProviderTypeToLoadAvatarFrom` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.getProviderUniqueStorageKeyForAvatarById({
    avatarID: "example string",
    avatarUsername: "example string",
    avatarEmail: "example string",
    providerType: "example string",
    providerTypeToLoadAvatarFrom: "example string"
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

### `getProviderUniqueStorageKeyForAvatarByUsername`

Get's a given avatar's unique storage key for the given provider type using the avatar's username.

**GET** `api/keys/get_provider_unique_storage_key_for_avatar_by_username`

**Request**

Body type: `ProviderKeyForAvatarParams`

| Field | Type |
| --- | --- |
| `AvatarID` | `string` |
| `AvatarUsername` | `string` |
| `AvatarEmail` | `string` |
| `ProviderType` | `string` |
| `ProviderTypeToLoadAvatarFrom` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.getProviderUniqueStorageKeyForAvatarByUsername({
    avatarID: "example string",
    avatarUsername: "example string",
    avatarEmail: "example string",
    providerType: "example string",
    providerTypeToLoadAvatarFrom: "example string"
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

### `getPublicWif`

Get's the public WIF.

**POST** `api/keys/get_public_wifi`

**Request**

Body type: `WifParams`

| Field | Type |
| --- | --- |
| `PublicKey` | `byte[]` |
| `Prefix` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.keys.getPublicWif({
    publicKey: "<base64-bytes>",
    prefix: "example string"
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

**POST** `api/keys/{avatarId}/{eosioAccountName}`

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
const { isError, message, result } = await oasis.keys.linkEOSIOAccountToAvatar({
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

**POST** `api/keys/{avatarId}/{holochainAgentID}`

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
const { isError, message, result } = await oasis.keys.linkHolochainAgentIDToAvatar({
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

### `linkProviderPrivateKeyToAvatarByAvatarId`

Link's a given Avatar to a Providers Private Key (password, crypto private key, etc).

**POST** `api/keys/link_provider_private_key_to_avatar_by_id`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.linkProviderPrivateKeyToAvatarByAvatarId({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `linkProviderPrivateKeyToAvatarByEmail`

Link's a given Avatar to a Providers Private Key (password, crypto private key, etc).

**POST** `api/keys/link_provider_private_key_to_avatar_by_email`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.keys.linkProviderPrivateKeyToAvatarByEmail({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `linkProviderPrivateKeyToAvatarByUsername`

Link's a given Avatar to a Providers Private Key (password, crypto private key, etc).

**POST** `api/keys/link_provider_private_key_to_avatar_by_username`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.linkProviderPrivateKeyToAvatarByUsername({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `linkProviderPublicKeyToAvatarByAvatarId`

Link's a given Avatar to a Providers Public Key (private/public key pairs or username, accountname, unique id, agentId, hash, etc).

**POST** `api/keys/link_provider_public_key_to_avatar_by_id`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.linkProviderPublicKeyToAvatarByAvatarId({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `linkProviderPublicKeyToAvatarByEmail`

Link's a given Avatar to a Providers Public Key (private/public key pairs or username, accountname, unique id, agentId, hash, etc).

**POST** `api/keys/link_provider_public_key_to_avatar_by_email`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.linkProviderPublicKeyToAvatarByEmail({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `linkProviderPublicKeyToAvatarByUsername`

Link's a given Avatar to a Providers Public Key (private/public key pairs or username, accountname, unique id, agentId, hash, etc).

**POST** `api/keys/link_provider_public_key_to_avatar_by_username`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.linkProviderPublicKeyToAvatarByUsername({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `linkProviderWalletAddressToAvatarByEmail`

Link's a given Avatar to a Provider's Wallet Address by email.

**POST** `api/keys/link_provider_wallet_address_to_avatar_by_email`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.linkProviderWalletAddressToAvatarByEmail({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `linkProviderWalletAddressToAvatarById`

Link's a given Avatar to a Provider's Wallet Address by avatar ID.

**POST** `api/keys/link_provider_wallet_address_to_avatar_by_id`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.linkProviderWalletAddressToAvatarById({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `linkProviderWalletAddressToAvatarByUsername`

Link's a given Avatar to a Provider's Wallet Address by username.

**POST** `api/keys/link_provider_wallet_address_to_avatar_by_username`

**Request**

Body type: `LinkProviderKeyToAvatarParams`

| Field | Type |
| --- | --- |
| `WalletId` | `Guid` |
| `ProviderKey` | `string` |
| `WalletAddress` | `string` |
| `WalletAddressSegwitP2SH` | `string` |
| `ShowPublicKey` | `bool` |
| `ShowPrivateKey` | `bool` |
| `ShowSecretRecoveryWords` | `bool` |

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
const { isError, message, result } = await oasis.keys.linkProviderWalletAddressToAvatarByUsername({
    walletId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    providerKey: "example string",
    walletAddress: "example string",
    walletAddressSegwitP2SH: "example string",
    showPublicKey: true,
    showPrivateKey: true,
    showSecretRecoveryWords: true
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

### `linkTelosAccountToAvatar`

Link's a given telosAccount to the given avatar.

**POST** `api/keys/{id:Guid}/{telosAccountName}`

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
const { isError, message, result } = await oasis.keys.linkTelosAccountToAvatar({
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

**POST** `api/keys`

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
const { isError, message, result } = await oasis.keys.linkTelosAccountToAvatar2({
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

### `updateKey`

Updates an existing key

**PUT** `api/keys/{keyId}`

Route parameters:

| Field | Type |
| --- | --- |
| `keyId` | `Guid` |

**Request**

Body type: `UpdateKeyRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Type` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `KeyInfo`

| Field | Type |
| --- | --- |
| `Id` | `MultiHash` |
| `Name` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.keys.updateKey({
    keyId: '<keyId>',
    name: "example string",
    type: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": /* <MultiHash> */, "Name": "example string" }
}
```

