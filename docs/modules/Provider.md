# Provider — `oasis.provider`

Source controller: [`ProviderController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ProviderController.cs)
Route prefix: `api/provider`
31 operation(s).

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

### `activateProvider`

Activate the given provider.

**POST** `api/provider/activate-provider/{providerType}`

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
const { isError, message, result } = await oasis.provider.activateProvider({
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

### `deActivateProvider`

Deactivate the given provider.

**POST** `api/provider/deactivate-provider/{providerType}`

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
const { isError, message, result } = await oasis.provider.deActivateProvider({
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

### `getAllRegisteredNetworkProviders`

Get all registered network providers.

**GET** `api/provider/get-all-registered-network-providers`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOASISProvider` (array)

| Field | Type |
| --- | --- |
| `ProviderName` | `string` |
| `ProviderDescription` | `string` |
| `ProviderCategory` | `EnumValue<ProviderCategory>` |
| `ProviderCategories` | `List<EnumValue<ProviderCategory>>` |
| `ProviderType` | `EnumValue<ProviderType>` |
| `Activated` | `bool` |
| `IsProviderActivated` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getAllRegisteredNetworkProviders({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "ProviderName": "example string", "ProviderDescription": "example string", "ProviderCategory": { "Score": 1.0 }, "ProviderCategories": [], "ProviderType": { "Score": 1.0 }, "Activated": true, "IsProviderActivated": true }]
}
```

---

### `getAllRegisteredProviderTypes`

Get all registered provider types.

**GET** `api/provider/get-all-registered-provider-types`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `EnumValue<ProviderType>` (array)

| Field | Type |
| --- | --- |
| `Score` | `double` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getAllRegisteredProviderTypes({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Score": 1.0 }]
}
```

---

### `getAllRegisteredProviders`

Get all registered providers.

**GET** `api/provider/get-all-registered-providers`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOASISProvider` (array)

| Field | Type |
| --- | --- |
| `ProviderName` | `string` |
| `ProviderDescription` | `string` |
| `ProviderCategory` | `EnumValue<ProviderCategory>` |
| `ProviderCategories` | `List<EnumValue<ProviderCategory>>` |
| `ProviderType` | `EnumValue<ProviderType>` |
| `Activated` | `bool` |
| `IsProviderActivated` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getAllRegisteredProviders({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "ProviderName": "example string", "ProviderDescription": "example string", "ProviderCategory": { "Score": 1.0 }, "ProviderCategories": [], "ProviderType": { "Score": 1.0 }, "Activated": true, "IsProviderActivated": true }]
}
```

---

### `getAllRegisteredProvidersForCategory`

Get all registered storage providers for a given category.

**GET** `api/provider/get-all-registered-providers-for-category/{category}`

Route parameters:

| Field | Type |
| --- | --- |
| `category` | `ProviderCategory` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOASISProvider` (array)

| Field | Type |
| --- | --- |
| `ProviderName` | `string` |
| `ProviderDescription` | `string` |
| `ProviderCategory` | `EnumValue<ProviderCategory>` |
| `ProviderCategories` | `List<EnumValue<ProviderCategory>>` |
| `ProviderType` | `EnumValue<ProviderType>` |
| `Activated` | `bool` |
| `IsProviderActivated` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getAllRegisteredProvidersForCategory({
    category: '<category>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "ProviderName": "example string", "ProviderDescription": "example string", "ProviderCategory": { "Score": 1.0 }, "ProviderCategories": [], "ProviderType": { "Score": 1.0 }, "Activated": true, "IsProviderActivated": true }]
}
```

---

### `getAllRegisteredRendererProviders`

Get all registered renderer providers.

**GET** `api/provider/get-all-registered-renderer-providers`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOASISProvider` (array)

| Field | Type |
| --- | --- |
| `ProviderName` | `string` |
| `ProviderDescription` | `string` |
| `ProviderCategory` | `EnumValue<ProviderCategory>` |
| `ProviderCategories` | `List<EnumValue<ProviderCategory>>` |
| `ProviderType` | `EnumValue<ProviderType>` |
| `Activated` | `bool` |
| `IsProviderActivated` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getAllRegisteredRendererProviders({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "ProviderName": "example string", "ProviderDescription": "example string", "ProviderCategory": { "Score": 1.0 }, "ProviderCategories": [], "ProviderType": { "Score": 1.0 }, "Activated": true, "IsProviderActivated": true }]
}
```

---

### `getAllRegisteredStorageProviders`

Get all registered storage providers.

**GET** `api/provider/get-all-registered-storage-providers`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOASISProvider` (array)

| Field | Type |
| --- | --- |
| `ProviderName` | `string` |
| `ProviderDescription` | `string` |
| `ProviderCategory` | `EnumValue<ProviderCategory>` |
| `ProviderCategories` | `List<EnumValue<ProviderCategory>>` |
| `ProviderType` | `EnumValue<ProviderType>` |
| `Activated` | `bool` |
| `IsProviderActivated` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getAllRegisteredStorageProviders({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "ProviderName": "example string", "ProviderDescription": "example string", "ProviderCategory": { "Score": 1.0 }, "ProviderCategories": [], "ProviderType": { "Score": 1.0 }, "Activated": true, "IsProviderActivated": true }]
}
```

