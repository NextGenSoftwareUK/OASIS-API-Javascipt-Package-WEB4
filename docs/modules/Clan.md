# Clan — `oasis.clan`

Source controller: [`ClanController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ClanController.cs)
Route prefix: `api/clan`
10 operation(s).

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

### `addAvatarToClan`

Add an avatar to a clan as a member.</summary>

**POST** `api/clan/{clanId:guid}/members/{avatarId:guid}`

Route parameters:

| Field | Type |
| --- | --- |
| `clanId` | `Guid` |
| `avatarId` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType? (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.clan.addAvatarToClan({
    clanId: '<clanId>',
    avatarId: '<avatarId>',
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
  "result": true
}
```

---

### `create`

Create a new clan. The authenticated avatar becomes the owner and first member.</summary>

**POST** `api/clan`

**Request**

Body type: `CreateClanRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IClan`

| Field | Type |
| --- | --- |
| `OwnerAvatarId` | `Guid` |
| `MemberIds` | `IList<Guid>` |
| `Inventory` | `IList<IInventoryItem>` |

**Example**

```js
const { isError, message, result } = await oasis.clan.create({
    name: "example string",
    description: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "OwnerAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MemberIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }] }
}
```

---

### `delete`

Delete a clan. Typically only the owner may delete (idempotent if not found).</summary>

**DELETE** `api/clan/{clanId:guid}`

Route parameters:

| Field | Type |
| --- | --- |
| `clanId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType? (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.clan.delete({
    clanId: '<clanId>',
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
  "result": true
}
```

---

### `getClanInventory`

Get clan treasury (inventory).</summary>

**GET** `api/clan/{clanId:guid}/inventory`

Route parameters:

| Field | Type |
| --- | --- |
| `clanId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType? (optional)` |

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
const { isError, message, result } = await oasis.clan.getClanInventory({
    clanId: '<clanId>',
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
  "result": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }]
}
```

---

### `getMembers`

Get clan member avatar Ids.</summary>

**GET** `api/clan/{clanId:guid}/members`

Route parameters:

| Field | Type |
| --- | --- |
| `clanId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType? (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Guid` (array)

**Example**

```js
const { isError, message, result } = await oasis.clan.getMembers({
    clanId: '<clanId>',
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
  "result": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"]
}
```

---

### `list`

List all clans, optionally filtered by owner avatar Id.</summary>

**GET** `api/clan`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `ownerAvatarId` | `Guid? (optional)` |
| `providerType` | `ProviderType? (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IClan` (array)

| Field | Type |
| --- | --- |
| `OwnerAvatarId` | `Guid` |
| `MemberIds` | `IList<Guid>` |
| `Inventory` | `IList<IInventoryItem>` |

**Example**

```js
const { isError, message, result } = await oasis.clan.list({
    ownerAvatarId: '<ownerAvatarId>',
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
  "result": [{ "OwnerAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MemberIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }] }]
}
```

---

### `load`

Load a clan by Id.</summary>

**GET** `api/clan/{clanId:guid}`

Route parameters:

| Field | Type |
| --- | --- |
| `clanId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType? (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IClan`

| Field | Type |
| --- | --- |
| `OwnerAvatarId` | `Guid` |
| `MemberIds` | `IList<Guid>` |
| `Inventory` | `IList<IInventoryItem>` |

**Example**

```js
const { isError, message, result } = await oasis.clan.load({
    clanId: '<clanId>',
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
  "result": { "OwnerAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MemberIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }] }
}
```

---

### `loadByName`

Load a clan by name (case-insensitive).</summary>

**GET** `api/clan/by-name`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `name` | `string` |
| `providerType` | `ProviderType? (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IClan`

| Field | Type |
| --- | --- |
| `OwnerAvatarId` | `Guid` |
| `MemberIds` | `IList<Guid>` |
| `Inventory` | `IList<IInventoryItem>` |

**Example**

```js
const { isError, message, result } = await oasis.clan.loadByName({
    name: 'example string',
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
  "result": { "OwnerAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MemberIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }] }
}
```

---

### `removeAvatarFromClan`

Remove an avatar from a clan. Owner cannot be removed.</summary>

**DELETE** `api/clan/{clanId:guid}/members/{avatarId:guid}`

Route parameters:

| Field | Type |
| --- | --- |
| `clanId` | `Guid` |
| `avatarId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType? (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.clan.removeAvatarFromClan({
    clanId: '<clanId>',
    avatarId: '<avatarId>',
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
  "result": true
}
```

---

### `update`

Update clan name/description. Caller should be owner (enforcement can be added).</summary>

**PUT** `api/clan/{clanId:guid}`

Route parameters:

| Field | Type |
| --- | --- |
| `clanId` | `Guid` |

**Request**

Body type: `UpdateClanRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IClan`

| Field | Type |
| --- | --- |
| `OwnerAvatarId` | `Guid` |
| `MemberIds` | `IList<Guid>` |
| `Inventory` | `IList<IInventoryItem>` |

**Example**

```js
const { isError, message, result } = await oasis.clan.update({
    clanId: '<clanId>',
    name: "example string",
    description: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "OwnerAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MemberIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Inventory": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }] }
}
```

