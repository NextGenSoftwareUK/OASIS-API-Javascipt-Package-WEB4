# Nft — `oasis.nft`

Source controller: [`NftController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/NftController.cs)
Route prefix: `api/nft`
50 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `collectGeoNFT` | POST | `api/nft/collect-geo-nft/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `collectGeoNFTAsync` | POST | `api/nft/collect-geo-nft` | – |
| `collectNFT` | POST | `api/nft/collect-nft/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `collectNFTAsync` | POST | `api/nft/collect-nft` | – |
| `createWeb4NFTCollectionAsync` | POST | `api/nft/create-web4-nft-collection` | – |
| `exportWeb4NFTAsync` | POST | `api/nft/export-web4-nft` | – |
| `exportWeb4NFTToFileAsync` | POST | `api/nft/export-web4-nft-to-file/{oasisNFTId}/{fullPathToExportTo}` | `oasisNFTId`, `fullPathToExportTo` |
| `geoNFTCollectionStatus` | POST | `api/nft/geo-nft-collection-status` | – |
| `getLoadGeoNftByIdByIdProviderType` | GET | `api/nft/load-geo-nft-by-id/{id}/{providerType}/{setGlobally}` | `id`, `providerType`, `setGlobally` |
| `getNFTProviderFromProviderType` | GET | `api/nft/get-nft-provider-from-provider-type/{providerType}` | `providerType` |
| `importWeb3NFTAsync` | POST | `api/nft/import-web3-nft` | – |
| `importWeb4NFTAsync` | POST | `api/nft/import-web4-nft/{importedByAvatarId}` | `importedByAvatarId` |
| `importWeb4NFTFromFileAsync` | POST | `api/nft/import-web4-nft-from-file/{importedByAvatarId}/{fullPathToOASISNFTJsonFile}` | `importedByAvatarId`, `fullPathToOASISNFTJsonFile` |
| `loadAllGeoNFTsAsync` | GET | `api/nft/load-all-geo-nfts` | – |
| `loadAllGeoNFTsForMintAddress` | GET | `api/nft/load-all-geo-nfts-for-mint-wallet-address/{mintWalletAddress}/{providerType}/{setGlobally}` | `mintWalletAddress`, `providerType`, `setGlobally` |
| `loadAllGeoNFTsForMintAddressAsync` | GET | `api/nft/load-all-geo-nfts-for-mint-wallet-address/{mintWalletAddress}` | `mintWalletAddress` |
| `loadAllWeb3NFTsAsync` | GET | `api/nft/load-all-web3-nfts` | – |
| `loadAllWeb3NFTsForAvatarAsync` | GET | `api/nft/load-all-web3-nfts-for-avatar/{avatarId}` | `avatarId` |
| `loadAllWeb3NFTsForMintAddressAsync` | GET | `api/nft/load-all-web3-nfts-for-mint-address/{mintWalletAddress}` | `mintWalletAddress` |
| `loadAllWeb4GeoNFTsAsync` | GET | `api/nft/load-all-geo-nfts/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `loadAllWeb4GeoNFTsForAvatar` | GET | `api/nft/load-all-geo-nfts-for-avatar/{avatarId}/{providerType}/{setGlobally}` | `avatarId`, `providerType`, `setGlobally` |
| `loadAllWeb4GeoNFTsForAvatarAsync` | GET | `api/nft/load-all-geo-nfts-for-avatar/{avatarId}` | `avatarId` |
| `loadAllWeb4NFTs` | GET | `api/nft/load-all-nfts/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `loadAllWeb4NFTsAsync` | GET | `api/nft/load-all-nfts` | – |
| `loadAllWeb4NFTsForAvatar` | GET | `api/nft/load-all-nfts-for-avatar/{avatarId}/{providerType}/{setGlobally}` | `avatarId`, `providerType`, `setGlobally` |
| `loadAllWeb4NFTsForAvatarAsync` | GET | `api/nft/load-all-nfts-for-avatar/{avatarId}` | `avatarId` |
| `loadAllWeb4NFTsForMintAddress` | GET | `api/nft/load-all-nfts-for-mint-wallet-address/{mintWalletAddress}/{providerType}/{setGlobally}` | `mintWalletAddress`, `providerType`, `setGlobally` |
| `loadAllWeb4NFTsForMintAddressAsync` | GET | `api/nft/load-all-nfts-for-mint-wallet-address/{mintWalletAddress}` | `mintWalletAddress` |
| `loadWeb3NftByHashAsync` | GET | `api/nft/load-web3-nft-by-hash/{onChainNftHash}` | `onChainNftHash` |
| `loadWeb3NftByIdAsync` | GET | `api/nft/load-web3-nft-by-id/{id}` | `id` |
| `loadWeb4GeoNftById` | GET | `api/nft/load-geo-nft-by-id/{id}` | `id` |
| `loadWeb4GeoNFTCollection` | GET | `api/nft/load-web4-geo-nft-collection/{id}` | `id` |
| `loadWeb4NftByHash` | GET | `api/nft/load-nft-by-hash/{hash}/{providerType}/{setGlobally}` | `hash`, `providerType`, `setGlobally` |
| `loadWeb4NftByHashAsync` | GET | `api/nft/load-nft-by-hash/{hash}` | `hash` |
| `loadWeb4NftById` | GET | `api/nft/load-nft-by-id/{id}/{providerType}/{setGlobally}` | `id`, `providerType`, `setGlobally` |
| `loadWeb4NftByIdAsync` | GET | `api/nft/load-nft-by-id/{id}` | `id` |
| `loadWeb4NFTCollection` | GET | `api/nft/load-web4-nft-collection/{id}` | `id` |
| `mintAndPlaceGeoNFTAsync` | POST | `api/nft/mint-and-place-geo-nft` | – |
| `mintNftAsync` | POST | `api/nft/mint-nft` | – |
| `mintOnChainCollectionNFT` | POST | `api/nft/mint-on-chain-collection-nft` | – |
| `placeGeoNFTAsync` | POST | `api/nft/place-geo-nft` | – |
| `remintNftAsync` | POST | `api/nft/remint-nft` | – |
| `searchWeb4GeoNFTsAsync` | GET | `api/nft/search-web4-geo-nfts/{searchTerm}/{avatarId}` | `searchTerm`, `avatarId` |
| `searchWeb4NFTCollectionsAsync` | GET | `api/nft/search-web4-nft-collections/{searchTerm}/{avatarId}` | `searchTerm`, `avatarId` |
| `searchWeb4NFTsAsync` | GET | `api/nft/search-web4-nfts/{searchTerm}/{avatarId}` | `searchTerm`, `avatarId` |
| `sendNFTAsync` | POST | `api/nft/send-nft` | – |
| `setCollectionSize` | POST | `api/nft/set-collection-size` | – |
| `updateGeoNFT` | PUT | `api/nft/geo-nft/{id}` | `id` |
| `updateWeb4Nft` | POST | `api/nft/update-web4-nft/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `updateWeb4NftAsync` | POST | `api/nft/update-web4-nft` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.nft.collectGeoNFT({
    providerType: '<providerType>',
    setGlobally: '<setGlobally>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
