# Bridge — `oasis.bridge`

Source controller: [`BridgeController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/BridgeController.cs)
Route prefix: `api/v1/bridge`
7 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).


## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `checkOrderBalance` | GET | `api/v1/bridge/orders/{orderId:guid}/check-balance` | `orderId` |
| `createOrder` | POST | `api/v1/bridge/orders` | – |
| `createPrivateOrder` | POST | `api/v1/bridge/orders/private` | – |
| `getExchangeRate` | GET | `api/v1/bridge/exchange-rate` | – |
| `getSupportedNetworks` | GET | `api/v1/bridge/networks` | – |
| `recordViewingKey` | POST | `api/v1/bridge/viewing-keys/audit` | – |
| `verifyProof` | POST | `api/v1/bridge/proofs/verify` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.bridge.checkOrderBalance({
    orderId: '<orderId>'
  });
if (isError) throw new Error(message);
console.log(result);
```
