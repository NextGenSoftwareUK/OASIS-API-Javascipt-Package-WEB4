# Share — `oasis.share`

Source controller: [`ShareController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ShareController.cs)
Route prefix: `api/share`
8 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).


## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `backfillShareIndex` | POST | `api/share/backfill-share-index` | – |
| `createGroup` | POST | `api/share/groups` | – |
| `getPermissions` | GET | `api/share/permissions/{holonId:guid}` | `holonId` |
| `getShareHolonManyByHolonIdAvatarIds` | GET | `api/share/share-holon/{holonId}/many/{avatarIds}` | `holonId`, `avatarIds` |
| `setGroupMembers` | POST | `api/share/groups/{groupId:guid}/members` | `groupId` |
| `setPermissions` | POST | `api/share/permissions/{holonId:guid}` | `holonId` |
| `sharedWithMe` | GET | `api/share/shared-with-me` | – |
| `shareHolon` | GET | `api/share/share-holon/{holonId:guid}/{avatarId:guid}` | `holonId`, `avatarId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.share.backfillShareIndex({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
