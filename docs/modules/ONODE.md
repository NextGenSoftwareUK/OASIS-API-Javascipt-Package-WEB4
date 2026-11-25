# ONODE — `oasis.oNODE`

Source controller: [`ONODEController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ONODEController.cs)
Route prefix: `api/v1/onode`
24 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `disableProvider` | PUT | `api/v1/onode/providers/{providerType}/disable` | `providerType` |
| `enableProvider` | PUT | `api/v1/onode/providers/{providerType}/enable` | `providerType` |
| `getActiveNodes` | GET | `api/v1/onode/active-nodes` | – |
| `getAuditLog` | GET | `api/v1/onode/audit` | – |
| `getCommand` | GET | `api/v1/onode/commands/{commandId}` | `commandId` |
| `getConnectedPeers` | GET | `api/v1/onode/peers` | – |
| `getNodeConfig` | GET | `api/v1/onode/config` | – |
| `getNodeInfo` | GET | `api/v1/onode/info` | – |
| `getNodeLogs` | GET | `api/v1/onode/logs` | – |
| `getNodeMetrics` | GET | `api/v1/onode/metrics` | – |
| `getNodeState` | GET | `api/v1/onode/node-state/{nodeId}` | `nodeId` |
| `getNodeStats` | GET | `api/v1/onode/stats` | – |
| `getNodeStatus` | GET | `api/v1/onode/status` | – |
| `getPendingCommands` | GET | `api/v1/onode/commands/pending/{nodeId}` | `nodeId` |
| `getProviders` | GET | `api/v1/onode/providers` | – |
| `getPublicNodeConfig` | GET | `api/v1/onode/public-config` | – |
| `postCommand` | POST | `api/v1/onode/commands` | – |
| `pushNodeState` | PUT | `api/v1/onode/node-state/{nodeId}` | `nodeId` |
| `restartNode` | POST | `api/v1/onode/restart` | – |
| `setProviderPriority` | PUT | `api/v1/onode/providers/{providerType}/priority` | `providerType` |
| `startNode` | POST | `api/v1/onode/start` | – |
| `stopNode` | POST | `api/v1/onode/stop` | – |
| `updateCommand` | PATCH | `api/v1/onode/commands/{commandId}` | `commandId` |
| `updateNodeConfig` | PUT | `api/v1/onode/config` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.oNODE.disableProvider({
    providerType: '<providerType>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
