# Search — `oasis.search`

Source controller: [`SearchController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SearchController.cs)
Route prefix: `api/search`
3 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).


## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `get` | GET | `api/search/{searchParams}` | `searchParams` |
| `getRootBySearchParamsProviderType` | GET | `api/search/{searchParams}/{providerType}/{setGlobally}` | `searchParams`, `providerType`, `setGlobally` |
| `search` | POST | `api/search` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.search.get({
    searchParams: '<searchParams>'
  });
if (isError) throw new Error(message);
console.log(result);
```
