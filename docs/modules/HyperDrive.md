# HyperDrive — `oasis.hyperDrive`

Source controller: [`HyperDriveController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/HyperDriveController.cs)
Route prefix: `api/hyperdrive`
77 operation(s).

Every method takes a single args object: any key matching a `{token}` in the route is substituted into the URL; everything else becomes the query string (GET/DELETE) or JSON body (POST/PUT). Every call resolves to the standard OASIS envelope:

```ts
{
  isError: boolean;
  isWarning: boolean;
  message: string;
  errorCode?: string;
  result: T; // see each endpoint's Response section below
}
```

## Operations

### `checkQuotaStatus`

Checks quota status for a specific type

**GET** `api/hyperdrive/quota/status`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.checkQuotaStatus({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `createFailoverTrigger`

**POST** `api/hyperdrive/failover/triggers`

**Request**

Body type: `FailoverTriggerConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `FailoverTriggerConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.createFailoverTrigger({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <FailoverTriggerConfig> */
}
```

---

### `createQuotaNotification`

**POST** `api/hyperdrive/subscription/quota-notifications`

**Request**

Body type: `QuotaNotificationConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `QuotaNotificationConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.createQuotaNotification({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <QuotaNotificationConfig> */
}
```

---

### `createReplicationTrigger`

**POST** `api/hyperdrive/replication/triggers`

**Request**

Body type: `ReplicationTriggerConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ReplicationTriggerConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.createReplicationTrigger({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <ReplicationTriggerConfig> */
}
```

---

### `createUsageAlert`

**POST** `api/hyperdrive/subscription/usage-alerts`

**Request**

Body type: `UsageAlertConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `UsageAlertConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.createUsageAlert({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <UsageAlertConfig> */
}
```

---

### `deleteFailoverTrigger`

**DELETE** `api/hyperdrive/failover/triggers/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.deleteFailoverTrigger({
    id: '<id>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `deleteQuotaNotification`

**DELETE** `api/hyperdrive/subscription/quota-notifications/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.deleteQuotaNotification({
    id: '<id>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `deleteReplicationTrigger`

**DELETE** `api/hyperdrive/replication/triggers/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.deleteReplicationTrigger({
    id: '<id>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `deleteUsageAlert`

**DELETE** `api/hyperdrive/subscription/usage-alerts/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.deleteUsageAlert({
    id: '<id>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `disableIntelligentMode`

Disables intelligent mode

**POST** `api/hyperdrive/intelligent-mode/disable`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.disableIntelligentMode({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `enableIntelligentMode`

Enables intelligent mode

**POST** `api/hyperdrive/intelligent-mode/enable`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.enableIntelligentMode({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `getAIRecommendations`

Gets AI-powered optimization recommendations

**GET** `api/hyperdrive/ai/recommendations`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<OptimizationRecommendation>` (array)

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Title` | `string` |
| `Description` | `string` |
| `Category` | `string` |
| `Type` | `OptimizationType` |
| `Priority` | `PriorityLevel` |
| `EstimatedImpact` | `decimal` |
| `EstimatedCost` | `decimal` |
| `AffectedProviders` | `List<ProviderType>` |
| `ImplementationSteps` | `List<string>` |
| `CreatedAt` | `DateTime` |
| `ExpiresAt` | `DateTime?` |
| `IsImplemented` | `bool` |
| `Metadata` | `Dictionary<string, object>` |
| `CreatedBy` | `string` |
| `Reason` | `string` |
| `Prerequisites` | `List<string>` |
| `ConfidenceScore` | `decimal` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getAIRecommendations({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "example string", "Title": "example string", "Description": "example string", "Category": "example string", "Type": /* <OptimizationType> */, "Priority": /* <PriorityLevel> */, "EstimatedImpact": 1.0, "EstimatedCost": 1.0, "AffectedProviders": [{  }], "ImplementationSteps": ["example string"], "CreatedAt": "2026-01-01T00:00:00Z", "ExpiresAt": "2026-01-01T00:00:00Z", "IsImplemented": true, "Metadata": /* <Dictionary<string, object>> */, "CreatedBy": "example string", "Reason": "example string", "Prerequisites": ["example string"], "ConfidenceScore": 1.0 }]
}
```

---

### `getAnalyticsReport`

Gets comprehensive analytics report

**GET** `api/hyperdrive/analytics/report`

**Request**

Body type: `ProviderType?`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `AnalyticsReport` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getAnalyticsReport({
    timeRange: '<timeRange>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <AnalyticsReport> */
}
```

---

### `getBestProvider`

Gets the best provider based on current strategy

**GET** `api/hyperdrive/best-provider`

**Request**

Body type: `LoadBalancingStrategy?`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ProviderType`

_No fields._

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getBestProvider({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": {  }
}
```

---

### `getConfiguration`

Gets the current HyperDrive configuration

**GET** `api/hyperdrive/config`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `OASISHyperDriveConfig`

| Field | Type |
| --- | --- |
| `IsEnabled` | `bool` |
| `DefaultStrategy` | `string` |
| `AutoFailoverEnabled` | `bool` |
| `AutoReplicationEnabled` | `bool` |
| `AutoLoadBalancingEnabled` | `bool` |
| `MaxRetryAttempts` | `int` |
| `RequestTimeoutMs` | `int` |
| `HealthCheckIntervalMs` | `int` |
| `MaxConcurrentRequests` | `int` |
| `PerformanceWeight` | `double` |
| `CostWeight` | `double` |
| `GeographicWeight` | `double` |
| `AvailabilityWeight` | `double` |
| `LatencyWeight` | `double` |
| `ThroughputWeight` | `double` |
| `ReliabilityWeight` | `double` |
| `MaxLatencyThresholdMs` | `int` |
| `MaxErrorRateThreshold` | `double` |
| `MinUptimeThreshold` | `double` |
| `EnabledProviders` | `List<string>` |
| `AutoFailoverProviders` | `List<string>` |
| `AutoReplicationProviders` | `List<string>` |
| `LoadBalancingProviders` | `List<string>` |
| `ProviderConfigs` | `Dictionary<string, ProviderConfig>` |
| `GeographicConfig` | `GeographicConfig` |
| `CostConfig` | `CostConfig` |
| `PerformanceConfig` | `PerformanceConfig` |
| `SecurityConfig` | `SecurityConfig` |
| `MonitoringConfig` | `MonitoringConfig` |
| `ProviderType` | `string` |
| `Weight` | `int` |
| `TimeoutMs` | `int` |
| `MaxConnections` | `int` |
| `ErrorThreshold` | `double` |
| `MinUptime` | `double` |
| `MaxLatencyMs` | `int` |
| `Endpoint` | `string` |
| `ApiKey` | `string` |
| `SecretKey` | `string` |
| `CustomSettings` | `Dictionary<string, string>` |
| `DefaultRegion` | `string` |
| `UserLocation` | `string` |
| `MaxDistanceKm` | `double` |
| `MaxNetworkHops` | `int` |
| `Regions` | `Dictionary<string, GeographicRegion>` |
| `Name` | `string` |
| `Country` | `string` |
| `City` | `string` |
| `Latitude` | `double` |
| `Longitude` | `double` |
| `TimeZone` | `string` |
| `Currency` | `string` |
| `MaxCostPerOperation` | `double` |
| `MaxStorageCostPerGB` | `double` |
| `MaxComputeCostPerHour` | `double` |
| `MaxNetworkCostPerGB` | `double` |
| `ProviderCosts` | `Dictionary<string, CostAnalysisDNA>` |
| `StorageCostPerGB` | `double` |
| `ComputeCostPerHour` | `double` |
| `NetworkCostPerGB` | `double` |
| `TransactionCost` | `double` |
| `ApiCallCost` | `double` |
| `TotalCost` | `double` |
| `LastUpdated` | `DateTime` |
| `CostEfficiencyScore` | `int` |
| `MaxResponseTimeMs` | `int` |
| `MaxErrorRate` | `double` |
| `MinThroughputMbps` | `int` |
| `MaxConcurrentConnections` | `int` |
| `QueueDepthThreshold` | `int` |
| `MaxCpuUsage` | `double` |
| `MaxMemoryUsage` | `double` |
| `RequireEncryption` | `bool` |
| `RequireAuthentication` | `bool` |
| `RequireAuthorization` | `bool` |
| `SessionTimeoutMs` | `int` |
| `MaxConcurrentSessions` | `int` |
| `AllowedIPs` | `List<string>` |
| `BlockedIPs` | `List<string>` |
| `SecurityHeaders` | `Dictionary<string, string>` |
| `MetricsCollectionIntervalMs` | `int` |
| `MaxMetricsHistory` | `int` |
| `AlertThreshold` | `int` |
| `EnableRealTimeMonitoring` | `bool` |
| `EnablePerformanceProfiling` | `bool` |
| `EnableCostTracking` | `bool` |
| `EnableGeographicTracking` | `bool` |
| `MonitoringEndpoints` | `List<string>` |
| `CustomMetrics` | `Dictionary<string, string>` |
| `ConnectionWeight` | `double` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getConfiguration({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "IsEnabled": true, "DefaultStrategy": "example string", "AutoFailoverEnabled": true, "AutoReplicationEnabled": true, "AutoLoadBalancingEnabled": true, "MaxRetryAttempts": 1, "RequestTimeoutMs": 1, "HealthCheckIntervalMs": 1, "MaxConcurrentRequests": 1, "PerformanceWeight": 1.0, "CostWeight": 1.0, "GeographicWeight": 1.0, "AvailabilityWeight": 1.0, "LatencyWeight": 1.0, "ThroughputWeight": 1.0, "ReliabilityWeight": 1.0, "MaxLatencyThresholdMs": 1, "MaxErrorRateThreshold": 1.0, "MinUptimeThreshold": 1.0, "EnabledProviders": ["example string"], "AutoFailoverProviders": ["example string"], "AutoReplicationProviders": ["example string"], "LoadBalancingProviders": ["example string"], "ProviderConfigs": /* <Dictionary<string, ProviderConfig>> */, "GeographicConfig": /* <GeographicConfig> */, "CostConfig": /* <CostConfig> */, "PerformanceConfig": /* <PerformanceConfig> */, "SecurityConfig": /* <SecurityConfig> */, "MonitoringConfig": /* <MonitoringConfig> */, "ProviderType": "example string", "Weight": 1, "TimeoutMs": 1, "MaxConnections": 1, "ErrorThreshold": 1.0, "MinUptime": 1.0, "MaxLatencyMs": 1, "Endpoint": "example string", "ApiKey": "example string", "SecretKey": "example string", "CustomSettings": /* <Dictionary<string, string>> */, "DefaultRegion": "example string", "UserLocation": "example string", "MaxDistanceKm": 1.0, "MaxNetworkHops": 1, "Regions": /* <Dictionary<string, GeographicRegion>> */, "Name": "example string", "Country": "example string", "City": "example string", "Latitude": 1.0, "Longitude": 1.0, "TimeZone": "example string", "Currency": "example string", "MaxCostPerOperation": 1.0, "MaxStorageCostPerGB": 1.0, "MaxComputeCostPerHour": 1.0, "MaxNetworkCostPerGB": 1.0, "ProviderCosts": /* <Dictionary<string, CostAnalysisDNA>> */, "StorageCostPerGB": 1.0, "ComputeCostPerHour": 1.0, "NetworkCostPerGB": 1.0, "TransactionCost": 1.0, "ApiCallCost": 1.0, "TotalCost": 1.0, "LastUpdated": "2026-01-01T00:00:00Z", "CostEfficiencyScore": 1, "MaxResponseTimeMs": 1, "MaxErrorRate": 1.0, "MinThroughputMbps": 1, "MaxConcurrentConnections": 1, "QueueDepthThreshold": 1, "MaxCpuUsage": 1.0, "MaxMemoryUsage": 1.0, "RequireEncryption": true, "RequireAuthentication": true, "RequireAuthorization": true, "SessionTimeoutMs": 1, "MaxConcurrentSessions": 1, "AllowedIPs": ["example string"], "BlockedIPs": ["example string"], "SecurityHeaders": /* <Dictionary<string, string>> */, "MetricsCollectionIntervalMs": 1, "MaxMetricsHistory": 1, "AlertThreshold": 1, "EnableRealTimeMonitoring": true, "EnablePerformanceProfiling": true, "EnableCostTracking": true, "EnableGeographicTracking": true, "MonitoringEndpoints": ["example string"], "CustomMetrics": /* <Dictionary<string, string>> */, "ConnectionWeight": 1.0 }
}
```

---

### `getConnectionCounts`

Gets active connection counts for all providers

**GET** `api/hyperdrive/connections`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, int>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getConnectionCounts({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<ProviderType, int>> */
}
```

---

### `getCostHistory`

**GET** `api/hyperdrive/costs/history`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `timeRange` | `string (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, List<decimal>>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getCostHistory({
    timeRange: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, List<decimal>>> */
}
```

---

### `getCostOptimizationRecommendations`

Gets cost optimization recommendations

**GET** `api/hyperdrive/analytics/cost-optimization`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<CostOptimizationRecommendation>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getCostOptimizationRecommendations({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <CostOptimizationRecommendation> */ ]
}
```

---

### `getCostOptimizationRule`

**GET** `api/hyperdrive/replication/cost-optimization`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `CostOptimizationRuleConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getCostOptimizationRule({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <CostOptimizationRuleConfig> */
}
```

---

### `getCostProjections`

**GET** `api/hyperdrive/costs/projections`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, decimal>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getCostProjections({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, decimal>> */
}
```

---

### `getCurrentCosts`

**GET** `api/hyperdrive/costs/current`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, decimal>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getCurrentCosts({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, decimal>> */
}
```

---

### `getCurrentUsage`

Gets current usage statistics

**GET** `api/hyperdrive/quota/usage`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, int>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getCurrentUsage({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, int>> */
}
```

---

### `getDashboardData`

Gets real-time dashboard data

**GET** `api/hyperdrive/dashboard`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `DashboardData` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getDashboardData({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <DashboardData> */
}
```

---

### `getDataPermissions`

Gets data permissions configuration

**GET** `api/hyperdrive/data-permissions`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `DataPermissionsConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getDataPermissions({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <DataPermissionsConfig> */
}
```

---

### `getDataTypeReplicationRules`

**GET** `api/hyperdrive/replication/data-type-rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<DataTypeReplicationRuleConfig>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getDataTypeReplicationRules({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <DataTypeReplicationRuleConfig> */ ]
}
```

---

### `getEscalationRules`

**GET** `api/hyperdrive/failover/escalation-rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<EscalationRuleConfig>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getEscalationRules({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <EscalationRuleConfig> */ ]
}
```

---

### `getFailoverRules`

Gets failover rules configuration

**GET** `api/hyperdrive/failover/rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `FailoverRulesConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getFailoverRules({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <FailoverRulesConfig> */
}
```

---

### `getFailurePredictions`

Gets failure predictions

**GET** `api/hyperdrive/failover/predictions`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `FailoverPrediction`

| Field | Type |
| --- | --- |
| `Timestamp` | `DateTime` |
| `Predictions` | `List<ProviderFailurePrediction>` |
| `RecommendedActions` | `List<string>` |
| `RiskLevel` | `RiskLevel` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getFailurePredictions({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Timestamp": "2026-01-01T00:00:00Z", "Predictions": [{ "ProviderType": {  }, "RiskLevel": /* <RiskLevel> */, "FailureProbability": 1.0, "PredictedFailureTime": "2026-01-01T00:00:00Z", "Confidence": 1.0, "RiskFactors": ["example string"], "RecommendedActions": ["example string"] }], "RecommendedActions": ["example string"], "RiskLevel": /* <RiskLevel> */ }
}
```

---

### `getFreeProviders`

Gets free providers list

**GET** `api/hyperdrive/providers/free`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<string>`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getFreeProviders({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": ["example string"]
}
```

---

### `getHyperDriveMode`

Gets/sets HyperDrive mode (Legacy | OASISHyperDrive2)

**GET** `api/hyperdrive/mode`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getHyperDriveMode({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "example string"
}
```

---

### `getIntelligentMode`

Gets intelligent mode configuration

**GET** `api/hyperdrive/intelligent-mode`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IntelligentModeConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getIntelligentMode({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <IntelligentModeConfig> */
}
```

---

### `getLowCostProviders`

Gets low-cost providers list

**GET** `api/hyperdrive/providers/low-cost`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<string>`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getLowCostProviders({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": ["example string"]
}
```

---

### `getMetrics`

Gets performance metrics for all providers

**GET** `api/hyperdrive/metrics`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, ProviderPerformanceMetrics>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getMetrics({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<ProviderType, ProviderPerformanceMetrics>> */
}
```

---

### `getPerformanceOptimizationRecommendations`

Gets performance optimization recommendations

**GET** `api/hyperdrive/analytics/performance-optimization`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<PerformanceOptimizationRecommendation>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getPerformanceOptimizationRecommendations({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <PerformanceOptimizationRecommendation> */ ]
}
```

---

### `getPredictiveAnalytics`

Gets predictive analytics

**GET** `api/hyperdrive/analytics/predictive/{providerType}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `forecastDays` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `PredictiveAnalytics` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getPredictiveAnalytics({
    providerType: '<providerType>',
    forecastDays: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <PredictiveAnalytics> */
}
```

---

### `getProviderFailoverRules`

**GET** `api/hyperdrive/failover/provider-rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<ProviderFailoverRuleConfig>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getProviderFailoverRules({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <ProviderFailoverRuleConfig> */ ]
}
```

---

### `getProviderMetrics`

Gets performance metrics for a specific provider

**GET** `api/hyperdrive/metrics/{providerType}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ProviderPerformanceMetrics`

| Field | Type |
| --- | --- |
| `ProviderType` | `ProviderType` |
| `ResponseTimeMs` | `double` |
| `ThroughputMbps` | `double` |
| `ErrorRate` | `double` |
| `UptimePercentage` | `double` |
| `ActiveConnections` | `int` |
| `CostPerOperation` | `double` |
| `GeographicRegion` | `string` |
| `LastUpdated` | `DateTime` |
| `TotalRequests` | `int` |
| `SuccessfulRequests` | `int` |
| `FailedRequests` | `int` |
| `AverageLatency` | `double` |
| `PeakLatency` | `double` |
| `MinLatency` | `double` |
| `CpuUsage` | `double` |
| `MemoryUsage` | `double` |
| `NetworkLatency` | `double` |
| `BandwidthUtilization` | `double` |
| `QueueDepth` | `double` |
| `ProcessingTime` | `double` |
| `AvailabilityScore` | `double` |
| `PerformanceScore` | `double` |
| `CostScore` | `double` |
| `GeographicScore` | `double` |
| `OverallScore` | `double` |
| `AverageResponseTime` | `double` |
| `TotalResponseTime` | `double` |
| `LastActivity` | `DateTime` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getProviderMetrics({
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderType": {  }, "ResponseTimeMs": 1.0, "ThroughputMbps": 1.0, "ErrorRate": 1.0, "UptimePercentage": 1.0, "ActiveConnections": 1, "CostPerOperation": 1.0, "GeographicRegion": "example string", "LastUpdated": "2026-01-01T00:00:00Z", "TotalRequests": 1, "SuccessfulRequests": 1, "FailedRequests": 1, "AverageLatency": 1.0, "PeakLatency": 1.0, "MinLatency": 1.0, "CpuUsage": 1.0, "MemoryUsage": 1.0, "NetworkLatency": 1.0, "BandwidthUtilization": 1.0, "QueueDepth": 1.0, "ProcessingTime": 1.0, "AvailabilityScore": 1.0, "PerformanceScore": 1.0, "CostScore": 1.0, "GeographicScore": 1.0, "OverallScore": 1.0, "AverageResponseTime": 1.0, "TotalResponseTime": 1.0, "LastActivity": "2026-01-01T00:00:00Z" }
}
```

---

### `getProviderReplicationRules`

**GET** `api/hyperdrive/replication/provider-rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<ProviderReplicationRuleConfig>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getProviderReplicationRules({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <ProviderReplicationRuleConfig> */ ]
}
```

---

### `getQuotaLimits`

Gets quota limits for current subscription

**GET** `api/hyperdrive/quota/limits`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, int>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getQuotaLimits({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, int>> */
}
```

---

### `getQuotaNotifications`

**GET** `api/hyperdrive/subscription/quota-notifications`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<QuotaNotificationConfig>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getQuotaNotifications({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <QuotaNotificationConfig> */ ]
}
```

---

### `getReplicationRules`

Gets replication rules configuration

**GET** `api/hyperdrive/replication/rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ReplicationRulesConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getReplicationRules({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <ReplicationRulesConfig> */
}
```

---

### `getScheduleRules`

**GET** `api/hyperdrive/replication/schedule-rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<ScheduleRuleConfig>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getScheduleRules({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <ScheduleRuleConfig> */ ]
}
```

---

### `getSecurityRecommendations`

**GET** `api/hyperdrive/recommendations/security`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getSecurityRecommendations({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `getSmartRecommendations`

**GET** `api/hyperdrive/recommendations/smart`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getSmartRecommendations({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `getStatus`

Gets HyperDrive status and health

**GET** `api/hyperdrive/status`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `HyperDriveStatus` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getStatus({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <HyperDriveStatus> */
}
```

---

### `getSubscriptionConfig`

Gets subscription configuration

**GET** `api/hyperdrive/subscription/config`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `SubscriptionConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getSubscriptionConfig({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <SubscriptionConfig> */
}
```

---

### `getUsageAlerts`

**GET** `api/hyperdrive/subscription/usage-alerts`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<UsageAlertConfig>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getUsageAlerts({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <UsageAlertConfig> */ ]
}
```

---

### `initiatePreventiveFailover`

Initiates preventive failover

**POST** `api/hyperdrive/failover/preventive`

**Request**

Body type: `List<ProviderType>`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.initiatePreventiveFailover({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `recordAnalyticsData`

Records analytics data

**POST** `api/hyperdrive/analytics/record`

**Request**

Body type: `AnalyticsDataPoint` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.recordAnalyticsData({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `recordConnection`

Records connection activity

**POST** `api/hyperdrive/record-connection`

**Request**

Body type: `RecordConnectionModel` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.recordConnection({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `recordFailureEvent`

Records failure event

**POST** `api/hyperdrive/failover/record-failure`

**Request**

Body type: `FailureEvent`

| Field | Type |
| --- | --- |
| `Timestamp` | `DateTime` |
| `ProviderType` | `ProviderType` |
| `FailureType` | `FailureType` |
| `Description` | `string` |
| `Duration` | `double` |
| `Cause` | `string` |
| `Resolution` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.recordFailureEvent({
    timestamp: "2026-01-01T00:00:00Z",
    providerType: {  },
    failureType: /* <FailureType> */,
    description: "example string",
    duration: 1.0,
    cause: "example string",
    resolution: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `recordPerformanceData`

Records performance data for AI training

**POST** `api/hyperdrive/ai/record-performance`

**Request**

Body type: `PerformanceDataPoint`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `ProviderType` | `ProviderType` |
| `ProviderName` | `string` |
| `Operation` | `string` |
| `Timestamp` | `DateTime` |
| `Duration` | `TimeSpan` |
| `Success` | `bool` |
| `ErrorMessage` | `string` |
| `DataSize` | `long` |
| `RetryCount` | `int` |
| `Cost` | `decimal` |
| `Metrics` | `Dictionary<string, object>` |
| `Context` | `Dictionary<string, object>` |
| `UserId` | `string` |
| `SessionId` | `string` |
| `RequestId` | `string` |
| `AvatarId` | `string` |
| `HolonId` | `string` |
| `SourceIP` | `string` |
| `UserAgent` | `string` |
| `Location` | `GeographicLocation` |
| `Tags` | `Dictionary<string, string>` |
| `AverageLatency` | `double` |
| `Throughput` | `double` |
| `SuccessRate` | `double` |
| `ErrorRate` | `double` |
| `TotalCost` | `decimal` |
| `TotalOperations` | `long` |
| `TotalDuration` | `TimeSpan` |
| `ProviderMetrics` | `Dictionary<ProviderType, double>` |
| `OperationMetrics` | `Dictionary<string, double>` |
| `StartTime` | `DateTime` |
| `EndTime` | `DateTime` |
| `TimeWindow` | `TimeSpan` |
| `Name` | `string` |
| `Description` | `string` |
| `BaselineLatency` | `double` |
| `BaselineThroughput` | `double` |
| `BaselineCost` | `decimal` |
| `CreatedAt` | `DateTime` |
| `UpdatedAt` | `DateTime?` |
| `IsActive` | `bool` |
| `Conditions` | `Dictionary<string, object>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.recordPerformanceData({
    id: "example string",
    providerType: {  },
    providerName: "example string",
    operation: "example string",
    timestamp: "2026-01-01T00:00:00Z",
    duration: /* <TimeSpan> */,
    success: true,
    errorMessage: "example string",
    dataSize: 1,
    retryCount: 1,
    cost: 1.0,
    metrics: /* <Dictionary<string, object>> */,
    context: /* <Dictionary<string, object>> */,
    userId: "example string",
    sessionId: "example string",
    requestId: "example string",
    avatarId: "example string",
    holonId: "example string",
    sourceIP: "example string",
    userAgent: "example string",
    location: { "Latitude": 1.0, "Longitude": 1.0, "Country": "example string", "Region": "example string", "City": "example string" },
    tags: /* <Dictionary<string, string>> */,
    averageLatency: 1.0,
    throughput: 1.0,
    successRate: 1.0,
    errorRate: 1.0,
    totalCost: 1.0,
    totalOperations: 1,
    totalDuration: /* <TimeSpan> */,
    providerMetrics: /* <Dictionary<ProviderType, double>> */,
    operationMetrics: /* <Dictionary<string, double>> */,
    startTime: "2026-01-01T00:00:00Z",
    endTime: "2026-01-01T00:00:00Z",
    timeWindow: /* <TimeSpan> */,
    name: "example string",
    description: "example string",
    baselineLatency: 1.0,
    baselineThroughput: 1.0,
    baselineCost: 1.0,
    createdAt: "2026-01-01T00:00:00Z",
    updatedAt: "2026-01-01T00:00:00Z",
    isActive: true,
    conditions: /* <Dictionary<string, object>> */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `recordRequest`

Records a request for performance tracking

**POST** `api/hyperdrive/record-request`

**Request**

Body type: `RecordRequestModel` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.recordRequest({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `resetAllMetrics`

Resets all metrics

**POST** `api/hyperdrive/metrics/reset-all`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.resetAllMetrics({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `resetConfiguration`

Resets configuration to defaults

**POST** `api/hyperdrive/config/reset`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.resetConfiguration({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `resetProviderMetrics`

Resets metrics for a specific provider

**POST** `api/hyperdrive/metrics/{providerType}/reset`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.resetProviderMetrics({
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `setCostLimits`

**PUT** `api/hyperdrive/costs/limits`

**Request**

Body type: `Dictionary<string, decimal>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.setCostLimits({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `setHyperDriveMode`

**PUT** `api/hyperdrive/mode`

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `mode` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.setHyperDriveMode({
    mode: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `updateConfiguration`

Updates the HyperDrive configuration

**PUT** `api/hyperdrive/config`

**Request**

Body type: `OASISHyperDriveConfig`

| Field | Type |
| --- | --- |
| `IsEnabled` | `bool` |
| `DefaultStrategy` | `string` |
| `AutoFailoverEnabled` | `bool` |
| `AutoReplicationEnabled` | `bool` |
| `AutoLoadBalancingEnabled` | `bool` |
| `MaxRetryAttempts` | `int` |
| `RequestTimeoutMs` | `int` |
| `HealthCheckIntervalMs` | `int` |
| `MaxConcurrentRequests` | `int` |
| `PerformanceWeight` | `double` |
| `CostWeight` | `double` |
| `GeographicWeight` | `double` |
| `AvailabilityWeight` | `double` |
| `LatencyWeight` | `double` |
| `ThroughputWeight` | `double` |
| `ReliabilityWeight` | `double` |
| `MaxLatencyThresholdMs` | `int` |
| `MaxErrorRateThreshold` | `double` |
| `MinUptimeThreshold` | `double` |
| `EnabledProviders` | `List<string>` |
| `AutoFailoverProviders` | `List<string>` |
| `AutoReplicationProviders` | `List<string>` |
| `LoadBalancingProviders` | `List<string>` |
| `ProviderConfigs` | `Dictionary<string, ProviderConfig>` |
| `GeographicConfig` | `GeographicConfig` |
| `CostConfig` | `CostConfig` |
| `PerformanceConfig` | `PerformanceConfig` |
| `SecurityConfig` | `SecurityConfig` |
| `MonitoringConfig` | `MonitoringConfig` |
| `ProviderType` | `string` |
| `Weight` | `int` |
| `TimeoutMs` | `int` |
| `MaxConnections` | `int` |
| `ErrorThreshold` | `double` |
| `MinUptime` | `double` |
| `MaxLatencyMs` | `int` |
| `Endpoint` | `string` |
| `ApiKey` | `string` |
| `SecretKey` | `string` |
| `CustomSettings` | `Dictionary<string, string>` |
| `DefaultRegion` | `string` |
| `UserLocation` | `string` |
| `MaxDistanceKm` | `double` |
| `MaxNetworkHops` | `int` |
| `Regions` | `Dictionary<string, GeographicRegion>` |
| `Name` | `string` |
| `Country` | `string` |
| `City` | `string` |
| `Latitude` | `double` |
| `Longitude` | `double` |
| `TimeZone` | `string` |
| `Currency` | `string` |
| `MaxCostPerOperation` | `double` |
| `MaxStorageCostPerGB` | `double` |
| `MaxComputeCostPerHour` | `double` |
| `MaxNetworkCostPerGB` | `double` |
| `ProviderCosts` | `Dictionary<string, CostAnalysisDNA>` |
| `StorageCostPerGB` | `double` |
| `ComputeCostPerHour` | `double` |
| `NetworkCostPerGB` | `double` |
| `TransactionCost` | `double` |
| `ApiCallCost` | `double` |
| `TotalCost` | `double` |
| `LastUpdated` | `DateTime` |
| `CostEfficiencyScore` | `int` |
| `MaxResponseTimeMs` | `int` |
| `MaxErrorRate` | `double` |
| `MinThroughputMbps` | `int` |
| `MaxConcurrentConnections` | `int` |
| `QueueDepthThreshold` | `int` |
| `MaxCpuUsage` | `double` |
| `MaxMemoryUsage` | `double` |
| `RequireEncryption` | `bool` |
| `RequireAuthentication` | `bool` |
| `RequireAuthorization` | `bool` |
| `SessionTimeoutMs` | `int` |
| `MaxConcurrentSessions` | `int` |
| `AllowedIPs` | `List<string>` |
| `BlockedIPs` | `List<string>` |
| `SecurityHeaders` | `Dictionary<string, string>` |
| `MetricsCollectionIntervalMs` | `int` |
| `MaxMetricsHistory` | `int` |
| `AlertThreshold` | `int` |
| `EnableRealTimeMonitoring` | `bool` |
| `EnablePerformanceProfiling` | `bool` |
| `EnableCostTracking` | `bool` |
| `EnableGeographicTracking` | `bool` |
| `MonitoringEndpoints` | `List<string>` |
| `CustomMetrics` | `Dictionary<string, string>` |
| `ConnectionWeight` | `double` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateConfiguration({
    isEnabled: true,
    defaultStrategy: "example string",
    autoFailoverEnabled: true,
    autoReplicationEnabled: true,
    autoLoadBalancingEnabled: true,
    maxRetryAttempts: 1,
    requestTimeoutMs: 1,
    healthCheckIntervalMs: 1,
    maxConcurrentRequests: 1,
    performanceWeight: 1.0,
    costWeight: 1.0,
    geographicWeight: 1.0,
    availabilityWeight: 1.0,
    latencyWeight: 1.0,
    throughputWeight: 1.0,
    reliabilityWeight: 1.0,
    maxLatencyThresholdMs: 1,
    maxErrorRateThreshold: 1.0,
    minUptimeThreshold: 1.0,
    enabledProviders: ["example string"],
    autoFailoverProviders: ["example string"],
    autoReplicationProviders: ["example string"],
    loadBalancingProviders: ["example string"],
    providerConfigs: /* <Dictionary<string, ProviderConfig>> */,
    geographicConfig: /* <GeographicConfig> */,
    costConfig: /* <CostConfig> */,
    performanceConfig: /* <PerformanceConfig> */,
    securityConfig: /* <SecurityConfig> */,
    monitoringConfig: /* <MonitoringConfig> */,
    providerType: "example string",
    weight: 1,
    timeoutMs: 1,
    maxConnections: 1,
    errorThreshold: 1.0,
    minUptime: 1.0,
    maxLatencyMs: 1,
    endpoint: "example string",
    apiKey: "example string",
    secretKey: "example string",
    customSettings: /* <Dictionary<string, string>> */,
    defaultRegion: "example string",
    userLocation: "example string",
    maxDistanceKm: 1.0,
    maxNetworkHops: 1,
    regions: /* <Dictionary<string, GeographicRegion>> */,
    name: "example string",
    country: "example string",
    city: "example string",
    latitude: 1.0,
    longitude: 1.0,
    timeZone: "example string",
    currency: "example string",
    maxCostPerOperation: 1.0,
    maxStorageCostPerGB: 1.0,
    maxComputeCostPerHour: 1.0,
    maxNetworkCostPerGB: 1.0,
    providerCosts: /* <Dictionary<string, CostAnalysisDNA>> */,
    storageCostPerGB: 1.0,
    computeCostPerHour: 1.0,
    networkCostPerGB: 1.0,
    transactionCost: 1.0,
    apiCallCost: 1.0,
    totalCost: 1.0,
    lastUpdated: "2026-01-01T00:00:00Z",
    costEfficiencyScore: 1,
    maxResponseTimeMs: 1,
    maxErrorRate: 1.0,
    minThroughputMbps: 1,
    maxConcurrentConnections: 1,
    queueDepthThreshold: 1,
    maxCpuUsage: 1.0,
    maxMemoryUsage: 1.0,
    requireEncryption: true,
    requireAuthentication: true,
    requireAuthorization: true,
    sessionTimeoutMs: 1,
    maxConcurrentSessions: 1,
    allowedIPs: ["example string"],
    blockedIPs: ["example string"],
    securityHeaders: /* <Dictionary<string, string>> */,
    metricsCollectionIntervalMs: 1,
    maxMetricsHistory: 1,
    alertThreshold: 1,
    enableRealTimeMonitoring: true,
    enablePerformanceProfiling: true,
    enableCostTracking: true,
    enableGeographicTracking: true,
    monitoringEndpoints: ["example string"],
    customMetrics: /* <Dictionary<string, string>> */,
    connectionWeight: 1.0
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `updateCostAnalysis`

Updates cost analysis for a provider

**PUT** `api/hyperdrive/cost/{providerType}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

Body type: `CostAnalysis` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateCostAnalysis({
    providerType: '<providerType>',
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `updateCostOptimizationRule`

**PUT** `api/hyperdrive/replication/cost-optimization`

**Request**

Body type: `CostOptimizationRuleConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `CostOptimizationRuleConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateCostOptimizationRule({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <CostOptimizationRuleConfig> */
}
```

---

### `updateDataPermissions`

Updates data permissions configuration

**PUT** `api/hyperdrive/data-permissions`

**Request**

Body type: `DataPermissionsConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateDataPermissions({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `updateDataTypeReplicationRule`

**PUT** `api/hyperdrive/replication/data-type-rules`

**Request**

Body type: `DataTypeReplicationRuleConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `DataTypeReplicationRuleConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateDataTypeReplicationRule({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <DataTypeReplicationRuleConfig> */
}
```

---

### `updateEscalationRule`

**PUT** `api/hyperdrive/failover/escalation-rules`

**Request**

Body type: `EscalationRuleConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `EscalationRuleConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateEscalationRule({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <EscalationRuleConfig> */
}
```

---

### `updateFailoverRules`

Updates failover rules configuration

**PUT** `api/hyperdrive/failover/rules`

**Request**

Body type: `FailoverRulesConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateFailoverRules({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `updateFailoverTrigger`

**PUT** `api/hyperdrive/failover/triggers/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

Body type: `FailoverTriggerConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `FailoverTriggerConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateFailoverTrigger({
    id: '<id>',
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <FailoverTriggerConfig> */
}
```

---

### `updateGeographicInfo`

Updates geographic information for a provider

**PUT** `api/hyperdrive/geographic/{providerType}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

Body type: `GeographicInfo` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateGeographicInfo({
    providerType: '<providerType>',
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `updateIntelligentMode`

Updates intelligent mode configuration

**PUT** `api/hyperdrive/intelligent-mode`

**Request**

Body type: `IntelligentModeConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateIntelligentMode({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `updateProviderFailoverRule`

**PUT** `api/hyperdrive/failover/provider-rules`

**Request**

Body type: `ProviderFailoverRuleConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ProviderFailoverRuleConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateProviderFailoverRule({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <ProviderFailoverRuleConfig> */
}
```

---

### `updateProviderReplicationRule`

**PUT** `api/hyperdrive/replication/provider-rules`

**Request**

Body type: `ProviderReplicationRuleConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ProviderReplicationRuleConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateProviderReplicationRule({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <ProviderReplicationRuleConfig> */
}
```

---

### `updateQuotaNotification`

**PUT** `api/hyperdrive/subscription/quota-notifications/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

Body type: `QuotaNotificationConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `QuotaNotificationConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateQuotaNotification({
    id: '<id>',
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <QuotaNotificationConfig> */
}
```

---

### `updateReplicationRules`

Updates replication rules configuration

**PUT** `api/hyperdrive/replication/rules`

**Request**

Body type: `ReplicationRulesConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateReplicationRules({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `updateReplicationTrigger`

**PUT** `api/hyperdrive/replication/triggers/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

Body type: `ReplicationTriggerConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ReplicationTriggerConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateReplicationTrigger({
    id: '<id>',
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <ReplicationTriggerConfig> */
}
```

---

### `updateScheduleRule`

**PUT** `api/hyperdrive/replication/schedule-rules`

**Request**

Body type: `ScheduleRuleConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ScheduleRuleConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateScheduleRule({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <ScheduleRuleConfig> */
}
```

---

### `updateSubscriptionConfig`

Updates subscription configuration

**PUT** `api/hyperdrive/subscription/config`

**Request**

Body type: `SubscriptionConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateSubscriptionConfig({
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `updateUsageAlert`

**PUT** `api/hyperdrive/subscription/usage-alerts/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

Body type: `UsageAlertConfig` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `UsageAlertConfig` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateUsageAlert({
    id: '<id>',
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <UsageAlertConfig> */
}
```

---

### `validateConfiguration`

Validates the current configuration

**POST** `api/hyperdrive/config/validate`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.validateConfiguration({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

