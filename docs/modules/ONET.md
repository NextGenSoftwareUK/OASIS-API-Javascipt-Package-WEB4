# ONET — `oasis.oNET`

Source controller: [`ONETController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ONETController.cs)
Route prefix: `api/v1/onet`
11 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `broadcastMessage` | POST | `api/v1/onet/network/broadcast` | – |
| `connectToNode` | POST | `api/v1/onet/network/connect` | – |
| `disconnectFromNode` | POST | `api/v1/onet/network/disconnect` | – |
| `getConnectedNodes` | GET | `api/v1/onet/network/nodes` | – |
| `getNetworkStats` | GET | `api/v1/onet/network/stats` | – |
| `getNetworkStatus` | GET | `api/v1/onet/network/status` | – |
| `getNetworkTopology` | GET | `api/v1/onet/network/topology` | – |
| `getOASISDNA` | GET | `api/v1/onet/oasisdna` | – |
| `startNetwork` | POST | `api/v1/onet/network/start` | – |
| `stopNetwork` | POST | `api/v1/onet/network/stop` | – |
| `updateOASISDNA` | PUT | `api/v1/onet/oasisdna` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.oNET.broadcastMessage({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
