# Messaging — `oasis.messaging`

Source controller: [`MessagingController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/MessagingController.cs)
Route prefix: `api/messaging`
18 operation(s).

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

### `addGroupMembers`

**POST** `api/messaging/groups/{conversationId}/members`

Route parameters:

| Field | Type |
| --- | --- |
| `conversationId` | `Guid` |

**Request**

Body type: `Guid` (array)

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ConversationInfo` _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.addGroupMembers({
    conversationId: '<conversationId>',
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
  "result": /* <ConversationInfo> */
}
```

---

### `conversations`

Conversation list for the current avatar, most recently active first.

**GET** `api/messaging/conversations`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ConversationSummary` (array) _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.conversations({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <ConversationSummary> */ ]
}
```

---

### `createGroup`

Creates a group conversation. The caller becomes its creator and a member.

**POST** `api/messaging/groups`

**Request**

Body type: `CreateGroupRequest` _(type definition not found in the OASIS source - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ConversationInfo` _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.createGroup({
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
  "result": /* <ConversationInfo> */
}
```

---

### `getConversation`

Get conversation between current avatar and another avatar

**GET** `api/messaging/conversation/{otherAvatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `otherAvatarId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `limit` | `int (optional)` |
| `offset` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Message` (array) _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.getConversation({
    otherAvatarId: '<otherAvatarId>',
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
  "result": [ /* <Message> */ ]
}
```

---

### `getCurrentAvatarMessageSummary`

Get total messages and unread received messages for the authenticated avatar.

**GET** `api/messaging/current-avatar/summary`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `MessageSummary` _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.getCurrentAvatarMessageSummary({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <MessageSummary> */
}
```

---

### `getMessages`

Get messages for the current avatar

**GET** `api/messaging/messages`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `limit` | `int (optional)` |
| `offset` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Message` (array) _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.getMessages({
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
  "result": [ /* <Message> */ ]
}
```

---

### `getNotifications`

Get notifications for the current avatar

**GET** `api/messaging/notifications`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `limit` | `int (optional)` |
| `offset` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Notification` (array) _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.getNotifications({
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
  "result": [ /* <Notification> */ ]
}
```

---

### `groupMessages`

**GET** `api/messaging/groups/{conversationId}/messages`

Route parameters:

| Field | Type |
| --- | --- |
| `conversationId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `limit` | `int (optional)` |
| `offset` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Message` (array) _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.groupMessages({
    conversationId: '<conversationId>',
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
  "result": [ /* <Message> */ ]
}
```

---

### `groups`

**GET** `api/messaging/groups`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ConversationInfo` (array) _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.groups({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <ConversationInfo> */ ]
}
```

---

### `leaveGroup`

**POST** `api/messaging/groups/{conversationId}/leave`

Route parameters:

| Field | Type |
| --- | --- |
| `conversationId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.messaging.leaveGroup({
    conversationId: '<conversationId>'
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

### `markMessagesAsRead`

Mark messages as read

**POST** `api/messaging/mark-messages-read`

**Request**

Body type: `Guid` (array)

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.messaging.markMessagesAsRead({
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

---

### `markMessagesDelivered`

Marks messages addressed to the current avatar as delivered.

**POST** `api/messaging/mark-messages-delivered`

**Request**

Body type: `Guid` (array)

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.messaging.markMessagesDelivered({
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

---

### `markNotificationsAsRead`

Mark notifications as read

**POST** `api/messaging/mark-notifications-read`

**Request**

Body type: `Guid` (array)

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.messaging.markNotificationsAsRead({
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

---

### `presence`

Which of the given avatars currently have a live connection to this server instance.

**GET** `api/messaging/presence`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `avatarIds` | `List<Guid>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<Guid, bool>` - a key/value map keyed by `Guid`, each value a `bool`.

**Example**

```js
const { isError, message, result } = await oasis.messaging.presence({
    avatarIds: '<avatarIds>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "<Guid>": true }
}
```

---

### `realtimeTicket`

Issues a single-use, 30-second ticket for connecting to <c>/ws/messaging?ticket=...</c>.

**POST** `api/messaging/realtime-ticket`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.messaging.realtimeTicket({});
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

### `send`

Idempotent send. The client supplies the message id, so an offline outbox can safely retry.

**POST** `api/messaging/send`

**Request**

Body type: `SendMessageRequest` _(type definition not found in the OASIS source - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Message` _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.send({
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
  "result": /* <Message> */
}
```

---

### `sendMessageToAvatar`

Send's a message to the given avatar

**POST** `api/messaging/send-message-to-avatar/{toAvatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `toAvatarId` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `content` | `string` |
| `messageType` | `MessagingType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.messaging.sendMessageToAvatar({
    toAvatarId: '<toAvatarId>',
    content: 'example string',
    messageType: '<messageType>'
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

### `sync`

Cursor sync: messages received after <paramref name="since"/> (UTC), oldest first. Pass the returned nextCursor back as since while hasMore is true.

**GET** `api/messaging/sync`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `since` | `DateTime? (optional)` |
| `limit` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `MessageSyncPage` _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.messaging.sync({
    since: '<since>',
    limit: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <MessageSyncPage> */
}
```

