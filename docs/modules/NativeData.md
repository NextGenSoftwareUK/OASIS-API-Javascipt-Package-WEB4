# NativeData — `oasis.nativeData`

Source controller: [`NativeDataController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/NativeDataController.cs)
Route prefix: `api/native-data`
15 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `deleteConnection` | DELETE | `api/native-data/{providerType}/connections/{name}` | `providerType`, `name` |
| `deleteMapping` | DELETE | `api/native-data/{providerType}/sources/{sourceName}/mapping` | `providerType`, `sourceName` |
| `getConnections` | GET | `api/native-data/{providerType}/connections` | `providerType` |
| `getMappings` | GET | `api/native-data/{providerType}/mappings` | `providerType` |
| `getProviders` | GET | `api/native-data/providers` | – |
| `getSources` | GET | `api/native-data/{providerType}/sources` | `providerType` |
| `import` | POST | `api/native-data/{providerType}/sources/{sourceName}/import` | `providerType`, `sourceName` |
| `importAll` | POST | `api/native-data/{providerType}/import-all` | `providerType` |
| `postSources` | POST | `api/native-data/{providerType}/sources` | `providerType` |
| `prepareVirtualMapping` | POST | `api/native-data/{providerType}/virtual-mappings/prepare` | `providerType` |
| `prepareVirtualSnapshot` | POST | `api/native-data/{providerType}/virtual-mappings/{id}/snapshot/prepare` | `providerType`, `id` |
| `preview` | POST | `api/native-data/{providerType}/sources/{sourceName}/preview` | `providerType`, `sourceName` |
| `queryVirtualMapping` | POST | `api/native-data/{providerType}/virtual-mappings/{id}/query` | `providerType`, `id` |
| `saveConnection` | PUT | `api/native-data/{providerType}/connections/{name}` | `providerType`, `name` |
| `saveMapping` | PUT | `api/native-data/{providerType}/sources/{sourceName}/mapping` | `providerType`, `sourceName` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.nativeData.deleteConnection({
    providerType: '<providerType>',
    name: '<name>'
  });
if (isError) throw new Error(message);
console.log(result);
```
