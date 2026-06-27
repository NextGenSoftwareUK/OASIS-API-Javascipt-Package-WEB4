# Chat — `oasis.chat`

Source controller: [`ChatController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ChatController.cs)
Route prefix: `api/chat`
3 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getChatHistory` | GET | `api/chat/history/{sessionId}` | `sessionId` |
| `sendMessage` | POST | `api/chat/send-message/{sessionId}` | `sessionId` |
| `startNewChatSession` | POST | `api/chat/start-new-chat-session` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.chat.getChatHistory({
    sessionId: '<sessionId>'
  });
if (isError) throw new Error(message);
console.log(result);
```
