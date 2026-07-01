# HyperDrive — `oasis.hyperDrive`

Source controller: [`HyperDriveController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/HyperDriveController.cs)
Route prefix: `api/hyperDrive`
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

**GET** `api/hyperDrive/quota/status`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` - a key/value map keyed by `string`, each value a `object`.

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
  "result": { "<string>": {} }
}
```

---

### `createFailoverTrigger`

**POST** `api/hyperDrive/failover/triggers`

**Request**

Body type: `FailoverTriggerConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Condition` | `FailoverConditionConfig` |
| `Priority` | `string` |
| `IsEnabled` | `bool` |
| `Action` | `FailoverActionConfig` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `FailoverTriggerConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Condition` | `FailoverConditionConfig` |
| `Priority` | `string` |
| `IsEnabled` | `bool` |
| `Action` | `FailoverActionConfig` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.createFailoverTrigger({
    id: "example string",
    name: "example string",
    condition: { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 },
    priority: "example string",
    isEnabled: true,
    action: { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "Name": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }, "Priority": "example string", "IsEnabled": true, "Action": { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } } }
}
```

---

### `createQuotaNotification`

**POST** `api/hyperDrive/subscription/quota-notifications`

**Request**

Body type: `QuotaNotificationConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `QuotaType` | `string` |
| `Threshold` | `decimal` |
| `NotificationChannels` | `List<string>` |
| `Actions` | `List<QuotaActionConfig>` |
| `IsEnabled` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `QuotaNotificationConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `QuotaType` | `string` |
| `Threshold` | `decimal` |
| `NotificationChannels` | `List<string>` |
| `Actions` | `List<QuotaActionConfig>` |
| `IsEnabled` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.createQuotaNotification({
    id: "example string",
    name: "example string",
    quotaType: "example string",
    threshold: 1.0,
    notificationChannels: ["example string"],
    actions: [{ "Type": "example string", "Value": {}, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }],
    isEnabled: true
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "Name": "example string", "QuotaType": "example string", "Threshold": 1.0, "NotificationChannels": ["example string"], "Actions": [{ "Type": "example string", "Value": {}, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }], "IsEnabled": true }
}
```

---

### `createReplicationTrigger`

**POST** `api/hyperDrive/replication/triggers`

**Request**

Body type: `ReplicationTriggerConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Condition` | `ReplicationConditionConfig` |
| `Priority` | `string` |
| `IsEnabled` | `bool` |
| `Action` | `ReplicationActionConfig` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ReplicationTriggerConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Condition` | `ReplicationConditionConfig` |
| `Priority` | `string` |
| `IsEnabled` | `bool` |
| `Action` | `ReplicationActionConfig` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.createReplicationTrigger({
    id: "example string",
    name: "example string",
    condition: { "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] } },
    priority: "example string",
    isEnabled: true,
    action: { "Type": "example string", "TargetProviders": ["example string"], "DataTypes": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "CostLimit": 1.0, "Schedule": {} }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "Name": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] } }, "Priority": "example string", "IsEnabled": true, "Action": { "Type": "example string", "TargetProviders": ["example string"], "DataTypes": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": {}, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "CostLimit": 1.0, "Schedule": {} } }
}
```

---

### `createUsageAlert`

**POST** `api/hyperDrive/subscription/usage-alerts`

**Request**

Body type: `UsageAlertConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Threshold` | `decimal` |
| `ThresholdType` | `string` |
| `NotificationChannels` | `List<string>` |
| `IsEnabled` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `UsageAlertConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Threshold` | `decimal` |
| `ThresholdType` | `string` |
| `NotificationChannels` | `List<string>` |
| `IsEnabled` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.createUsageAlert({
    id: "example string",
    name: "example string",
    threshold: 1.0,
    thresholdType: "example string",
    notificationChannels: ["example string"],
    isEnabled: true
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "Name": "example string", "Threshold": 1.0, "ThresholdType": "example string", "NotificationChannels": ["example string"], "IsEnabled": true }
}
```

---

### `deleteFailoverTrigger`

**DELETE** `api/hyperDrive/failover/triggers/{id}`

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

**DELETE** `api/hyperDrive/subscription/quota-notifications/{id}`

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

**DELETE** `api/hyperDrive/replication/triggers/{id}`

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

**DELETE** `api/hyperDrive/subscription/usage-alerts/{id}`

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

**POST** `api/hyperDrive/intelligent-mode/disable`

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

**POST** `api/hyperDrive/intelligent-mode/enable`

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

**GET** `api/hyperDrive/ai/recommendations`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `OptimizationRecommendation` (array)

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
  "result": [{ "Id": "example string", "Title": "example string", "Description": "example string", "Category": "example string", "Type": {  }, "Priority": {  }, "EstimatedImpact": 1.0, "EstimatedCost": 1.0, "AffectedProviders": [{  }], "ImplementationSteps": ["example string"], "CreatedAt": "2026-01-01T00:00:00Z", "ExpiresAt": "2026-01-01T00:00:00Z", "IsImplemented": true, "Metadata": { "<string>": {} }, "CreatedBy": "example string", "Reason": "example string", "Prerequisites": ["example string"], "ConfidenceScore": 1.0 }]
}
```

---

### `getAnalyticsReport`

Gets comprehensive analytics report

**GET** `api/hyperDrive/analytics/report`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType? (optional)` |
| `timeRange` | `TimeRange (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `AnalyticsReport`

| Field | Type |
| --- | --- |
| `GeneratedAt` | `DateTime` |
| `TimeRange` | `TimeRange` |
| `ProviderType` | `ProviderType?` |
| `ProviderAnalytics` | `List<ProviderAnalytics>` |
| `SystemMetrics` | `SystemMetrics` |
| `TopPerformers` | `List<ProviderAnalytics>` |
| `Underperformers` | `List<ProviderAnalytics>` |
| `CostOptimization` | `List<CostOptimization>` |
| `ReliabilityInsights` | `List<ReliabilityInsight>` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getAnalyticsReport({
    providerType: '<providerType>',
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
  "result": { "GeneratedAt": "2026-01-01T00:00:00Z", "TimeRange": {  }, "ProviderType": {  }, "ProviderAnalytics": [{ "ProviderType": {}, "TotalRequests": 1, "SuccessfulRequests": 1, "FailedRequests": 1, "AverageResponseTime": 1.0, "MinResponseTime": 1.0, "MaxResponseTime": 1.0, "AverageThroughput": 1.0, "TotalCost": 1.0, "AverageCost": 1.0, "ErrorRate": 1.0, "UptimePercentage": 1.0, "PeakUsageTime": "2026-01-01T00:00:00Z", "GeographicDistribution": { "<string>": 1 }, "CostTrend": 1.0, "PerformanceTrend": 1.0, "ReliabilityTrend": 1.0, "Anomalies": [{ "Timestamp": "2026-01-01T00:00:00Z", "Type": {  }, "Severity": {  }, "Description": "example string" }], "Recommendations": ["example string"] }], "SystemMetrics": { "OverallHealth": 1.0, "AveragePerformance": 1.0, "TotalCost": 1.0, "TotalProviders": 1 }, "TopPerformers": [], "Underperformers": [], "CostOptimization": [{ "Description": "example string", "PotentialSavings": 1.0, "Actions": ["example string"] }], "ReliabilityInsights": [{ "Description": "example string", "ReliabilityScore": 1.0, "Recommendations": ["example string"] }] }
}
```

---

### `getBestProvider`

Gets the best provider based on current strategy

