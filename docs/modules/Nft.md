# Nft — `oasis.nft`

Source controller: [`NftController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/NftController.cs)
Route prefix: `api/nft`
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

### `collectGeoNFTAsync`

**POST** `api/nft/collect-geo-nft`

**Request**

Body type: `ICollectGeoNFTRequest`

| Field | Type |
| --- | --- |
| `CollectedByAvatarId` | `Guid` |
| `GameSource` | `string` |
| `GeoNFTId` | `Guid` |
| `Image2D` | `byte[]` |
| `Image2DURI` | `Uri` |
| `ItemType` | `InventoryItemType` |
| `Object3D` | `byte[]` |
| `Object3DURI` | `Uri` |
| `Quantity` | `int` |
| `Stack` | `bool` |

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
const { isError, message, result } = await oasis.nft.collectGeoNFTAsync({
    collectedByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    gameSource: "example string",
    geoNFTId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    image2D: "<base64-bytes>",
    image2DURI: "https://example.com/asset.png",
    itemType: {  },
    object3D: "<base64-bytes>",
    object3DURI: "https://example.com/asset.png",
    quantity: 1,
    stack: true
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

### `collectNFTAsync`

NFT (Non-Fungible Token) management endpoints for creating, managing, and trading digital assets. Provides comprehensive NFT functionality including minting, transferring, and metadata management.

**POST** `api/nft/collect-nft`

**Request**

Body type: `ICollectGeoNFTRequest`

| Field | Type |
| --- | --- |
| `CollectedByAvatarId` | `Guid` |
| `GameSource` | `string` |
| `GeoNFTId` | `Guid` |
| `Image2D` | `byte[]` |
| `Image2DURI` | `Uri` |
| `ItemType` | `InventoryItemType` |
| `Object3D` | `byte[]` |
| `Object3DURI` | `Uri` |
| `Quantity` | `int` |
| `Stack` | `bool` |

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
const { isError, message, result } = await oasis.nft.collectNFTAsync({
    collectedByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    gameSource: "example string",
    geoNFTId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    image2D: "<base64-bytes>",
    image2DURI: "https://example.com/asset.png",
    itemType: {  },
    object3D: "<base64-bytes>",
    object3DURI: "https://example.com/asset.png",
    quantity: 1,
    stack: true
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

### `createWeb4NFTCollectionAsync`

Creates a new Web4 NFT collection.

**POST** `api/nft/create-web4-nft-collection`

**Request**

Body type: `ICreateWeb4NFTCollectionRequest`

| Field | Type |
| --- | --- |
| `CreatedBy` | `Guid` |
| `Description` | `string` |
| `Image` | `byte[]` |
| `ImageUrl` | `string` |
| `MetaData` | `Dictionary<string, string>` |
| `Web4NFTIds` | `List<string>` |
| `Web4NFTs` | `List<IWeb4NFT>` |
| `Thumbnail` | `byte[]` |
| `ThumbnailUrl` | `string` |
| `Title` | `string` |
| `Tags` | `List<string>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFTCollection`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTCollectionIds` | `IList<Guid>` |
| `Web4NFTs` | `List<IWeb4NFT>` |
| `Web4NFTIds` | `List<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.createWeb4NFTCollectionAsync({
    providerType: '<providerType>',
    createdBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    description: "example string",
    image: "<base64-bytes>",
    imageUrl: "example string",
    metaData: { "<string>": "example string" },
    web4NFTIds: ["example string"],
    web4NFTs: [{ "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }],
    thumbnail: "<base64-bytes>",
    thumbnailUrl: "example string",
    title: "example string",
    tags: ["example string"]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ParentWeb5NFTCollectionIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web4NFTs": [{ "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }], "Web4NFTIds": ["example string"] }
}
```

---

### `exportWeb4NFTAsync`

Exports a Web4 NFT object.

**POST** `api/nft/export-web4-nft`

**Request**

Body type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.exportWeb4NFTAsync({
    fullPathToExportTo: 'example string',
    providerType: '<providerType>',
    parentWeb5NFTIds: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
    web3NFTs: [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }],
    newlyMintedWeb3NFTs: [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }],
    web3NFTIds: ["example string"]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }
}
```

---

### `exportWeb4NFTToFileAsync`

Exports a Web4 NFT to a JSON file.

**POST** `api/nft/export-web4-nft-to-file/{oasisNFTId}/{fullPathToExportTo}`

Route parameters:

| Field | Type |
| --- | --- |
| `oasisNFTId` | `Guid` |
| `fullPathToExportTo` | `string` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.exportWeb4NFTToFileAsync({
    oasisNFTId: '<oasisNFTId>',
    fullPathToExportTo: '<fullPathToExportTo>',
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
  "result": { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }
}
```

---

### `getNFTProviderFromProviderType`

**GET** `api/nft/get-nft-provider-from-provider-type/{providerType}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOASISNFTProvider`

_No fields._

**Example**

```js
const { isError, message, result } = await oasis.nft.getNFTProviderFromProviderType({
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
  "result": {  }
}
```

---

### `importWeb3NFTAsync`

Imports a Web3 NFT into the OASIS system.

**POST** `api/nft/import-web3-nft`

**Request**

Body type: `IImportWeb3NFTRequest`

