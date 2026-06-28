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

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
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

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
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

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
}
```

---

### `getNodeLogs`

Get node logs

**GET** `api/v1/onode/logs`

**Request**

Body: `int?`

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.oNODE.getNodeLogs({
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
  "result": /* <IActionResult> */
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

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
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

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
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

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
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

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
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

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
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

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
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

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
}
```

---

### `updateNodeConfig`

Update node configuration

**PUT** `api/v1/onode/config`

**Request**

Body type: `NodeConfigRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.oNODE.updateNodeConfig({
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
  "result": /* <IActionResult> */
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
| `CurrentLiveVersion` | `string` |
| `CurrentStagingVersion` | `string` |
| `OASISVersion` | `string` |
| `Terms` | `string` |
| `Logging` | `LoggingSettings` |
| `ErrorHandling` | `ErrorHandlingSettings` |
| `Security` | `SecuritySettings` |
| `Email` | `EmailSettings` |
| `StorageProviders` | `StorageProviderSettings` |
| `OASISHyperDriveConfig` | `OASISHyperDriveConfig` |
| `Web6` | `Web6Settings` |
| `HyperDriveMode` | `string` |
| `ReplicationRules` | `ReplicationRulesConfig` |
| `FailoverRules` | `FailoverRulesConfig` |
| `SubscriptionConfig` | `SubscriptionConfig` |
| `DataPermissions` | `DataPermissionsConfig` |
| `IntelligentMode` | `IntelligentModeConfig` |
| `OASISSystemAccountId` | `string` |
| `OASISAPIURL` | `string` |
| `NetworkId` | `string` |
| `SettingsLookupHolonId` | `Guid` |
| `StatsCacheEnabled` | `bool` |
| `StatsCacheTtlSeconds` | `int` |
| `DefaultProvider` | `string` |
| `DefaultOpenServModel` | `string` |
| `DefaultRoutingPriority` | `string` |
| `DefaultRoutingFallbackEnabled` | `bool` |
| `OpenServ` | `OpenServSettings` |
| `FAHRN` | `FAHRNSettings` |
| `HolonicBraid` | `HolonicBraidSettings` |
| `HolonicMemory` | `HolonicMemorySettings` |
| `BaseUrl` | `string` |
| `DefaultModel` | `string` |
| `AvailableModels` | `List<string>` |
| `EMAAlpha` | `double` |
| `DefaultDispatchMode` | `string` |
| `AutoSeedOpenServAgentsOnStartup` | `bool` |
| `MaxDecomposedSubProblems` | `int` |
| `AutoPersistWinningPlan` | `bool` |
| `DefaultRetentionPolicy` | `string` |
| `RecordDispatchOutcomes` | `bool` |
| `HideVerificationToken` | `bool` |
| `HideRefreshTokens` | `bool` |
| `SecretKey` | `string` |
| `JwtTokenExpirationMinutes` | `int` |
| `RefreshTokenExpirationDays` | `int` |
| `AvatarPassword` | `EncryptionSettings` |
| `OASISProviderPrivateKeys` | `EncryptionSettings` |
| `ShowStackTrace` | `bool` |
| `ThrowExceptionsOnErrors` | `bool` |
| `ThrowExceptionsOnWarnings` | `bool` |
| `LogAllErrors` | `bool` |
| `LogAllWarnings` | `bool` |
| `ErrorHandlingBehaviour` | `ErrorHandlingBehaviour` |
| `WarningHandlingBehaviour` | `WarningHandlingBehaviour` |
| `LoggingFramework` | `string` |
| `AlsoUseDefaultLogProvider` | `bool` |
| `LogToConsole` | `bool` |
| `ShowColouredLogs` | `bool` |
| `DebugColour` | `ConsoleColor` |
| `InfoColour` | `ConsoleColor` |
| `WarningColour` | `ConsoleColor` |
| `ErrorColour` | `ConsoleColor` |
| `LogToFile` | `bool` |
| `LogPath` | `string` |
| `LogFileName` | `string` |
| `MaxLogFileSize` | `int` |
| `NumberOfRetriesToLogToFile` | `int` |
| `RetryLoggingToFileEverySeconds` | `int` |
| `InsertExtraNewLineAfterLogMessage` | `bool` |
| `IndentLogMessagesBy` | `int` |
| `BCryptEncryptionEnabled` | `bool` |
| `Rijndael256EncryptionEnabled` | `bool` |
| `Rijndael256Key` | `string` |
| `QuantumEncryptionEnabled` | `bool` |
| `LogSwitchingProvidersToConsole` | `bool` |
| `LogSwitchingProvidersToFile` | `bool` |
| `LogSwitchingProviders` | `bool` |
| `ProviderMethodCallTimeOutSeconds` | `int` |
| `ActivateProviderTimeOutSeconds` | `int` |
| `DectivateProviderTimeOutSeconds` | `int` |
| `AutoReplicationEnabled` | `bool` |
| `AutoFailOverEnabled` | `bool` |
| `AutoFailOverEnabledForAvatarLogin` | `bool` |
| `AutoFailOverEnabledForCheckIfEmailAlreadyInUse` | `bool` |
| `AutoFailOverEnabledForCheckIfUsernameAlreadyInUse` | `bool` |
| `AutoLoadBalanceEnabled` | `bool` |
| `AutoLoadBalanceReadPollIntervalMins` | `int` |
| `AutoLoadBalanceWritePollIntervalMins` | `int` |
| `AutoReplicationProviders` | `string` |
| `AutoLoadBalanceProviders` | `string` |
| `AutoFailOverProviders` | `string` |
| `AutoFailOverProvidersForAvatarLogin` | `string` |
| `AutoFailOverProvidersForCheckIfEmailAlreadyInUse` | `string` |
| `AutoFailOverProvidersForCheckIfUsernameAlreadyInUse` | `string` |
| `AutoFailOverProvidersForCheckIfOASISSystemAccountExists` | `string` |
| `AutoFailOverLocalProvidersEnabled` | `bool` |
| `AutoFailOverLocalProviders` | `string` |
| `OASISProviderBootType` | `string` |
| `AzureCosmosDBOASIS` | `AzureOASISProviderSettings` |
| `HoloOASIS` | `HoloOASISProviderSettings` |
| `MongoDBOASIS` | `MongoDBOASISProviderSettings` |
| `EOSIOOASIS` | `EOSIOASISProviderSettings` |
| `TelosOASIS` | `TelosOASISProviderSettings` |
| `SEEDSOASIS` | `SEEDSOASISProviderSettings` |
| `ThreeFoldOASIS` | `ThreeFoldOASISProviderSettings` |
| `EthereumOASIS` | `EthereumOASISProviderSettings` |
| `ArbitrumOASIS` | `ArbitrumOASISProviderSettings` |
| `RootstockOASIS` | `RootstockOASISProviderSettings` |
| `PolygonOASIS` | `PolygonOASISProviderSettings` |
| `SQLLiteDBOASIS` | `SQLLiteDBOASISSettings` |
| `IPFSOASIS` | `IPFSOASISSettings` |
| `Neo4jOASIS` | `Neo4jOASISSettings` |
| `SolanaOASIS` | `SolanaOASISSettings` |
| `CargoOASIS` | `CargoOASISSettings` |
| `LocalFileOASIS` | `LocalFileOASISSettings` |
| `PinataOASIS` | `PinataOASISSettings` |
| `BitcoinOASIS` | `BitcoinOASISProviderSettings` |
| `CardanoOASIS` | `CardanoOASISProviderSettings` |
| `PolkadotOASIS` | `PolkadotOASISProviderSettings` |
| `BNBChainOASIS` | `BNBChainOASISProviderSettings` |
| `FantomOASIS` | `FantomOASISProviderSettings` |
| `OptimismOASIS` | `OptimismOASISProviderSettings` |
| `ChainLinkOASIS` | `ChainLinkOASISProviderSettings` |
| `ElrondOASIS` | `ElrondOASISProviderSettings` |
| `AptosOASIS` | `AptosOASISProviderSettings` |
| `TRONOASIS` | `TRONOASISProviderSettings` |
| `HashgraphOASIS` | `HashgraphOASISProviderSettings` |
| `AvalancheOASIS` | `AvalancheOASISProviderSettings` |
| `CosmosBlockChainOASIS` | `CosmosBlockChainOASISProviderSettings` |
| `NEAROASIS` | `NEAROASISProviderSettings` |
| `BaseOASIS` | `BaseOASISProviderSettings` |
| `SuiOASIS` | `SuiOASISProviderSettings` |
| `MoralisOASIS` | `MoralisOASISProviderSettings` |
| `ActivityPubOASIS` | `ActivityPubOASISProviderSettings` |
| `GoogleCloudOASIS` | `GoogleCloudOASISProviderSettings` |
| `EmailFrom` | `string` |
| `SmtpHost` | `string` |
| `SmtpPort` | `int` |
| `SmtpUser` | `string` |
| `SmtpPass` | `string` |
| `ResendKey` | `string` |
| `DisableAllEmails` | `bool` |
| `SendVerificationEmail` | `bool` |
| `OASISWebSiteURL` | `string` |
| `ConnectionString` | `string` |
| `SingingMessage` | `string` |
| `PrivateKey` | `string` |
| `HostUrl` | `string` |
| `WalletMnemonicWords` | `string` |
| `PublicKey` | `string` |
| `HolochainVersion` | `HolochainVersion` |
| `UseLocalNode` | `bool` |
| `UseHoloNetwork` | `bool` |
| `HoloNetworkURI` | `string` |
| `LocalNodeURI` | `string` |
| `HoloNETORMUseReflection` | `bool` |
| `STARBasePath` | `string` |
| `RustDNARSMTemplateFolder` | `string` |
| `RustTemplateLib` | `string` |
| `RustTemplateHolon` | `string` |
| `RustTemplateValidation` | `string` |
| `RustTemplateCreate` | `string` |
| `RustTemplateRead` | `string` |
| `RustTemplateUpdate` | `string` |
| `RustTemplateDelete` | `string` |
| `RustTemplateList` | `string` |
| `RustTemplateInt` | `string` |
| `RustTemplateString` | `string` |
| `RustTemplateBool` | `string` |
| `DBName` | `string` |
| `AccountName` | `string` |
| `AccountPrivateKey` | `string` |
| `ChainId` | `string` |
| `ChainPrivateKey` | `string` |
| `ContractAddress` | `string` |
| `Abi` | `string` |
| `LookUpIPFSAddress` | `string` |
| `Username` | `string` |
| `Password` | `string` |
| `FilePath` | `string` |
| `ServiceEndpoint` | `string` |
| `AuthKey` | `string` |
| `CollectionNames` | `string` |
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
| `MaxFailoversPerMonth` | `int` |
| `FailoverTriggers` | `List<FailoverTriggerConfig>` |
| `EscalationRules` | `List<EscalationRuleConfig>` |
| `PlanType` | `string` |
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
| `AvatarPermissions` | `AvatarPermissionsConfig` |
| `HolonPermissions` | `HolonPermissionsConfig` |
| `ProviderPermissions` | `ProviderPermissionsConfig` |
| `FieldLevelPermissions` | `FieldLevelPermissionsConfig` |
| `AccessControl` | `AccessControlConfig` |
| `AutoOptimization` | `bool` |
| `CostAwareness` | `bool` |
| `PerformanceOptimization` | `bool` |
| `SecurityOptimization` | `bool` |
| `LearningEnabled` | `bool` |
| `AdaptationSpeed` | `string` |
| `OptimizationGoals` | `List<OptimizationGoalConfig>` |
| `Id` | `string` |
| `Name` | `string` |
| `Condition` | `ReplicationConditionConfig` |
| `Priority` | `string` |
| `Action` | `ReplicationActionConfig` |
| `Type` | `string` |
| `Operator` | `string` |
| `Value` | `object` |
| `Field` | `string` |
| `ProviderType` | `string` |
| `TimeWindow` | `TimeWindowConfig` |
| `TargetProviders` | `List<string>` |
| `DataTypes` | `List<string>` |
| `Permissions` | `DataPermissionsConfig` |
| `CostLimit` | `decimal` |
| `Schedule` | `ScheduleConfig` |
| `GasFeeLimit` | `decimal` |
| `Conditions` | `List<ReplicationConditionConfig>` |
| `DataType` | `string` |
| `RequiredProviders` | `List<string>` |
| `OptionalProviders` | `List<string>` |
| `Providers` | `List<string>` |
| `MaxCostPerReplication` | `decimal` |
| `MaxCostPerMonth` | `decimal` |
| `PreferredFreeProviders` | `List<string>` |
| `AvoidHighGasProviders` | `bool` |
| `CostAlertThreshold` | `decimal` |
| `Algorithm` | `string` |
| `Weights` | `SelectionWeightsConfig` |
| `Threshold` | `decimal?` |
| `TargetProvider` | `string` |
| `FallbackProviders` | `List<string>` |
| `Level` | `string` |
| `Notification` | `NotificationRuleConfig` |
| `Fields` | `List<AvatarFieldPermissionConfig>` |
| `DefaultPermission` | `string` |
| `ProviderOverrides` | `Dictionary<string, List<AvatarFieldPermissionConfig>>` |
| `FieldName` | `string` |
| `Permission` | `string` |
| `IsEncrypted` | `bool` |
| `IsRequired` | `bool` |
| `ProviderTypes` | `List<string>` |
| `HolonTypes` | `List<HolonTypePermissionConfig>` |
| `HolonType` | `string` |
| `AllowedDataTypes` | `List<string>` |
| `Rules` | `List<FieldPermissionRuleConfig>` |
| `FieldPath` | `string` |
| `Encryption` | `Dictionary<string, bool>` |
| `Required` | `Dictionary<string, bool>` |
| `AuthenticationRequired` | `bool` |
| `AuthorizationLevel` | `string` |
| `EncryptionLevel` | `string` |
| `AuditLogging` | `bool` |
| `AccessPolicies` | `List<AccessPolicyConfig>` |
| `UserRole` | `string` |
| `SubscriptionPlan` | `string` |
| `Location` | `string` |
| `DeviceType` | `string` |
| `ThresholdType` | `string` |
| `NotificationChannels` | `List<string>` |
| `QuotaType` | `string` |
| `Actions` | `List<QuotaActionConfig>` |
| `Channels` | `List<string>` |
| `Message` | `string` |
| `Interval` | `int?` |
| `IntervalUnit` | `string` |
| `CronExpression` | `string` |
| `TimeZone` | `string` |
| `StartTime` | `string` |
| `EndTime` | `string` |
| `DaysOfWeek` | `List<string>` |
| `DaysOfMonth` | `List<int>` |
| `Start` | `string` |
| `End` | `string` |
| `Cost` | `decimal` |
| `Performance` | `decimal` |
| `Reliability` | `decimal` |
| `Geographic` | `decimal` |
| `Availability` | `decimal` |
| `Weight` | `decimal` |
| `Target` | `decimal` |
| `RpcEndpoint` | `string` |
| `Network` | `string` |
| `ProjectId` | `string` |
| `ApiKey` | `string` |
| `UserAgent` | `string` |
| `AcceptHeader` | `string` |
| `TimeoutSeconds` | `int` |
| `EnableCaching` | `bool` |
| `CacheExpirationMinutes` | `int` |
| `BucketName` | `string` |
| `CredentialsPath` | `string` |
| `FirestoreDatabaseId` | `string` |
| `BigQueryDatasetId` | `string` |
| `EnableStorage` | `bool` |
| `EnableFirestore` | `bool` |
| `EnableBigQuery` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.oNODE.updateOASISDNA({
    oASIS: /* <OASIS> */,
    currentLiveVersion: "example string",
    currentStagingVersion: "example string",
    oASISVersion: "example string",
    terms: "example string",
    logging: /* <LoggingSettings> */,
    errorHandling: /* <ErrorHandlingSettings> */,
    security: /* <SecuritySettings> */,
    email: /* <EmailSettings> */,
    storageProviders: /* <StorageProviderSettings> */,
    oASISHyperDriveConfig: { "IsEnabled": true, "DefaultStrategy": "example string", "AutoFailoverEnabled": true, "AutoReplicationEnabled": true, "AutoLoadBalancingEnabled": true, "MaxRetryAttempts": 1, "RequestTimeoutMs": 1, "HealthCheckIntervalMs": 1, "MaxConcurrentRequests": 1, "PerformanceWeight": 1.0, "CostWeight": 1.0, "GeographicWeight": 1.0, "AvailabilityWeight": 1.0, "LatencyWeight": 1.0, "ThroughputWeight": 1.0, "ReliabilityWeight": 1.0, "MaxLatencyThresholdMs": 1, "MaxErrorRateThreshold": 1.0, "MinUptimeThreshold": 1.0, "EnabledProviders": ["example string"], "AutoFailoverProviders": ["example string"], "AutoReplicationProviders": ["example string"], "LoadBalancingProviders": ["example string"], "ProviderConfigs": /* <Dictionary<string, ProviderConfig>> */, "GeographicConfig": /* <GeographicConfig> */, "CostConfig": /* <CostConfig> */, "PerformanceConfig": /* <PerformanceConfig> */, "SecurityConfig": /* <SecurityConfig> */, "MonitoringConfig": /* <MonitoringConfig> */, "ProviderType": "example string", "Weight": 1, "TimeoutMs": 1, "MaxConnections": 1, "ErrorThreshold": 1.0, "MinUptime": 1.0, "MaxLatencyMs": 1, "Endpoint": "example string", "ApiKey": "example string", "SecretKey": "example string", "CustomSettings": /* <Dictionary<string, string>> */, "DefaultRegion": "example string", "UserLocation": "example string", "MaxDistanceKm": 1.0, "MaxNetworkHops": 1, "Regions": /* <Dictionary<string, GeographicRegion>> */, "Name": "example string", "Country": "example string", "City": "example string", "Latitude": 1.0, "Longitude": 1.0, "TimeZone": "example string", "Currency": "example string", "MaxCostPerOperation": 1.0, "MaxStorageCostPerGB": 1.0, "MaxComputeCostPerHour": 1.0, "MaxNetworkCostPerGB": 1.0, "ProviderCosts": /* <Dictionary<string, CostAnalysisDNA>> */, "StorageCostPerGB": 1.0, "ComputeCostPerHour": 1.0, "NetworkCostPerGB": 1.0, "TransactionCost": 1.0, "ApiCallCost": 1.0, "TotalCost": 1.0, "LastUpdated": "2026-01-01T00:00:00Z", "CostEfficiencyScore": 1, "MaxResponseTimeMs": 1, "MaxErrorRate": 1.0, "MinThroughputMbps": 1, "MaxConcurrentConnections": 1, "QueueDepthThreshold": 1, "MaxCpuUsage": 1.0, "MaxMemoryUsage": 1.0, "RequireEncryption": true, "RequireAuthentication": true, "RequireAuthorization": true, "SessionTimeoutMs": 1, "MaxConcurrentSessions": 1, "AllowedIPs": ["example string"], "BlockedIPs": ["example string"], "SecurityHeaders": /* <Dictionary<string, string>> */, "MetricsCollectionIntervalMs": 1, "MaxMetricsHistory": 1, "AlertThreshold": 1, "EnableRealTimeMonitoring": true, "EnablePerformanceProfiling": true, "EnableCostTracking": true, "EnableGeographicTracking": true, "MonitoringEndpoints": ["example string"], "CustomMetrics": /* <Dictionary<string, string>> */, "ConnectionWeight": 1.0 },
    web6: /* <Web6Settings> */,
    hyperDriveMode: "example string",
    replicationRules: /* <ReplicationRulesConfig> */,
    failoverRules: /* <FailoverRulesConfig> */,
    subscriptionConfig: /* <SubscriptionConfig> */,
    dataPermissions: /* <DataPermissionsConfig> */,
    intelligentMode: /* <IntelligentModeConfig> */,
    oASISSystemAccountId: "example string",
    oASISAPIURL: "example string",
    networkId: "example string",
    settingsLookupHolonId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    statsCacheEnabled: true,
    statsCacheTtlSeconds: 1,
    defaultProvider: "example string",
    defaultOpenServModel: "example string",
    defaultRoutingPriority: "example string",
    defaultRoutingFallbackEnabled: true,
    openServ: /* <OpenServSettings> */,
    fAHRN: /* <FAHRNSettings> */,
    holonicBraid: /* <HolonicBraidSettings> */,
    holonicMemory: /* <HolonicMemorySettings> */,
    baseUrl: "example string",
    defaultModel: "example string",
    availableModels: ["example string"],
    eMAAlpha: 1.0,
    defaultDispatchMode: "example string",
    autoSeedOpenServAgentsOnStartup: true,
    maxDecomposedSubProblems: 1,
    autoPersistWinningPlan: true,
    defaultRetentionPolicy: "example string",
    recordDispatchOutcomes: true,
    hideVerificationToken: true,
    hideRefreshTokens: true,
    secretKey: "example string",
    jwtTokenExpirationMinutes: 1,
    refreshTokenExpirationDays: 1,
    avatarPassword: /* <EncryptionSettings> */,
    oASISProviderPrivateKeys: /* <EncryptionSettings> */,
    showStackTrace: true,
    throwExceptionsOnErrors: true,
    throwExceptionsOnWarnings: true,
    logAllErrors: true,
    logAllWarnings: true,
    errorHandlingBehaviour: /* <ErrorHandlingBehaviour> */,
    warningHandlingBehaviour: /* <WarningHandlingBehaviour> */,
    loggingFramework: "example string",
    alsoUseDefaultLogProvider: true,
    logToConsole: true,
    showColouredLogs: true,
    debugColour: /* <ConsoleColor> */,
    infoColour: /* <ConsoleColor> */,
    warningColour: /* <ConsoleColor> */,
    errorColour: /* <ConsoleColor> */,
    logToFile: true,
    logPath: "example string",
    logFileName: "example string",
    maxLogFileSize: 1,
    numberOfRetriesToLogToFile: 1,
    retryLoggingToFileEverySeconds: 1,
    insertExtraNewLineAfterLogMessage: true,
    indentLogMessagesBy: 1,
    bCryptEncryptionEnabled: true,
    rijndael256EncryptionEnabled: true,
    rijndael256Key: "example string",
    quantumEncryptionEnabled: true,
    logSwitchingProvidersToConsole: true,
    logSwitchingProvidersToFile: true,
    logSwitchingProviders: true,
    providerMethodCallTimeOutSeconds: 1,
    activateProviderTimeOutSeconds: 1,
    dectivateProviderTimeOutSeconds: 1,
    autoReplicationEnabled: true,
    autoFailOverEnabled: true,
    autoFailOverEnabledForAvatarLogin: true,
    autoFailOverEnabledForCheckIfEmailAlreadyInUse: true,
    autoFailOverEnabledForCheckIfUsernameAlreadyInUse: true,
    autoLoadBalanceEnabled: true,
    autoLoadBalanceReadPollIntervalMins: 1,
    autoLoadBalanceWritePollIntervalMins: 1,
    autoReplicationProviders: "example string",
    autoLoadBalanceProviders: "example string",
    autoFailOverProviders: "example string",
    autoFailOverProvidersForAvatarLogin: "example string",
    autoFailOverProvidersForCheckIfEmailAlreadyInUse: "example string",
    autoFailOverProvidersForCheckIfUsernameAlreadyInUse: "example string",
    autoFailOverProvidersForCheckIfOASISSystemAccountExists: "example string",
    autoFailOverLocalProvidersEnabled: true,
    autoFailOverLocalProviders: "example string",
    oASISProviderBootType: "example string",
    azureCosmosDBOASIS: /* <AzureOASISProviderSettings> */,
    holoOASIS: /* <HoloOASISProviderSettings> */,
    mongoDBOASIS: /* <MongoDBOASISProviderSettings> */,
    eOSIOOASIS: /* <EOSIOASISProviderSettings> */,
    telosOASIS: /* <TelosOASISProviderSettings> */,
    sEEDSOASIS: /* <SEEDSOASISProviderSettings> */,
    threeFoldOASIS: /* <ThreeFoldOASISProviderSettings> */,
    ethereumOASIS: /* <EthereumOASISProviderSettings> */,
    arbitrumOASIS: /* <ArbitrumOASISProviderSettings> */,
    rootstockOASIS: /* <RootstockOASISProviderSettings> */,
    polygonOASIS: /* <PolygonOASISProviderSettings> */,
    sQLLiteDBOASIS: /* <SQLLiteDBOASISSettings> */,
    iPFSOASIS: /* <IPFSOASISSettings> */,
    neo4jOASIS: /* <Neo4jOASISSettings> */,
    solanaOASIS: /* <SolanaOASISSettings> */,
    cargoOASIS: /* <CargoOASISSettings> */,
    localFileOASIS: /* <LocalFileOASISSettings> */,
    pinataOASIS: /* <PinataOASISSettings> */,
    bitcoinOASIS: /* <BitcoinOASISProviderSettings> */,
    cardanoOASIS: /* <CardanoOASISProviderSettings> */,
    polkadotOASIS: /* <PolkadotOASISProviderSettings> */,
    bNBChainOASIS: /* <BNBChainOASISProviderSettings> */,
    fantomOASIS: /* <FantomOASISProviderSettings> */,
    optimismOASIS: /* <OptimismOASISProviderSettings> */,
    chainLinkOASIS: /* <ChainLinkOASISProviderSettings> */,
    elrondOASIS: /* <ElrondOASISProviderSettings> */,
    aptosOASIS: /* <AptosOASISProviderSettings> */,
    tRONOASIS: /* <TRONOASISProviderSettings> */,
    hashgraphOASIS: /* <HashgraphOASISProviderSettings> */,
    avalancheOASIS: /* <AvalancheOASISProviderSettings> */,
    cosmosBlockChainOASIS: /* <CosmosBlockChainOASISProviderSettings> */,
    nEAROASIS: /* <NEAROASISProviderSettings> */,
    baseOASIS: /* <BaseOASISProviderSettings> */,
    suiOASIS: /* <SuiOASISProviderSettings> */,
    moralisOASIS: /* <MoralisOASISProviderSettings> */,
    activityPubOASIS: /* <ActivityPubOASISProviderSettings> */,
    googleCloudOASIS: /* <GoogleCloudOASISProviderSettings> */,
    emailFrom: "example string",
    smtpHost: "example string",
    smtpPort: 1,
    smtpUser: "example string",
    smtpPass: "example string",
    resendKey: "example string",
    disableAllEmails: true,
    sendVerificationEmail: true,
    oASISWebSiteURL: "example string",
    connectionString: "example string",
    singingMessage: "example string",
    privateKey: "example string",
    hostUrl: "example string",
    walletMnemonicWords: "example string",
    publicKey: "example string",
    holochainVersion: /* <HolochainVersion> */,
    useLocalNode: true,
    useHoloNetwork: true,
    holoNetworkURI: "example string",
    localNodeURI: "example string",
    holoNETORMUseReflection: true,
    sTARBasePath: "example string",
    rustDNARSMTemplateFolder: "example string",
    rustTemplateLib: "example string",
    rustTemplateHolon: "example string",
    rustTemplateValidation: "example string",
    rustTemplateCreate: "example string",
    rustTemplateRead: "example string",
    rustTemplateUpdate: "example string",
    rustTemplateDelete: "example string",
    rustTemplateList: "example string",
    rustTemplateInt: "example string",
    rustTemplateString: "example string",
    rustTemplateBool: "example string",
    dBName: "example string",
    accountName: "example string",
    accountPrivateKey: "example string",
    chainId: "example string",
    chainPrivateKey: "example string",
    contractAddress: "example string",
    abi: "example string",
    lookUpIPFSAddress: "example string",
    username: "example string",
    password: "example string",
    filePath: "example string",
    serviceEndpoint: "example string",
    authKey: "example string",
    collectionNames: "example string",
    mode: "example string",
    isEnabled: true,
    maxReplicationsPerMonth: 1,
    costThreshold: 1.0,
    freeProvidersOnly: true,
    gasFeeThreshold: 1.0,
    replicationTriggers: [ /* <ReplicationTriggerConfig> */ ],
    providerRules: [ /* <ProviderReplicationRuleConfig> */ ],
    dataTypeRules: [ /* <DataTypeReplicationRuleConfig> */ ],
    scheduleRules: [ /* <ScheduleRuleConfig> */ ],
    costOptimization: /* <CostOptimizationRuleConfig> */,
    intelligentSelection: /* <IntelligentSelectionRuleConfig> */,
    maxFailoversPerMonth: 1,
    failoverTriggers: [ /* <FailoverTriggerConfig> */ ],
    escalationRules: [ /* <EscalationRuleConfig> */ ],
    planType: "example string",
    maxRequestsPerMonth: 1,
    maxStorageGB: 1,
    payAsYouGoEnabled: true,
    costPerReplication: 1.0,
    costPerFailover: 1.0,
    costPerGB: 1.0,
    currency: "example string",
    billingCycle: "example string",
    usageAlerts: [ /* <UsageAlertConfig> */ ],
    quotaNotifications: [ /* <QuotaNotificationConfig> */ ],
    avatarPermissions: /* <AvatarPermissionsConfig> */,
    holonPermissions: /* <HolonPermissionsConfig> */,
    providerPermissions: /* <ProviderPermissionsConfig> */,
    fieldLevelPermissions: /* <FieldLevelPermissionsConfig> */,
    accessControl: /* <AccessControlConfig> */,
    autoOptimization: true,
    costAwareness: true,
    performanceOptimization: true,
    securityOptimization: true,
    learningEnabled: true,
    adaptationSpeed: "example string",
    optimizationGoals: [ /* <OptimizationGoalConfig> */ ],
    id: "example string",
    name: "example string",
    condition: /* <ReplicationConditionConfig> */,
    priority: "example string",
    action: /* <ReplicationActionConfig> */,
    type: "example string",
    operator: "example string",
    value: {},
    field: "example string",
    providerType: "example string",
    timeWindow: /* <TimeWindowConfig> */,
    targetProviders: ["example string"],
    dataTypes: ["example string"],
    permissions: /* <DataPermissionsConfig> */,
    costLimit: 1.0,
    schedule: /* <ScheduleConfig> */,
    gasFeeLimit: 1.0,
    conditions: [ /* <ReplicationConditionConfig> */ ],
    dataType: "example string",
    requiredProviders: ["example string"],
    optionalProviders: ["example string"],
    providers: ["example string"],
    maxCostPerReplication: 1.0,
    maxCostPerMonth: 1.0,
    preferredFreeProviders: ["example string"],
    avoidHighGasProviders: true,
    costAlertThreshold: 1.0,
    algorithm: "example string",
    weights: /* <SelectionWeightsConfig> */,
    threshold: 1.0,
    targetProvider: "example string",
    fallbackProviders: ["example string"],
    level: "example string",
    notification: /* <NotificationRuleConfig> */,
    fields: [ /* <AvatarFieldPermissionConfig> */ ],
    defaultPermission: "example string",
    providerOverrides: /* <Dictionary<string, List<AvatarFieldPermissionConfig>>> */,
    fieldName: "example string",
    permission: "example string",
    isEncrypted: true,
    isRequired: true,
    providerTypes: ["example string"],
    holonTypes: [ /* <HolonTypePermissionConfig> */ ],
    holonType: "example string",
    allowedDataTypes: ["example string"],
    rules: [ /* <FieldPermissionRuleConfig> */ ],
    fieldPath: "example string",
    encryption: /* <Dictionary<string, bool>> */,
    required: /* <Dictionary<string, bool>> */,
    authenticationRequired: true,
    authorizationLevel: "example string",
    encryptionLevel: "example string",
    auditLogging: true,
    accessPolicies: [ /* <AccessPolicyConfig> */ ],
    userRole: "example string",
    subscriptionPlan: "example string",
    location: "example string",
    deviceType: "example string",
    thresholdType: "example string",
    notificationChannels: ["example string"],
    quotaType: "example string",
    actions: [ /* <QuotaActionConfig> */ ],
    channels: ["example string"],
    message: "example string",
    interval: 1,
    intervalUnit: "example string",
    cronExpression: "example string",
    timeZone: "example string",
    startTime: "example string",
    endTime: "example string",
    daysOfWeek: ["example string"],
    daysOfMonth: [1],
    start: "example string",
    end: "example string",
    cost: 1.0,
    performance: 1.0,
    reliability: 1.0,
    geographic: 1.0,
    availability: 1.0,
    weight: 1.0,
    target: 1.0,
    rpcEndpoint: "example string",
    network: "example string",
    projectId: "example string",
    apiKey: "example string",
    userAgent: "example string",
    acceptHeader: "example string",
    timeoutSeconds: 1,
    enableCaching: true,
    cacheExpirationMinutes: 1,
    bucketName: "example string",
    credentialsPath: "example string",
    firestoreDatabaseId: "example string",
    bigQueryDatasetId: "example string",
    enableStorage: true,
    enableFirestore: true,
    enableBigQuery: true
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <IActionResult> */
}
```

