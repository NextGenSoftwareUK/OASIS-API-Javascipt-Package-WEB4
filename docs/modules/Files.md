# Files — `oasis.files`

Source controller: [`FilesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/FilesController.cs)
Route prefix: `api/files`
6 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `deleteFile` | DELETE | `api/files/delete-file/{fileId}` | `fileId` |
| `downloadFile` | GET | `api/files/download-file/{fileId}` | `fileId` |
| `getAllFilesStoredForCurrentLoggedInAvatar` | GET | `api/files/get-all-files-stored-for-current-logged-in-avatar` | – |
| `getFileMetadata` | GET | `api/files/file-metadata/{fileId}` | `fileId` |
| `updateFileMetadata` | PUT | `api/files/update-file-metadata/{fileId}` | `fileId` |
| `uploadFile` | POST | `api/files/upload-file` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.files.deleteFile({
    fileId: '<fileId>'
  });
if (isError) throw new Error(message);
console.log(result);
```