| Field | Type |
| --- | --- |
| `ImportedByAvatarId` | `Guid` |
| `Title` | `string` |
| `Description` | `string` |
| `NFTMintedUsingWalletAddress` | `string` |
| `CurrentOwnerWalletAddress` | `string` |
| `NFTTokenAddress` | `string` |
| `OnChainProvider` | `EnumValue<ProviderType>` |
| `OffChainProvider` | `EnumValue<ProviderType>` |
| `StoreNFTMetaDataOnChain` | `bool` |
| `NFTOffChainMetaType` | `EnumValue<NFTOffChainMetaType>` |
| `NFTStandardType` | `EnumValue<NFTStandardType>` |
| `MintTransactionHash` | `string` |
| `MetaData` | `Dictionary<string, string>` |
| `Tags` | `List<string>` |
| `JSONMetaDataURL` | `string` |
| `JSONMetaData` | `string` |
| `UpdateAuthority` | `string` |
| `Symbol` | `string` |
| `SellerFeeBasisPoints` | `uint` |
| `Price` | `decimal` |
| `Discount` | `decimal` |
| `RoyaltyPercentage` | `int` |
| `Image` | `byte[]` |
| `ImageUrl` | `string` |
| `Thumbnail` | `byte[]` |
| `ThumbnailUrl` | `string` |
| `MemoText` | `string` |
| `IsForSale` | `bool?` |
| `SaleStartDate` | `DateTime?` |
| `SaleEndDate` | `DateTime?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.importWeb3NFTAsync({
    importedByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    title: "example string",
    description: "example string",
    nFTMintedUsingWalletAddress: "example string",
    currentOwnerWalletAddress: "example string",
    nFTTokenAddress: "example string",
    onChainProvider: { "Score": 1.0 },
    offChainProvider: { "Score": 1.0 },
    storeNFTMetaDataOnChain: true,
    nFTOffChainMetaType: { "Score": 1.0 },
    nFTStandardType: { "Score": 1.0 },
    mintTransactionHash: "example string",
    metaData: { "<string>": "example string" },
    tags: ["example string"],
    jSONMetaDataURL: "example string",
    jSONMetaData: "example string",
    updateAuthority: "example string",
    symbol: "example string",
    sellerFeeBasisPoints: /* <uint> */,
    price: 1.0,
    discount: 1.0,
    royaltyPercentage: 1,
    image: "<base64-bytes>",
    imageUrl: "example string",
    thumbnail: "<base64-bytes>",
    thumbnailUrl: "example string",
    memoText: "example string",
    isForSale: true,
    saleStartDate: "2026-01-01T00:00:00Z",
    saleEndDate: "2026-01-01T00:00:00Z"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }
}
```

---

### `importWeb4NFTAsync`

Imports a Web4 NFT object.

**POST** `api/nft/import-web4-nft/{importedByAvatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `importedByAvatarId` | `Guid` |

**Request**

Body type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.importWeb4NFTAsync({
    importedByAvatarId: '<importedByAvatarId>',
    providerType: '<providerType>',
    parentWeb5NFTIds: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
    web3NFTs: [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }],
    newlyMintedWeb3NFTs: [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }],
    web3NFTIds: ["example string"]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }
}
```

---

### `importWeb4NFTFromFileAsync`

Imports a Web4 NFT from a JSON file.

**POST** `api/nft/import-web4-nft-from-file/{importedByAvatarId}/{fullPathToOASISNFTJsonFile}`

Route parameters:

