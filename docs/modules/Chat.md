# Chat — `oasis.chat`

Source controller: [`ChatController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ChatController.cs)
Route prefix: `api/chat`
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

### `getChatHistory`

Get chat session history

**GET** `api/chat/history/{sessionId}`

Route parameters:

| Field | Type |
| --- | --- |
| `sessionId` | `string` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `limit` | `int (optional)` |
| `offset` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<ChatMessage>` (array)

| Field | Type |
| --- | --- |
| `Role` | `string` |
| `Content` | `string` |

**Example**

```js
const { isError, message, result } = await oasis.chat.getChatHistory({
    sessionId: '<sessionId>',
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
  "result": [{ "Role": "example string", "Content": "example string" }]
}
```

---

### `sendMessage`

Send a message in a chat session

**POST** `api/chat/send-message/{sessionId}`

Route parameters:

| Field | Type |
| --- | --- |
| `sessionId` | `string` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `message` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.chat.sendMessage({
    sessionId: '<sessionId>',
    message: 'example string'
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

---

### `startNewChatSession`

Starts a new chat session. PREVIEW - COMING SOON...

**POST** `api/chat/start-new-chat-session`

**Request**

Body: `List<Guid>`

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.chat.startNewChatSession({
    sessionName: 'example string',
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

