# Places — `oasis.places`

Source controller: [`PlacesController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/PlacesController.cs)
Route prefix: `api/places`
4 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `nearby` | GET | `api/places/nearby` | – |
| `observe` | POST | `api/places/observe` | – |
| `presence` | GET | `api/places/presence` | – |
| `visits` | GET | `api/places/visits` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.places.nearby({});
if (isError) throw new Error(message);
console.log(result);
```
