# Data — `oasis.data`

Source controller: [`DataController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/DataController.cs)
Route prefix: `api/data`
92 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).


## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `ask` | POST | `api/data/query-cql/ask` | – |
| `completeChunkedFile` | POST | `api/data/complete-chunked-file` | – |
| `composition` | POST | `api/data/query-cql/composition` | – |
| `copyHolon` | POST | `api/data/copy-holon` | – |
| `deleteChunkedFile` | POST | `api/data/delete-chunked-file` | – |
| `deleteHolon` | DELETE | `api/data/delete-holon` | – |
| `deleteHolonById` | DELETE | `api/data/delete-holon/{id}` | `id` |
| `deleteHolonByIdSoftDelete` | DELETE | `api/data/delete-holon/{id}/{softDelete}` | `id`, `softDelete` |
| `deleteHolonByIdSoftDelete2` | DELETE | `api/data/delete-holon/{id}/{softDelete}/{providerType}/{setGlobally}` | `id`, `softDelete`, `providerType`, `setGlobally` |
| `deleteHolonByIdSoftDelete3` | DELETE | `api/data/delete-holon/{id}/{softDelete}/{providerType}/{setGlobally}/{autoReplicationMode}/{autoFailOverMode}/{autoLoadBalanceMode}/{autoReplicationProviders}/{autoFailOverProviders}/{autoLoadBalanceProviders}/{waitForAutoReplicationResult}/{showDetailedSettings}` | `id`, `softDelete`, `providerType`, `setGlobally`, `autoReplicationMode`, `autoFailOverMode`, `autoLoadBalanceMode`, `autoReplicationProviders`, `autoFailOverProviders`, `autoLoadBalanceProviders`, `waitForAutoReplicationResult`, `showDetailedSettings` |
| `deleteHolonByProviderKey` | DELETE | `api/data/delete-holon-by-providerkey/{providerKey}` | `providerKey` |
| `demoIdentities` | POST | `api/data/query-cql/demo-identities` | – |
| `federation` | POST | `api/data/query-cql/federation` | – |
| `getAccessLog` | GET | `api/data/access-log` | – |
| `getCurrentAvatarHolonCount` | GET | `api/data/current-avatar/holon-count` | – |
| `getHolonAccessLog` | GET | `api/data/holon-access-log/{id}` | `id` |
| `getHolonAuditTrail` | GET | `api/data/holon-audit-trail/{id}` | `id` |
| `getHolonCopyProviders` | GET | `api/data/copy-holon/providers` | – |
| `getHolonPurgeStatus` | GET | `api/data/holon-purge/status/{id}` | `id` |
| `getLoadAllHolonsByHolonType` | GET | `api/data/load-all-holons/{holonType}` | `holonType` |
| `getLoadAllHolonsByHolonTypeLoadChildren` | GET | `api/data/load-all-holons/{holonType}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}` | `holonType`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version` |
| `getLoadAllHolonsByHolonTypeLoadChildren2` | GET | `api/data/load-all-holons/{holonType}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}/{providerType}/{setGlobally}` | `holonType`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version`, `providerType`, `setGlobally` |
| `getLoadAllHolonsByHolonTypeLoadChildren3` | GET | `api/data/load-all-holons/{holonType}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}/{providerType}/{setGlobally}/{autoReplicationMode}/{autoFailOverMode}/{autoLoadBalanceMode}/{autoReplicationProviders}/{autoFailOverProviders}/{autoLoadBalanceProviders}/{waitForAutoReplicationResult}/{showDetailedSettings}` | `holonType`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version`, `providerType`, `setGlobally`, `autoReplicationMode`, `autoFailOverMode`, `autoLoadBalanceMode`, `autoReplicationProviders`, `autoFailOverProviders`, `autoLoadBalanceProviders`, `waitForAutoReplicationResult`, `showDetailedSettings` |
| `getLoadDataByKeyValue` | GET | `api/data/load-data/{key}/{value}` | `key`, `value` |
| `getLoadDataByKeyValue2` | GET | `api/data/load-data/{key}/{value}/{providerType}/{setGlobally}` | `key`, `value`, `providerType`, `setGlobally` |
| `getLoadDataByKeyValue3` | GET | `api/data/load-data/{key}/{value}/{providerType}/{setGlobally}/{autoReplicationMode}/{autoFailOverMode}/{autoLoadBalanceMode}/{autoReplicationProviders}/{autoFailOverProviders}/{autoLoadBalanceProviders}/{waitForAutoReplicationResult}/{showDetailedSettings}` | `key`, `value`, `providerType`, `setGlobally`, `autoReplicationMode`, `autoFailOverMode`, `autoLoadBalanceMode`, `autoReplicationProviders`, `autoFailOverProviders`, `autoLoadBalanceProviders`, `waitForAutoReplicationResult`, `showDetailedSettings` |
| `getLoadFileById` | GET | `api/data/load-file/{id}` | `id` |
| `getLoadFileByIdProviderType` | GET | `api/data/load-file/{id}/{providerType}/{setGlobally}` | `id`, `providerType`, `setGlobally` |
| `getLoadFileByIdProviderType2` | GET | `api/data/load-file/{id}/{providerType}/{setGlobally}/{autoReplicationMode}/{autoFailOverMode}/{autoLoadBalanceMode}/{autoReplicationProviders}/{autoFailOverProviders}/{autoLoadBalanceProviders}/{waitForAutoReplicationResult}/{showDetailedSettings}` | `id`, `providerType`, `setGlobally`, `autoReplicationMode`, `autoFailOverMode`, `autoLoadBalanceMode`, `autoReplicationProviders`, `autoFailOverProviders`, `autoLoadBalanceProviders`, `waitForAutoReplicationResult`, `showDetailedSettings` |
| `getLoadHolonById` | GET | `api/data/load-holon/{id}` | `id` |
| `getLoadHolonByIdLoadChildren` | GET | `api/data/load-holon/{id}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}` | `id`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version` |
| `getLoadHolonByIdLoadChildren2` | GET | `api/data/load-holon/{id}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}/{providerType}/{setGlobally}` | `id`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version`, `providerType`, `setGlobally` |
| `getLoadHolonByIdLoadChildren3` | GET | `api/data/load-holon/{id}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}/{providerType}/{setGlobally}/{autoReplicationMode}/{autoFailOverMode}/{autoLoadBalanceMode}/{autoReplicationProviders}/{autoFailOverProviders}/{autoLoadBalanceProviders}/{waitForAutoReplicationResult}/{showDetailedSettings}` | `id`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version`, `providerType`, `setGlobally`, `autoReplicationMode`, `autoFailOverMode`, `autoLoadBalanceMode`, `autoReplicationProviders`, `autoFailOverProviders`, `autoLoadBalanceProviders`, `waitForAutoReplicationResult`, `showDetailedSettings` |
| `getLoadHolonByMetadataByMetaKeyMetaValue` | GET | `api/data/load-holon-by-metadata/{metaKey}/{metaValue}` | `metaKey`, `metaValue` |
| `getLoadHolonByMetadataByMetaKeyMetaValue2` | GET | `api/data/load-holon-by-metadata/{metaKey}/{metaValue}/{holonType}` | `metaKey`, `metaValue`, `holonType` |
| `getLoadHolonByMetadataByMetaKeyMetaValue3` | GET | `api/data/load-holon-by-metadata/{metaKey}/{metaValue}/{holonType}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}` | `metaKey`, `metaValue`, `holonType`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version` |
| `getLoadHolonsByMetadataByMetaKeyMetaValue` | GET | `api/data/load-holons-by-metadata/{metaKey}/{metaValue}` | `metaKey`, `metaValue` |
| `getLoadHolonsByMetadataByMetaKeyMetaValue2` | GET | `api/data/load-holons-by-metadata/{metaKey}/{metaValue}/{holonType}` | `metaKey`, `metaValue`, `holonType` |
| `getLoadHolonsByMetadataByMetaKeyMetaValue3` | GET | `api/data/load-holons-by-metadata/{metaKey}/{metaValue}/{holonType}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}` | `metaKey`, `metaValue`, `holonType`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version` |
| `getLoadHolonsForParentByIdHolonType` | GET | `api/data/load-holons-for-parent/{id}/{holonType}` | `id`, `holonType` |
| `getLoadHolonsForParentByIdHolonType2` | GET | `api/data/load-holons-for-parent/{id}/{holonType}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}` | `id`, `holonType`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version` |
| `getLoadHolonsForParentByIdHolonType3` | GET | `api/data/load-holons-for-parent/{id}/{holonType}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}/{providerType}/{setGlobally}` | `id`, `holonType`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version`, `providerType`, `setGlobally` |
| `getLoadHolonsForParentByIdHolonType4` | GET | `api/data/load-holons-for-parent/{id}/{holonType}/{loadChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{version}/{providerType}/{setGlobally}/{autoReplicationMode}/{autoFailOverMode}/{autoLoadBalanceMode}/{autoReplicationProviders}/{autoFailOverProviders}/{autoLoadBalanceProviders}/{waitForAutoReplicationResult}/{showDetailedSettings}` | `id`, `holonType`, `loadChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `version`, `providerType`, `setGlobally`, `autoReplicationMode`, `autoFailOverMode`, `autoLoadBalanceMode`, `autoReplicationProviders`, `autoFailOverProviders`, `autoLoadBalanceProviders`, `waitForAutoReplicationResult`, `showDetailedSettings` |
| `getLoadHolonsForParentByProviderkeyByProviderKeyHolonType` | GET | `api/data/load-holons-for-parent-by-providerkey/{providerKey}/{holonType}` | `providerKey`, `holonType` |
| `getSaveDataByKeyValue` | GET | `api/data/save-data/{key}/{value}` | `key`, `value` |
| `getSaveDataByKeyValue2` | GET | `api/data/save-data/{key}/{value}/{providerType}/{setGlobally}` | `key`, `value`, `providerType`, `setGlobally` |
| `getSaveDataByKeyValue3` | GET | `api/data/save-data/{key}/{value}/{providerType}/{setGlobally}/{autoReplicationMode}/{autoFailOverMode}/{autoLoadBalanceMode}/{autoReplicationProviders}/{autoFailOverProviders}/{autoLoadBalanceProviders}/{waitForAutoReplicationResult}/{showDetailedSettings}` | `key`, `value`, `providerType`, `setGlobally`, `autoReplicationMode`, `autoFailOverMode`, `autoLoadBalanceMode`, `autoReplicationProviders`, `autoFailOverProviders`, `autoLoadBalanceProviders`, `waitForAutoReplicationResult`, `showDetailedSettings` |
| `getSaveFileByData` | GET | `api/data/save-file/{data}` | `data` |
| `getSaveFileByDataProviderType` | GET | `api/data/save-file/{data}/{providerType}/{setGlobally}` | `data`, `providerType`, `setGlobally` |
| `getSaveFileByDataProviderType2` | GET | `api/data/save-file/{data}/{providerType}/{setGlobally}/{autoReplicationMode}/{autoFailOverMode}/{autoLoadBalanceMode}/{autoReplicationProviders}/{autoFailOverProviders}/{autoLoadBalanceProviders}/{waitForAutoReplicationResult}/{showDetailedSettings}` | `data`, `providerType`, `setGlobally`, `autoReplicationMode`, `autoFailOverMode`, `autoLoadBalanceMode`, `autoReplicationProviders`, `autoFailOverProviders`, `autoLoadBalanceProviders`, `waitForAutoReplicationResult`, `showDetailedSettings` |
| `getSearchHolonsBySearchTerm` | GET | `api/data/search-holons/{searchTerm}` | `searchTerm` |
| `getSearchHolonsBySearchTermHolonType` | GET | `api/data/search-holons/{searchTerm}/{holonType}` | `searchTerm`, `holonType` |
| `grouped` | POST | `api/data/query-cql/grouped` | – |
| `indexed` | POST | `api/data/query-cql/indexed` | – |
| `indexedScalar` | POST | `api/data/query-cql/indexed/scalar` | – |
| `join` | POST | `api/data/query-cql/join` | – |
| `loadAllHolons` | POST | `api/data/load-all-holons` | – |
| `loadData` | POST | `api/data/load-data` | – |
| `loadFile` | POST | `api/data/load-file` | – |
| `loadFileChunk` | POST | `api/data/load-file-chunk` | – |
| `loadFileInfo` | POST | `api/data/load-file-info` | – |
| `loadHolon` | POST | `api/data/load-holon` | – |
| `loadHolonByMetaData` | POST | `api/data/load-holon-by-metadata` | – |
| `loadHolonByProviderKey` | GET | `api/data/load-holon-by-providerkey/{providerKey}` | `providerKey` |
| `loadHolonsByMetaData` | POST | `api/data/load-holons-by-metadata` | – |
| `loadHolonsForParent` | POST | `api/data/load-holons-for-parent` | – |
| `loadHolonsForParentByProviderKey` | GET | `api/data/load-holons-for-parent-by-providerkey/{providerKey}` | `providerKey` |
| `mixedProjection` | POST | `api/data/query-cql/projection/mixed` | – |
| `postHolonAuditTrail` | POST | `api/data/holon-audit-trail/{id}` | `id` |
| `projection` | POST | `api/data/query-cql/projection` | – |
| `providers` | GET | `api/data/query-cql/providers` | – |
| `purgeHolon` | DELETE | `api/data/purge-holon/{id}` | `id` |
| `purgeHolons` | POST | `api/data/purge-holons` | – |
| `query` | POST | `api/data/query-cql` | – |
| `recoverConditionalOperation` | POST | `api/data/recover-conditional-operation` | – |
| `releaseHolonPurgeHold` | DELETE | `api/data/holon-purge-hold/{id}` | `id` |
| `saveData` | POST | `api/data/save-data` | – |
| `saveFile` | POST | `api/data/save-file` | – |
| `saveFileChunk` | POST | `api/data/save-file-chunk` | – |
| `saveHolon` | POST | `api/data/save-holon` | – |
| `saveHolonByHolon` | POST | `api/data/save-holon/{holon}` | `holon` |
| `saveHolonBySaveChildrenRecursive` | POST | `api/data/save-holon/{saveChildren}/{recursive}/{maxChildDepth}/{continueOnError}` | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError` |
| `saveHolonBySaveChildrenRecursive2` | POST | `api/data/save-holon/{saveChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{providerType}/{setGlobally}` | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `providerType`, `setGlobally` |
| `saveHolonBySaveChildrenRecursive3` | POST | `api/data/save-holon/{saveChildren}/{recursive}/{maxChildDepth}/{continueOnError}/{providerType}/{setGlobally}/{autoReplicationMode}/{autoFailOverMode}/{autoLoadBalanceMode}/{autoReplicationProviders}/{autoFailOverProviders}/{AutoLoadBalanceProviders}/{waitForAutoReplicationResult}/{showDetailedSettings}` | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `providerType`, `setGlobally`, `autoReplicationMode`, `autoFailOverMode`, `autoLoadBalanceMode`, `autoReplicationProviders`, `autoFailOverProviders`, `AutoLoadBalanceProviders`, `waitForAutoReplicationResult`, `showDetailedSettings` |
| `saveHolonOffChain` | POST | `api/data/save-holon-off-chain` | – |
| `saveHolons` | POST | `api/data/save-holons` | – |
| `scalar` | POST | `api/data/query-cql/scalar` | – |
| `searchHolons` | POST | `api/data/search-holons` | – |
| `set` | POST | `api/data/query-cql/set` | – |
| `setHolonPurgeHold` | POST | `api/data/holon-purge-hold/{id}` | `id` |
| `sql` | POST | `api/data/query-cql/sql` | – |
| `verifyHolonSeal` | GET | `api/data/holon-seal/verify/{id}` | `id` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.data.ask({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
