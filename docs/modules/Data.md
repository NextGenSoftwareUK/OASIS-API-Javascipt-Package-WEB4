# Data — `oasis.data`

Source controller: [`DataController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/DataController.cs)
Route prefix: `api/data`
10 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `deleteHolon` | DELETE | `api/data/delete-holon` | – |
| `loadAllHolons` | POST | `api/data/load-all-holons` | – |
| `loadData` | POST | `api/data/load-data` | – |
| `loadFile` | POST | `api/data/load-file` | – |
| `loadHolon` | POST | `api/data/load-holon` | – |
| `loadHolonsForParent` | POST | `api/data/load-holons-for-parent` | – |
| `saveData` | POST | `api/data/save-data` | – |
| `saveFile` | POST | `api/data/save-file` | – |
| `saveHolon` | POST | `api/data/save-holon` | – |
| `saveHolonOffChain` | POST | `api/data/save-holon-off-chain` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.data.deleteHolon({});
if (isError) throw new Error(message);
console.log(result);
```