**GET** `api/hyperDrive/best-provider`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `strategy` | `LoadBalancingStrategy? (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ProviderType`

_No fields._

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.getBestProvider({
    strategy: '<strategy>'
  });
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

**GET** `api/hyperDrive/config`

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
  "result": { "IsEnabled": true, "DefaultStrategy": "example string", "AutoFailoverEnabled": true, "AutoReplicationEnabled": true, "AutoLoadBalancingEnabled": true, "MaxRetryAttempts": 1, "RequestTimeoutMs": 1, "HealthCheckIntervalMs": 1, "MaxConcurrentRequests": 1, "PerformanceWeight": 1.0, "CostWeight": 1.0, "GeographicWeight": 1.0, "AvailabilityWeight": 1.0, "LatencyWeight": 1.0, "ThroughputWeight": 1.0, "ReliabilityWeight": 1.0, "MaxLatencyThresholdMs": 1, "MaxErrorRateThreshold": 1.0, "MinUptimeThreshold": 1.0, "EnabledProviders": ["example string"], "AutoFailoverProviders": ["example string"], "AutoReplicationProviders": ["example string"], "LoadBalancingProviders": ["example string"], "ProviderConfigs": { "<string>": { "ProviderType": "example string", "IsEnabled": true, "Weight": 1, "TimeoutMs": 1, "MaxConnections": 1, "ErrorThreshold": 1.0, "MinUptime": 1.0, "MaxLatencyMs": 1, "Endpoint": "example string", "ApiKey": "example string", "SecretKey": "example string", "CustomSettings": { "<string>": "example string" } } }, "GeographicConfig": { "IsEnabled": true, "DefaultRegion": "example string", "UserLocation": "example string", "MaxDistanceKm": 1.0, "MaxNetworkHops": 1, "MaxLatencyMs": 1, "Regions": { "<string>": { "Name": "example string", "Country": "example string", "City": "example string", "Latitude": 1.0, "Longitude": 1.0, "TimeZone": "example string", "MaxLatencyMs": 1.0, "MaxNetworkHops": 1 } } }, "CostConfig": { "IsEnabled": true, "Currency": "example string", "MaxCostPerOperation": 1.0, "MaxStorageCostPerGB": 1.0, "MaxComputeCostPerHour": 1.0, "MaxNetworkCostPerGB": 1.0, "ProviderCosts": { "<string>": { "ProviderType": "example string", "StorageCostPerGB": 1.0, "ComputeCostPerHour": 1.0, "NetworkCostPerGB": 1.0, "TransactionCost": 1.0, "ApiCallCost": 1.0, "TotalCost": 1.0, "Currency": "example string", "LastUpdated": "2026-01-01T00:00:00Z", "CostEfficiencyScore": 1 } } }, "PerformanceConfig": { "IsEnabled": true, "MaxResponseTimeMs": 1, "MaxErrorRate": 1.0, "MinUptime": 1.0, "MinThroughputMbps": 1, "MaxConcurrentConnections": 1, "QueueDepthThreshold": 1, "MaxCpuUsage": 1.0, "MaxMemoryUsage": 1.0 }, "SecurityConfig": { "IsEnabled": true, "RequireEncryption": true, "RequireAuthentication": true, "RequireAuthorization": true, "MaxRetryAttempts": 1, "SessionTimeoutMs": 1, "MaxConcurrentSessions": 1, "AllowedIPs": ["example string"], "BlockedIPs": ["example string"], "SecurityHeaders": { "<string>": "example string" } }, "MonitoringConfig": { "IsEnabled": true, "MetricsCollectionIntervalMs": 1, "MaxMetricsHistory": 1, "AlertThreshold": 1, "EnableRealTimeMonitoring": true, "EnablePerformanceProfiling": true, "EnableCostTracking": true, "EnableGeographicTracking": true, "MonitoringEndpoints": ["example string"], "CustomMetrics": { "<string>": "example string" } } }
}
```

---

### `getConnectionCounts`

Gets active connection counts for all providers

**GET** `api/hyperDrive/connections`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, int>` - a key/value map keyed by `ProviderType`, each value a `int`.

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
  "result": { "<ProviderType>": 1 }
}
```

---

### `getCostHistory`

**GET** `api/hyperDrive/costs/history`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `timeRange` | `string (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, List<decimal>>` - a key/value map keyed by `string`, each value a `List<decimal>`.

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
  "result": { "<string>": [1.0] }
}
```

---

### `getCostOptimizationRecommendations`

Gets cost optimization recommendations

**GET** `api/hyperDrive/analytics/cost-optimization`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `CostOptimizationRecommendation` (array)

| Field | Type |
| --- | --- |
| `ProviderType` | `ProviderType` |
| `CurrentCost` | `double` |
| `CostTrend` | `double` |
| `PotentialSavings` | `double` |
| `RecommendedActions` | `List<string>` |
| `Priority` | `Priority` |

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
  "result": [{ "ProviderType": {  }, "CurrentCost": 1.0, "CostTrend": 1.0, "PotentialSavings": 1.0, "RecommendedActions": ["example string"], "Priority": {  } }]
}
```

---

### `getCostOptimizationRule`

**GET** `api/hyperDrive/replication/cost-optimization`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `CostOptimizationRuleConfig`

| Field | Type |
| --- | --- |
| `IsEnabled` | `bool` |
| `MaxCostPerReplication` | `decimal` |
| `MaxCostPerMonth` | `decimal` |
| `PreferredFreeProviders` | `List<string>` |
| `AvoidHighGasProviders` | `bool` |
| `GasFeeThreshold` | `decimal` |
| `CostAlertThreshold` | `decimal` |

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
  "result": { "IsEnabled": true, "MaxCostPerReplication": 1.0, "MaxCostPerMonth": 1.0, "PreferredFreeProviders": ["example string"], "AvoidHighGasProviders": true, "GasFeeThreshold": 1.0, "CostAlertThreshold": 1.0 }
}
```

---

### `getCostProjections`

**GET** `api/hyperDrive/costs/projections`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, decimal>` - a key/value map keyed by `string`, each value a `decimal`.

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
  "result": { "<string>": 1.0 }
}
```

---

### `getCurrentCosts`

**GET** `api/hyperDrive/costs/current`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, decimal>` - a key/value map keyed by `string`, each value a `decimal`.

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
  "result": { "<string>": 1.0 }
}
```

---

### `getCurrentUsage`

Gets current usage statistics

**GET** `api/hyperDrive/quota/usage`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, int>` - a key/value map keyed by `string`, each value a `int`.

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
  "result": { "<string>": 1 }
}
```

---

### `getDashboardData`

Gets real-time dashboard data

**GET** `api/hyperDrive/dashboard`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `DashboardData`

