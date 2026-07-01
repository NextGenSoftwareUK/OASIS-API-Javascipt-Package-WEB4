# EOSIO — `oasis.eOSIO`

Source controller: [`EOSIOController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/EOSIOController.cs)
Route prefix: `api/eosio`
9 operation(s).

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

### `getAvatarForEOSIOAccountName`

Get's the Avatar for the the given EOS account name.

**GET** `api/eosio/get-avatar-for-eosio-account-name`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `eosioAccountName` | `string` |

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
const { isError, message, result } = await oasis.eOSIO.getAvatarForEOSIOAccountName({
    eosioAccountName: 'example string'
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

### `getAvatarIdForEOSIOAccountName`

Get's the Avatar id for the the given EOS account name.

**GET** `api/eosio/get-avatar-id-for-eosio-account-name`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `eosioAccountName` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.eOSIO.getAvatarIdForEOSIOAccountName({
    eosioAccountName: 'example string'
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

### `getBalanceForAvatar`

Get's the EOSIO balance for the given avatar.

**GET** `api/eosio/get-balance-for-avatar`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `code` | `string` |
| `symbol` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.eOSIO.getBalanceForAvatar({
    avatarId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    code: 'example string',
    symbol: 'example string'
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

### `getBalanceForEOSIOAccount`

Get's the EOSIO balance for the given EOSIO account.

**GET** `api/eosio/get-balance-for-eosio-account`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `eosioAccountName` | `string` |
| `code` | `string` |
| `symbol` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.eOSIO.getBalanceForEOSIOAccount({
    eosioAccountName: 'example string',
    code: 'example string',
    symbol: 'example string'
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

### `getEOSIOAccount`

Get's the EOSIO account.

**GET** `api/eosio/get-eosio-account`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `eosioAccountName` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `GetAccountResponseDto`

| Field | Type |
| --- | --- |
| `AccountName` | `string` |
| `HeadBlockNum` | `int` |
| `HeadBlockTime` | `string` |
| `LastCodeUpdate` | `string` |
| `Created` | `string` |
| `RefundRequest` | `EosAccountRefundRequestDto` |
| `RamQuota` | `string` |
| `NetLimit` | `EosAccountNetLimitDto` |
| `CpuLimit` | `EosAccountCpuLimitDto` |
| `TotalResources` | `EosAccountTotalResourcesDto` |
| `CoreLiquidBalance` | `string` |
| `SelfDelegatedBandwidth` | `EosAccountSelfDelegatedBandwidthDto` |
| `NetWeight` | `string` |
| `CpuWeight` | `string` |
| `RamUsage` | `string` |
| `Privileged` | `bool` |
| `Permissions` | `List<EosAccountPermissionDto>` |
| `VoterInfo` | `EosAccountVoterInfoDto` |

**Example**

```js
const { isError, message, result } = await oasis.eOSIO.getEOSIOAccount({
    eosioAccountName: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AccountName": "example string", "HeadBlockNum": 1, "HeadBlockTime": "example string", "LastCodeUpdate": "example string", "Created": "example string", "RefundRequest": { "Owner": "example string", "RequestTime": "example string", "NetAmount": "example string", "CpuAmount": "example string" }, "RamQuota": "example string", "NetLimit": { "Max": "example string", "Available": "example string", "Used": "example string" }, "CpuLimit": { "Max": "example string", "Available": "example string", "Used": "example string" }, "TotalResources": { "Owner": "example string", "RamBytes": "example string", "NetWeight": "example string", "CpuWeight": "example string" }, "CoreLiquidBalance": "example string", "SelfDelegatedBandwidth": { "From": "example string", "To": "example string", "NetWeight": "example string", "CpuWeight": "example string" }, "NetWeight": "example string", "CpuWeight": "example string", "RamUsage": "example string", "Privileged": true, "Permissions": [{ "Parent": "example string", "PermName": "example string", "RequiredAuth": { "Waits": [{ "WaitSec": 1, "Weight": 1 }], "Keys": [{ "Key": "example string", "Weight": 1 }], "Threshold": 1, "Accounts": [{ "Weight": 1, "Permission": {} }] } }], "VoterInfo": { "Owner": "example string", "Proxy": "example string", "Producers": ["example string"], "Staked": "example string", "LastVoteWeight": "example string", "ProxiedVoteWeight": "example string", "IsProxy": 1, "Flags1": 1, "Reserved2": 1, "Reserved3": "example string" } }
}
```

---

### `getEOSIOAccountForAvatar`

Get's the EOSIO account for the given Avatar.

**GET** `api/eosio/get-eosio-account-for-avatar`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `GetAccountResponseDto`

| Field | Type |
| --- | --- |
| `AccountName` | `string` |
| `HeadBlockNum` | `int` |
| `HeadBlockTime` | `string` |
| `LastCodeUpdate` | `string` |
| `Created` | `string` |
| `RefundRequest` | `EosAccountRefundRequestDto` |
| `RamQuota` | `string` |
| `NetLimit` | `EosAccountNetLimitDto` |
| `CpuLimit` | `EosAccountCpuLimitDto` |
| `TotalResources` | `EosAccountTotalResourcesDto` |
| `CoreLiquidBalance` | `string` |
| `SelfDelegatedBandwidth` | `EosAccountSelfDelegatedBandwidthDto` |
| `NetWeight` | `string` |
| `CpuWeight` | `string` |
| `RamUsage` | `string` |
| `Privileged` | `bool` |
| `Permissions` | `List<EosAccountPermissionDto>` |
| `VoterInfo` | `EosAccountVoterInfoDto` |

**Example**

```js
const { isError, message, result } = await oasis.eOSIO.getEOSIOAccountForAvatar({
    avatarId: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AccountName": "example string", "HeadBlockNum": 1, "HeadBlockTime": "example string", "LastCodeUpdate": "example string", "Created": "example string", "RefundRequest": { "Owner": "example string", "RequestTime": "example string", "NetAmount": "example string", "CpuAmount": "example string" }, "RamQuota": "example string", "NetLimit": { "Max": "example string", "Available": "example string", "Used": "example string" }, "CpuLimit": { "Max": "example string", "Available": "example string", "Used": "example string" }, "TotalResources": { "Owner": "example string", "RamBytes": "example string", "NetWeight": "example string", "CpuWeight": "example string" }, "CoreLiquidBalance": "example string", "SelfDelegatedBandwidth": { "From": "example string", "To": "example string", "NetWeight": "example string", "CpuWeight": "example string" }, "NetWeight": "example string", "CpuWeight": "example string", "RamUsage": "example string", "Privileged": true, "Permissions": [{ "Parent": "example string", "PermName": "example string", "RequiredAuth": { "Waits": [{ "WaitSec": 1, "Weight": 1 }], "Keys": [{ "Key": "example string", "Weight": 1 }], "Threshold": 1, "Accounts": [{ "Weight": 1, "Permission": {} }] } }], "VoterInfo": { "Owner": "example string", "Proxy": "example string", "Producers": ["example string"], "Staked": "example string", "LastVoteWeight": "example string", "ProxiedVoteWeight": "example string", "IsProxy": 1, "Flags1": 1, "Reserved2": 1, "Reserved3": "example string" } }
}
```

---

### `getEOSIOAccountNamesForAvatar`

Get's the EOSIO account name for the given Avatar.

**GET** `api/eosio/get-eosio-account-name-for-avatar`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string` (array)

**Example**

```js
const { isError, message, result } = await oasis.eOSIO.getEOSIOAccountNamesForAvatar({
    avatarId: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
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

### `getTelosAccountPrivateKeyForAvatar`

Get's the EOSIO private key for the given Avatar.

**GET** `api/eosio/get-eosio-account-private-key-for-avatar`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.eOSIO.getTelosAccountPrivateKeyForAvatar({
    avatarId: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
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

**POST** `api/eosio/{avatarId}/{eosioAccountName}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `eosioAccountName` | `string` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `walletId` | `Guid` |
| `walletAddress` | `string` |

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
const { isError, message, result } = await oasis.eOSIO.linkEOSIOAccountToAvatar({
    avatarId: '<avatarId>',
    eosioAccountName: '<eosioAccountName>',
    walletId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    walletAddress: 'example string'
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

