# Messaging — `oasis.messaging`

Source controller: [`MessagingController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/MessagingController.cs)
Route prefix: `api/messaging`
18 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `addGroupMembers` | POST | `api/messaging/groups/{conversationId}/members` | `conversationId` |
| `conversations` | GET | `api/messaging/conversations` | – |
| `createGroup` | POST | `api/messaging/groups` | – |
| `getConversation` | GET | `api/messaging/conversation/{otherAvatarId}` | `otherAvatarId` |
| `getCurrentAvatarMessageSummary` | GET | `api/messaging/current-avatar/summary` | – |
| `getMessages` | GET | `api/messaging/messages` | – |
| `getNotifications` | GET | `api/messaging/notifications` | – |
| `groupMessages` | GET | `api/messaging/groups/{conversationId}/messages` | `conversationId` |
| `groups` | GET | `api/messaging/groups` | – |
| `leaveGroup` | POST | `api/messaging/groups/{conversationId}/leave` | `conversationId` |
| `markMessagesAsRead` | POST | `api/messaging/mark-messages-read` | – |
| `markMessagesDelivered` | POST | `api/messaging/mark-messages-delivered` | – |
| `markNotificationsAsRead` | POST | `api/messaging/mark-notifications-read` | – |
| `presence` | GET | `api/messaging/presence` | – |
| `realtimeTicket` | POST | `api/messaging/realtime-ticket` | – |
| `send` | POST | `api/messaging/send` | – |
| `sendMessageToAvatar` | POST | `api/messaging/send-message-to-avatar/{toAvatarId}` | `toAvatarId` |
| `sync` | GET | `api/messaging/sync` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.messaging.addGroupMembers({
    conversationId: '<conversationId>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