| Field | Type |
| --- | --- |
| `Timestamp` | `DateTime` |
| `ActiveProviders` | `int` |
| `TotalRequests` | `int` |
| `SystemHealth` | `double` |
| `PerformanceMetrics` | `PerformanceMetrics` |
| `CostMetrics` | `CostMetrics` |
| `GeographicMetrics` | `GeographicMetrics` |
| `Alerts` | `List<Alert>` |
| `Trends` | `List<Trend>` |

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
  "result": { "Timestamp": "2026-01-01T00:00:00Z", "ActiveProviders": 1, "TotalRequests": 1, "SystemHealth": 1.0, "PerformanceMetrics": { "TotalRequests": 1, "SuccessfulRequests": 1, "AverageResponseTime": 1.0, "Throughput": 1.0 }, "CostMetrics": { "TotalCost": 1.0, "AverageCost": 1.0, "CostPerRequest": 1.0 }, "GeographicMetrics": { "TotalRegions": 1, "TopRegion": "example string", "GeographicDistribution": { "<string>": 1 } }, "Alerts": [{ "ProviderType": {  }, "Type": {  }, "Severity": {  }, "Message": "example string", "Timestamp": "2026-01-01T00:00:00Z" }], "Trends": [{ "ProviderType": {}, "PerformanceTrend": 1.0, "CostTrend": 1.0, "ReliabilityTrend": 1.0 }] }
}
```

---

### `getDataPermissions`

Gets data permissions configuration

**GET** `api/hyperDrive/data-permissions`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `DataPermissionsConfig`

| Field | Type |
| --- | --- |
| `AvatarPermissions` | `AvatarPermissionsConfig` |
| `HolonPermissions` | `HolonPermissionsConfig` |
| `ProviderPermissions` | `ProviderPermissionsConfig` |
| `FieldLevelPermissions` | `FieldLevelPermissionsConfig` |
| `AccessControl` | `AccessControlConfig` |

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
  "result": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }
}
```

---

### `getDataTypeReplicationRules`

**GET** `api/hyperDrive/replication/data-type-rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `DataTypeReplicationRuleConfig` (array)

| Field | Type |
| --- | --- |
| `DataType` | `string` |
| `IsEnabled` | `bool` |
| `RequiredProviders` | `List<string>` |
| `OptionalProviders` | `List<string>` |
| `Permissions` | `DataPermissionsConfig` |
| `CostLimit` | `decimal` |
| `Schedule` | `ScheduleConfig` |

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
  "result": [{ "DataType": "example string", "IsEnabled": true, "RequiredProviders": ["example string"], "OptionalProviders": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "CostLimit": 1.0, "Schedule": {} }]
}
```

---

### `getEscalationRules`

**GET** `api/hyperDrive/failover/escalation-rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `EscalationRuleConfig` (array)

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Level` | `string` |
| `Condition` | `FailoverConditionConfig` |
| `Action` | `FailoverActionConfig` |
| `Notification` | `NotificationRuleConfig` |

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
  "result": [{ "Name": "example string", "Level": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }, "Action": { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }, "Notification": { "Channels": ["example string"], "Message": "example string", "Priority": "example string", "IsEnabled": true } }]
}
```

---

### `getFailoverRules`

Gets failover rules configuration

**GET** `api/hyperDrive/failover/rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `FailoverRulesConfig`

| Field | Type |
| --- | --- |
| `Mode` | `string` |
| `IsEnabled` | `bool` |
| `MaxFailoversPerMonth` | `int` |
| `CostThreshold` | `decimal` |
| `FreeProvidersOnly` | `bool` |
| `GasFeeThreshold` | `decimal` |
| `FailoverTriggers` | `List<FailoverTriggerConfig>` |
| `ProviderRules` | `List<ProviderFailoverRuleConfig>` |
| `IntelligentSelection` | `IntelligentSelectionRuleConfig` |
| `EscalationRules` | `List<EscalationRuleConfig>` |

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
  "result": { "Mode": "example string", "IsEnabled": true, "MaxFailoversPerMonth": 1, "CostThreshold": 1.0, "FreeProvidersOnly": true, "GasFeeThreshold": 1.0, "FailoverTriggers": [{ "Id": "example string", "Name": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }, "Priority": "example string", "IsEnabled": true, "Action": { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } } }], "ProviderRules": [{ "ProviderType": "example string", "IsEnabled": true, "Priority": 1, "CostLimit": 1.0, "GasFeeLimit": 1.0, "Conditions": [], "FallbackProviders": ["example string"] }], "IntelligentSelection": { "IsEnabled": true, "Algorithm": "example string", "Weights": { "Cost": 1.0, "Performance": 1.0, "Reliability": 1.0, "Security": 1.0, "Geographic": 1.0, "Availability": 1.0 }, "LearningEnabled": true, "AdaptationSpeed": "example string", "OptimizationGoals": [{ "Type": "example string", "Weight": 1.0, "Target": 1.0, "IsEnabled": true }] }, "EscalationRules": [{ "Name": "example string", "Level": "example string", "Condition": {}, "Action": {}, "Notification": { "Channels": ["example string"], "Message": "example string", "Priority": "example string", "IsEnabled": true } }] }
}
```

---

### `getFailurePredictions`

Gets failure predictions

**GET** `api/hyperDrive/failover/predictions`

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
  "result": { "Timestamp": "2026-01-01T00:00:00Z", "Predictions": [{ "ProviderType": {  }, "RiskLevel": {  }, "FailureProbability": 1.0, "PredictedFailureTime": "2026-01-01T00:00:00Z", "Confidence": 1.0, "RiskFactors": ["example string"], "RecommendedActions": ["example string"] }], "RecommendedActions": ["example string"], "RiskLevel": {} }
}
```

---

### `getFreeProviders`

Gets free providers list

**GET** `api/hyperDrive/providers/free`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string` (array)

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

**GET** `api/hyperDrive/mode`

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

**GET** `api/hyperDrive/intelligent-mode`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IntelligentModeConfig`

| Field | Type |
| --- | --- |
| `IsEnabled` | `bool` |
| `AutoOptimization` | `bool` |
| `CostAwareness` | `bool` |
| `PerformanceOptimization` | `bool` |
| `SecurityOptimization` | `bool` |
| `LearningEnabled` | `bool` |
| `AdaptationSpeed` | `string` |
| `OptimizationGoals` | `List<OptimizationGoalConfig>` |

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
  "result": { "IsEnabled": true, "AutoOptimization": true, "CostAwareness": true, "PerformanceOptimization": true, "SecurityOptimization": true, "LearningEnabled": true, "AdaptationSpeed": "example string", "OptimizationGoals": [{ "Type": "example string", "Weight": 1.0, "Target": 1.0, "IsEnabled": true }] }
}
```

---

### `getLowCostProviders`

Gets low-cost providers list

**GET** `api/hyperDrive/providers/low-cost`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string` (array)

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

**GET** `api/hyperDrive/metrics`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<ProviderType, ProviderPerformanceMetrics>` - a key/value map keyed by `ProviderType`, each value a `ProviderPerformanceMetrics`.

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
  "result": { "<ProviderType>": { "ProviderType": {  }, "ResponseTimeMs": 1.0, "ThroughputMbps": 1.0, "ErrorRate": 1.0, "UptimePercentage": 1.0, "ActiveConnections": 1, "CostPerOperation": 1.0, "GeographicRegion": "example string", "LastUpdated": "2026-01-01T00:00:00Z", "TotalRequests": 1, "SuccessfulRequests": 1, "FailedRequests": 1, "AverageLatency": 1.0, "PeakLatency": 1.0, "MinLatency": 1.0, "CpuUsage": 1.0, "MemoryUsage": 1.0, "NetworkLatency": 1.0, "BandwidthUtilization": 1.0, "QueueDepth": 1.0, "ProcessingTime": 1.0, "AvailabilityScore": 1.0, "PerformanceScore": 1.0, "CostScore": 1.0, "GeographicScore": 1.0, "OverallScore": 1.0, "AverageResponseTime": 1.0, "TotalResponseTime": 1.0, "LastActivity": "2026-01-01T00:00:00Z" } }
}
```

---

### `getPerformanceOptimizationRecommendations`

Gets performance optimization recommendations

