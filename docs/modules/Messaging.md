# Messaging — `oasis.messaging`

Source controller: [`MessagingController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/MessagingController.cs)
Route prefix: `api/messaging`
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

`result` type: `List<Message>` _(type definition not found - field list unavailable)_

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

`result` type: `List<Message>` _(type definition not found - field list unavailable)_

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

`result` type: `List<Notification>` _(type definition not found - field list unavailable)_

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

### `markMessagesAsRead`

Mark messages as read

**POST** `api/messaging/mark-messages-read`

**Request**

Body: `List<Guid>`

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

### `markNotificationsAsRead`

Mark notifications as read

**POST** `api/messaging/mark-notifications-read`

**Request**

Body: `List<Guid>`

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

