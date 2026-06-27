# OLand — `oasis.oLand`

Source controller: [`OLandController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/OLandController.cs)
Route prefix: `api/oland`
7 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `deleteOlandAsync` | POST | `api/oland` | – |
| `getOlandPrice` | GET | `api/oland` | – |
| `loadAllOlands` | GET | `api/oland` | – |
| `loadOlandAsync` | GET | `api/oland` | – |
| `purchaseOland` | POST | `api/oland` | – |
| `saveOlandAsync` | POST | `api/oland` | – |
| `updateOlandAsync` | POST | `api/oland` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.oLand.deleteOlandAsync({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
