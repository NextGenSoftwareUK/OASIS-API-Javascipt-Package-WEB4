# Level — `oasis.level`

Source controller: [`LevelController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/LevelController.cs)
Route prefix: `api/level`
2 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `calculateLevelFromKarma` | GET | `api/level/calculate/{karma}` | `karma` |
| `getLevelLookup` | GET | `api/level/lookup` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.level.calculateLevelFromKarma({
    karma: '<karma>'
  });
if (isError) throw new Error(message);
console.log(result);
```
