# Video — `oasis.video`

Source controller: [`VideoController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/VideoController.cs)
Route prefix: `api/video`
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

### `endVideoCall`

End a video call

**POST** `api/video/end-call/{callId}`

Route parameters:

| Field | Type |
| --- | --- |
| `callId` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.video.endVideoCall({
    callId: '<callId>'
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

### `joinVideoCall`

Join an existing video call

**POST** `api/video/join-call/{callId}`

Route parameters:

| Field | Type |
| --- | --- |
| `callId` | `string` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `connectionDetails` | `string (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.video.joinVideoCall({
    callId: '<callId>',
    connectionDetails: 'example string'
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

### `startVideoCall`

Start's a video call. PREVIEW - COMING SOON...

**POST** `api/video/start-video-call`

**Request**

Body type: `Guid` (array)

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.video.startVideoCall({
    callName: 'example string',
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
  "result": "example string"
}
```

