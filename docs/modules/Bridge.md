# Bridge — `oasis.bridge`

Source controller: [`BridgeController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/BridgeController.cs)
Route prefix: `api/v1/bridge`
7 operation(s).

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

### `checkOrderBalance`

Checks the balance and status of an existing bridge order.

**GET** `api/v1/bridge/orders/{orderId:guid}/check-balance`

Route parameters:

| Field | Type |
| --- | --- |
| `orderId` | `Guid` |

**Request**

Body type: `CancellationToken` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.bridge.checkOrderBalance({
    orderId: '<orderId>',
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

### `createOrder`

Creates a new cross-chain bridge order (token swap). Executes atomic swap with automatic rollback on failure.

**POST** `api/v1/bridge/orders`

**Request**

Body type: `CreateBridgeOrderRequest`

| Field | Type |
| --- | --- |
| `FromToken` | `string` |
| `ToToken` | `string` |
| `FromChain` | `string` |
| `ToChain` | `string` |
| `Amount` | `decimal` |
| `ExchangeRate` | `decimal` |
| `FromAddress` | `string` |
| `ToAddress` | `string` |
| `ExpiresInMinutes` | `int` |
| `UserId` | `Guid` |
| `ViewingKey` | `string` |
| `EnableViewingKeyAudit` | `bool` |
| `ProofPayload` | `string` |
| `ProofType` | `string` |
| `RequireProofVerification` | `bool` |
| `EnableMpc` | `bool` |
| `MpcSessionId` | `string` |
| `PrivacyMetadata` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.bridge.createOrder({
    cancellationToken: '<cancellationToken>',
    fromToken: "example string",
    toToken: "example string",
    fromChain: "example string",
    toChain: "example string",
    amount: 1.0,
    exchangeRate: 1.0,
    fromAddress: "example string",
    toAddress: "example string",
    expiresInMinutes: 1,
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    viewingKey: "example string",
    enableViewingKeyAudit: true,
    proofPayload: "example string",
    proofType: "example string",
    requireProofVerification: true,
    enableMpc: true,
    mpcSessionId: "example string",
    privacyMetadata: "example string"
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

### `createPrivateOrder`

Creates a private bridge order with viewing key audit and proof verification enabled.

**POST** `api/v1/bridge/orders/private`

**Request**

Body type: `CreateBridgeOrderRequest`

| Field | Type |
| --- | --- |
| `FromToken` | `string` |
| `ToToken` | `string` |
| `FromChain` | `string` |
| `ToChain` | `string` |
| `Amount` | `decimal` |
| `ExchangeRate` | `decimal` |
| `FromAddress` | `string` |
| `ToAddress` | `string` |
| `ExpiresInMinutes` | `int` |
| `UserId` | `Guid` |
| `ViewingKey` | `string` |
| `EnableViewingKeyAudit` | `bool` |
| `ProofPayload` | `string` |
| `ProofType` | `string` |
| `RequireProofVerification` | `bool` |
| `EnableMpc` | `bool` |
| `MpcSessionId` | `string` |
| `PrivacyMetadata` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.bridge.createPrivateOrder({
    cancellationToken: '<cancellationToken>',
    fromToken: "example string",
    toToken: "example string",
    fromChain: "example string",
    toChain: "example string",
    amount: 1.0,
    exchangeRate: 1.0,
    fromAddress: "example string",
    toAddress: "example string",
    expiresInMinutes: 1,
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    viewingKey: "example string",
    enableViewingKeyAudit: true,
    proofPayload: "example string",
    proofType: "example string",
    requireProofVerification: true,
    enableMpc: true,
    mpcSessionId: "example string",
    privacyMetadata: "example string"
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

### `getExchangeRate`

Gets the current exchange rate between two tokens. Optimized for low-latency real-time rate lookups.

**GET** `api/v1/bridge/exchange-rate`

**Request**

Body type: `CancellationToken` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.bridge.getExchangeRate({
    fromToken: 'example string',
    toToken: 'example string',
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

### `getSupportedNetworks`

Gets supported networks for bridge operations.

**GET** `api/v1/bridge/networks`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await oasis.bridge.getSupportedNetworks({});
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

### `recordViewingKey`

Records a viewing key for auditability/compliance.

**POST** `api/v1/bridge/viewing-keys/audit`

**Request**

Body type: `ViewingKeyAuditEntry`

| Field | Type |
| --- | --- |
| `TransactionId` | `string` |
| `ViewingKey` | `string` |
| `SourceChain` | `string` |
| `DestinationChain` | `string` |
| `DestinationAddress` | `string` |
| `UserId` | `Guid?` |
| `Timestamp` | `DateTime` |
| `Notes` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.bridge.recordViewingKey({
    cancellationToken: '<cancellationToken>',
    transactionId: "example string",
    viewingKey: "example string",
    sourceChain: "example string",
    destinationChain: "example string",
    destinationAddress: "example string",
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    timestamp: "2026-01-01T00:00:00Z",
    notes: "example string"
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

### `verifyProof`

Verifies a submitted zero-knowledge proof payload.

**POST** `api/v1/bridge/proofs/verify`

**Request**

Body type: `ProofVerificationRequest`

| Field | Type |
| --- | --- |
| `ProofPayload` | `string` |
| `ProofType` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.bridge.verifyProof({
    cancellationToken: '<cancellationToken>',
    proofPayload: "example string",
    proofType: "example string"
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

