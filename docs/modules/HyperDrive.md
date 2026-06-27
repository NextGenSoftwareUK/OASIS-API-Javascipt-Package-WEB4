# HyperDrive — `oasis.hyperDrive`

Source controller: [`HyperDriveController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/HyperDriveController.cs)
Route prefix: `api/hyperdrive`
77 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `checkQuotaStatus` | GET | `api/hyperdrive/quota/status` | – |
| `createFailoverTrigger` | POST | `api/hyperdrive/failover/triggers` | – |
| `createQuotaNotification` | POST | `api/hyperdrive/subscription/quota-notifications` | – |
| `createReplicationTrigger` | POST | `api/hyperdrive/replication/triggers` | – |
| `createUsageAlert` | POST | `api/hyperdrive/subscription/usage-alerts` | – |
| `deleteFailoverTrigger` | DELETE | `api/hyperdrive/failover/triggers/{id}` | `id` |
| `deleteQuotaNotification` | DELETE | `api/hyperdrive/subscription/quota-notifications/{id}` | `id` |
| `deleteReplicationTrigger` | DELETE | `api/hyperdrive/replication/triggers/{id}` | `id` |
| `deleteUsageAlert` | DELETE | `api/hyperdrive/subscription/usage-alerts/{id}` | `id` |
| `disableIntelligentMode` | POST | `api/hyperdrive/intelligent-mode/disable` | – |
| `enableIntelligentMode` | POST | `api/hyperdrive/intelligent-mode/enable` | – |
| `getAIRecommendations` | GET | `api/hyperdrive/ai/recommendations` | – |
| `getAnalyticsReport` | GET | `api/hyperdrive/analytics/report` | – |
| `getBestProvider` | GET | `api/hyperdrive/best-provider` | – |
| `getConfiguration` | GET | `api/hyperdrive/config` | – |
| `getConnectionCounts` | GET | `api/hyperdrive/connections` | – |
| `getCostHistory` | GET | `api/hyperdrive/costs/history` | – |
| `getCostOptimizationRecommendations` | GET | `api/hyperdrive/analytics/cost-optimization` | – |
| `getCostOptimizationRule` | GET | `api/hyperdrive/replication/cost-optimization` | – |
| `getCostProjections` | GET | `api/hyperdrive/costs/projections` | – |
| `getCurrentCosts` | GET | `api/hyperdrive/costs/current` | – |
| `getCurrentUsage` | GET | `api/hyperdrive/quota/usage` | – |
| `getDashboardData` | GET | `api/hyperdrive/dashboard` | – |
| `getDataPermissions` | GET | `api/hyperdrive/data-permissions` | – |
| `getDataTypeReplicationRules` | GET | `api/hyperdrive/replication/data-type-rules` | – |
| `getEscalationRules` | GET | `api/hyperdrive/failover/escalation-rules` | – |
| `getFailoverRules` | GET | `api/hyperdrive/failover/rules` | – |
| `getFailurePredictions` | GET | `api/hyperdrive/failover/predictions` | – |
| `getFreeProviders` | GET | `api/hyperdrive/providers/free` | – |
| `getHyperDriveMode` | GET | `api/hyperdrive/mode` | – |
| `getIntelligentMode` | GET | `api/hyperdrive/intelligent-mode` | – |
| `getLowCostProviders` | GET | `api/hyperdrive/providers/low-cost` | – |
| `getMetrics` | GET | `api/hyperdrive/metrics` | – |
| `getPerformanceOptimizationRecommendations` | GET | `api/hyperdrive/analytics/performance-optimization` | – |
| `getPredictiveAnalytics` | GET | `api/hyperdrive/analytics/predictive/{providerType}` | `providerType` |
| `getProviderFailoverRules` | GET | `api/hyperdrive/failover/provider-rules` | – |
| `getProviderMetrics` | GET | `api/hyperdrive/metrics/{providerType}` | `providerType` |
| `getProviderReplicationRules` | GET | `api/hyperdrive/replication/provider-rules` | – |
| `getQuotaLimits` | GET | `api/hyperdrive/quota/limits` | – |
| `getQuotaNotifications` | GET | `api/hyperdrive/subscription/quota-notifications` | – |
| `getReplicationRules` | GET | `api/hyperdrive/replication/rules` | – |
| `getScheduleRules` | GET | `api/hyperdrive/replication/schedule-rules` | – |
| `getSecurityRecommendations` | GET | `api/hyperdrive/recommendations/security` | – |
| `getSmartRecommendations` | GET | `api/hyperdrive/recommendations/smart` | – |
| `getStatus` | GET | `api/hyperdrive/status` | – |
| `getSubscriptionConfig` | GET | `api/hyperdrive/subscription/config` | – |
| `getUsageAlerts` | GET | `api/hyperdrive/subscription/usage-alerts` | – |
| `initiatePreventiveFailover` | POST | `api/hyperdrive/failover/preventive` | – |
| `recordAnalyticsData` | POST | `api/hyperdrive/analytics/record` | – |
| `recordConnection` | POST | `api/hyperdrive/record-connection` | – |
| `recordFailureEvent` | POST | `api/hyperdrive/failover/record-failure` | – |
| `recordPerformanceData` | POST | `api/hyperdrive/ai/record-performance` | – |
| `recordRequest` | POST | `api/hyperdrive/record-request` | – |
| `resetAllMetrics` | POST | `api/hyperdrive/metrics/reset-all` | – |
| `resetConfiguration` | POST | `api/hyperdrive/config/reset` | – |
| `resetProviderMetrics` | POST | `api/hyperdrive/metrics/{providerType}/reset` | `providerType` |
| `setCostLimits` | PUT | `api/hyperdrive/costs/limits` | – |
| `setHyperDriveMode` | PUT | `api/hyperdrive/mode` | – |
| `updateConfiguration` | PUT | `api/hyperdrive/config` | – |
| `updateCostAnalysis` | PUT | `api/hyperdrive/cost/{providerType}` | `providerType` |
| `updateCostOptimizationRule` | PUT | `api/hyperdrive/replication/cost-optimization` | – |
| `updateDataPermissions` | PUT | `api/hyperdrive/data-permissions` | – |
| `updateDataTypeReplicationRule` | PUT | `api/hyperdrive/replication/data-type-rules` | – |
| `updateEscalationRule` | PUT | `api/hyperdrive/failover/escalation-rules` | – |
| `updateFailoverRules` | PUT | `api/hyperdrive/failover/rules` | – |
| `updateFailoverTrigger` | PUT | `api/hyperdrive/failover/triggers/{id}` | `id` |
| `updateGeographicInfo` | PUT | `api/hyperdrive/geographic/{providerType}` | `providerType` |
| `updateIntelligentMode` | PUT | `api/hyperdrive/intelligent-mode` | – |
| `updateProviderFailoverRule` | PUT | `api/hyperdrive/failover/provider-rules` | – |
| `updateProviderReplicationRule` | PUT | `api/hyperdrive/replication/provider-rules` | – |
| `updateQuotaNotification` | PUT | `api/hyperdrive/subscription/quota-notifications/{id}` | `id` |
| `updateReplicationRules` | PUT | `api/hyperdrive/replication/rules` | – |
| `updateReplicationTrigger` | PUT | `api/hyperdrive/replication/triggers/{id}` | `id` |
| `updateScheduleRule` | PUT | `api/hyperdrive/replication/schedule-rules` | – |
| `updateSubscriptionConfig` | PUT | `api/hyperdrive/subscription/config` | – |
| `updateUsageAlert` | PUT | `api/hyperdrive/subscription/usage-alerts/{id}` | `id` |
| `validateConfiguration` | POST | `api/hyperdrive/config/validate` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.hyperDrive.checkQuotaStatus({});
if (isError) throw new Error(message);
console.log(result);
```
