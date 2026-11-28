# Video — `oasis.video`

Source controller: [`VideoController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/VideoController.cs)
Route prefix: `api/video`
3 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).

## Explicit JSON body parameters

- joinVideoCall: args.connectionDetails is the JSON body value; other non-route fields are query parameters.

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `endVideoCall` | POST | `api/video/end-call/{callId}` | `callId` |
| `joinVideoCall` | POST | `api/video/join-call/{callId}` | `callId` |
| `startVideoCall` | POST | `api/video/start-video-call` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.video.endVideoCall({
    callId: '<callId>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
