# Provider — `oasis.provider`

Source controller: [`ProviderController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ProviderController.cs)
Route prefix: `api/provider`
31 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateProvider` | POST | `api/provider/activate-provider/{providerType}` | `providerType` |
| `deActivateProvider` | POST | `api/provider/deactivate-provider/{providerType}` | `providerType` |
| `getAllRegisteredNetworkProviders` | GET | `api/provider/get-all-registered-network-providers` | – |
| `getAllRegisteredProviders` | GET | `api/provider/get-all-registered-providers` | – |
| `getAllRegisteredProvidersForCategory` | GET | `api/provider/get-all-registered-providers-for-category/{category}` | `category` |
| `getAllRegisteredProviderTypes` | GET | `api/provider/get-all-registered-provider-types` | – |
| `getAllRegisteredRendererProviders` | GET | `api/provider/get-all-registered-renderer-providers` | – |
| `getAllRegisteredStorageProviders` | GET | `api/provider/get-all-registered-storage-providers` | – |
| `getCurrentStorageProvider` | GET | `api/provider/get-current-storage-provider` | – |
| `getCurrentStorageProviderType` | GET | `api/provider/get-current-storage-provider-type` | – |
| `getProvidersThatAreAutoReplicating` | GET | `api/provider/get-providers-that-are-auto-replicating` | – |
| `getProvidersThatHaveAutoFailOverEnabled` | GET | `api/provider/get-providers-that-have-auto-fail-over-enabled` | – |
| `getProvidersThatHaveAutoLoadBalanceEnabled` | GET | `api/provider/get-providers-that-have-auto-load-balance-enabled` | – |
| `getRegisteredProvider` | GET | `api/provider/get-registered-provider/{providerType}` | `providerType` |
| `isProviderRegistered` | GET | `api/provider/is-provider-registered/{providerType}` | `providerType` |
| `registerProvider` | POST | `api/provider/register-provider/{provider}` | `provider` |
| `registerProviders` | POST | `api/provider/register-providers/{providers}` | `providers` |
| `registerProviderType` | POST | `api/provider/register-provider-type/{providerType}` | `providerType` |
| `registerProviderTypes` | POST | `api/provider/register-provider-types/{providerTypes}` | `providerTypes` |
| `setAndActivateCurrentStorageProvider` | POST | `api/provider/set-and-activate-current-storage-provider/{providerType}/{setGlobally}` | `providerType`, `setGlobally` |
| `setAutoFailOverForAllProviders` | POST | `api/provider/set-auto-fail-over-for-all-providers/{addToFailOverList}` | `addToFailOverList` |
| `setAutoFailOverForListOfProviders` | POST | `api/provider/set-auto-fail-over-for-list-of-providers/{addToFailOverList}/{providerTypes}` | `addToFailOverList`, `providerTypes` |
| `setAutoLoadBalanceForAllProviders` | POST | `api/provider/set-auto-load-balance-for-all-providers/{addToLoadBalanceList}` | `addToLoadBalanceList` |
| `setAutoLoadBalanceForListOfProviders` | POST | `api/provider/set-auto-load-balance-for-list-of-providers/{addToLoadBalanceList}/{providerTypes}` | `addToLoadBalanceList`, `providerTypes` |
| `setAutoReplicateForAllProviders` | POST | `api/provider/set-auto-replicate-for-all-providers/{autoReplicate}` | `autoReplicate` |
| `setAutoReplicateForListOfProviders` | POST | `api/provider/set-auto-replicate-for-list-of-providers/{autoReplicate}/{providerTypes}` | `autoReplicate`, `providerTypes` |
| `setProviderConfig` | POST | `api/provider/set-provider-config/{providerType}/{connectionString}` | `providerType`, `connectionString` |
| `unRegisterProvider` | POST | `api/provider/unregister-provider/{provider}` | `provider` |
| `unRegisterProviders` | POST | `api/provider/unregister-providers/{providers}` | `providers` |
| `unRegisterProviderType` | POST | `api/provider/unregister-provider-type/{providerType}` | `providerType` |
| `unRegisterProviderTypes` | POST | `api/provider/unregister-provider-types/{providerTypes}` | `providerTypes` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.provider.activateProvider({
    providerType: '<providerType>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
