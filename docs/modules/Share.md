# Share — `oasis.share`

Source controller: [`ShareController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ShareController.cs)
Route prefix: `api/share`
1 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `shareHolon` | GET | `api/share/share-holon/{holonId:guid}/{avatarId:guid}` | `holonId`, `avatarId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.share.shareHolon({
    holonId: '<holonId>',
    avatarId: '<avatarId>'
  });
if (isError) throw new Error(message);
console.log(result);
```