**GET** `api/hyperDrive/analytics/performance-optimization`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `PerformanceOptimizationRecommendation` (array)

| Field | Type |
| --- | --- |
| `ProviderType` | `ProviderType` |
| `CurrentPerformance` | `double` |
| `PerformanceTrend` | `double` |
| `ErrorRate` | `double` |
| `RecommendedActions` | `List<string>` |
| `Priority` | `Priority` |

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
  "result": [{ "ProviderType": {  }, "CurrentPerformance": 1.0, "PerformanceTrend": 1.0, "ErrorRate": 1.0, "RecommendedActions": ["example string"], "Priority": {  } }]
}
```

---

### `getPredictiveAnalytics`

Gets predictive analytics

**GET** `api/hyperDrive/analytics/predictive/{providerType}`

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

`result` type: `PredictiveAnalytics`

| Field | Type |
| --- | --- |
| `ProviderType` | `ProviderType` |
| `ForecastDays` | `int` |
| `Confidence` | `double` |
| `Message` | `string` |
| `PredictedPerformance` | `double` |
| `PredictedCost` | `double` |
| `PredictedReliability` | `double` |
| `RiskFactors` | `List<string>` |
| `Recommendations` | `List<string>` |

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
  "result": { "ProviderType": {  }, "ForecastDays": 1, "Confidence": 1.0, "Message": "example string", "PredictedPerformance": 1.0, "PredictedCost": 1.0, "PredictedReliability": 1.0, "RiskFactors": ["example string"], "Recommendations": ["example string"] }
}
```

---

### `getProviderFailoverRules`

**GET** `api/hyperDrive/failover/provider-rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ProviderFailoverRuleConfig` (array)

