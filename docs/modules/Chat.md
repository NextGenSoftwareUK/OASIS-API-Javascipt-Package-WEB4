# Chat — `oasis.chat`

Source controller: [`ChatController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/ChatController.cs)
Route prefix: `api/chat`
5 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).

## Explicit JSON body parameters

- sendMessage: args.message is the JSON body value; other non-route fields are query parameters.

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
