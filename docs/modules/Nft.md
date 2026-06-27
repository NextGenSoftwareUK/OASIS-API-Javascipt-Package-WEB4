# Nft — `oasis.nft`

Source controller: [`NftController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/NftController.cs)
Route prefix: `api/nft`
32 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `collectGeoNFTAsync` | POST | `api/nft` | – |
| `collectNFTAsync` | POST | `api/nft` | – |
| `createWeb4NFTCollectionAsync` | POST | `api/nft` | – |
| `exportWeb4NFTAsync` | POST | `api/nft` | – |
| `exportWeb4NFTToFileAsync` | POST | `api/nft` | – |
| `getNFTProviderFromProviderType` | GET | `api/nft` | – |
| `importWeb3NFTAsync` | POST | `api/nft` | – |
| `importWeb4NFTAsync` | POST | `api/nft` | – |
| `importWeb4NFTFromFileAsync` | POST | `api/nft` | – |
| `loadAllGeoNFTsAsync` | GET | `api/nft` | – |
| `loadAllGeoNFTsForMintAddressAsync` | GET | `api/nft` | – |
| `loadAllWeb3NFTsAsync` | GET | `api/nft` | – |
| `loadAllWeb3NFTsForAvatarAsync` | GET | `api/nft` | – |
| `loadAllWeb3NFTsForMintAddressAsync` | GET | `api/nft` | – |
| `loadAllWeb4GeoNFTsAsync` | GET | `api/nft` | – |
| `loadAllWeb4GeoNFTsForAvatarAsync` | GET | `api/nft` | – |
| `loadAllWeb4NFTsAsync` | GET | `api/nft` | – |
| `loadAllWeb4NFTsForAvatarAsync` | GET | `api/nft` | – |
| `loadAllWeb4NFTsForMintAddressAsync` | GET | `api/nft` | – |
| `loadWeb3NftByHashAsync` | GET | `api/nft` | – |
| `loadWeb3NftByIdAsync` | GET | `api/nft` | – |
| `loadWeb4NftByHashAsync` | GET | `api/nft` | – |
| `loadWeb4NftByIdAsync` | GET | `api/nft` | – |
| `mintAndPlaceGeoNFTAsync` | POST | `api/nft` | – |
| `mintNftAsync` | POST | `api/nft` | – |
| `placeGeoNFTAsync` | POST | `api/nft` | – |
| `remintNftAsync` | POST | `api/nft` | – |
| `searchWeb4GeoNFTsAsync` | GET | `api/nft` | – |
| `searchWeb4NFTCollectionsAsync` | GET | `api/nft` | – |
| `searchWeb4NFTsAsync` | GET | `api/nft` | – |
| `sendNFTAsync` | POST | `api/nft` | – |
| `updateWeb4NftAsync` | POST | `api/nft` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.nft.collectGeoNFTAsync({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
