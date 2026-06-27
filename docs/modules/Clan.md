# Clan — `oasis.clan`

Source controller: [`ClanController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ClanController.cs)
Route prefix: `api/clan`
10 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `addAvatarToClan` | POST | `api/clan/{clanId:guid}/members/{avatarId:guid}` | `clanId`, `avatarId` |
| `create` | POST | `api/clan` | – |
| `delete` | DELETE | `api/clan/{clanId:guid}` | `clanId` |
| `getClanInventory` | GET | `api/clan/{clanId:guid}/inventory` | `clanId` |
| `getMembers` | GET | `api/clan/{clanId:guid}/members` | `clanId` |
| `list` | GET | `api/clan` | – |
| `load` | GET | `api/clan/{clanId:guid}` | `clanId` |
| `loadByName` | GET | `api/clan/by-name` | – |
| `removeAvatarFromClan` | DELETE | `api/clan/{clanId:guid}/members/{avatarId:guid}` | `clanId`, `avatarId` |
| `update` | PUT | `api/clan/{clanId:guid}` | `clanId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.clan.addAvatarToClan({
    clanId: '<clanId>',
    avatarId: '<avatarId>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
