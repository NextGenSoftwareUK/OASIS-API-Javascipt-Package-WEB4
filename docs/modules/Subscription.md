# Subscription — `oasis.subscription`

Source controller: [`SubscriptionController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SubscriptionController.cs)
Route prefix: `api/subscription`
10 operation(s).

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

### `checkHyperDriveQuota`

Checks if user can perform HyperDrive operation based on quota

**POST** `api/subscription/check-hyperdrive-quota`

**Request**

Body type: `QuotaCheckRequest`

| Field | Type |
| --- | --- |
| `OperationType` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `QuotaCheckResult`

| Field | Type |
| --- | --- |
| `CanProceed` | `bool` |
| `CurrentUsage` | `int` |
| `Limit` | `int` |
| `Remaining` | `int` |
| `WouldExceedQuota` | `bool` |
| `RequiresPayAsYouGo` | `bool` |
| `EstimatedCost` | `decimal` |

**Example**

```js
const { isError, message, result } = await oasis.subscription.checkHyperDriveQuota({
    operationType: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "CanProceed": true, "CurrentUsage": 1, "Limit": 1, "Remaining": 1, "WouldExceedQuota": true, "RequiresPayAsYouGo": true, "EstimatedCost": 1.0 }
}
```

---

### `createCheckoutSession`

**POST** `api/subscription/checkout/session`

**Request**

Body type: `CreateCheckoutSessionRequest`

| Field | Type |
| --- | --- |
| `PlanId` | `string` |
| `SuccessUrl` | `string` |
| `CancelUrl` | `string` |
| `CouponCode` | `string` |
| `CustomerEmail` | `string` |
| `AvatarId` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `CreateCheckoutSessionResponse`

| Field | Type |
| --- | --- |
| `IsError` | `bool` |
| `Message` | `string` |
| `SessionId` | `string` |
| `SessionUrl` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.subscription.createCheckoutSession({
    planId: "example string",
    successUrl: "example string",
    cancelUrl: "example string",
    couponCode: "example string",
    customerEmail: "example string",
    avatarId: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "IsError": true, "Message": "example string", "SessionId": "example string", "SessionUrl": "example string" }
}
```

---

### `getHyperDriveUsage`

Gets HyperDrive usage statistics for current subscription

**GET** `api/subscription/hyperdrive-usage`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `HyperDriveUsageDto`

| Field | Type |
| --- | --- |
| `PlanType` | `string` |
| `PayAsYouGoEnabled` | `bool` |
| `CurrentUsage` | `Dictionary<string, int>` |
| `Limits` | `Dictionary<string, int>` |
| `Costs` | `Dictionary<string, decimal>` |

**Example**

```js
const { isError, message, result } = await oasis.subscription.getHyperDriveUsage({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "PlanType": "example string", "PayAsYouGoEnabled": true, "CurrentUsage": { "<string>": 1 }, "Limits": { "<string>": 1 }, "Costs": { "<string>": 1.0 } }
}
```

---

### `getMyOrders`

**GET** `api/subscription/orders/me`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await oasis.subscription.getMyOrders({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": {}
}
```

---

### `getMySubscriptions`

**GET** `api/subscription/subscriptions/me`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await oasis.subscription.getMySubscriptions({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": {}
}
```

---

### `getPlans`

**GET** `api/subscription/plans`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `PlanDto` (array)

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Name` | `string` |
| `PriceMonthly` | `decimal` |
| `Currency` | `string` |
| `Features` | `string[]` |
| `IsContactSales` | `bool` |
| `MaxRequestsPerMonth` | `int` |
| `MaxStorageGB` | `int` |
| `SupportLevel` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.subscription.getPlans({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "example string", "Name": "example string", "PriceMonthly": 1.0, "Currency": "example string", "Features": /* <string[]> */, "IsContactSales": true, "MaxRequestsPerMonth": 1, "MaxStorageGB": 1, "SupportLevel": "example string" }]
}
```

---

### `getUsage`

**GET** `api/subscription/usage`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.subscription.getUsage({});
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

### `stripeWebhook`

**POST** `api/subscription/webhooks/stripe`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.subscription.stripeWebhook({});
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

### `togglePayAsYouGo`

**POST** `api/subscription/toggle-pay-as-you-go`

**Request**

Body type: `TogglePayAsYouGoRequest`

| Field | Type |
| --- | --- |
| `Enabled` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.subscription.togglePayAsYouGo({
    enabled: true
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

### `updateHyperDriveConfig`

Updates HyperDrive configuration based on subscription plan

**POST** `api/subscription/update-hyperdrive-config`

**Request**

Body type: `UpdateHyperDriveConfigRequest`

| Field | Type |
| --- | --- |
| `PlanType` | `string` |
| `PayAsYouGoEnabled` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.subscription.updateHyperDriveConfig({
    planType: "example string",
    payAsYouGoEnabled: true
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

