# EOSIO — `oasis.eOSIO`

Source controller: [`EOSIOController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/EOSIOController.cs)
Route prefix: `api/eosio`
9 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getAvatarForEOSIOAccountName` | GET | `api/eosio/get-avatar-for-eosio-account-name` | – |
| `getAvatarIdForEOSIOAccountName` | GET | `api/eosio/get-avatar-id-for-eosio-account-name` | – |
| `getBalanceForAvatar` | GET | `api/eosio/get-balance-for-avatar` | – |
| `getBalanceForEOSIOAccount` | GET | `api/eosio/get-balance-for-eosio-account` | – |
| `getEOSIOAccount` | GET | `api/eosio/get-eosio-account` | – |
| `getEOSIOAccountForAvatar` | GET | `api/eosio/get-eosio-account-for-avatar` | – |
| `getEOSIOAccountNamesForAvatar` | GET | `api/eosio/get-eosio-account-name-for-avatar` | – |
| `getTelosAccountPrivateKeyForAvatar` | GET | `api/eosio/get-eosio-account-private-key-for-avatar` | – |
| `linkEOSIOAccountToAvatar` | POST | `api/eosio/{avatarId}/{eosioAccountName}` | `avatarId`, `eosioAccountName` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.eOSIO.getAvatarForEOSIOAccountName({});
if (isError) throw new Error(message);
console.log(result);
```