---

### `getCurrentStorageProvider`

Get's the current active storage provider.

**GET** `api/provider/get-current-storage-provider`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOASISStorageProvider`

_No fields._

**Example**

```js
const { isError, message, result } = await oasis.provider.getCurrentStorageProvider({});
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

### `getCurrentStorageProviderType`

Get's the current active storage provider type.

**GET** `api/provider/get-current-storage-provider-type`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `EnumValue<ProviderType>`

| Field | Type |
| --- | --- |
| `Score` | `double` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getCurrentStorageProviderType({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Score": 1.0 }
}
```

---

### `getProvidersThatAreAutoReplicating`

Get's the list of providers that are auto-replicating. See SetAutoReplicate methods below for more info.

**GET** `api/provider/get-providers-that-are-auto-replicating`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `EnumValue<ProviderType>` (array)

| Field | Type |
| --- | --- |
| `Score` | `double` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getProvidersThatAreAutoReplicating({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Score": 1.0 }]
}
```

---

### `getProvidersThatHaveAutoFailOverEnabled`

Get's the list of providers that have auto-failover enabled. See SetAutoFailOver methods below for more info.

**GET** `api/provider/get-providers-that-have-auto-fail-over-enabled`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `EnumValue<ProviderType>` (array)

| Field | Type |
| --- | --- |
| `Score` | `double` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getProvidersThatHaveAutoFailOverEnabled({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Score": 1.0 }]
}
```

---

### `getProvidersThatHaveAutoLoadBalanceEnabled`

Get's the list of providers that have auto-load balance enabled. See SetAutoLoadBalance methods below for more info.

**GET** `api/provider/get-providers-that-have-auto-load-balance-enabled`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `EnumValue<ProviderType>` (array)

| Field | Type |
| --- | --- |
| `Score` | `double` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getProvidersThatHaveAutoLoadBalanceEnabled({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Score": 1.0 }]
}
```

---

### `getRegisteredProvider`

Get's the provider for the given providerType. (The provider must already be registered).

**GET** `api/provider/get-registered-provider/{providerType}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOASISProvider`

| Field | Type |
| --- | --- |
| `ProviderName` | `string` |
| `ProviderDescription` | `string` |
| `ProviderCategory` | `EnumValue<ProviderCategory>` |
| `ProviderCategories` | `List<EnumValue<ProviderCategory>>` |
| `ProviderType` | `EnumValue<ProviderType>` |
| `Activated` | `bool` |
| `IsProviderActivated` | `bool` |

**Example**

```js
const { isError, message, result } = await oasis.provider.getRegisteredProvider({
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
  "result": { "ProviderName": "example string", "ProviderDescription": "example string", "ProviderCategory": { "Score": 1.0 }, "ProviderCategories": [], "ProviderType": { "Score": 1.0 }, "Activated": true, "IsProviderActivated": true }
}
```

---

### `isProviderRegistered`

Return true if the given provider has been registered, false if it has not.

**GET** `api/provider/is-provider-registered/{providerType}`

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
const { isError, message, result } = await oasis.provider.isProviderRegistered({
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

### `registerProvider`

Register the given provider.

**POST** `api/provider/register-provider/{provider}`

Route parameters:

| Field | Type |
| --- | --- |
| `provider` | `IOASISProvider` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.registerProvider({
    provider: '<provider>'
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

### `registerProviderType`

Register the given provider type.

**POST** `api/provider/register-provider-type/{providerType}`

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
const { isError, message, result } = await oasis.provider.registerProviderType({
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

### `registerProviderTypes`

Register the given provider types.

**POST** `api/provider/register-provider-types/{providerTypes}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerTypes` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOASISStorageProvider` (array)

_No fields._

**Example**

```js
const { isError, message, result } = await oasis.provider.registerProviderTypes({
    providerTypes: '<providerTypes>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{  }]
}
```

---

### `registerProviders`

Register the given providers.

**POST** `api/provider/register-providers/{providers}`

Route parameters:

| Field | Type |
| --- | --- |
| `providers` | `List<IOASISProvider>` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.registerProviders({
    providers: '<providers>'
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

### `setAndActivateCurrentStorageProvider`

Set and activate the current storage provider. If the setGlobally flag is false then this will only apply to the next request made before reverting back to the default provider. If this is set to true then it will permanently switch to the new provider for all future requests.

**POST** `api/provider/set-and-activate-current-storage-provider/{providerType}/{setGlobally}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |
| `setGlobally` | `bool` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.setAndActivateCurrentStorageProvider({
    providerType: '<providerType>',
    setGlobally: '<setGlobally>'
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

### `setAutoFailOverForAllProviders`

Enable/disable auto-failover for all providers. If this is set to true then the OASIS will automatically switch to the next provider if the current one fails. If load balancing is switched on then it will automatically switch to the next fastest provider.

**POST** `api/provider/set-auto-fail-over-for-all-providers/{addToFailOverList}`

Route parameters:

| Field | Type |
| --- | --- |
| `addToFailOverList` | `bool` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.setAutoFailOverForAllProviders({
    addToFailOverList: '<addToFailOverList>'
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

### `setAutoFailOverForListOfProviders`

Enable/disable auto-failover for providers. If this is set to true then the OASIS will automatically switch to the next provider in the list of providers passed in if the current one fails. If load balancing is switched on then it will automatically switch to the next fastest provider. The OASIS will continue to auto-fail over to the next provider in the list until this method is called again passing in false along with a list of providers to disable auto-failover. NOTE: If a provider is in the list of providers to auto-failover but is missing from the list when false is passed in, then it will continue to auto-failover.

**POST** `api/provider/set-auto-fail-over-for-list-of-providers/{addToFailOverList}/{providerTypes}`

Route parameters:

| Field | Type |
| --- | --- |
| `addToFailOverList` | `bool` |
| `providerTypes` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.setAutoFailOverForListOfProviders({
    addToFailOverList: '<addToFailOverList>',
    providerTypes: '<providerTypes>'
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

### `setAutoLoadBalanceForAllProviders`

Enable/disable auto-load balance for all providers. If this is set to true then the OASIS will automatically switch to the fastest provider within the ONODE's neighbourhood. This effectively load balances the entire internet.

**POST** `api/provider/set-auto-load-balance-for-all-providers/{addToLoadBalanceList}`

Route parameters:

| Field | Type |
| --- | --- |
| `addToLoadBalanceList` | `bool` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.setAutoLoadBalanceForAllProviders({
    addToLoadBalanceList: '<addToLoadBalanceList>'
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

### `setAutoLoadBalanceForListOfProviders`

Enable/disable auto-load balance for providers. If this is set to true then the OASIS will automatically switch to the fastest provider within the ONODE's neighbourhood. This effectively load balances the entire internet. The OASIS will continue to auto-load balance over providers in the list until this method is called again passing in false along with a list of providers to disable auto-loadbalance. NOTE: If a provider is in the list of providers to auto-loadbalance but is missing from the list when false is passed in, then it will continue to auto-loadbalance.

**POST** `api/provider/set-auto-load-balance-for-list-of-providers/{addToLoadBalanceList}/{providerTypes}`

Route parameters:

| Field | Type |
| --- | --- |
| `addToLoadBalanceList` | `bool` |
| `providerTypes` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.setAutoLoadBalanceForListOfProviders({
    addToLoadBalanceList: '<addToLoadBalanceList>',
    providerTypes: '<providerTypes>'
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

### `setAutoReplicateForAllProviders`

Enable/disable auto-replication between providers. If this is set to true then the OASIS will automatically replicate all data including the user's avatar to all available providers.

**POST** `api/provider/set-auto-replicate-for-all-providers/{autoReplicate}`

Route parameters:

| Field | Type |
| --- | --- |
| `autoReplicate` | `bool` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.setAutoReplicateForAllProviders({
    autoReplicate: '<autoReplicate>'
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

### `setAutoReplicateForListOfProviders`

Enable/disable auto-replication between providers. If this is set to true then the OASIS will automatically replicate all data including the user's avatar to the list of providers passed in. The OASIS will continue to replicate to the given providers until this method is called again passing in false along with a list of providers to disable auto-replication. NOTE: If a provider is in the list of providers to auto-replicate but is missing from the list when false is passed in, then it will continue to auto-replicate.

**POST** `api/provider/set-auto-replicate-for-list-of-providers/{autoReplicate}/{providerTypes}`

Route parameters:

| Field | Type |
| --- | --- |
| `autoReplicate` | `bool` |
| `providerTypes` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.setAutoReplicateForListOfProviders({
    autoReplicate: '<autoReplicate>',
    providerTypes: '<providerTypes>'
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

### `setProviderConfig`

Override a provider's config such as connnectionstring, etc

**POST** `api/provider/set-provider-config/{providerType}/{connectionString}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerType` | `ProviderType` |
| `connectionString` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.setProviderConfig({
    providerType: '<providerType>',
    connectionString: '<connectionString>'
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

### `unRegisterProvider`

Unregister the given provider.

**POST** `api/provider/unregister-provider/{provider}`

Route parameters:

| Field | Type |
| --- | --- |
| `provider` | `IOASISProvider` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.unRegisterProvider({
    provider: '<provider>'
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

### `unRegisterProviderType`

Unregister the given provider.

**POST** `api/provider/unregister-provider-type/{providerType}`

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
const { isError, message, result } = await oasis.provider.unRegisterProviderType({
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

### `unRegisterProviderTypes`

Unregisters the list of providers passed in.

**POST** `api/provider/unregister-provider-types/{providerTypes}`

Route parameters:

| Field | Type |
| --- | --- |
| `providerTypes` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.unRegisterProviderTypes({
    providerTypes: '<providerTypes>'
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

### `unRegisterProviders`

Unregisters the list of providers passed in.

**POST** `api/provider/unregister-providers/{providers}`

Route parameters:

| Field | Type |
| --- | --- |
| `providers` | `List<IOASISProvider>` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.provider.unRegisterProviders({
    providers: '<providers>'
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

