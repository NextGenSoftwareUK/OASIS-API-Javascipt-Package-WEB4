# Wallet — `oasis.wallet`

Source controller: [`WalletController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/WalletController.cs)
Route prefix: `api/wallet`
41 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `burnToken` | POST | `api/wallet/burn-token` | – |
| `createToken` | POST | `api/wallet/create-token` | – |
| `createWalletForAvatarByEmailAsync` | POST | `api/wallet/avatar/email/{email}/create-wallet` | `email` |
| `createWalletForAvatarByIdAsync` | POST | `api/wallet/avatar/{avatarId}/create-wallet` | `avatarId` |
| `createWalletForAvatarByUsernameAsync` | POST | `api/wallet/avatar/username/{username}/create-wallet` | `username` |
| `getAvatarDefaultWalletByEmailAsync` | GET | `api/wallet/avatar/email/{email}/default-wallet` | `email` |
| `getAvatarDefaultWalletByIdAsync` | GET | `api/wallet/avatar/{id}/default-wallet` | `id` |
| `getAvatarDefaultWalletByUsernameAsync` | GET | `api/wallet/avatar/username/{username}/default-wallet/{showOnlyDefault}/{decryptPrivateKeys}` | `username`, `showOnlyDefault`, `decryptPrivateKeys` |
| `getCurrentAvatarWalletSummary` | GET | `api/wallet/current-avatar/summary` | – |
| `getPortfolioValueAsync` | GET | `api/wallet/avatar/{avatarId}/portfolio/value` | `avatarId` |
| `getSupportedChains` | GET | `api/wallet/supported-chains` | – |
| `getWalletAnalyticsAsync` | GET | `api/wallet/avatar/{avatarId}/wallet/{walletId}/analytics` | `avatarId`, `walletId` |
| `getWalletsByChainAsync` | GET | `api/wallet/avatar/{avatarId}/wallets/chain/{chain}` | `avatarId`, `chain` |
| `getWalletThatPublicKeyBelongsTo` | GET | `api/wallet/find-wallet` | – |
| `getWalletTokensAsync` | GET | `api/wallet/avatar/{avatarId}/wallet/{walletId}/tokens` | `avatarId`, `walletId` |
| `importWalletUsingPrivateKeyByEmail` | POST | `api/wallet/avatar/email/{email}/import/private-key` | `email` |
| `importWalletUsingPrivateKeyById` | POST | `api/wallet/avatar/{avatarId}/import/private-key` | `avatarId` |
| `importWalletUsingPrivateKeyByUsername` | POST | `api/wallet/avatar/username/{username}/import/private-key` | `username` |
| `importWalletUsingPublicKeyByEmail` | POST | `api/wallet/avatar/email/{email}/import/public-key` | `email` |
| `importWalletUsingPublicKeyById` | POST | `api/wallet/avatar/{avatarId}/import/public-key` | `avatarId` |
| `importWalletUsingPublicKeyByUsername` | POST | `api/wallet/avatar/username/{username}/import/public-key` | `username` |
| `importWalletUsingSecretPhraseByEmail` | POST | `api/wallet/avatar/email/{email}/import/secret-phrase` | `email` |
| `importWalletUsingSecretPhraseById` | POST | `api/wallet/avatar/{avatarId}/import/secret-phrase` | `avatarId` |
| `importWalletUsingSecretPhraseByUsername` | POST | `api/wallet/avatar/username/{username}/import/secret-phrase` | `username` |
| `loadProviderWalletsForAvatarByEmail` | GET | `api/wallet/avatar/email/{email}/wallets/{showOnlyDefault}/{decryptPrivateKeys}/{providerType}` | `email`, `showOnlyDefault`, `decryptPrivateKeys`, `providerType` |
| `loadProviderWalletsForAvatarByEmailAsync` | GET | `api/wallet/avatar/email/{email}/wallets` | `email` |
| `loadProviderWalletsForAvatarByIdAsync` | GET | `api/wallet/avatar/{id}/wallets/{showOnlyDefault}/{decryptPrivateKeys}` | `id`, `showOnlyDefault`, `decryptPrivateKeys` |
| `loadProviderWalletsForAvatarByUsernameAsync` | GET | `api/wallet/avatar/username/{username}/wallets/{showOnlyDefault}/{decryptPrivateKeys}` | `username`, `showOnlyDefault`, `decryptPrivateKeys` |
| `lockToken` | POST | `api/wallet/lock-token` | – |
| `saveProviderWalletsForAvatarByEmailAsync` | POST | `api/wallet/avatar/email/{email}/wallets` | `email` |
| `saveProviderWalletsForAvatarByIdAsync` | POST | `api/wallet/avatar/{id}/wallets` | `id` |
| `saveProviderWalletsForAvatarByUsernameAsync` | POST | `api/wallet/avatar/username/{username}/wallets` | `username` |
| `sendTokenAsync` | POST | `api/wallet/send-token` | – |
| `setAvatarDefaultWalletByEmailAsync` | POST | `api/wallet/avatar/email/{email}/default-wallet/{walletId}` | `email`, `walletId` |
| `setAvatarDefaultWalletByIdAsync` | POST | `api/wallet/avatar/{id}/default-wallet/{walletId}` | `id`, `walletId` |
| `setAvatarDefaultWalletByUsernameAsync` | POST | `api/wallet/avatar/username/{username}/default-wallet/{walletId}` | `username`, `walletId` |
| `transferBetweenWalletsAsync` | POST | `api/wallet/transfer` | – |
| `unlockToken` | POST | `api/wallet/unlock-token` | – |
| `updateWalletForAvatarByEmailAsync` | PUT | `api/wallet/avatar/email/{email}/wallet/{walletId}` | `email`, `walletId` |
| `updateWalletForAvatarByIdAsync` | PUT | `api/wallet/avatar/{avatarId}/wallet/{walletId}` | `avatarId`, `walletId` |
| `updateWalletForAvatarByUsernameAsync` | PUT | `api/wallet/avatar/username/{username}/wallet/{walletId}` | `username`, `walletId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.wallet.burnToken({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
