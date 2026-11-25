# Chat — `oasis.chat`

Source controller: [`ChatController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ChatController.cs)
Route prefix: `api/chat`
5 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `endChatSession` | POST | `api/chat/end-chat-session/{sessionId}` | `sessionId` |
| `getActiveSessions` | GET | `api/chat/active-sessions` | – |
| `getChatHistory` | GET | `api/chat/history/{sessionId}` | `sessionId` |
| `sendMessage` | POST | `api/chat/send-message/{sessionId}` | `sessionId` |
| `startNewChatSession` | POST | `api/chat/start-new-chat-session` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.chat.endChatSession({
    sessionId: '<sessionId>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
