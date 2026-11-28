# HerzId — `oasis.herzId`

Source controller: [`HerzIdController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/HerzIdController.cs)
Route prefix: `api/herzid`
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
| `ghostCheck` | POST | `api/herzid/ghost-check/{herzId}` | `herzId` |
| `profile` | GET | `api/herzid/profile` | – |
| `register` | POST | `api/herzid/register` | – |
| `setClearance` | POST | `api/herzid/set-clearance` | – |
| `verify` | GET | `api/herzid/verify/{herzId}` | `herzId` |
| `vouch` | POST | `api/herzid/vouch` | – |
| `vouchChain` | GET | `api/herzid/vouch-chain/{herzId}` | `herzId` |
| `vouchesIssued` | GET | `api/herzid/vouches-issued` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.herzId.ghostCheck({
    herzId: '<herzId>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
