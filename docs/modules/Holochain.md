# Holochain — `oasis.holochain`

Source controller: [`HolochainController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/HolochainController.cs)
Route prefix: `api/holochain`
7 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getAvatarForHolochainAgentId` | GET | `api/holochain/get-avatar-for-holochain-agentid` | – |
| `getAvatarIdForHolochainAgentId` | GET | `api/holochain/get-avatar-id-for-holochain-agentid` | – |
| `getHolochainAgentIdsForAvatar` | GET | `api/holochain/get-holochain-agentids-for-avatar` | – |
| `getHolochainAgentPrivateKeysForAvatar` | GET | `api/holochain/get-holochain-agent-private-keys-for-avatar` | – |
| `getHoloFuelBalanceForAgentId` | GET | `api/holochain/get-holo-fuel-balance-for-agentId` | – |
| `getHoloFuelBalanceForAvatar` | GET | `api/holochain/get-holo-fuel-balance-for-avatar` | – |
| `linkHolochainAgentIdToAvatar` | POST | `api/holochain/{avatarId}/{holochainAgentId}` | `avatarId`, `holochainAgentId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.holochain.getAvatarForHolochainAgentId({});
if (isError) throw new Error(message);
console.log(result);
```
