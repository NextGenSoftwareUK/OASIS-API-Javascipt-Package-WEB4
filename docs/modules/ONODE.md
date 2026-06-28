# ONODE — `oasis.oNODE`

Source controller: [`ONODEController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ONODEController.cs)
Route prefix: `api/v1/onode`
13 operation(s).

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

### `getConnectedPeers`

Get connected peers

**GET** `api/v1/onode/peers`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.getConnectedPeers({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getNodeConfig`

Get node configuration

**GET** `api/v1/onode/config`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.getNodeConfig({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getNodeInfo`

Get node information

**GET** `api/v1/onode/info`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.getNodeInfo({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getNodeLogs`

Get node logs

**GET** `api/v1/onode/logs`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `lines` | `int? (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.getNodeLogs({
    lines: '<lines>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getNodeMetrics`

Get node performance metrics

**GET** `api/v1/onode/metrics`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.getNodeMetrics({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getNodeStats`

Get node statistics

**GET** `api/v1/onode/stats`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.getNodeStats({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getNodeStatus`

Get node status

**GET** `api/v1/onode/status`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.getNodeStatus({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getOASISDNA`

Get OASISDNA configuration for ONODE

**GET** `api/v1/onode/oasisdna`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.getOASISDNA({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `restartNode`

Restart ONODE

**POST** `api/v1/onode/restart`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.restartNode({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `startNode`

Start ONODE

**POST** `api/v1/onode/start`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.startNode({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `stopNode`

Stop ONODE

**POST** `api/v1/onode/stop`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.stopNode({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateNodeConfig`

Update node configuration

**PUT** `api/v1/onode/config`

**Request**

Body type: `NodeConfigRequest`

| Field | Type |
| --- | --- |
| `Config` | `Dictionary<string, object>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.updateNodeConfig({
    config: { "<string>": {} }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateOASISDNA`

Update OASISDNA configuration for ONODE

**PUT** `api/v1/onode/oasisdna`

**Request**

Body type: `OASISDNA`

| Field | Type |
| --- | --- |
| `OASIS` | `OASIS` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.oNODE.updateOASISDNA({
    oASIS: { "CurrentLiveVersion": "example string", "CurrentStagingVersion": "example string", "OASISVersion": "example string", "Terms": "example string", "Logging": { "LoggingFramework": "example string", "AlsoUseDefaultLogProvider": true, "LogToConsole": true, "ShowColouredLogs": true, "DebugColour": /* <ConsoleColor> */, "InfoColour": /* <ConsoleColor> */, "WarningColour": /* <ConsoleColor> */, "ErrorColour": /* <ConsoleColor> */, "LogToFile": true, "LogPath": "example string", "LogFileName": "example string", "MaxLogFileSize": 1, "NumberOfRetriesToLogToFile": 1, "RetryLoggingToFileEverySeconds": 1, "InsertExtraNewLineAfterLogMessage": true, "IndentLogMessagesBy": 1 }, "ErrorHandling": { "ShowStackTrace": true, "ThrowExceptionsOnErrors": true, "ThrowExceptionsOnWarnings": true, "LogAllErrors": true, "LogAllWarnings": true, "ErrorHandlingBehaviour": {  }, "WarningHandlingBehaviour": /* <WarningHandlingBehaviour> */ }, "Security": { "HideVerificationToken": true, "HideRefreshTokens": true, "SecretKey": "example string", "JwtTokenExpirationMinutes": 1, "RefreshTokenExpirationDays": 1, "AvatarPassword": { "BCryptEncryptionEnabled": true, "Rijndael256EncryptionEnabled": true, "Rijndael256Key": "example string", "QuantumEncryptionEnabled": true }, "OASISProviderPrivateKeys": {} }, "Email": { "EmailFrom": "example string", "SmtpHost": "example string", "SmtpPort": 1, "SmtpUser": "example string", "SmtpPass": "example string", "ResendKey": "example string", "DisableAllEmails": true, "SendVerificationEmail": true, "OASISWebSiteURL": "example string" }, "StorageProviders": { "LogSwitchingProvidersToConsole": true, "LogSwitchingProvidersToFile": true, "LogSwitchingProviders": true, "ProviderMethodCallTimeOutSeconds": 1, "ActivateProviderTimeOutSeconds": 1, "DectivateProviderTimeOutSeconds": 1, "AutoReplicationEnabled": true, "AutoFailOverEnabled": true, "AutoFailOverEnabledForAvatarLogin": true, "AutoFailOverEnabledForCheckIfEmailAlreadyInUse": true, "AutoFailOverEnabledForCheckIfUsernameAlreadyInUse": true, "AutoLoadBalanceEnabled": true, "AutoLoadBalanceReadPollIntervalMins": 1, "AutoLoadBalanceWritePollIntervalMins": 1, "AutoReplicationProviders": "example string", "AutoLoadBalanceProviders": "example string", "AutoFailOverProviders": "example string", "AutoFailOverProvidersForAvatarLogin": "example string", "AutoFailOverProvidersForCheckIfEmailAlreadyInUse": "example string", "AutoFailOverProvidersForCheckIfUsernameAlreadyInUse": "example string", "AutoFailOverProvidersForCheckIfOASISSystemAccountExists": "example string", "AutoFailOverLocalProvidersEnabled": true, "AutoFailOverLocalProviders": "example string", "OASISProviderBootType": "example string", "AzureCosmosDBOASIS": { "ServiceEndpoint": "example string", "AuthKey": "example string", "DBName": "example string", "CollectionNames": "example string" }, "HoloOASIS": { "HolochainVersion": {  }, "UseLocalNode": true, "UseHoloNetwork": true, "HoloNetworkURI": "example string", "LocalNodeURI": "example string", "HoloNETORMUseReflection": true, "STARBasePath": "example string", "RustDNARSMTemplateFolder": "example string", "RustTemplateLib": "example string", "RustTemplateHolon": "example string", "RustTemplateValidation": "example string", "RustTemplateCreate": "example string", "RustTemplateRead": "example string", "RustTemplateUpdate": "example string", "RustTemplateDelete": "example string", "RustTemplateList": "example string", "RustTemplateInt": "example string", "RustTemplateString": "example string", "RustTemplateBool": "example string" }, "MongoDBOASIS": { "DBName": "example string" }, "EOSIOOASIS": { "AccountName": "example string", "AccountPrivateKey": "example string", "ChainId": "example string" }, "TelosOASIS": { "RpcEndpoint": "example string", "Network": "example string", "ChainId": "example string" }, "SEEDSOASIS": {  }, "ThreeFoldOASIS": {  }, "EthereumOASIS": { "ChainPrivateKey": "example string", "ChainId": 1, "ContractAddress": "example string" }, "ArbitrumOASIS": { "ChainPrivateKey": "example string", "ChainId": 1, "ContractAddress": "example string" }, "RootstockOASIS": { "ChainPrivateKey": "example string", "ContractAddress": "example string", "Abi": "example string" }, "PolygonOASIS": { "ChainPrivateKey": "example string", "ContractAddress": "example string", "Abi": "example string" }, "SQLLiteDBOASIS": {  }, "IPFSOASIS": { "LookUpIPFSAddress": "example string" }, "Neo4jOASIS": { "Username": "example string", "Password": "example string" }, "SolanaOASIS": { "WalletMnemonicWords": "example string", "PrivateKey": "example string", "PublicKey": "example string" }, "CargoOASIS": { "SingingMessage": "example string", "PrivateKey": "example string", "HostUrl": "example string" }, "LocalFileOASIS": { "FilePath": "example string" }, "PinataOASIS": { "ConnectionString": "example string" }, "BitcoinOASIS": { "RpcEndpoint": "example string", "Network": "example string" }, "CardanoOASIS": { "RpcEndpoint": "example string", "NetworkId": "example string", "ProjectId": "example string" }, "PolkadotOASIS": { "RpcEndpoint": "example string", "Network": "example string" }, "BNBChainOASIS": { "RpcEndpoint": "example string", "NetworkId": "example string", "ChainId": "example string" }, "FantomOASIS": { "RpcEndpoint": "example string", "NetworkId": "example string", "ChainId": "example string" }, "OptimismOASIS": { "RpcEndpoint": "example string", "NetworkId": "example string", "ChainId": "example string" }, "ChainLinkOASIS": { "RpcEndpoint": "example string", "NetworkId": "example string", "ChainId": "example string" }, "ElrondOASIS": { "RpcEndpoint": "example string", "Network": "example string", "ChainId": "example string" }, "AptosOASIS": { "RpcEndpoint": "example string", "Network": "example string", "ChainId": "example string", "PrivateKey": "example string", "ContractAddress": "example string" }, "TRONOASIS": { "RpcEndpoint": "example string", "Network": "example string", "ChainId": "example string" }, "HashgraphOASIS": { "RpcEndpoint": "example string", "Network": "example string", "ChainId": "example string" }, "AvalancheOASIS": { "RpcEndpoint": "example string", "NetworkId": "example string", "ChainId": "example string", "ChainPrivateKey": "example string", "ContractAddress": "example string" }, "CosmosBlockChainOASIS": { "RpcEndpoint": "example string", "Network": "example string", "ChainId": "example string" }, "NEAROASIS": { "RpcEndpoint": "example string", "Network": "example string", "ChainId": "example string" }, "BaseOASIS": { "RpcEndpoint": "example string", "NetworkId": "example string", "ChainId": "example string", "ChainPrivateKey": "example string", "ContractAddress": "example string" }, "SuiOASIS": { "RpcEndpoint": "example string", "Network": "example string", "ChainId": "example string", "ContractAddress": "example string" }, "MoralisOASIS": { "ApiKey": "example string", "RpcEndpoint": "example string", "Network": "example string" }, "ActivityPubOASIS": { "BaseUrl": "example string", "UserAgent": "example string", "AcceptHeader": "example string", "TimeoutSeconds": 1, "EnableCaching": true, "CacheExpirationMinutes": 1 }, "GoogleCloudOASIS": { "ProjectId": "example string", "BucketName": "example string", "CredentialsPath": "example string", "FirestoreDatabaseId": "example string", "BigQueryDatasetId": "example string", "EnableStorage": true, "EnableFirestore": true, "EnableBigQuery": true } }, "OASISHyperDriveConfig": { "IsEnabled": true, "DefaultStrategy": "example string", "AutoFailoverEnabled": true, "AutoReplicationEnabled": true, "AutoLoadBalancingEnabled": true, "MaxRetryAttempts": 1, "RequestTimeoutMs": 1, "HealthCheckIntervalMs": 1, "MaxConcurrentRequests": 1, "PerformanceWeight": 1.0, "CostWeight": 1.0, "GeographicWeight": 1.0, "AvailabilityWeight": 1.0, "LatencyWeight": 1.0, "ThroughputWeight": 1.0, "ReliabilityWeight": 1.0, "MaxLatencyThresholdMs": 1, "MaxErrorRateThreshold": 1.0, "MinUptimeThreshold": 1.0, "EnabledProviders": ["example string"], "AutoFailoverProviders": ["example string"], "AutoReplicationProviders": ["example string"], "LoadBalancingProviders": ["example string"], "ProviderConfigs": { "<string>": { "ProviderType": "example string", "IsEnabled": true, "Weight": 1, "TimeoutMs": 1, "MaxConnections": 1, "ErrorThreshold": 1.0, "MinUptime": 1.0, "MaxLatencyMs": 1, "Endpoint": "example string", "ApiKey": "example string", "SecretKey": "example string", "CustomSettings": { "<string>": "example string" } } }, "GeographicConfig": { "IsEnabled": true, "DefaultRegion": "example string", "UserLocation": "example string", "MaxDistanceKm": 1.0, "MaxNetworkHops": 1, "MaxLatencyMs": 1, "Regions": { "<string>": { "Name": "example string", "Country": "example string", "City": "example string", "Latitude": 1.0, "Longitude": 1.0, "TimeZone": "example string", "MaxLatencyMs": 1.0, "MaxNetworkHops": 1 } } }, "CostConfig": { "IsEnabled": true, "Currency": "example string", "MaxCostPerOperation": 1.0, "MaxStorageCostPerGB": 1.0, "MaxComputeCostPerHour": 1.0, "MaxNetworkCostPerGB": 1.0, "ProviderCosts": { "<string>": { "ProviderType": "example string", "StorageCostPerGB": 1.0, "ComputeCostPerHour": 1.0, "NetworkCostPerGB": 1.0, "TransactionCost": 1.0, "ApiCallCost": 1.0, "TotalCost": 1.0, "Currency": "example string", "LastUpdated": "2026-01-01T00:00:00Z", "CostEfficiencyScore": 1 } } }, "PerformanceConfig": { "IsEnabled": true, "MaxResponseTimeMs": 1, "MaxErrorRate": 1.0, "MinUptime": 1.0, "MinThroughputMbps": 1, "MaxConcurrentConnections": 1, "QueueDepthThreshold": 1, "MaxCpuUsage": 1.0, "MaxMemoryUsage": 1.0 }, "SecurityConfig": { "IsEnabled": true, "RequireEncryption": true, "RequireAuthentication": true, "RequireAuthorization": true, "MaxRetryAttempts": 1, "SessionTimeoutMs": 1, "MaxConcurrentSessions": 1, "AllowedIPs": ["example string"], "BlockedIPs": ["example string"], "SecurityHeaders": { "<string>": "example string" } }, "MonitoringConfig": { "IsEnabled": true, "MetricsCollectionIntervalMs": 1, "MaxMetricsHistory": 1, "AlertThreshold": 1, "EnableRealTimeMonitoring": true, "EnablePerformanceProfiling": true, "EnableCostTracking": true, "EnableGeographicTracking": true, "MonitoringEndpoints": ["example string"], "CustomMetrics": { "<string>": "example string" } } }, "Web6": { "DefaultProvider": "example string", "DefaultOpenServModel": "example string", "DefaultRoutingPriority": "example string", "DefaultRoutingFallbackEnabled": true, "OpenServ": { "BaseUrl": "example string", "DefaultModel": "example string", "AvailableModels": ["example string"] }, "FAHRN": { "EMAAlpha": 1.0, "DefaultDispatchMode": "example string", "AutoSeedOpenServAgentsOnStartup": true, "MaxDecomposedSubProblems": 1 }, "HolonicBraid": { "AutoPersistWinningPlan": true }, "HolonicMemory": { "DefaultRetentionPolicy": "example string", "RecordDispatchOutcomes": true } }, "HyperDriveMode": "example string", "ReplicationRules": { "Mode": "example string", "IsEnabled": true, "MaxReplicationsPerMonth": 1, "CostThreshold": 1.0, "FreeProvidersOnly": true, "GasFeeThreshold": 1.0, "ReplicationTriggers": [{ "Id": "example string", "Name": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "Field": "example string", "ProviderType": "example string", "TimeWindow": { "Start": "example string", "End": "example string", "TimeZone": "example string", "DaysOfWeek": ["example string"] } }, "Priority": "example string", "IsEnabled": true, "Action": { "Type": "example string", "TargetProviders": ["example string"], "DataTypes": ["example string"], "Permissions": { "AvatarPermissions": { "IsEnabled": true, "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "HolonPermissions": { "IsEnabled": true, "HolonTypes": [{ "HolonType": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true, "ProviderTypes": ["example string"], "Fields": [{ "FieldName": "example string", "Permission": "example string", "IsEncrypted": true, "IsRequired": true }] }], "DefaultPermission": "example string", "ProviderOverrides": { "<string>": [] } }, "ProviderPermissions": { "IsEnabled": true, "Providers": [{ "ProviderType": "example string", "Permission": "example string", "AllowedDataTypes": ["example string"], "CostLimit": 1.0, "GasFeeLimit": 1.0, "Schedule": { "Type": "example string", "Interval": 1, "IntervalUnit": "example string", "CronExpression": "example string", "TimeZone": "example string", "StartTime": "example string", "EndTime": "example string", "DaysOfWeek": ["example string"], "DaysOfMonth": [1] } }] }, "FieldLevelPermissions": { "IsEnabled": true, "Rules": [{ "FieldPath": "example string", "DataType": "example string", "Permissions": { "<string>": "example string" }, "Encryption": { "<string>": true }, "Required": { "<string>": true } }] }, "AccessControl": { "IsEnabled": true, "AuthenticationRequired": true, "AuthorizationLevel": "example string", "EncryptionLevel": "example string", "AuditLogging": true, "AccessPolicies": [{ "Name": "example string", "Condition": { "UserRole": "example string", "SubscriptionPlan": "example string", "TimeWindow": {}, "Location": "example string", "DeviceType": "example string" }, "Permissions": "example string", "Providers": ["example string"], "DataTypes": ["example string"] }] } }, "CostLimit": 1.0, "Schedule": {} } }], "ProviderRules": [{ "ProviderType": "example string", "IsEnabled": true, "Priority": 1, "CostLimit": 1.0, "GasFeeLimit": 1.0, "DataTypes": ["example string"], "Permissions": {}, "Conditions": [], "Schedule": {} }], "DataTypeRules": [{ "DataType": "example string", "IsEnabled": true, "RequiredProviders": ["example string"], "OptionalProviders": ["example string"], "Permissions": {}, "CostLimit": 1.0, "Schedule": {} }], "ScheduleRules": [{ "Name": "example string", "IsEnabled": true, "Schedule": {}, "DataTypes": ["example string"], "Providers": ["example string"], "Permissions": {} }], "CostOptimization": { "IsEnabled": true, "MaxCostPerReplication": 1.0, "MaxCostPerMonth": 1.0, "PreferredFreeProviders": ["example string"], "AvoidHighGasProviders": true, "GasFeeThreshold": 1.0, "CostAlertThreshold": 1.0 }, "IntelligentSelection": { "IsEnabled": true, "Algorithm": "example string", "Weights": { "Cost": 1.0, "Performance": 1.0, "Reliability": 1.0, "Security": 1.0, "Geographic": 1.0, "Availability": 1.0 }, "LearningEnabled": true, "AdaptationSpeed": "example string", "OptimizationGoals": [{ "Type": "example string", "Weight": 1.0, "Target": 1.0, "IsEnabled": true }] } }, "FailoverRules": { "Mode": "example string", "IsEnabled": true, "MaxFailoversPerMonth": 1, "CostThreshold": 1.0, "FreeProvidersOnly": true, "GasFeeThreshold": 1.0, "FailoverTriggers": [{ "Id": "example string", "Name": "example string", "Condition": { "Type": "example string", "Operator": "example string", "Value": {}, "ProviderType": "example string", "TimeWindow": {}, "Threshold": 1.0 }, "Priority": "example string", "IsEnabled": true, "Action": { "Type": "example string", "TargetProvider": "example string", "FallbackProviders": ["example string"], "CostLimit": 1.0, "Schedule": {} } }], "ProviderRules": [{ "ProviderType": "example string", "IsEnabled": true, "Priority": 1, "CostLimit": 1.0, "GasFeeLimit": 1.0, "Conditions": [], "FallbackProviders": ["example string"] }], "IntelligentSelection": {}, "EscalationRules": [{ "Name": "example string", "Level": "example string", "Condition": {}, "Action": {}, "Notification": { "Channels": ["example string"], "Message": "example string", "Priority": "example string", "IsEnabled": true } }] }, "SubscriptionConfig": { "PlanType": "example string", "MaxReplicationsPerMonth": 1, "MaxFailoversPerMonth": 1, "MaxRequestsPerMonth": 1, "MaxStorageGB": 1, "PayAsYouGoEnabled": true, "CostPerReplication": 1.0, "CostPerFailover": 1.0, "CostPerGB": 1.0, "Currency": "example string", "BillingCycle": "example string", "UsageAlerts": [{ "Id": "example string", "Name": "example string", "Threshold": 1.0, "ThresholdType": "example string", "NotificationChannels": ["example string"], "IsEnabled": true }], "QuotaNotifications": [{ "Id": "example string", "Name": "example string", "QuotaType": "example string", "Threshold": 1.0, "NotificationChannels": ["example string"], "Actions": [{ "Type": "example string", "Value": {}, "Schedule": {} }], "IsEnabled": true }] }, "DataPermissions": {}, "IntelligentMode": { "IsEnabled": true, "AutoOptimization": true, "CostAwareness": true, "PerformanceOptimization": true, "SecurityOptimization": true, "LearningEnabled": true, "AdaptationSpeed": "example string", "OptimizationGoals": [] }, "OASISSystemAccountId": "example string", "OASISAPIURL": "example string", "NetworkId": "example string", "SettingsLookupHolonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "StatsCacheEnabled": true, "StatsCacheTtlSeconds": 1 }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

