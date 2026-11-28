# Social — `oasis.social`

Source controller: [`SocialController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SocialController.cs)
Route prefix: `api/social`
4 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).


## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getRegisteredProviders` | GET | `api/social/registered-providers` | – |
| `getSocialFeed` | GET | `api/social/social-feed` | – |
| `registerSocialProvider` | POST | `api/social/register-social-provider` | – |
| `shareHolon` | POST | `api/social/share-holon` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.social.getRegisteredProviders({});
if (isError) throw new Error(message);
console.log(result);
```