| Field | Type |
| --- | --- |
| `importedByAvatarId` | `Guid` |
| `fullPathToOASISNFTJsonFile` | `string` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.importWeb4NFTFromFileAsync({
    importedByAvatarId: '<importedByAvatarId>',
    fullPathToOASISNFTJsonFile: '<fullPathToOASISNFTJsonFile>',
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
  "result": { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }
}
```

---

### `loadAllGeoNFTsAsync`

**GET** `api/nft/load-all-geo-nfts`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4GeoSpatialNFT` (array)

| Field | Type |
| --- | --- |
| `PlacedByAvatarId` | `Guid` |
| `OriginalWeb4OASISNFTId` | `Guid` |
| `GeoNFTMetaDataProvider` | `EnumValue<ProviderType>` |
| `OriginalOASISNFTProviderType` | `EnumValue<ProviderType>` |
| `PlacedOn` | `DateTime` |
| `Lat` | `double` |
| `Long` | `double` |
| `AllowOtherPlayersToAlsoCollect` | `bool` |
| `PermSpawn` | `bool` |
| `GlobalSpawnQuantity` | `int` |
| `PlayerSpawnQuantity` | `int` |
| `RespawnDurationInSeconds` | `int` |
| `Nft3DObject` | `byte[]` |
| `Nft3DObjectURI` | `string` |
| `Nft2DSprite` | `byte[]` |
| `Nft2DSpriteURI` | `string` |
| `SuccessMessageWhenCollected` | `string` |
| `SpawnInSafeZone` | `bool` |
| `SpawnNearPlayer` | `bool` |
| `SpawnWithinXMetersFromPlayer` | `int` |
| `SpawnXMetersAwayFromPlayer` | `int` |
| `IsVisibleOnMap` | `bool` |
| `IsVisibleInInventory` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadAllGeoNFTsAsync({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "PlacedByAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "OriginalWeb4OASISNFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GeoNFTMetaDataProvider": { "Score": 1.0 }, "OriginalOASISNFTProviderType": {}, "PlacedOn": "2026-01-01T00:00:00Z", "Lat": 1.0, "Long": 1.0, "AllowOtherPlayersToAlsoCollect": true, "PermSpawn": true, "GlobalSpawnQuantity": 1, "PlayerSpawnQuantity": 1, "RespawnDurationInSeconds": 1, "Nft3DObject": "<base64-bytes>", "Nft3DObjectURI": "example string", "Nft2DSprite": "<base64-bytes>", "Nft2DSpriteURI": "example string", "SuccessMessageWhenCollected": "example string", "SpawnInSafeZone": true, "SpawnNearPlayer": true, "SpawnWithinXMetersFromPlayer": 1, "SpawnXMetersAwayFromPlayer": 1, "IsVisibleOnMap": true, "IsVisibleInInventory": true }]
}
```

---

### `loadAllGeoNFTsForMintAddressAsync`

**GET** `api/nft/load-all-geo-nfts-for-mint-wallet-address/{mintWalletAddress}`

Route parameters:

| Field | Type |
| --- | --- |
| `mintWalletAddress` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4GeoSpatialNFT` (array)

| Field | Type |
| --- | --- |
| `PlacedByAvatarId` | `Guid` |
| `OriginalWeb4OASISNFTId` | `Guid` |
| `GeoNFTMetaDataProvider` | `EnumValue<ProviderType>` |
| `OriginalOASISNFTProviderType` | `EnumValue<ProviderType>` |
| `PlacedOn` | `DateTime` |
| `Lat` | `double` |
| `Long` | `double` |
| `AllowOtherPlayersToAlsoCollect` | `bool` |
| `PermSpawn` | `bool` |
| `GlobalSpawnQuantity` | `int` |
| `PlayerSpawnQuantity` | `int` |
| `RespawnDurationInSeconds` | `int` |
| `Nft3DObject` | `byte[]` |
| `Nft3DObjectURI` | `string` |
| `Nft2DSprite` | `byte[]` |
| `Nft2DSpriteURI` | `string` |
| `SuccessMessageWhenCollected` | `string` |
| `SpawnInSafeZone` | `bool` |
| `SpawnNearPlayer` | `bool` |
| `SpawnWithinXMetersFromPlayer` | `int` |
| `SpawnXMetersAwayFromPlayer` | `int` |
| `IsVisibleOnMap` | `bool` |
| `IsVisibleInInventory` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadAllGeoNFTsForMintAddressAsync({
    mintWalletAddress: '<mintWalletAddress>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "PlacedByAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "OriginalWeb4OASISNFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GeoNFTMetaDataProvider": { "Score": 1.0 }, "OriginalOASISNFTProviderType": {}, "PlacedOn": "2026-01-01T00:00:00Z", "Lat": 1.0, "Long": 1.0, "AllowOtherPlayersToAlsoCollect": true, "PermSpawn": true, "GlobalSpawnQuantity": 1, "PlayerSpawnQuantity": 1, "RespawnDurationInSeconds": 1, "Nft3DObject": "<base64-bytes>", "Nft3DObjectURI": "example string", "Nft2DSprite": "<base64-bytes>", "Nft2DSpriteURI": "example string", "SuccessMessageWhenCollected": "example string", "SpawnInSafeZone": true, "SpawnNearPlayer": true, "SpawnWithinXMetersFromPlayer": 1, "SpawnXMetersAwayFromPlayer": 1, "IsVisibleOnMap": true, "IsVisibleInInventory": true }]
}
```

---

### `loadAllWeb3NFTsAsync`

Loads all Web3 NFTs (admin only).

**GET** `api/nft/load-all-web3-nfts`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `parentWeb4NFTId` | `Guid (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb3NFT` (array)

| Field | Type |
| --- | --- |
| `ParentWeb4NFTId` | `Guid` |
| `MintTransactionHash` | `string` |
| `VerifyCollectionTransactionHash` | `string` |
| `SendNFTTransactionHash` | `string` |
| `NFTMintedUsingWalletAddress` | `string` |
| `NFTTokenAddress` | `string` |
| `OASISMintWalletAddress` | `string` |
| `UpdateAuthority` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadAllWeb3NFTsAsync({
    parentWeb4NFTId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
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
  "result": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }]
}
```

---

### `loadAllWeb3NFTsForAvatarAsync`

Loads all Web3 NFTs for a specific avatar.

**GET** `api/nft/load-all-web3-nfts-for-avatar/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `parentWeb4NFTId` | `Guid (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb3NFT` (array)

| Field | Type |
| --- | --- |
| `ParentWeb4NFTId` | `Guid` |
| `MintTransactionHash` | `string` |
| `VerifyCollectionTransactionHash` | `string` |
| `SendNFTTransactionHash` | `string` |
| `NFTMintedUsingWalletAddress` | `string` |
| `NFTTokenAddress` | `string` |
| `OASISMintWalletAddress` | `string` |
| `UpdateAuthority` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadAllWeb3NFTsForAvatarAsync({
    avatarId: '<avatarId>',
    parentWeb4NFTId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
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
  "result": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }]
}
```

---

### `loadAllWeb3NFTsForMintAddressAsync`

Loads all Web3 NFTs for a specific mint wallet address.

**GET** `api/nft/load-all-web3-nfts-for-mint-address/{mintWalletAddress}`

Route parameters:

| Field | Type |
| --- | --- |
| `mintWalletAddress` | `string` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `parentWeb4NFTId` | `Guid (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb3NFT` (array)

| Field | Type |
| --- | --- |
| `ParentWeb4NFTId` | `Guid` |
| `MintTransactionHash` | `string` |
| `VerifyCollectionTransactionHash` | `string` |
| `SendNFTTransactionHash` | `string` |
| `NFTMintedUsingWalletAddress` | `string` |
| `NFTTokenAddress` | `string` |
| `OASISMintWalletAddress` | `string` |
| `UpdateAuthority` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadAllWeb3NFTsForMintAddressAsync({
    mintWalletAddress: '<mintWalletAddress>',
    parentWeb4NFTId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
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
  "result": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }]
}
```

---

### `loadAllWeb4GeoNFTsAsync`

**GET** `api/nft/load-all-geo-nfts/{providerType}/{setGlobally}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |
| `setGlobally` | `bool` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4GeoSpatialNFT` (array)

| Field | Type |
| --- | --- |
| `PlacedByAvatarId` | `Guid` |
| `OriginalWeb4OASISNFTId` | `Guid` |
| `GeoNFTMetaDataProvider` | `EnumValue<ProviderType>` |
| `OriginalOASISNFTProviderType` | `EnumValue<ProviderType>` |
| `PlacedOn` | `DateTime` |
| `Lat` | `double` |
| `Long` | `double` |
| `AllowOtherPlayersToAlsoCollect` | `bool` |
| `PermSpawn` | `bool` |
| `GlobalSpawnQuantity` | `int` |
| `PlayerSpawnQuantity` | `int` |
| `RespawnDurationInSeconds` | `int` |
| `Nft3DObject` | `byte[]` |
| `Nft3DObjectURI` | `string` |
| `Nft2DSprite` | `byte[]` |
| `Nft2DSpriteURI` | `string` |
| `SuccessMessageWhenCollected` | `string` |
| `SpawnInSafeZone` | `bool` |
| `SpawnNearPlayer` | `bool` |
| `SpawnWithinXMetersFromPlayer` | `int` |
| `SpawnXMetersAwayFromPlayer` | `int` |
| `IsVisibleOnMap` | `bool` |
| `IsVisibleInInventory` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadAllWeb4GeoNFTsAsync({
    providerType: '<providerType>',
    setGlobally: '<setGlobally>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "PlacedByAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "OriginalWeb4OASISNFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GeoNFTMetaDataProvider": { "Score": 1.0 }, "OriginalOASISNFTProviderType": {}, "PlacedOn": "2026-01-01T00:00:00Z", "Lat": 1.0, "Long": 1.0, "AllowOtherPlayersToAlsoCollect": true, "PermSpawn": true, "GlobalSpawnQuantity": 1, "PlayerSpawnQuantity": 1, "RespawnDurationInSeconds": 1, "Nft3DObject": "<base64-bytes>", "Nft3DObjectURI": "example string", "Nft2DSprite": "<base64-bytes>", "Nft2DSpriteURI": "example string", "SuccessMessageWhenCollected": "example string", "SpawnInSafeZone": true, "SpawnNearPlayer": true, "SpawnWithinXMetersFromPlayer": 1, "SpawnXMetersAwayFromPlayer": 1, "IsVisibleOnMap": true, "IsVisibleInInventory": true }]
}
```

---

### `loadAllWeb4GeoNFTsForAvatarAsync`

**GET** `api/nft/load-all-geo-nfts-for-avatar/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4GeoSpatialNFT` (array)

| Field | Type |
| --- | --- |
| `PlacedByAvatarId` | `Guid` |
| `OriginalWeb4OASISNFTId` | `Guid` |
| `GeoNFTMetaDataProvider` | `EnumValue<ProviderType>` |
| `OriginalOASISNFTProviderType` | `EnumValue<ProviderType>` |
| `PlacedOn` | `DateTime` |
| `Lat` | `double` |
| `Long` | `double` |
| `AllowOtherPlayersToAlsoCollect` | `bool` |
| `PermSpawn` | `bool` |
| `GlobalSpawnQuantity` | `int` |
| `PlayerSpawnQuantity` | `int` |
| `RespawnDurationInSeconds` | `int` |
| `Nft3DObject` | `byte[]` |
| `Nft3DObjectURI` | `string` |
| `Nft2DSprite` | `byte[]` |
| `Nft2DSpriteURI` | `string` |
| `SuccessMessageWhenCollected` | `string` |
| `SpawnInSafeZone` | `bool` |
| `SpawnNearPlayer` | `bool` |
| `SpawnWithinXMetersFromPlayer` | `int` |
| `SpawnXMetersAwayFromPlayer` | `int` |
| `IsVisibleOnMap` | `bool` |
| `IsVisibleInInventory` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadAllWeb4GeoNFTsForAvatarAsync({
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
  "result": [{ "PlacedByAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "OriginalWeb4OASISNFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GeoNFTMetaDataProvider": { "Score": 1.0 }, "OriginalOASISNFTProviderType": {}, "PlacedOn": "2026-01-01T00:00:00Z", "Lat": 1.0, "Long": 1.0, "AllowOtherPlayersToAlsoCollect": true, "PermSpawn": true, "GlobalSpawnQuantity": 1, "PlayerSpawnQuantity": 1, "RespawnDurationInSeconds": 1, "Nft3DObject": "<base64-bytes>", "Nft3DObjectURI": "example string", "Nft2DSprite": "<base64-bytes>", "Nft2DSpriteURI": "example string", "SuccessMessageWhenCollected": "example string", "SpawnInSafeZone": true, "SpawnNearPlayer": true, "SpawnWithinXMetersFromPlayer": 1, "SpawnXMetersAwayFromPlayer": 1, "IsVisibleOnMap": true, "IsVisibleInInventory": true }]
}
```

---

### `loadAllWeb4NFTsAsync`

**GET** `api/nft/load-all-nfts`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT` (array)

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadAllWeb4NFTsAsync({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }]
}
```

---

### `loadAllWeb4NFTsForAvatarAsync`

**GET** `api/nft/load-all-nfts-for_avatar/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT` (array)

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadAllWeb4NFTsForAvatarAsync({
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
  "result": [{ "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }]
}
```

---

### `loadAllWeb4NFTsForMintAddressAsync`

**GET** `api/nft/load-all-nfts-for-mint-wallet-address/{mintWalletAddress}`

Route parameters:

| Field | Type |
| --- | --- |
| `mintWalletAddress` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT` (array)

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadAllWeb4NFTsForMintAddressAsync({
    mintWalletAddress: '<mintWalletAddress>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }]
}
```

---

### `loadWeb3NftByHashAsync`

Loads a Web3 NFT by its on-chain hash.

**GET** `api/nft/load-web3-nft-by-hash/{onChainNftHash}`

Route parameters:

| Field | Type |
| --- | --- |
| `onChainNftHash` | `string` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb3NFT`

| Field | Type |
| --- | --- |
| `ParentWeb4NFTId` | `Guid` |
| `MintTransactionHash` | `string` |
| `VerifyCollectionTransactionHash` | `string` |
| `SendNFTTransactionHash` | `string` |
| `NFTMintedUsingWalletAddress` | `string` |
| `NFTTokenAddress` | `string` |
| `OASISMintWalletAddress` | `string` |
| `UpdateAuthority` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadWeb3NftByHashAsync({
    onChainNftHash: '<onChainNftHash>',
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
  "result": { "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }
}
```

---

### `loadWeb3NftByIdAsync`

Loads a Web3 NFT by its unique identifier.

**GET** `api/nft/load-web3-nft-by-id/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb3NFT`

| Field | Type |
| --- | --- |
| `ParentWeb4NFTId` | `Guid` |
| `MintTransactionHash` | `string` |
| `VerifyCollectionTransactionHash` | `string` |
| `SendNFTTransactionHash` | `string` |
| `NFTMintedUsingWalletAddress` | `string` |
| `NFTTokenAddress` | `string` |
| `OASISMintWalletAddress` | `string` |
| `UpdateAuthority` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadWeb3NftByIdAsync({
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
  "result": { "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }
}
```

---

### `loadWeb4NftByHashAsync`

**GET** `api/nft/load-nft-by-hash/{hash}`

Route parameters:

| Field | Type |
| --- | --- |
| `hash` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadWeb4NftByHashAsync({
    hash: '<hash>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }
}
```

---

### `loadWeb4NftByIdAsync`

Loads an NFT by its unique identifier.

**GET** `api/nft/load-nft-by-id/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.loadWeb4NftByIdAsync({
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
  "result": { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }
}
```

---

### `mintAndPlaceGeoNFTAsync`

**POST** `api/nft/mint-and-place-geo-nft`

**Request**

Body type: `MintAndPlaceGeoSpatialNFTRequest`

| Field | Type |
| --- | --- |
| `MintWalletAddress` | `string` |
| `CollectionPublicKey` | `string?` |
| `Web3NFTs` | `IList<IMintWeb3NFTRequest>` |
| `MintedByAvatarId` | `Guid` |
| `Title` | `string` |
| `Description` | `string` |
| `Image` | `byte[]` |
| `ImageUrl` | `string` |
| `Thumbnail` | `byte[]` |
| `ThumbnailUrl` | `string` |
| `Amount` | `decimal` |
| `Price` | `decimal` |
| `Discount` | `decimal` |
| `RoyaltyPercentage` | `int?` |
| `IsForSale` | `bool?` |
| `SaleStartDate` | `DateTime?` |
| `SaleEndDate` | `DateTime?` |
| `MemoText` | `string` |
| `Token` | `string` |
| `NumberToMint` | `int` |
| `StoreNFTMetaDataOnChain` | `bool` |
| `MetaData` | `Dictionary<string, string>` |
| `OffChainProvider` | `EnumValue<ProviderType>` |
| `OnChainProvider` | `EnumValue<ProviderType>` |
| `NFTStandardType` | `EnumValue<NFTStandardType>` |
| `NFTOffChainMetaType` | `EnumValue<NFTOffChainMetaType>` |
| `Symbol` | `string` |
| `JSONMetaDataURL` | `string` |
| `JSONMetaData` | `string` |
| `WaitTillNFTMinted` | `bool` |
| `WaitForNFTToMintInSeconds` | `int` |
| `AttemptToMintEveryXSeconds` | `int` |
| `SendToAddressAfterMinting` | `string` |
| `SendToAvatarAfterMintingId` | `Guid` |
| `SendToAvatarAfterMintingUsername` | `string` |
| `SendToAvatarAfterMintingEmail` | `string` |
| `WaitTillNFTSent` | `bool` |
| `WaitForNFTToSendInSeconds` | `int` |
| `AttemptToSendEveryXSeconds` | `int` |
| `Tags` | `List<string>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4GeoSpatialNFT`

| Field | Type |
| --- | --- |
| `PlacedByAvatarId` | `Guid` |
| `OriginalWeb4OASISNFTId` | `Guid` |
| `GeoNFTMetaDataProvider` | `EnumValue<ProviderType>` |
| `OriginalOASISNFTProviderType` | `EnumValue<ProviderType>` |
| `PlacedOn` | `DateTime` |
| `Lat` | `double` |
| `Long` | `double` |
| `AllowOtherPlayersToAlsoCollect` | `bool` |
| `PermSpawn` | `bool` |
| `GlobalSpawnQuantity` | `int` |
| `PlayerSpawnQuantity` | `int` |
| `RespawnDurationInSeconds` | `int` |
| `Nft3DObject` | `byte[]` |
| `Nft3DObjectURI` | `string` |
| `Nft2DSprite` | `byte[]` |
| `Nft2DSpriteURI` | `string` |
| `SuccessMessageWhenCollected` | `string` |
| `SpawnInSafeZone` | `bool` |
| `SpawnNearPlayer` | `bool` |
| `SpawnWithinXMetersFromPlayer` | `int` |
| `SpawnXMetersAwayFromPlayer` | `int` |
| `IsVisibleOnMap` | `bool` |
| `IsVisibleInInventory` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.nft.mintAndPlaceGeoNFTAsync({
    mintWalletAddress: "example string",
    collectionPublicKey: "example string",
    web3NFTs: [{ "CollectionPublicKey": "example string", "NFTMetaDataMergeStrategy": {  }, "NFTTagsMergeStrategy": {  }, "NumberToMint": 1, "StoreNFTMetaDataOnChain": true, "OffChainProvider": {  }, "OnChainProvider": {}, "NFTStandardType": {  }, "NFTOffChainMetaType": {  }, "Price": 1.0, "Discount": 1.0, "RoyaltyPercentage": 1, "WaitTillNFTMinted": true, "WaitForNFTToMintInSeconds": 1, "WaitTillNFTVerified": true, "WaitForNFTToVerifyInSeconds": 1, "AttemptToVerifyEveryXSeconds": 1, "WaitTillNFTSent": true, "WaitForNFTToSendInSeconds": 1, "AttemptToSendEveryXSeconds": 1 }],
    mintedByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    title: "example string",
    description: "example string",
    image: "<base64-bytes>",
    imageUrl: "example string",
    thumbnail: "<base64-bytes>",
    thumbnailUrl: "example string",
    amount: 1.0,
    price: 1.0,
    discount: 1.0,
    royaltyPercentage: 1,
    isForSale: true,
    saleStartDate: "2026-01-01T00:00:00Z",
    saleEndDate: "2026-01-01T00:00:00Z",
    memoText: "example string",
    token: "example string",
    numberToMint: 1,
    storeNFTMetaDataOnChain: true,
    metaData: { "<string>": "example string" },
    offChainProvider: { "Score": 1.0 },
    onChainProvider: { "Score": 1.0 },
    nFTStandardType: { "Score": 1.0 },
    nFTOffChainMetaType: { "Score": 1.0 },
    symbol: "example string",
    jSONMetaDataURL: "example string",
    jSONMetaData: "example string",
    waitTillNFTMinted: true,
    waitForNFTToMintInSeconds: 1,
    attemptToMintEveryXSeconds: 1,
    sendToAddressAfterMinting: "example string",
    sendToAvatarAfterMintingId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    sendToAvatarAfterMintingUsername: "example string",
    sendToAvatarAfterMintingEmail: "example string",
    waitTillNFTSent: true,
    waitForNFTToSendInSeconds: 1,
    attemptToSendEveryXSeconds: 1,
    tags: ["example string"]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "PlacedByAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "OriginalWeb4OASISNFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GeoNFTMetaDataProvider": { "Score": 1.0 }, "OriginalOASISNFTProviderType": {}, "PlacedOn": "2026-01-01T00:00:00Z", "Lat": 1.0, "Long": 1.0, "AllowOtherPlayersToAlsoCollect": true, "PermSpawn": true, "GlobalSpawnQuantity": 1, "PlayerSpawnQuantity": 1, "RespawnDurationInSeconds": 1, "Nft3DObject": "<base64-bytes>", "Nft3DObjectURI": "example string", "Nft2DSprite": "<base64-bytes>", "Nft2DSpriteURI": "example string", "SuccessMessageWhenCollected": "example string", "SpawnInSafeZone": true, "SpawnNearPlayer": true, "SpawnWithinXMetersFromPlayer": 1, "SpawnXMetersAwayFromPlayer": 1, "IsVisibleOnMap": true, "IsVisibleInInventory": true }
}
```

---

### `mintNftAsync`

**POST** `api/nft/mint-nft`

**Request**

Body type: `MintNFTTransactionRequest`

| Field | Type |
| --- | --- |
| `CollectionPublicKey` | `string` |
| `Title` | `string` |
| `Description` | `string` |
| `Image` | `byte[]` |
| `ImageUrl` | `string` |
| `Thumbnail` | `byte[]` |
| `ThumbnailUrl` | `string` |
| `Price` | `decimal` |
| `Symbol` | `string` |
| `Discount` | `decimal` |
| `MemoText` | `string` |
| `Token` | `string` |
| `NumberToMint` | `int` |
| `StoreNFTMetaDataOnChain` | `bool` |
| `MetaData` | `Dictionary<string, object>` |
| `OffChainProvider` | `string` |
| `OnChainProvider` | `string` |
| `NFTOffChainMetaType` | `string` |
| `JSONMetaDataURL` | `string` |
| `NFTStandardType` | `string` |
| `SendToAddressAfterMinting` | `string` |
| `SendToAvatarAfterMintingId` | `string` |
| `SendToAvatarAfterMintingUsername` | `string` |
| `SendToAvatarAfterMintingEmail` | `string` |
| `WaitTillNFTMinted` | `bool` |
| `WaitForNFTToMintInSeconds` | `int` |
| `AttemptToMintEveryXSeconds` | `int` |
| `WaitTillNFTVerified` | `bool` |
| `WaitForNFTToVerifyInSeconds` | `int` |
| `AttemptToVerifyEveryXSeconds` | `int` |
| `WaitTillNFTSent` | `bool` |
| `WaitForNFTToSendInSeconds` | `int` |
| `AttemptToSendEveryXSeconds` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.mintNftAsync({
    collectionPublicKey: "example string",
    title: "example string",
    description: "example string",
    image: "<base64-bytes>",
    imageUrl: "example string",
    thumbnail: "<base64-bytes>",
    thumbnailUrl: "example string",
    price: 1.0,
    symbol: "example string",
    discount: 1.0,
    memoText: "example string",
    token: "example string",
    numberToMint: 1,
    storeNFTMetaDataOnChain: true,
    metaData: { "<string>": {} },
    offChainProvider: "example string",
    onChainProvider: "example string",
    nFTOffChainMetaType: "example string",
    jSONMetaDataURL: "example string",
    nFTStandardType: "example string",
    sendToAddressAfterMinting: "example string",
    sendToAvatarAfterMintingId: "example string",
    sendToAvatarAfterMintingUsername: "example string",
    sendToAvatarAfterMintingEmail: "example string",
    waitTillNFTMinted: true,
    waitForNFTToMintInSeconds: 1,
    attemptToMintEveryXSeconds: 1,
    waitTillNFTVerified: true,
    waitForNFTToVerifyInSeconds: 1,
    attemptToVerifyEveryXSeconds: 1,
    waitTillNFTSent: true,
    waitForNFTToSendInSeconds: 1,
    attemptToSendEveryXSeconds: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }
}
```

---

### `placeGeoNFTAsync`

**POST** `api/nft/place-geo-nft`

**Request**

Body type: `PlaceGeoSpatialNFTRequest`

| Field | Type |
| --- | --- |
| `OriginalOASISNFTId` | `Guid` |
| `OriginalOASISNFTOffChainProvider` | `string` |
| `NFTHash` | `string` |
| `NFTURL` | `string` |
| `PlacedByAvatarId` | `Guid` |
| `Lat` | `long` |
| `Long` | `long` |
| `AllowOtherPlayersToAlsoCollect` | `bool` |
| `PermSpawn` | `bool` |
| `GlobalSpawnQuantity` | `int` |
| `PlayerSpawnQuantity` | `int` |
| `RespawnDurationInSeconds` | `int` |
| `Nft3DObject` | `byte[]` |
| `Nft3DObjectURI` | `string` |
| `Nft2DSprite` | `byte[]` |
| `Nft2DSpriteURI` | `string` |
| `GeoNFTMetaDataProvider` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4GeoSpatialNFT`

| Field | Type |
| --- | --- |
| `PlacedByAvatarId` | `Guid` |
| `OriginalWeb4OASISNFTId` | `Guid` |
| `GeoNFTMetaDataProvider` | `EnumValue<ProviderType>` |
| `OriginalOASISNFTProviderType` | `EnumValue<ProviderType>` |
| `PlacedOn` | `DateTime` |
| `Lat` | `double` |
| `Long` | `double` |
| `AllowOtherPlayersToAlsoCollect` | `bool` |
| `PermSpawn` | `bool` |
| `GlobalSpawnQuantity` | `int` |
| `PlayerSpawnQuantity` | `int` |
| `RespawnDurationInSeconds` | `int` |
| `Nft3DObject` | `byte[]` |
| `Nft3DObjectURI` | `string` |
| `Nft2DSprite` | `byte[]` |
| `Nft2DSpriteURI` | `string` |
| `SuccessMessageWhenCollected` | `string` |
| `SpawnInSafeZone` | `bool` |
| `SpawnNearPlayer` | `bool` |
| `SpawnWithinXMetersFromPlayer` | `int` |
| `SpawnXMetersAwayFromPlayer` | `int` |
| `IsVisibleOnMap` | `bool` |
| `IsVisibleInInventory` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.nft.placeGeoNFTAsync({
    originalOASISNFTId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    originalOASISNFTOffChainProvider: "example string",
    nFTHash: "example string",
    nFTURL: "example string",
    placedByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    lat: 1,
    long: 1,
    allowOtherPlayersToAlsoCollect: true,
    permSpawn: true,
    globalSpawnQuantity: 1,
    playerSpawnQuantity: 1,
    respawnDurationInSeconds: 1,
    nft3DObject: "<base64-bytes>",
    nft3DObjectURI: "example string",
    nft2DSprite: "<base64-bytes>",
    nft2DSpriteURI: "example string",
    geoNFTMetaDataProvider: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "PlacedByAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "OriginalWeb4OASISNFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GeoNFTMetaDataProvider": { "Score": 1.0 }, "OriginalOASISNFTProviderType": {}, "PlacedOn": "2026-01-01T00:00:00Z", "Lat": 1.0, "Long": 1.0, "AllowOtherPlayersToAlsoCollect": true, "PermSpawn": true, "GlobalSpawnQuantity": 1, "PlayerSpawnQuantity": 1, "RespawnDurationInSeconds": 1, "Nft3DObject": "<base64-bytes>", "Nft3DObjectURI": "example string", "Nft2DSprite": "<base64-bytes>", "Nft2DSpriteURI": "example string", "SuccessMessageWhenCollected": "example string", "SpawnInSafeZone": true, "SpawnNearPlayer": true, "SpawnWithinXMetersFromPlayer": 1, "SpawnXMetersAwayFromPlayer": 1, "IsVisibleOnMap": true, "IsVisibleInInventory": true }
}
```

---

### `remintNftAsync`

Remints an existing NFT.

**POST** `api/nft/remint-nft`

**Request**

Body type: `RemintWeb4NFTRequest`

| Field | Type |
| --- | --- |
| `Web4NFT` | `IWeb4NFT` |
| `Web3NFTs` | `IList<IMintWeb3NFTRequest>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.remintNftAsync({
    web4NFT: { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] },
    web3NFTs: [{ "CollectionPublicKey": "example string", "NFTMetaDataMergeStrategy": {  }, "NFTTagsMergeStrategy": {  }, "NumberToMint": 1, "StoreNFTMetaDataOnChain": true, "OffChainProvider": {  }, "OnChainProvider": {}, "NFTStandardType": {  }, "NFTOffChainMetaType": {  }, "Price": 1.0, "Discount": 1.0, "RoyaltyPercentage": 1, "WaitTillNFTMinted": true, "WaitForNFTToMintInSeconds": 1, "WaitTillNFTVerified": true, "WaitForNFTToVerifyInSeconds": 1, "AttemptToVerifyEveryXSeconds": 1, "WaitTillNFTSent": true, "WaitForNFTToSendInSeconds": 1, "AttemptToSendEveryXSeconds": 1 }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }
}
```

---

### `searchWeb4GeoNFTsAsync`

Searches for Web4 Geo NFTs.

**GET** `api/nft/search-web4-geo-nfts/{searchTerm}/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `searchTerm` | `string` |
| `avatarId` | `Guid` |

**Request**

Body type: `Dictionary<string, string>` - a key/value map keyed by `string`, each value a `string`.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4GeoSpatialNFT` (array)

| Field | Type |
| --- | --- |
| `PlacedByAvatarId` | `Guid` |
| `OriginalWeb4OASISNFTId` | `Guid` |
| `GeoNFTMetaDataProvider` | `EnumValue<ProviderType>` |
| `OriginalOASISNFTProviderType` | `EnumValue<ProviderType>` |
| `PlacedOn` | `DateTime` |
| `Lat` | `double` |
| `Long` | `double` |
| `AllowOtherPlayersToAlsoCollect` | `bool` |
| `PermSpawn` | `bool` |
| `GlobalSpawnQuantity` | `int` |
| `PlayerSpawnQuantity` | `int` |
| `RespawnDurationInSeconds` | `int` |
| `Nft3DObject` | `byte[]` |
| `Nft3DObjectURI` | `string` |
| `Nft2DSprite` | `byte[]` |
| `Nft2DSpriteURI` | `string` |
| `SuccessMessageWhenCollected` | `string` |
| `SpawnInSafeZone` | `bool` |
| `SpawnNearPlayer` | `bool` |
| `SpawnWithinXMetersFromPlayer` | `int` |
| `SpawnXMetersAwayFromPlayer` | `int` |
| `IsVisibleOnMap` | `bool` |
| `IsVisibleInInventory` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.nft.searchWeb4GeoNFTsAsync({
    searchTerm: '<searchTerm>',
    avatarId: '<avatarId>',
    metaKeyValuePairMatchMode: '<metaKeyValuePairMatchMode>',
    searchOnlyForCurrentAvatar: true,
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
  "result": [{ "PlacedByAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "OriginalWeb4OASISNFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "GeoNFTMetaDataProvider": { "Score": 1.0 }, "OriginalOASISNFTProviderType": {}, "PlacedOn": "2026-01-01T00:00:00Z", "Lat": 1.0, "Long": 1.0, "AllowOtherPlayersToAlsoCollect": true, "PermSpawn": true, "GlobalSpawnQuantity": 1, "PlayerSpawnQuantity": 1, "RespawnDurationInSeconds": 1, "Nft3DObject": "<base64-bytes>", "Nft3DObjectURI": "example string", "Nft2DSprite": "<base64-bytes>", "Nft2DSpriteURI": "example string", "SuccessMessageWhenCollected": "example string", "SpawnInSafeZone": true, "SpawnNearPlayer": true, "SpawnWithinXMetersFromPlayer": 1, "SpawnXMetersAwayFromPlayer": 1, "IsVisibleOnMap": true, "IsVisibleInInventory": true }]
}
```

---

### `searchWeb4NFTCollectionsAsync`

Searches for Web4 NFT collections.

**GET** `api/nft/search-web4-nft-collections/{searchTerm}/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `searchTerm` | `string` |
| `avatarId` | `Guid` |

**Request**

Body type: `Dictionary<string, string>` - a key/value map keyed by `string`, each value a `string`.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFTCollection` (array)

| Field | Type |
| --- | --- |
| `ParentWeb5NFTCollectionIds` | `IList<Guid>` |
| `Web4NFTs` | `List<IWeb4NFT>` |
| `Web4NFTIds` | `List<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.searchWeb4NFTCollectionsAsync({
    searchTerm: '<searchTerm>',
    avatarId: '<avatarId>',
    metaKeyValuePairMatchMode: '<metaKeyValuePairMatchMode>',
    searchOnlyForCurrentAvatar: true,
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
  "result": [{ "ParentWeb5NFTCollectionIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web4NFTs": [{ "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }], "Web4NFTIds": ["example string"] }]
}
```

---

### `searchWeb4NFTsAsync`

Searches for Web4 NFTs.

**GET** `api/nft/search-web4-nfts/{searchTerm}/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `searchTerm` | `string` |
| `avatarId` | `Guid` |

**Request**

Body type: `Dictionary<string, string>` - a key/value map keyed by `string`, each value a `string`.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT` (array)

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.searchWeb4NFTsAsync({
    searchTerm: '<searchTerm>',
    avatarId: '<avatarId>',
    metaKeyValuePairMatchMode: '<metaKeyValuePairMatchMode>',
    searchOnlyForCurrentAvatar: true,
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
  "result": [{ "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }]
}
```

---

### `sendNFTAsync`

**POST** `api/nft/send-nft`

**Request**

Body type: `NFTWalletTransactionRequest`

| Field | Type |
| --- | --- |
| `MintWalletAddress` | `string` |
| `FromWalletAddress` | `string` |
| `ToWalletAddress` | `string` |
| `FromToken` | `string` |
| `ToToken` | `string` |
| `FromProvider` | `string` |
| `ToProvider` | `string` |
| `Amount` | `decimal` |
| `MemoText` | `string` |
| `WaitTillNFTSent` | `bool` |
| `WaitForNFTToSendInSeconds` | `int` |
| `AttemptToSendEveryXSeconds` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ISendWeb4NFTResponse`

| Field | Type |
| --- | --- |
| `SendTransactionResult` | `string` |
| `LockTransactionResult` | `string` |
| `BurnTransactionResult` | `string` |
| `UnlockTransactionResult` | `string` |
| `BridgeOrderId` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.nft.sendNFTAsync({
    mintWalletAddress: "example string",
    fromWalletAddress: "example string",
    toWalletAddress: "example string",
    fromToken: "example string",
    toToken: "example string",
    fromProvider: "example string",
    toProvider: "example string",
    amount: 1.0,
    memoText: "example string",
    waitTillNFTSent: true,
    waitForNFTToSendInSeconds: 1,
    attemptToSendEveryXSeconds: 1
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

### `updateWeb4NftAsync`

**POST** `api/nft/update-web4-nft`

**Request**

Body type: `IUpdateWeb4NFTRequest`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `MintedByAvatarId` | `Guid` |
| `Description` | `string` |
| `Discount` | `decimal?` |
| `Image` | `byte[]` |
| `ImageUrl` | `string` |
| `MetaData` | `Dictionary<string, string>` |
| `Price` | `decimal?` |
| `Tags` | `List<string>` |
| `Thumbnail` | `byte[]` |
| `ThumbnailUrl` | `string` |
| `Title` | `string` |
| `ModifiedByAvatarId` | `Guid` |
| `RoyaltyPercentage` | `int?` |
| `PreviousOwnerAvatarId` | `Guid` |
| `CurrentOwnerAvatarId` | `Guid` |
| `IsForSale` | `bool?` |
| `SaleStartDate` | `DateTime?` |
| `SaleEndDate` | `DateTime?` |
| `TotalNumberOfSales` | `int?` |
| `LastSaleTransactionHash` | `string` |
| `LastSoldByAvatarId` | `Guid` |
| `LastPurchasedByAvatarId` | `Guid` |
| `LastSaleQuantity` | `int?` |
| `LastSaleDiscount` | `decimal?` |
| `LastSaleTax` | `decimal?` |
| `SalesHistory` | `string` |
| `LastSalePrice` | `decimal?` |
| `LastSaleAmount` | `decimal?` |
| `LastSaleDate` | `DateTime` |
| `UpdateAllChildWeb3NFTs` | `bool` |
| `UpdateChildWebNFTIds` | `IList<string>` |
| `ProviderType` | `EnumValue<ProviderType>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IWeb4NFT`

| Field | Type |
| --- | --- |
| `ParentWeb5NFTIds` | `IList<Guid>` |
| `Web3NFTs` | `IList<IWeb3NFT>` |
| `NewlyMintedWeb3NFTs` | `IList<IWeb3NFT>` |
| `Web3NFTIds` | `IList<string>` |

**Example**

```js
const { isError, message, result } = await oasis.nft.updateWeb4NftAsync({
    providerType: { "Score": 1.0 },
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    mintedByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    description: "example string",
    discount: 1.0,
    image: "<base64-bytes>",
    imageUrl: "example string",
    metaData: { "<string>": "example string" },
    price: 1.0,
    tags: ["example string"],
    thumbnail: "<base64-bytes>",
    thumbnailUrl: "example string",
    title: "example string",
    modifiedByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    royaltyPercentage: 1,
    previousOwnerAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    currentOwnerAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    isForSale: true,
    saleStartDate: "2026-01-01T00:00:00Z",
    saleEndDate: "2026-01-01T00:00:00Z",
    totalNumberOfSales: 1,
    lastSaleTransactionHash: "example string",
    lastSoldByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    lastPurchasedByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    lastSaleQuantity: 1,
    lastSaleDiscount: 1.0,
    lastSaleTax: 1.0,
    salesHistory: "example string",
    lastSalePrice: 1.0,
    lastSaleAmount: 1.0,
    lastSaleDate: "2026-01-01T00:00:00Z",
    updateAllChildWeb3NFTs: true,
    updateChildWebNFTIds: ["example string"]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ParentWeb5NFTIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "Web3NFTs": [{ "ParentWeb4NFTId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "MintTransactionHash": "example string", "VerifyCollectionTransactionHash": "example string", "SendNFTTransactionHash": "example string", "NFTMintedUsingWalletAddress": "example string", "NFTTokenAddress": "example string", "OASISMintWalletAddress": "example string", "UpdateAuthority": "example string" }], "NewlyMintedWeb3NFTs": [], "Web3NFTIds": ["example string"] }
}
```

