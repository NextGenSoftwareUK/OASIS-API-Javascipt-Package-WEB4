# Gardens — `oasis.gardens`

Source controller: [`GardensController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/GardensController.cs)
Route prefix: `api/gardens`
11 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).


## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `care` | POST | `api/gardens/{id}/care` | `id` |
| `history` | GET | `api/gardens/history` | – |
| `leave` | POST | `api/gardens/{id}/leave` | `id` |
| `locations` | GET | `api/gardens/locations` | – |
| `nearby` | GET | `api/gardens/nearby` | – |
| `plant` | POST | `api/gardens/plant` | – |
| `refill` | POST | `api/gardens/refill` | – |
| `species` | GET | `api/gardens/species` | – |
| `thankYou` | POST | `api/gardens/{id}/thank-you` | `id` |
| `visit` | POST | `api/gardens/{id}/visit` | `id` |
| `wallet` | GET | `api/gardens/wallet` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.gardens.care({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
