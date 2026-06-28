# Gifts — `oasis.gifts`

Source controller: [`GiftsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/GiftsController.cs)
Route prefix: `api/gifts`
6 operation(s).

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

### `getGiftHistory`

Get gift history for the current avatar

**GET** `api/gifts/history`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `limit` | `int (optional)` |
| `offset` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<GiftTransaction>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.gifts.getGiftHistory({
    limit: 1,
    offset: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <GiftTransaction> */ ]
}
```

---

### `getGiftStats`

Get gift statistics for the current avatar

**GET** `api/gifts/stats`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.gifts.getGiftStats({});
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

### `getMyGifts`

Get all gifts for the current avatar

**GET** `api/gifts/my-gifts`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<Gift>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.gifts.getMyGifts({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <Gift> */ ]
}
```

---

### `openGift`

Open a received gift

**POST** `api/gifts/open-gift/{giftId}`

Route parameters:

| Field | Type |
| --- | --- |
| `giftId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.gifts.openGift({
    giftId: '<giftId>'
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

### `receiveGift`

Receive a gift

**POST** `api/gifts/receive-gift/{giftId}`

Route parameters:

| Field | Type |
| --- | --- |
| `giftId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.gifts.receiveGift({
    giftId: '<giftId>'
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

### `sendGift`

Send a gift to another avatar

**POST** `api/gifts/send-gift/{toAvatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `toAvatarId` | `Guid` |

**Request**

Body type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Gift` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.gifts.sendGift({
    toAvatarId: '<toAvatarId>',
    giftType: '<giftType>',
    message: 'example string',
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
  "result": /* <Gift> */
}
```

