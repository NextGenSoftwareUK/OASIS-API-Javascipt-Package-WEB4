# HyperDrive — `oasis.hyperDrive`

Source controller: [`HyperDriveController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/HyperDriveController.cs)
Route prefix: `api/hyperDrive`
80 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).

## Explicit JSON body parameters

- setHyperDriveMode: args.mode is the JSON body value; other non-route fields are query parameters.

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `bindOnetPeer` | POST | `api/hyperDrive/sync/onet-peer-binding` | – |
| `checkQuotaStatus` | GET | `api/hyperDrive/quota/status` | – |
| `createFailoverTrigger` | POST | `api/hyperDrive/failover/triggers` | – |
| `createQuotaNotification` | POST | `api/hyperDrive/subscription/quota-notifications` | – |
| `createReplicationTrigger` | POST | `api/hyperDrive/replication/triggers` | – |
| `createUsageAlert` | POST | `api/hyperDrive/subscription/usage-alerts` | – |
| `deleteFailoverTrigger` | DELETE | `api/hyperDrive/failover/triggers/{id}` | `id` |
| `deleteQuotaNotification` | DELETE | `api/hyperDrive/subscription/quota-notifications/{id}` | `id` |
| `deleteReplicationTrigger` | DELETE | `api/hyperDrive/replication/triggers/{id}` | `id` |
| `deleteUsageAlert` | DELETE | `api/hyperDrive/subscription/usage-alerts/{id}` | `id` |
| `disableIntelligentMode` | POST | `api/hyperDrive/intelligent-mode/disable` | – |
| `enableIntelligentMode` | POST | `api/hyperDrive/intelligent-mode/enable` | – |
| `getAIRecommendations` | GET | `api/hyperDrive/ai/recommendations` | – |
| `getAnalyticsReport` | GET | `api/hyperDrive/analytics/report` | – |
| `getBestProvider` | GET | `api/hyperDrive/best-provider` | – |
| `getConfiguration` | GET | `api/hyperDrive/config` | – |
| `getConnectionCounts` | GET | `api/hyperDrive/connections` | – |
| `getCostHistory` | GET | `api/hyperDrive/costs/history` | – |
| `getCostOptimizationRecommendations` | GET | `api/hyperDrive/analytics/cost-optimization` | – |
| `getCostOptimizationRule` | GET | `api/hyperDrive/replication/cost-optimization` | – |
| `getCostProjections` | GET | `api/hyperDrive/costs/projections` | – |
| `getCurrentCosts` | GET | `api/hyperDrive/costs/current` | – |
| `getCurrentUsage` | GET | `api/hyperDrive/quota/usage` | – |
| `getDashboardData` | GET | `api/hyperDrive/dashboard` | – |
| `getDataPermissions` | GET | `api/hyperDrive/data-permissions` | – |
| `getDataTypeReplicationRules` | GET | `api/hyperDrive/replication/data-type-rules` | – |
| `getEscalationRules` | GET | `api/hyperDrive/failover/escalation-rules` | – |
| `getFailoverRules` | GET | `api/hyperDrive/failover/rules` | – |
| `getFailurePredictions` | GET | `api/hyperDrive/failover/predictions` | – |
| `getFreeProviders` | GET | `api/hyperDrive/providers/free` | – |
| `getHyperDriveMode` | GET | `api/hyperDrive/mode` | – |
| `getIntelligentMode` | GET | `api/hyperDrive/intelligent-mode` | – |
| `getLowCostProviders` | GET | `api/hyperDrive/providers/low-cost` | – |
| `getMetrics` | GET | `api/hyperDrive/metrics` | – |
| `getPerformanceOptimizationRecommendations` | GET | `api/hyperDrive/analytics/performance-optimization` | – |
| `getPredictiveAnalytics` | GET | `api/hyperDrive/analytics/predictive/{providerType}` | `providerType` |
| `getProviderFailoverRules` | GET | `api/hyperDrive/failover/provider-rules` | – |
| `getProviderMetrics` | GET | `api/hyperDrive/metrics/{providerType}` | `providerType` |
| `getProviderReplicationRules` | GET | `api/hyperDrive/replication/provider-rules` | – |
| `getQuotaLimits` | GET | `api/hyperDrive/quota/limits` | – |
| `getQuotaNotifications` | GET | `api/hyperDrive/subscription/quota-notifications` | – |
| `getReplicationRules` | GET | `api/hyperDrive/replication/rules` | – |
| `getScheduleRules` | GET | `api/hyperDrive/replication/schedule-rules` | – |
| `getSecurityRecommendations` | GET | `api/hyperDrive/recommendations/security` | – |
| `getSmartRecommendations` | GET | `api/hyperDrive/recommendations/smart` | – |
| `getStatus` | GET | `api/hyperDrive/status` | – |
| `getSubscriptionConfig` | GET | `api/hyperDrive/subscription/config` | – |
| `getUsageAlerts` | GET | `api/hyperDrive/subscription/usage-alerts` | – |
| `initiatePreventiveFailover` | POST | `api/hyperDrive/failover/preventive` | – |
| `issueOfflineSessionGrant` | POST | `api/hyperDrive/sync/offline-session-grant` | – |
| `readDeliveries` | GET | `api/hyperDrive/sync/deliveries` | – |
| `recordAnalyticsData` | POST | `api/hyperDrive/analytics/record` | – |
| `recordConnection` | POST | `api/hyperDrive/record-connection` | – |
| `recordFailureEvent` | POST | `api/hyperDrive/failover/record-failure` | – |
| `recordPerformanceData` | POST | `api/hyperDrive/ai/record-performance` | – |
| `recordRequest` | POST | `api/hyperDrive/record-request` | – |
| `resetAllMetrics` | POST | `api/hyperDrive/metrics/reset-all` | – |
| `resetConfiguration` | POST | `api/hyperDrive/config/reset` | – |
| `resetProviderMetrics` | POST | `api/hyperDrive/metrics/{providerType}/reset` | `providerType` |
| `setCostLimits` | PUT | `api/hyperDrive/costs/limits` | – |
| `setHyperDriveMode` | PUT | `api/hyperDrive/mode` | – |
| `updateConfiguration` | PUT | `api/hyperDrive/config` | – |
| `updateCostAnalysis` | PUT | `api/hyperDrive/cost/{providerType}` | `providerType` |
| `updateCostOptimizationRule` | PUT | `api/hyperDrive/replication/cost-optimization` | – |
| `updateDataPermissions` | PUT | `api/hyperDrive/data-permissions` | – |
| `updateDataTypeReplicationRule` | PUT | `api/hyperDrive/replication/data-type-rules` | – |
| `updateEscalationRule` | PUT | `api/hyperDrive/failover/escalation-rules` | – |
| `updateFailoverRules` | PUT | `api/hyperDrive/failover/rules` | – |
| `updateFailoverTrigger` | PUT | `api/hyperDrive/failover/triggers/{id}` | `id` |
| `updateGeographicInfo` | PUT | `api/hyperDrive/geographic/{providerType}` | `providerType` |
| `updateIntelligentMode` | PUT | `api/hyperDrive/intelligent-mode` | – |
| `updateProviderFailoverRule` | PUT | `api/hyperDrive/failover/provider-rules` | – |
| `updateProviderReplicationRule` | PUT | `api/hyperDrive/replication/provider-rules` | – |
| `updateQuotaNotification` | PUT | `api/hyperDrive/subscription/quota-notifications/{id}` | `id` |
| `updateReplicationRules` | PUT | `api/hyperDrive/replication/rules` | – |
| `updateReplicationTrigger` | PUT | `api/hyperDrive/replication/triggers/{id}` | `id` |
| `updateScheduleRule` | PUT | `api/hyperDrive/replication/schedule-rules` | – |
| `updateSubscriptionConfig` | PUT | `api/hyperDrive/subscription/config` | – |
| `updateUsageAlert` | PUT | `api/hyperDrive/subscription/usage-alerts/{id}` | `id` |
| `validateConfiguration` | POST | `api/hyperDrive/config/validate` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.hyperDrive.bindOnetPeer({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
