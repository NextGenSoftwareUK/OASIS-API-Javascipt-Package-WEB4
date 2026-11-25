# OlandUnit — `oasis.olandUnit`

Source controller: [`OlandUnitController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/OlandUnitController.cs)
Route prefix: `api/admin/olandunit`
5 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `create` | POST | `api/admin/olandunit` | – |
| `delete` | DELETE | `api/admin/olandunit/{id}` | `id` |
| `getAll` | GET | `api/admin/olandunit/GetAll` | – |
| `getById` | GET | `api/admin/olandunit/{id}` | `id` |
| `update` | PUT | `api/admin/olandunit/{id}` | `id` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.olandUnit.create({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
