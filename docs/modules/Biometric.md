# Biometric — `oasis.biometric`

Source controller: [`BiometricController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/BiometricController.cs)
Route prefix: `api/biometric`
5 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `status` | GET | `api/biometric/status` | – |
| `voiceDelete` | DELETE | `api/biometric/voice` | – |
| `voiceEnroll` | POST | `api/biometric/voice/enroll` | – |
| `voiceVerify` | POST | `api/biometric/voice/verify` | – |
| `voiceVerifyByAvatarId` | POST | `api/biometric/voice/verify/{avatarId}` | `avatarId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.biometric.status({});
if (isError) throw new Error(message);
console.log(result);
```
