# Avatar — `oasis.avatar`

Source controller: [`AvatarController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/AvatarController.cs)
Route prefix: `api/avatar`
134 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `addItemToAvatarInventory` | POST | `api/avatar/inventory` | – |
| `addKarmaToAvatar` | POST | `api/avatar/add-karma-to-avatar/{avatarId}` | `avatarId` |
| `addKarmaToAvatarByAvatarIdProviderType` | POST | `api/avatar/add-karma-to-avatar/{avatarId}/{providerType}/{setGlobally}` | `avatarId`, `providerType`, `setGlobally` |
| `addXp` | POST | `api/avatar/add-xp` | – |
| `applyProfile` | PATCH | `api/avatar/profile` | – |
| `assess` | GET | `api/avatar/account-closure/assessment` | – |
| `authenticate` | POST | `api/avatar/authenticate` | – |
| `authenticateByProviderTypeSetGlobally` | POST | `api/avatar/authenticate/{providerType}/{setGlobally}/{autoReplicationMode}/{autoFailOverMode}/{autoLoadBalanceMode}/{autoReplicationProviders}/{autoFailOverProviders}/{AutoLoadBalanceProviders}/{waitForAutoReplicationResult}/{showDetailedSettings}` | `providerType`, `setGlobally`, `autoReplicationMode`, `autoFailOverMode`, `autoLoadBalanceMode`, `autoReplicationProviders`, `autoFailOverProviders`, `AutoLoadBalanceProviders`, `waitForAutoReplicationResult`, `showDetailedSettings` |
| `authenticateDid` | POST | `api/avatar/authenticate-did` | – |
| `authenticateMfa` | POST | `api/avatar/authenticate-mfa` | – |
| `authenticateToken` | POST | `api/avatar/authenticate-token/{JWTToken}` | `JWTToken` |
| `authenticateTokenWithProvider` | POST | `api/avatar/authenticate-token/{JWTToken}/{providerType}/{setGlobally}` | `JWTToken`, `providerType`, `setGlobally` |
| `avatarHasItem` | GET | `api/avatar/inventory/{itemId}/has` | `itemId` |
| `avatarHasItemByName` | GET | `api/avatar/inventory/has-by-name` | – |
| `confirm` | POST | `api/avatar/mfa/confirm` | – |
| `createAvatarSession` | POST | `api/avatar/{avatarId}/sessions` | `avatarId` |
| `delete` | DELETE | `api/avatar/{id:Guid}` | `id` |
| `deleteByEmail` | DELETE | `api/avatar/delete-by-email/{email}` | `email` |
| `deleteByEmailByEmailProviderType` | DELETE | `api/avatar/delete-by-email/{email}/{providerType}/{setGlobally}` | `email`, `providerType`, `setGlobally` |
| `deleteByUsername` | DELETE | `api/avatar/delete-by-username/{username}` | `username` |
| `deleteByUsernameByUsernameProviderType` | DELETE | `api/avatar/delete-by-username/{username}/{providerType}/{setGlobally}` | `username`, `providerType`, `setGlobally` |
| `deleteRootByIdProviderType` | DELETE | `api/avatar/{id}/{providerType}/{setGlobally}` | `id`, `providerType`, `setGlobally` |
| `disable` | POST | `api/avatar/mfa/disable` | – |
| `enrol` | POST | `api/avatar/mfa/enrol` | – |
| `events` | GET | `api/avatar/mfa/events` | – |
| `forgotPassword` | POST | `api/avatar/forgot-password` | – |
| `forgotPasswordByProviderTypeSetGlobally` | POST | `api/avatar/forgot-password/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `generateKeyPair` | POST | `api/avatar/generate-key-pair` | – |
| `getAll` | GET | `api/avatar/get-all-avatars` | – |
| `getAllAvatarDetails` | GET | `api/avatar/get-all-avatar-details` | – |
| `getAllAvatarDetailsByProviderTypeSetGlobally` | GET | `api/avatar/get-all-avatar-details/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `getAllAvatarNames` | GET | `api/avatar/get-all-avatar-names/{includeUsernames}/{includeIds}` | `includeUsernames`, `includeIds` |
| `getAllAvatarNamesByIncludeUsernamesIncludeIds` | GET | `api/avatar/get-all-avatar-names/{includeUsernames}/{includeIds}/{providerType}/{setGlobally}` | `includeUsernames`, `includeIds`, `providerType`, `setGlobally` |
| `getAllAvatarNamesGroupedByName` | GET | `api/avatar/get-all-avatar-names-grouped-by-name/{includeUsernames}/{includeIds}` | `includeUsernames`, `includeIds` |
| `getAllAvatarNamesGroupedByNameByIncludeUsernamesIncludeIds` | GET | `api/avatar/get-all-avatar-names-grouped-by-name/{includeUsernames}/{includeIds}/{providerType}/{setGlobally}` | `includeUsernames`, `includeIds`, `providerType`, `setGlobally` |
| `getAllAvatarsByProviderTypeSetGlobally` | GET | `api/avatar/get-all-avatars/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `getAvatarDetail` | GET | `api/avatar/get-avatar-detail-by-id/{id:guid}` | `id` |
| `getAvatarDetailByEmail` | GET | `api/avatar/get-avatar-detail-by-email/{email}` | `email` |
| `getAvatarDetailByEmailByEmailProviderType` | GET | `api/avatar/get-avatar-detail-by-email/{email}/{providerType}/{setGlobally}` | `email`, `providerType`, `setGlobally` |
| `getAvatarDetailByIdByIdProviderType` | GET | `api/avatar/get-avatar-detail-by-id/{id}/{providerType}/{setGlobally}` | `id`, `providerType`, `setGlobally` |
| `getAvatarDetailByUsername` | GET | `api/avatar/get-avatar-detail-by-username/{username}` | `username` |
| `getAvatarDetailByUsernameByUsernameProviderType` | GET | `api/avatar/get-avatar-detail-by-username/{username}/{providerType}/{setGlobally}` | `username`, `providerType`, `setGlobally` |
| `getAvatarInventory` | GET | `api/avatar/inventory` | – |
| `getAvatarInventoryCount` | GET | `api/avatar/inventory/count` | – |
| `getAvatarInventoryItem` | GET | `api/avatar/inventory/{itemId}` | `itemId` |
| `getAvatarPortraitByEmail` | GET | `api/avatar/get-avatar-portrait-by-email/{email}` | `email` |
| `getAvatarPortraitByEmailByEmailProviderType` | GET | `api/avatar/get-avatar-portrait-by-email/{email}/{providerType}/{setGlobally}` | `email`, `providerType`, `setGlobally` |
| `getAvatarPortraitById` | GET | `api/avatar/get-avatar-portrait/{id}` | `id` |
| `getAvatarPortraitByIdProviderType` | GET | `api/avatar/get-avatar-portrait/{id}/{providerType}/{setGlobally}` | `id`, `providerType`, `setGlobally` |
| `getAvatarPortraitByUsername` | GET | `api/avatar/get-avatar-portrait-by-username/{username}` | `username` |
| `getAvatarPortraitByUsernameByUsernameProviderType` | GET | `api/avatar/get-avatar-portrait-by-username/{username}/{providerType}/{setGlobally}` | `username`, `providerType`, `setGlobally` |
| `getAvatarSessions` | GET | `api/avatar/{avatarId}/sessions` | `avatarId` |
| `getAvatarSessionStats` | GET | `api/avatar/{avatarId}/sessions/stats` | `avatarId` |
| `getByEmail` | GET | `api/avatar/get-by-email/{email}` | `email` |
| `getByEmailByEmailProviderType` | GET | `api/avatar/get-by-email/{email}/{providerType}/{setGlobally}` | `email`, `providerType`, `setGlobally` |
| `getById` | GET | `api/avatar/get-by-id/{id}` | `id` |
| `getByIdByIdProviderType` | GET | `api/avatar/get-by-id/{id}/{providerType}/{setGlobally}` | `id`, `providerType`, `setGlobally` |
| `getByUsername` | GET | `api/avatar/get-by-username/{username}` | `username` |
| `getByUsernameByUsernameProviderType` | GET | `api/avatar/get-by-username/{username}/{providerType}/{setGlobally}` | `username`, `providerType`, `setGlobally` |
| `getDidChallenge` | GET | `api/avatar/did-challenge/{did}` | `did` |
| `getHolonSeal` | GET | `api/avatar/holon-seal` | – |
| `getLevelThresholds` | GET | `api/avatar/get-level-thresholds` | – |
| `getLoggedInAvatar` | GET | `api/avatar/get-logged-in-avatar` | – |
| `getLoggedInAvatarByProviderTypeSetGlobally` | GET | `api/avatar/get-logged-in-avatar/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `getLoggedInAvatarWithXp` | GET | `api/avatar/get-logged-in-avatar-with-xp` | – |
| `getProfile` | GET | `api/avatar/profile` | – |
| `getProviderPrivateKeysById` | GET | `api/avatar/provider-private-keys/by-id/{avatarId}/{providerType}` | `avatarId`, `providerType` |
| `getProviderPrivateKeysByUsername` | GET | `api/avatar/provider-private-keys/by-username/{username}/{providerType}` | `username`, `providerType` |
| `getProviderPublicKeysById` | GET | `api/avatar/provider-public-keys/by-id/{avatarId}/{providerType}` | `avatarId`, `providerType` |
| `getProviderPublicKeysByUsername` | GET | `api/avatar/provider-public-keys/by-username/{username}/{providerType}` | `username`, `providerType` |
| `getProviderStorageKeyById` | GET | `api/avatar/provider-storage-key/by-id/{avatarId}/{providerType}` | `avatarId`, `providerType` |
| `getProviderStorageKeyByUsername` | GET | `api/avatar/provider-storage-key/by-username/{username}/{providerType}` | `username`, `providerType` |
| `getSharing` | GET | `api/avatar/sharing/{target}` | `target` |
| `getTerms` | GET | `api/avatar/get-terms` | – |
| `getUmaJsonByEmail` | GET | `api/avatar/get-uma-json-by-email/{email}` | `email` |
| `getUmaJsonByEmailByEmailProviderType` | GET | `api/avatar/get-uma-json-by-email/{email}/{providerType}/{setGlobally}` | `email`, `providerType`, `setGlobally` |
| `getUmaJsonById` | GET | `api/avatar/get-uma-json-by-id/{id}` | `id` |
| `getUmaJsonByIdByIdProviderType` | GET | `api/avatar/get-uma-json-by-id/{id}/{providerType}/{setGlobally}` | `id`, `providerType`, `setGlobally` |
| `getUmaJsonByUsername` | GET | `api/avatar/get-uma-json-by-username/{username}` | `username` |
| `getUmaJsonByUsernameByUsernameProviderType` | GET | `api/avatar/get-uma-json-by-username/{username}/{providerType}/{setGlobally}` | `username`, `providerType`, `setGlobally` |
| `getVersionPurge` | GET | `api/avatar/version-purge` | – |
| `linkPublicKeyById` | POST | `api/avatar/link-public-key/by-id` | – |
| `linkPublicKeyByUsername` | POST | `api/avatar/link-public-key/by-username` | – |
| `logoutAllAvatarSessions` | POST | `api/avatar/{avatarId}/sessions/logout-all` | `avatarId` |
| `logoutAvatarSessions` | POST | `api/avatar/{avatarId}/sessions/logout` | `avatarId` |
| `refreshToken` | POST | `api/avatar/refresh-token` | – |
| `refreshTokenByProviderTypeSetGlobally` | POST | `api/avatar/refresh-token/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `regenerateRecoveryCodes` | POST | `api/avatar/mfa/recovery-codes` | – |
| `register` | POST | `api/avatar/register` | – |
| `registerWithProvider` | POST | `api/avatar/register/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `removeItemFromAvatarInventory` | DELETE | `api/avatar/inventory/{itemId}` | `itemId` |
| `removeKarmaFromAvatar` | POST | `api/avatar/remove-karma-from-avatar/{avatarId}` | `avatarId` |
| `removeKarmaFromAvatarByAvatarIdProviderType` | POST | `api/avatar/remove-karma-from-avatar/{avatarId}/{providerType}/{setGlobally}` | `avatarId`, `providerType`, `setGlobally` |
| `reset` | POST | `api/avatar/mfa/reset/{avatarId}` | `avatarId` |
| `resetPassword` | POST | `api/avatar/reset-password` | – |
| `resetPasswordByProviderTypeSetGlobally` | POST | `api/avatar/reset-password/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `revokeToken` | POST | `api/avatar/revoke-token` | – |
| `revokeTokenByProviderTypeSetGlobally` | POST | `api/avatar/revoke-token/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `searchAvatar` | POST | `api/avatar/search` | – |
| `searchAvatarInventory` | GET | `api/avatar/inventory/search` | – |
| `searchByProviderTypeSetGlobally` | POST | `api/avatar/search/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `searchDirectory` | GET | `api/avatar/search-directory` | – |
| `sendItemToAvatar` | POST | `api/avatar/inventory/send-to-avatar` | – |
| `sendItemToClan` | POST | `api/avatar/inventory/send-to-clan` | – |
| `sendItemToClanAtomic` | POST | `api/avatar/inventory/send-to-clan-atomic` | – |
| `set` | POST | `api/avatar/holon-seal` | – |
| `setActiveQuest` | POST | `api/avatar/set-active-quest` | – |
| `setSharing` | POST | `api/avatar/sharing/{target}` | `target` |
| `status` | GET | `api/avatar/mfa/status` | – |
| `update` | POST | `api/avatar/update-by-id/{id}` | `id` |
| `updateAvatarDetail` | POST | `api/avatar/update-avatar-detail-by-id/{id}` | `id` |
| `updateAvatarDetailByEmail` | POST | `api/avatar/update-avatar-detail-by-email/{email}` | `email` |
| `updateAvatarDetailByEmailByEmailProviderType` | POST | `api/avatar/update-avatar-detail-by-email/{email}/{providerType}/{setGlobally}` | `email`, `providerType`, `setGlobally` |
| `updateAvatarDetailByIdByIdProviderType` | POST | `api/avatar/update-avatar-detail-by-id/{id}/{providerType}/{setGlobally}` | `id`, `providerType`, `setGlobally` |
| `updateAvatarDetailByUsername` | POST | `api/avatar/update-avatar-detail-by-username/{username}` | `username` |
| `updateAvatarDetailByUsernameByUsernameProviderType` | POST | `api/avatar/update-avatar-detail-by-username/{username}/{providerType}/{setGlobally}` | `username`, `providerType`, `setGlobally` |
| `updateAvatarSession` | PUT | `api/avatar/{avatarId}/sessions/{sessionId}` | `avatarId`, `sessionId` |
| `updateByEmail` | POST | `api/avatar/update-by-email/{email}` | `email` |
| `updateByEmailByEmailProviderType` | POST | `api/avatar/update-by-email/{email}/{providerType}/{setGlobally}` | `email`, `providerType`, `setGlobally` |
| `updateByIdByIdProviderType` | POST | `api/avatar/update-by-id/{id}/{providerType}/{setGlobally}` | `id`, `providerType`, `setGlobally` |
| `updateByUsername` | POST | `api/avatar/update-by-username/{username}` | `username` |
| `updateByUsernameByUsernameProviderType` | POST | `api/avatar/update-by-username/{username}/{providerType}/{setGlobally}` | `username`, `providerType`, `setGlobally` |
| `updateItemInAvatarInventory` | PUT | `api/avatar/inventory/{itemId}` | `itemId` |
| `uploadAvatarPortrait` | POST | `api/avatar/upload-avatar-portrait` | – |
| `uploadAvatarPortraitByProviderTypeSetGlobally` | POST | `api/avatar/upload-avatar-portrait/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `validateAccountToken` | POST | `api/avatar/validate-account-token` | – |
| `validateResetToken` | POST | `api/avatar/validate-reset-token` | – |
| `validateResetTokenByProviderTypeSetGlobally` | POST | `api/avatar/validate-reset-token/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `verifyAvatar` | POST | `api/avatar/{avatarId}/verify` | `avatarId` |
| `verifyEmail` | GET | `api/avatar/verify-email` | – |
| `verifyEmailByProviderTypeSetGlobally` | POST | `api/avatar/verify-email/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `verifyEmailPost` | POST | `api/avatar/verify-email` | – |
| `verifyEmailWithProvider` | GET | `api/avatar/verify-email/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `versionPurge` | POST | `api/avatar/version-purge` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.avatar.addItemToAvatarInventory({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
