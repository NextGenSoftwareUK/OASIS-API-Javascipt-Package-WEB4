# Avatar — `oasis.avatar`

Source controller: [`AvatarController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/AvatarController.cs)
Route prefix: `api/avatar`
62 operation(s).

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
| `addXp` | POST | `api/avatar/add-xp` | – |
| `authenticate` | POST | `api/avatar/authenticate` | – |
| `avatarHasItem` | GET | `api/avatar/inventory/{itemId}/has` | `itemId` |
| `avatarHasItemByName` | GET | `api/avatar/inventory/has-by-name` | – |
| `create` | POST | `api/avatar/create/{model}` | `model` |
| `createAvatarSession` | POST | `api/avatar/{avatarId}/sessions` | `avatarId` |
| `delete` | DELETE | `api/avatar/{id:Guid}` | `id` |
| `deleteByEmail` | DELETE | `api/avatar/delete-by-email/{email}` | `email` |
| `deleteByUsername` | DELETE | `api/avatar/delete-by-username/{username}` | `username` |
| `forgotPassword` | POST | `api/avatar/forgot-password` | – |
| `getAll` | GET | `api/avatar/get-all-avatars` | – |
| `getAllAvatarDetails` | GET | `api/avatar/get-all-avatar-details` | – |
| `getAllAvatarNames` | GET | `api/avatar/get-all-avatar-names/{includeUsernames}/{includeIds}` | `includeUsernames`, `includeIds` |
| `getAllAvatarNamesGroupedByName` | GET | `api/avatar/get-all-avatar-names-grouped-by-name/{includeUsernames}/{includeIds}` | `includeUsernames`, `includeIds` |
| `getAvatarDetail` | GET | `api/avatar/get-avatar-detail-by-id/{id:guid}` | `id` |
| `getAvatarDetailByEmail` | GET | `api/avatar/get-avatar-detail-by-email/{email}` | `email` |
| `getAvatarDetailByUsername` | GET | `api/avatar/get-avatar-detail-by-username/{username}` | `username` |
| `getAvatarInventory` | GET | `api/avatar/inventory` | – |
| `getAvatarInventoryItem` | GET | `api/avatar/inventory/{itemId}` | `itemId` |
| `getAvatarPortraitByEmail` | GET | `api/avatar/get-avatar-portrait-by-email/{email}` | `email` |
| `getAvatarPortraitById` | GET | `api/avatar/get-avatar-portrait/{id}` | `id` |
| `getAvatarPortraitByUsername` | GET | `api/avatar/get-avatar-portrait-by-username/{username}` | `username` |
| `getAvatarSessions` | GET | `api/avatar/{avatarId}/sessions` | `avatarId` |
| `getAvatarSessionStats` | GET | `api/avatar/{avatarId}/sessions/stats` | `avatarId` |
| `getByEmail` | GET | `api/avatar/get-by-email/{email}` | `email` |
| `getById` | GET | `api/avatar/get-by-id/{id}` | `id` |
| `getByUsername` | GET | `api/avatar/get-by-username/{username}` | `username` |
| `getLoggedInAvatar` | GET | `api/avatar/get-logged-in-avatar` | – |
| `getLoggedInAvatarWithXp` | GET | `api/avatar/get-logged-in-avatar-with-xp` | – |
| `getTerms` | GET | `api/avatar/get-terms` | – |
| `getUmaJsonByEmail` | GET | `api/avatar/get-uma-json-by-email/{email}` | `email` |
| `getUmaJsonById` | GET | `api/avatar/get-uma-json-by-id/{id}` | `id` |
| `getUmaJsonByUsername` | GET | `api/avatar/get-uma-json-by-username/{username}` | `username` |
| `linkEOSIOAccountToAvatar` | POST | `api/avatar/{avatarId}/{eosioAccountName}` | `avatarId`, `eosioAccountName` |
| `linkHolochainAgentIDToAvatar` | POST | `api/avatar/{avatarId}/{holochainAgentID}` | `avatarId`, `holochainAgentID` |
| `linkTelosAccountToAvatar` | POST | `api/avatar/{id:Guid}/{telosAccountName}` | `id`, `telosAccountName` |
| `linkTelosAccountToAvatar2` | POST | `api/avatar` | – |
| `logoutAllAvatarSessions` | POST | `api/avatar/{avatarId}/sessions/logout-all` | `avatarId` |
| `logoutAvatarSessions` | POST | `api/avatar/{avatarId}/sessions/logout` | `avatarId` |
| `refreshToken` | POST | `api/avatar/refresh-token` | – |
| `register` | POST | `api/avatar/register` | – |
| `removeItemFromAvatarInventory` | DELETE | `api/avatar/inventory/{itemId}` | `itemId` |
| `removeKarmaFromAvatar` | POST | `api/avatar/remove-karma-from-avatar/{avatarId}` | `avatarId` |
| `resetPassword` | POST | `api/avatar/reset-password` | – |
| `revokeToken` | POST | `api/avatar/revoke-token` | – |
| `searchAvatar` | POST | `api/avatar/search` | – |
| `searchAvatarInventory` | GET | `api/avatar/inventory/search` | – |
| `sendItemToAvatar` | POST | `api/avatar/inventory/send-to-avatar` | – |
| `sendItemToClan` | POST | `api/avatar/inventory/send-to-clan` | – |
| `setActiveQuest` | POST | `api/avatar/set-active-quest` | – |
| `update` | POST | `api/avatar/update-by-id/{id}` | `id` |
| `updateAvatarDetail` | POST | `api/avatar/update-avatar-detail-by-id/{id}` | `id` |
| `updateAvatarDetailByEmail` | POST | `api/avatar/update-avatar-detail-by-email/{email}` | `email` |
| `updateAvatarDetailByUsername` | POST | `api/avatar/update-avatar-detail-by-username/{username}` | `username` |
| `updateAvatarSession` | PUT | `api/avatar/{avatarId}/sessions/{sessionId}` | `avatarId`, `sessionId` |
| `updateByEmail` | POST | `api/avatar/update-by-email/{email}` | `email` |
| `updateByUsername` | POST | `api/avatar/update-by-username/{username}` | `username` |
| `uploadAvatarPortrait` | POST | `api/avatar/upload-avatar-portrait` | – |
| `validateResetToken` | POST | `api/avatar/validate-reset-token` | – |
| `verifyEmail` | GET | `api/avatar/verify-email` | – |

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
