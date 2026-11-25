# Sandbox — `oasis.sandbox`

Source controller: [`SandboxController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SandboxController.cs)
Route prefix: `api/sandbox`
6 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `bringOnline` | POST | `api/sandbox/providers/{providerType}/online` | `providerType` |
| `getFaults` | GET | `api/sandbox/faults` | – |
| `getRefusals` | GET | `api/sandbox/refusals` | – |
| `seedNativeDemo` | POST | `api/sandbox/native-demo` | – |
| `startSession` | POST | `api/sandbox/session` | – |
| `takeOffline` | POST | `api/sandbox/providers/{providerType}/offline` | `providerType` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.sandbox.bringOnline({
    providerType: '<providerType>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