| Field | Type |
| --- | --- |
| `ProviderType` | `string` |
| `IsEnabled` | `bool` |
| `Priority` | `int` |
| `CostLimit` | `decimal` |
| `GasFeeLimit` | `decimal` |
| `Conditions` | `List<FailoverConditionConfig>` |
| `FallbackProviders` | `List<string>` |

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
  "result": [{ "ProviderType": "example string", "IsEnabled": true, "Priority": 1, "CostLimit": 1.0, "GasFeeLimit": 1.0, "Conditions": [{ "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }], "FallbackProviders": ["example string"] }]
}
```

---

### `getProviderMetrics`

Gets performance metrics for a specific provider

**GET** `api/hyperDrive/metrics/{providerType}`

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

**GET** `api/hyperDrive/replication/provider-rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ProviderReplicationRuleConfig` (array)

| Field | Type |
| --- | --- |
| `ProviderType` | `string` |
| `IsEnabled` | `bool` |
| `Priority` | `int` |
| `CostLimit` | `decimal` |
| `GasFeeLimit` | `decimal` |
| `DataTypes` | `List<string>` |
| `Permissions` | `DataPermissionsConfig` |
| `Conditions` | `List<ReplicationConditionConfig>` |
| `Schedule` | `ScheduleConfig` |

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
  "result": [{ "ProviderType": "example string", "IsEnabled": true, "Priority": 1, "CostLimit": 1.0, "GasFeeLimit": 1.0, "DataTypes": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "Conditions": [{ "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": {} }], "Schedule": {} }]
}
```

---

### `getQuotaLimits`

Gets quota limits for current subscription

**GET** `api/hyperDrive/quota/limits`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, int>` - a key/value map keyed by `string`, each value a `int`.

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
  "result": { "<string>": 1 }
}
```

---

### `getQuotaNotifications`

**GET** `api/hyperDrive/subscription/quota-notifications`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `QuotaNotificationConfig` (array)

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `QuotaType` | `string` |
| `Threshold` | `decimal` |
| `NotificationChannels` | `List<string>` |
| `Actions` | `List<QuotaActionConfig>` |
| `IsEnabled` | `bool` |

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
  "result": [{ "Id": "example string", "Name": "example string", "QuotaType": "example string", "Threshold": 1.0, "NotificationChannels": ["example string"], "Actions": [{ "Type": "example string", "Value": {}, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }], "IsEnabled": true }]
}
```

---

### `getReplicationRules`

Gets replication rules configuration

**GET** `api/hyperDrive/replication/rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ReplicationRulesConfig`

| Field | Type |
| --- | --- |
| `Mode` | `string` |
| `IsEnabled` | `bool` |
| `MaxReplicationsPerMonth` | `int` |
| `CostThreshold` | `decimal` |
| `FreeProvidersOnly` | `bool` |
| `GasFeeThreshold` | `decimal` |
| `ReplicationTriggers` | `List<ReplicationTriggerConfig>` |
| `ProviderRules` | `List<ProviderReplicationRuleConfig>` |
| `DataTypeRules` | `List<DataTypeReplicationRuleConfig>` |
| `ScheduleRules` | `List<ScheduleRuleConfig>` |
| `CostOptimization` | `CostOptimizationRuleConfig` |
| `IntelligentSelection` | `IntelligentSelectionRuleConfig` |

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
  "result": { "Mode": "example string", "IsEnabled": true, "MaxReplicationsPerMonth": 1, "CostThreshold": 1.0, "FreeProvidersOnly": true, "GasFeeThreshold": 1.0, "ReplicationTriggers": [{ "Id": "example string", "Name": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] } }, "Priority": "example string", "IsEnabled": true, "Action": { "Type": "example string", "TargetProviders": ["example string"], "DataTypes": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": {}, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "CostLimit": 1.0, "Schedule": {} } }], "ProviderRules": [{ "ProviderType": "example string", "IsEnabled": true, "Priority": 1, "CostLimit": 1.0, "GasFeeLimit": 1.0, "DataTypes": ["example string"], "Permissions": {}, "Conditions": [], "Schedule": {} }], "DataTypeRules": [{ "DataType": "example string", "IsEnabled": true, "RequiredProviders": ["example string"], "OptionalProviders": ["example string"], "Permissions": {}, "CostLimit": 1.0, "Schedule": {} }], "ScheduleRules": [{ "Name": "example string", "IsEnabled": true, "Schedule": {}, "DataTypes": ["example string"], "Providers": ["example string"], "Permissions": {} }], "CostOptimization": { "IsEnabled": true, "MaxCostPerReplication": 1.0, "MaxCostPerMonth": 1.0, "PreferredFreeProviders": ["example string"], "AvoidHighGasProviders": true, "GasFeeThreshold": 1.0, "CostAlertThreshold": 1.0 }, "IntelligentSelection": { "IsEnabled": true, "Algorithm": "example string", "Weights": { "Cost": 1.0, "Performance": 1.0, "Reliability": 1.0, "Security": 1.0, "Geographic": 1.0, "Availability": 1.0 }, "LearningEnabled": true, "AdaptationSpeed": "example string", "OptimizationGoals": [{ "Type": "example string", "Weight": 1.0, "Target": 1.0, "IsEnabled": true }] } }
}
```

---

### `getScheduleRules`

**GET** `api/hyperDrive/replication/schedule-rules`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ScheduleRuleConfig` (array)

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `IsEnabled` | `bool` |
| `Schedule` | `ScheduleConfig` |
| `DataTypes` | `List<string>` |
| `Providers` | `List<string>` |
| `Permissions` | `DataPermissionsConfig` |

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
  "result": [{ "Name": "example string", "IsEnabled": true, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] }, "DataTypes": ["example string"], "Providers": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": {} }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } } }]
}
```

---

### `getSecurityRecommendations`

**GET** `api/hyperDrive/recommendations/security`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` - a key/value map keyed by `string`, each value a `object`.

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
  "result": { "<string>": {} }
}
```

---

### `getSmartRecommendations`

**GET** `api/hyperDrive/recommendations/smart`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` - a key/value map keyed by `string`, each value a `object`.

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
  "result": { "<string>": {} }
}
```

---

### `getStatus`

Gets HyperDrive status and health

**GET** `api/hyperDrive/status`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `HyperDriveStatus`

| Field | Type |
| --- | --- |
| `IsEnabled` | `bool` |
| `AutoFailoverEnabled` | `bool` |
| `AutoReplicationEnabled` | `bool` |
| `AutoLoadBalancingEnabled` | `bool` |
| `DefaultStrategy` | `LoadBalancingStrategy` |
| `EnabledProviders` | `List<ProviderType>` |
| `LoadBalancingProviders` | `List<ProviderType>` |
| `TotalProviders` | `int` |
| `ActiveProviders` | `int` |
| `LastHealthCheck` | `DateTime` |

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
  "result": { "IsEnabled": true, "AutoFailoverEnabled": true, "AutoReplicationEnabled": true, "AutoLoadBalancingEnabled": true, "DefaultStrategy": {  }, "EnabledProviders": [{  }], "LoadBalancingProviders": [], "TotalProviders": 1, "ActiveProviders": 1, "LastHealthCheck": "2026-01-01T00:00:00Z" }
}
```

---

### `getSubscriptionConfig`

Gets subscription configuration

**GET** `api/hyperDrive/subscription/config`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `SubscriptionConfig`

| Field | Type |
| --- | --- |
| `PlanType` | `string` |
| `MaxReplicationsPerMonth` | `int` |
| `MaxFailoversPerMonth` | `int` |
| `MaxRequestsPerMonth` | `int` |
| `MaxStorageGB` | `int` |
| `PayAsYouGoEnabled` | `bool` |
| `CostPerReplication` | `decimal` |
| `CostPerFailover` | `decimal` |
| `CostPerGB` | `decimal` |
| `Currency` | `string` |
| `BillingCycle` | `string` |
| `UsageAlerts` | `List<UsageAlertConfig>` |
| `QuotaNotifications` | `List<QuotaNotificationConfig>` |

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
  "result": { "PlanType": "example string", "MaxReplicationsPerMonth": 1, "MaxFailoversPerMonth": 1, "MaxRequestsPerMonth": 1, "MaxStorageGB": 1, "PayAsYouGoEnabled": true, "CostPerReplication": 1.0, "CostPerFailover": 1.0, "CostPerGB": 1.0, "Currency": "example string", "BillingCycle": "example string", "UsageAlerts": [{ "Id": "example string", "Name": "example string", "Threshold": 1.0, "ThresholdType": "example string", "NotificationChannels": ["example string"], "IsEnabled": true }], "QuotaNotifications": [{ "Id": "example string", "Name": "example string", "QuotaType": "example string", "Threshold": 1.0, "NotificationChannels": ["example string"], "Actions": [{ "Type": "example string", "Value": {}, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }], "IsEnabled": true }] }
}
```

---

### `getUsageAlerts`

**GET** `api/hyperDrive/subscription/usage-alerts`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `UsageAlertConfig` (array)

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Threshold` | `decimal` |
| `ThresholdType` | `string` |
| `NotificationChannels` | `List<string>` |
| `IsEnabled` | `bool` |

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
  "result": [{ "Id": "example string", "Name": "example string", "Threshold": 1.0, "ThresholdType": "example string", "NotificationChannels": ["example string"], "IsEnabled": true }]
}
```

---

### `initiatePreventiveFailover`

Initiates preventive failover

**POST** `api/hyperDrive/failover/preventive`

**Request**

Body type: `ProviderType` (array)

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

**POST** `api/hyperDrive/analytics/record`

**Request**

Body type: `AnalyticsDataPoint`

| Field | Type |
| --- | --- |
| `Timestamp` | `DateTime` |
| `ProviderType` | `ProviderType` |
| `Success` | `bool` |
| `ResponseTimeMs` | `double` |
| `ThroughputMbps` | `double` |
| `Cost` | `double` |
| `Region` | `string` |
| `UserId` | `string` |
| `Operation` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.recordAnalyticsData({
    timestamp: "2026-01-01T00:00:00Z",
    providerType: {  },
    success: true,
    responseTimeMs: 1.0,
    throughputMbps: 1.0,
    cost: 1.0,
    region: "example string",
    userId: "example string",
    operation: "example string"
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

**POST** `api/hyperDrive/record-connection`

**Request**

Body type: `RecordConnectionModel`

| Field | Type |
| --- | --- |
| `ProviderType` | `ProviderType` |
| `IsConnecting` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.recordConnection({
    providerType: {  },
    isConnecting: true
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

**POST** `api/hyperDrive/failover/record-failure`

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
    failureType: {  },
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

**POST** `api/hyperDrive/ai/record-performance`

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
    metrics: { "<string>": {} },
    context: { "<string>": {} },
    userId: "example string",
    sessionId: "example string",
    requestId: "example string",
    avatarId: "example string",
    holonId: "example string",
    sourceIP: "example string",
    userAgent: "example string",
    location: { "Latitude": 1.0, "Longitude": 1.0, "Country": "example string", "Region": "example string", "City": "example string" },
    tags: { "<string>": "example string" }
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

**POST** `api/hyperDrive/record-request`

**Request**

Body type: `RecordRequestModel`

| Field | Type |
| --- | --- |
| `ProviderType` | `ProviderType` |
| `Success` | `bool` |
| `ResponseTimeMs` | `double` |
| `Cost` | `double` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.recordRequest({
    providerType: {  },
    success: true,
    responseTimeMs: 1.0,
    cost: 1.0
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

**POST** `api/hyperDrive/metrics/reset-all`

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

**POST** `api/hyperDrive/config/reset`

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

**POST** `api/hyperDrive/metrics/{providerType}/reset`

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

**PUT** `api/hyperDrive/costs/limits`

**Request**

Body type: `Dictionary<string, decimal>` - a key/value map keyed by `string`, each value a `decimal`.

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

**PUT** `api/hyperDrive/mode`

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

**PUT** `api/hyperDrive/config`

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
    providerConfigs: { "<string>": { "ProviderType": "example string", "IsEnabled": true, "Weight": 1, "TimeoutMs": 1, "MaxConnections": 1, "ErrorThreshold": 1.0, "MinUptime": 1.0, "MaxLatencyMs": 1, "Endpoint": "example string", "ApiKey": "example string", "SecretKey": "example string", "CustomSettings": { "<string>": "example string" } } },
    geographicConfig: { "IsEnabled": true, "DefaultRegion": "example string", "UserLocation": "example string", "MaxDistanceKm": 1.0, "MaxNetworkHops": 1, "MaxLatencyMs": 1, "Regions": { "<string>": { "Name": "example string", "Country": "example string", "City": "example string", "Latitude": 1.0, "Longitude": 1.0, "TimeZone": "example string", "MaxLatencyMs": 1.0, "MaxNetworkHops": 1 } } },
    costConfig: { "IsEnabled": true, "Currency": "example string", "MaxCostPerOperation": 1.0, "MaxStorageCostPerGB": 1.0, "MaxComputeCostPerHour": 1.0, "MaxNetworkCostPerGB": 1.0, "ProviderCosts": { "<string>": { "ProviderType": "example string", "StorageCostPerGB": 1.0, "ComputeCostPerHour": 1.0, "NetworkCostPerGB": 1.0, "TransactionCost": 1.0, "ApiCallCost": 1.0, "TotalCost": 1.0, "Currency": "example string", "LastUpdated": "2026-01-01T00:00:00Z", "CostEfficiencyScore": 1 } } },
    performanceConfig: { "IsEnabled": true, "MaxResponseTimeMs": 1, "MaxErrorRate": 1.0, "MinUptime": 1.0, "MinThroughputMbps": 1, "MaxConcurrentConnections": 1, "QueueDepthThreshold": 1, "MaxCpuUsage": 1.0, "MaxMemoryUsage": 1.0 },
    securityConfig: { "IsEnabled": true, "RequireEncryption": true, "RequireAuthentication": true, "RequireAuthorization": true, "MaxRetryAttempts": 1, "SessionTimeoutMs": 1, "MaxConcurrentSessions": 1, "AllowedIPs": ["example string"], "BlockedIPs": ["example string"], "SecurityHeaders": { "<string>": "example string" } },
    monitoringConfig: { "IsEnabled": true, "MetricsCollectionIntervalMs": 1, "MaxMetricsHistory": 1, "AlertThreshold": 1, "EnableRealTimeMonitoring": true, "EnablePerformanceProfiling": true, "EnableCostTracking": true, "EnableGeographicTracking": true, "MonitoringEndpoints": ["example string"], "CustomMetrics": { "<string>": "example string" } }
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

**PUT** `api/hyperDrive/cost/{providerType}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

Body type: `CostAnalysis`

| Field | Type |
| --- | --- |
| `ProviderType` | `ProviderType` |
| `StorageCostPerGB` | `double` |
| `ComputeCostPerHour` | `double` |
| `NetworkCostPerGB` | `double` |
| `TransactionCost` | `double` |
| `ApiCallCost` | `double` |
| `TotalCost` | `double` |
| `Currency` | `string` |
| `LastUpdated` | `DateTime` |
| `CostEfficiencyScore` | `double` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateCostAnalysis({
    providerType: {  },
    storageCostPerGB: 1.0,
    computeCostPerHour: 1.0,
    networkCostPerGB: 1.0,
    transactionCost: 1.0,
    apiCallCost: 1.0,
    totalCost: 1.0,
    currency: "example string",
    lastUpdated: "2026-01-01T00:00:00Z",
    costEfficiencyScore: 1.0
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

**PUT** `api/hyperDrive/replication/cost-optimization`

**Request**

Body type: `CostOptimizationRuleConfig`

| Field | Type |
| --- | --- |
| `IsEnabled` | `bool` |
| `MaxCostPerReplication` | `decimal` |
| `MaxCostPerMonth` | `decimal` |
| `PreferredFreeProviders` | `List<string>` |
| `AvoidHighGasProviders` | `bool` |
| `GasFeeThreshold` | `decimal` |
| `CostAlertThreshold` | `decimal` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `CostOptimizationRuleConfig`

| Field | Type |
| --- | --- |
| `IsEnabled` | `bool` |
| `MaxCostPerReplication` | `decimal` |
| `MaxCostPerMonth` | `decimal` |
| `PreferredFreeProviders` | `List<string>` |
| `AvoidHighGasProviders` | `bool` |
| `GasFeeThreshold` | `decimal` |
| `CostAlertThreshold` | `decimal` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateCostOptimizationRule({
    isEnabled: true,
    maxCostPerReplication: 1.0,
    maxCostPerMonth: 1.0,
    preferredFreeProviders: ["example string"],
    avoidHighGasProviders: true,
    gasFeeThreshold: 1.0,
    costAlertThreshold: 1.0
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "IsEnabled": true, "MaxCostPerReplication": 1.0, "MaxCostPerMonth": 1.0, "PreferredFreeProviders": ["example string"], "AvoidHighGasProviders": true, "GasFeeThreshold": 1.0, "CostAlertThreshold": 1.0 }
}
```

---

### `updateDataPermissions`

Updates data permissions configuration

**PUT** `api/hyperDrive/data-permissions`

**Request**

Body type: `DataPermissionsConfig`

| Field | Type |
| --- | --- |
| `AvatarPermissions` | `AvatarPermissionsConfig` |
| `HolonPermissions` | `HolonPermissionsConfig` |
| `ProviderPermissions` | `ProviderPermissionsConfig` |
| `FieldLevelPermissions` | `FieldLevelPermissionsConfig` |
| `AccessControl` | `AccessControlConfig` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateDataPermissions({
    avatarPermissions: { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } },
    holonPermissions: { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } },
    providerPermissions: { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] },
    fieldLevelPermissions: { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] },
    accessControl: { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] }
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

**PUT** `api/hyperDrive/replication/data-type-rules`

**Request**

Body type: `DataTypeReplicationRuleConfig`

| Field | Type |
| --- | --- |
| `DataType` | `string` |
| `IsEnabled` | `bool` |
| `RequiredProviders` | `List<string>` |
| `OptionalProviders` | `List<string>` |
| `Permissions` | `DataPermissionsConfig` |
| `CostLimit` | `decimal` |
| `Schedule` | `ScheduleConfig` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `DataTypeReplicationRuleConfig`

| Field | Type |
| --- | --- |
| `DataType` | `string` |
| `IsEnabled` | `bool` |
| `RequiredProviders` | `List<string>` |
| `OptionalProviders` | `List<string>` |
| `Permissions` | `DataPermissionsConfig` |
| `CostLimit` | `decimal` |
| `Schedule` | `ScheduleConfig` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateDataTypeReplicationRule({
    dataType: "example string",
    isEnabled: true,
    requiredProviders: ["example string"],
    optionalProviders: ["example string"],
    permissions: { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } },
    costLimit: 1.0,
    schedule: { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "DataType": "example string", "IsEnabled": true, "RequiredProviders": ["example string"], "OptionalProviders": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "CostLimit": 1.0, "Schedule": {} }
}
```

---

### `updateEscalationRule`

**PUT** `api/hyperDrive/failover/escalation-rules`

**Request**

Body type: `EscalationRuleConfig`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Level` | `string` |
| `Condition` | `FailoverConditionConfig` |
| `Action` | `FailoverActionConfig` |
| `Notification` | `NotificationRuleConfig` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `EscalationRuleConfig`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Level` | `string` |
| `Condition` | `FailoverConditionConfig` |
| `Action` | `FailoverActionConfig` |
| `Notification` | `NotificationRuleConfig` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateEscalationRule({
    name: "example string",
    level: "example string",
    condition: { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 },
    action: { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } },
    notification: { "Channels": ["example string"], "Message": "example string", "Priority": "example string", "IsEnabled": true }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Name": "example string", "Level": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }, "Action": { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }, "Notification": { "Channels": ["example string"], "Message": "example string", "Priority": "example string", "IsEnabled": true } }
}
```

---

### `updateFailoverRules`

Updates failover rules configuration

**PUT** `api/hyperDrive/failover/rules`

**Request**

Body type: `FailoverRulesConfig`

| Field | Type |
| --- | --- |
| `Mode` | `string` |
| `IsEnabled` | `bool` |
| `MaxFailoversPerMonth` | `int` |
| `CostThreshold` | `decimal` |
| `FreeProvidersOnly` | `bool` |
| `GasFeeThreshold` | `decimal` |
| `FailoverTriggers` | `List<FailoverTriggerConfig>` |
| `ProviderRules` | `List<ProviderFailoverRuleConfig>` |
| `IntelligentSelection` | `IntelligentSelectionRuleConfig` |
| `EscalationRules` | `List<EscalationRuleConfig>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateFailoverRules({
    mode: "example string",
    isEnabled: true,
    maxFailoversPerMonth: 1,
    costThreshold: 1.0,
    freeProvidersOnly: true,
    gasFeeThreshold: 1.0,
    failoverTriggers: [{ "Id": "example string", "Name": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }, "Priority": "example string", "IsEnabled": true, "Action": { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } } }],
    providerRules: [{ "ProviderType": "example string", "IsEnabled": true, "Priority": 1, "CostLimit": 1.0, "GasFeeLimit": 1.0, "Conditions": [{ "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }], "FallbackProviders": ["example string"] }],
    intelligentSelection: { "IsEnabled": true, "Algorithm": "example string", "Weights": { "Cost": 1.0, "Performance": 1.0, "Reliability": 1.0, "Security": 1.0, "Geographic": 1.0, "Availability": 1.0 }, "LearningEnabled": true, "AdaptationSpeed": "example string", "OptimizationGoals": [{ "Type": "example string", "Weight": 1.0, "Target": 1.0, "IsEnabled": true }] },
    escalationRules: [{ "Name": "example string", "Level": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }, "Action": { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }, "Notification": { "Channels": ["example string"], "Message": "example string", "Priority": "example string", "IsEnabled": true } }]
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

**PUT** `api/hyperDrive/failover/triggers/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

Body type: `FailoverTriggerConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Condition` | `FailoverConditionConfig` |
| `Priority` | `string` |
| `IsEnabled` | `bool` |
| `Action` | `FailoverActionConfig` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `FailoverTriggerConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Condition` | `FailoverConditionConfig` |
| `Priority` | `string` |
| `IsEnabled` | `bool` |
| `Action` | `FailoverActionConfig` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateFailoverTrigger({
    id: "example string",
    name: "example string",
    condition: { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 },
    priority: "example string",
    isEnabled: true,
    action: { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "Name": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }, "Priority": "example string", "IsEnabled": true, "Action": { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } } }
}
```

---

### `updateGeographicInfo`

Updates geographic information for a provider

**PUT** `api/hyperDrive/geographic/{providerType}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

Body type: `GeographicInfo`

| Field | Type |
| --- | --- |
| `Region` | `string` |
| `Country` | `string` |
| `City` | `string` |
| `Latitude` | `double` |
| `Longitude` | `double` |
| `TimeZone` | `string` |
| `DistanceKm` | `double` |
| `NetworkHops` | `int` |
| `NetworkLatency` | `double` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateGeographicInfo({
    providerType: '<providerType>',
    region: "example string",
    country: "example string",
    city: "example string",
    latitude: 1.0,
    longitude: 1.0,
    timeZone: "example string",
    distanceKm: 1.0,
    networkHops: 1,
    networkLatency: 1.0
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

**PUT** `api/hyperDrive/intelligent-mode`

**Request**

Body type: `IntelligentModeConfig`

| Field | Type |
| --- | --- |
| `IsEnabled` | `bool` |
| `AutoOptimization` | `bool` |
| `CostAwareness` | `bool` |
| `PerformanceOptimization` | `bool` |
| `SecurityOptimization` | `bool` |
| `LearningEnabled` | `bool` |
| `AdaptationSpeed` | `string` |
| `OptimizationGoals` | `List<OptimizationGoalConfig>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateIntelligentMode({
    isEnabled: true,
    autoOptimization: true,
    costAwareness: true,
    performanceOptimization: true,
    securityOptimization: true,
    learningEnabled: true,
    adaptationSpeed: "example string",
    optimizationGoals: [{ "Type": "example string", "Weight": 1.0, "Target": 1.0, "IsEnabled": true }]
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

**PUT** `api/hyperDrive/failover/provider-rules`

**Request**

Body type: `ProviderFailoverRuleConfig`

| Field | Type |
| --- | --- |
| `ProviderType` | `string` |
| `IsEnabled` | `bool` |
| `Priority` | `int` |
| `CostLimit` | `decimal` |
| `GasFeeLimit` | `decimal` |
| `Conditions` | `List<FailoverConditionConfig>` |
| `FallbackProviders` | `List<string>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ProviderFailoverRuleConfig`

| Field | Type |
| --- | --- |
| `ProviderType` | `string` |
| `IsEnabled` | `bool` |
| `Priority` | `int` |
| `CostLimit` | `decimal` |
| `GasFeeLimit` | `decimal` |
| `Conditions` | `List<FailoverConditionConfig>` |
| `FallbackProviders` | `List<string>` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateProviderFailoverRule({
    providerType: "example string",
    isEnabled: true,
    priority: 1,
    costLimit: 1.0,
    gasFeeLimit: 1.0,
    conditions: [{ "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }],
    fallbackProviders: ["example string"]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderType": "example string", "IsEnabled": true, "Priority": 1, "CostLimit": 1.0, "GasFeeLimit": 1.0, "Conditions": [{ "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Threshold": 1.0 }], "FallbackProviders": ["example string"] }
}
```

---

### `updateProviderReplicationRule`

**PUT** `api/hyperDrive/replication/provider-rules`

**Request**

Body type: `ProviderReplicationRuleConfig`

| Field | Type |
| --- | --- |
| `ProviderType` | `string` |
| `IsEnabled` | `bool` |
| `Priority` | `int` |
| `CostLimit` | `decimal` |
| `GasFeeLimit` | `decimal` |
| `DataTypes` | `List<string>` |
| `Permissions` | `DataPermissionsConfig` |
| `Conditions` | `List<ReplicationConditionConfig>` |
| `Schedule` | `ScheduleConfig` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ProviderReplicationRuleConfig`

| Field | Type |
| --- | --- |
| `ProviderType` | `string` |
| `IsEnabled` | `bool` |
| `Priority` | `int` |
| `CostLimit` | `decimal` |
| `GasFeeLimit` | `decimal` |
| `DataTypes` | `List<string>` |
| `Permissions` | `DataPermissionsConfig` |
| `Conditions` | `List<ReplicationConditionConfig>` |
| `Schedule` | `ScheduleConfig` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateProviderReplicationRule({
    providerType: "example string",
    isEnabled: true,
    priority: 1,
    costLimit: 1.0,
    gasFeeLimit: 1.0,
    dataTypes: ["example string"],
    permissions: { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } },
    conditions: [{ "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] } }],
    schedule: { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "ProviderType": "example string", "IsEnabled": true, "Priority": 1, "CostLimit": 1.0, "GasFeeLimit": 1.0, "DataTypes": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "Conditions": [{ "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": {} }], "Schedule": {} }
}
```

---

### `updateQuotaNotification`

**PUT** `api/hyperDrive/subscription/quota-notifications/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

Body type: `QuotaNotificationConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `QuotaType` | `string` |
| `Threshold` | `decimal` |
| `NotificationChannels` | `List<string>` |
| `Actions` | `List<QuotaActionConfig>` |
| `IsEnabled` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `QuotaNotificationConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `QuotaType` | `string` |
| `Threshold` | `decimal` |
| `NotificationChannels` | `List<string>` |
| `Actions` | `List<QuotaActionConfig>` |
| `IsEnabled` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateQuotaNotification({
    id: "example string",
    name: "example string",
    quotaType: "example string",
    threshold: 1.0,
    notificationChannels: ["example string"],
    actions: [{ "Type": "example string", "Value": {}, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }],
    isEnabled: true
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "Name": "example string", "QuotaType": "example string", "Threshold": 1.0, "NotificationChannels": ["example string"], "Actions": [{ "Type": "example string", "Value": {}, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }], "IsEnabled": true }
}
```

---

### `updateReplicationRules`

Updates replication rules configuration

**PUT** `api/hyperDrive/replication/rules`

**Request**

Body type: `ReplicationRulesConfig`

| Field | Type |
| --- | --- |
| `Mode` | `string` |
| `IsEnabled` | `bool` |
| `MaxReplicationsPerMonth` | `int` |
| `CostThreshold` | `decimal` |
| `FreeProvidersOnly` | `bool` |
| `GasFeeThreshold` | `decimal` |
| `ReplicationTriggers` | `List<ReplicationTriggerConfig>` |
| `ProviderRules` | `List<ProviderReplicationRuleConfig>` |
| `DataTypeRules` | `List<DataTypeReplicationRuleConfig>` |
| `ScheduleRules` | `List<ScheduleRuleConfig>` |
| `CostOptimization` | `CostOptimizationRuleConfig` |
| `IntelligentSelection` | `IntelligentSelectionRuleConfig` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateReplicationRules({
    mode: "example string",
    isEnabled: true,
    maxReplicationsPerMonth: 1,
    costThreshold: 1.0,
    freeProvidersOnly: true,
    gasFeeThreshold: 1.0,
    replicationTriggers: [{ "Id": "example string", "Name": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] } }, "Priority": "example string", "IsEnabled": true, "Action": { "Type": "example string", "TargetProviders": ["example string"], "DataTypes": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": {}, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "CostLimit": 1.0, "Schedule": {} } }],
    providerRules: [{ "ProviderType": "example string", "IsEnabled": true, "Priority": 1, "CostLimit": 1.0, "GasFeeLimit": 1.0, "DataTypes": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "Conditions": [{ "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": {} }], "Schedule": {} }],
    dataTypeRules: [{ "DataType": "example string", "IsEnabled": true, "RequiredProviders": ["example string"], "OptionalProviders": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "CostLimit": 1.0, "Schedule": {} }],
    scheduleRules: [{ "Name": "example string", "IsEnabled": true, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] }, "DataTypes": ["example string"], "Providers": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": {} }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } } }],
    costOptimization: { "IsEnabled": true, "MaxCostPerReplication": 1.0, "MaxCostPerMonth": 1.0, "PreferredFreeProviders": ["example string"], "AvoidHighGasProviders": true, "GasFeeThreshold": 1.0, "CostAlertThreshold": 1.0 },
    intelligentSelection: { "IsEnabled": true, "Algorithm": "example string", "Weights": { "Cost": 1.0, "Performance": 1.0, "Reliability": 1.0, "Security": 1.0, "Geographic": 1.0, "Availability": 1.0 }, "LearningEnabled": true, "AdaptationSpeed": "example string", "OptimizationGoals": [{ "Type": "example string", "Weight": 1.0, "Target": 1.0, "IsEnabled": true }] }
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

**PUT** `api/hyperDrive/replication/triggers/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

Body type: `ReplicationTriggerConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Condition` | `ReplicationConditionConfig` |
| `Priority` | `string` |
| `IsEnabled` | `bool` |
| `Action` | `ReplicationActionConfig` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ReplicationTriggerConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Condition` | `ReplicationConditionConfig` |
| `Priority` | `string` |
| `IsEnabled` | `bool` |
| `Action` | `ReplicationActionConfig` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateReplicationTrigger({
    id: "example string",
    name: "example string",
    condition: { "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] } },
    priority: "example string",
    isEnabled: true,
    action: { "Type": "example string", "TargetProviders": ["example string"], "DataTypes": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "CostLimit": 1.0, "Schedule": {} }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "Name": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] } }, "Priority": "example string", "IsEnabled": true, "Action": { "Type": "example string", "TargetProviders": ["example string"], "DataTypes": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": {}, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "CostLimit": 1.0, "Schedule": {} } }
}
```

---

### `updateScheduleRule`

**PUT** `api/hyperDrive/replication/schedule-rules`

**Request**

Body type: `ScheduleRuleConfig`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `IsEnabled` | `bool` |
| `Schedule` | `ScheduleConfig` |
| `DataTypes` | `List<string>` |
| `Providers` | `List<string>` |
| `Permissions` | `DataPermissionsConfig` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ScheduleRuleConfig`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `IsEnabled` | `bool` |
| `Schedule` | `ScheduleConfig` |
| `DataTypes` | `List<string>` |
| `Providers` | `List<string>` |
| `Permissions` | `DataPermissionsConfig` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateScheduleRule({
    name: "example string",
    isEnabled: true,
    schedule: { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] },
    dataTypes: ["example string"],
    providers: ["example string"],
    permissions: { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Name": "example string", "IsEnabled": true, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] }, "DataTypes": ["example string"], "Providers": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": {} }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] }, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } } }
}
```

---

### `updateSubscriptionConfig`

Updates subscription configuration

**PUT** `api/hyperDrive/subscription/config`

**Request**

Body type: `SubscriptionConfig`

| Field | Type |
| --- | --- |
| `PlanType` | `string` |
| `MaxReplicationsPerMonth` | `int` |
| `MaxFailoversPerMonth` | `int` |
| `MaxRequestsPerMonth` | `int` |
| `MaxStorageGB` | `int` |
| `PayAsYouGoEnabled` | `bool` |
| `CostPerReplication` | `decimal` |
| `CostPerFailover` | `decimal` |
| `CostPerGB` | `decimal` |
| `Currency` | `string` |
| `BillingCycle` | `string` |
| `UsageAlerts` | `List<UsageAlertConfig>` |
| `QuotaNotifications` | `List<QuotaNotificationConfig>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateSubscriptionConfig({
    planType: "example string",
    maxReplicationsPerMonth: 1,
    maxFailoversPerMonth: 1,
    maxRequestsPerMonth: 1,
    maxStorageGB: 1,
    payAsYouGoEnabled: true,
    costPerReplication: 1.0,
    costPerFailover: 1.0,
    costPerGB: 1.0,
    currency: "example string",
    billingCycle: "example string",
    usageAlerts: [{ "Id": "example string", "Name": "example string", "Threshold": 1.0, "ThresholdType": "example string", "NotificationChannels": ["example string"], "IsEnabled": true }],
    quotaNotifications: [{ "Id": "example string", "Name": "example string", "QuotaType": "example string", "Threshold": 1.0, "NotificationChannels": ["example string"], "Actions": [{ "Type": "example string", "Value": {}, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }], "IsEnabled": true }]
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

**PUT** `api/hyperDrive/subscription/usage-alerts/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `string` |

**Request**

Body type: `UsageAlertConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Threshold` | `decimal` |
| `ThresholdType` | `string` |
| `NotificationChannels` | `List<string>` |
| `IsEnabled` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `UsageAlertConfig`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `Threshold` | `decimal` |
| `ThresholdType` | `string` |
| `NotificationChannels` | `List<string>` |
| `IsEnabled` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.hyperDrive.updateUsageAlert({
    id: "example string",
    name: "example string",
    threshold: 1.0,
    thresholdType: "example string",
    notificationChannels: ["example string"],
    isEnabled: true
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "Name": "example string", "Threshold": 1.0, "ThresholdType": "example string", "NotificationChannels": ["example string"], "IsEnabled": true }
}
```

---

### `validateConfiguration`

Validates the current configuration

**POST** `api/hyperDrive/config/validate`

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

