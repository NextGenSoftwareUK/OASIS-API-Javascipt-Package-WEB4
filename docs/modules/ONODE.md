# ONODE — `oasis.oNODE`

Source controller: [`ONODEController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ONODEController.cs)
Route prefix: `api/v1/onode`
13 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getConnectedPeers` | GET | `api/v1/onode/peers` | – |
| `getNodeConfig` | GET | `api/v1/onode/config` | – |
| `getNodeInfo` | GET | `api/v1/onode/info` | – |
| `getNodeLogs` | GET | `api/v1/onode/logs` | – |
| `getNodeMetrics` | GET | `api/v1/onode/metrics` | – |
| `getNodeStats` | GET | `api/v1/onode/stats` | – |
| `getNodeStatus` | GET | `api/v1/onode/status` | – |
| `getOASISDNA` | GET | `api/v1/onode/oasisdna` | – |
| `restartNode` | POST | `api/v1/onode/restart` | – |
| `startNode` | POST | `api/v1/onode/start` | – |
| `stopNode` | POST | `api/v1/onode/stop` | – |
| `updateNodeConfig` | PUT | `api/v1/onode/config` | – |
| `updateOASISDNA` | PUT | `api/v1/onode/oasisdna` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.oNODE.getConnectedPeers({});
if (isError) throw new Error(message);
console.log(result);
```
