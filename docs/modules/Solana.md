# Solana — `oasis.solana`

Source controller: [`SolanaController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SolanaController.cs)
Route prefix: `api/solana`
2 operation(s).

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

### `mintNft`

Mint NFT (non-fungible token)

**POST** `api/solana/Mint`

**Request**

Body type: `MintWeb3NFTRequest`

| Field | Type |
| --- | --- |
| `CollectionPublicKey` | `string?` |
| `Price` | `decimal?` |
| `Discount` | `decimal?` |
| `RoyaltyPercentage` | `int?` |
| `NumberToMint` | `int?` |
| `StoreNFTMetaDataOnChain` | `bool?` |
| `OffChainProvider` | `ProviderType?` |
| `OnChainProvider` | `ProviderType?` |
| `NFTStandardType` | `NFTStandardType?` |
| `NFTOffChainMetaType` | `NFTOffChainMetaType?` |
| `NFTTagsMergeStrategy` | `NFTTagsMergeStrategy` |
| `NFTMetaDataMergeStrategy` | `NFTMetaDataMergeStrategy` |
| `WaitTillNFTMinted` | `bool?` |
| `WaitForNFTToMintInSeconds` | `int?` |
| `AttemptToMintEveryXSeconds` | `int?` |
| `WaitTillNFTVerified` | `bool?` |
| `WaitForNFTToVerifyInSeconds` | `int?` |
| `AttemptToVerifyEveryXSeconds` | `int?` |
| `WaitTillNFTSent` | `bool?` |
| `WaitForNFTToSendInSeconds` | `int?` |
| `AttemptToSendEveryXSeconds` | `int?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `MintNftResult`

| Field | Type |
| --- | --- |
| `MintAccount` | `string` |
| `Network` | `string` |
| `VerifyCollectionTransactionHash` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.solana.mintNft({
    collectionPublicKey: "example string",
    price: 1.0,
    discount: 1.0,
    royaltyPercentage: 1,
    numberToMint: 1,
    storeNFTMetaDataOnChain: true,
    offChainProvider: {  },
    onChainProvider: {  },
    nFTStandardType: {  },
    nFTOffChainMetaType: /* <NFTOffChainMetaType> */,
    nFTTagsMergeStrategy: {  },
    nFTMetaDataMergeStrategy: {  },
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
  "result": { "MintAccount": "example string", "Network": "example string", "VerifyCollectionTransactionHash": "example string" }
}
```

---

### `sendTransaction`

Handles a transaction between accounts with a specific Lampposts size

**POST** `api/solana/Send`

**Request**

Body type: `SendTransactionRequest`

| Field | Type |
| --- | --- |
| `Lampposts` | `ulong` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `SendTransactionResult`

_No fields._

**Example**

```js
const { isError, message, result } = await oasis.solana.sendTransaction({
    lampposts: /* <ulong> */
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

