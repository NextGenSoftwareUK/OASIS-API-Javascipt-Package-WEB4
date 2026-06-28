# Subscription — `oasis.subscription`

Source controller: [`SubscriptionController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SubscriptionController.cs)
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

Body type: `QuotaCheckRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `QuotaCheckResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.subscription.checkHyperDriveQuota({
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
  "result": /* <QuotaCheckResult> */
}
```

---

### `createCheckoutSession`

**POST** `api/subscription/checkout/session`

**Request**

Body type: `CreateCheckoutSessionRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `CreateCheckoutSessionResponse` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.subscription.createCheckoutSession({
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
  "result": /* <CreateCheckoutSessionResponse> */
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

`result` type: `HyperDriveUsageDto` _(type definition not found - field list unavailable)_

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
  "result": /* <HyperDriveUsageDto> */
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

`result` type: `IEnumerable<PlanDto>` _(type definition not found - field list unavailable)_

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
  "result": [ /* <PlanDto> */ ]
}
```

---

### `getUsage`

**GET** `api/subscription/usage`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
}
```

---

### `stripeWebhook`

**POST** `api/subscription/webhooks/stripe`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

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
  "result": /* <IActionResult> */
}
```

---

### `togglePayAsYouGo`

**POST** `api/subscription/toggle-pay-as-you-go`

**Request**

Body type: `TogglePayAsYouGoRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.subscription.togglePayAsYouGo({
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

### `updateHyperDriveConfig`

Updates HyperDrive configuration based on subscription plan

**POST** `api/subscription/update-hyperdrive-config`

**Request**

Body type: `UpdateHyperDriveConfigRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.subscription.updateHyperDriveConfig({
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

