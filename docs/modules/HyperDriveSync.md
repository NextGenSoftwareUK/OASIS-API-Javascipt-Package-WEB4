# HyperDriveSync — `oasis.hyperDriveSync`

Source controller: [`HyperDriveSyncController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/HyperDriveSyncController.cs)
Route prefix: `api/hyperdrive/sync`
1 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `exchange` | POST | `api/hyperdrive/sync/exchange` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.hyperDriveSync.exchange({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
