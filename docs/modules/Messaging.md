# Messaging — `oasis.messaging`

Source controller: [`MessagingController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/MessagingController.cs)
Route prefix: `api/messaging`
6 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getConversation` | GET | `api/messaging/conversation/{otherAvatarId}` | `otherAvatarId` |
| `getMessages` | GET | `api/messaging/messages` | – |
| `getNotifications` | GET | `api/messaging/notifications` | – |
| `markMessagesAsRead` | POST | `api/messaging/mark-messages-read` | – |
| `markNotificationsAsRead` | POST | `api/messaging/mark-notifications-read` | – |
| `sendMessageToAvatar` | POST | `api/messaging/send-message-to-avatar/{toAvatarId}` | `toAvatarId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.messaging.getConversation({
    otherAvatarId: '<otherAvatarId>'
  });
if (isError) throw new Error(message);
console.log(result);
```
