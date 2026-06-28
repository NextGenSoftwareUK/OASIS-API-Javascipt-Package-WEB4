# Seeds — `oasis.seeds`

Source controller: [`SeedsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SeedsController.cs)
Route prefix: `api/seeds`
3 operation(s).

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

### `getMySeedTransactions`

Gets all seed transactions for the current avatar.

**GET** `api/seeds/me/transactions`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IEnumerable<SeedTransaction>` (array)

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `AvatarUserName` | `string` |
| `Amount` | `int` |
| `Memo` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.seeds.getMySeedTransactions({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarUserName": "example string", "Amount": 1, "Memo": "example string" }]
}
```

---

### `getSeedTransactionsForAvatar`

Gets all seed transactions for the specified avatar.

**GET** `api/seeds/avatar/{avatarId}/transactions`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IEnumerable<SeedTransaction>` (array)

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `AvatarUserName` | `string` |
| `Amount` | `int` |
| `Memo` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.seeds.getSeedTransactionsForAvatar({
    avatarId: '<avatarId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarUserName": "example string", "Amount": 1, "Memo": "example string" }]
}
```

---

### `saveSeedTransaction`

Saves a seed transaction for an avatar.

**POST** `api/seeds/save-seed-transaction`

**Request**

Body type: `SaveSeedTransactionRequest` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `SeedTransaction`

| Field | Type |
| --- | --- |
| `AvatarId` | `Guid` |
| `AvatarUserName` | `string` |
| `Amount` | `int` |
| `Memo` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.seeds.saveSeedTransaction({
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
  "result": { "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarUserName": "example string", "Amount": 1, "Memo": "example string" }
}
```

