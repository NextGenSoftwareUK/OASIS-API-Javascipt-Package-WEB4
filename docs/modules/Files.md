# Files — `oasis.files`

Source controller: [`FilesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/FilesController.cs)
Route prefix: `api/files`
6 operation(s).

Every method takes a single args object: any key matching a `{token}` in the route is substituted into the URL; everything else becomes the query string (GET/DELETE) or JSON body (POST/PUT). Every call resolves to the standard OASIS envelope:

```ts
{
  isError: boolean;
  isWarning: boolean;
  message: string;
  errorCode?: string;
  result: T; // see each endpoint's Response section below
}
```

## Operations

### `deleteFile`

Delete a file by ID.

**DELETE** `api/files/delete-file/{fileId}`

Route parameters:

| Field | Type |
| --- | --- |
| `fileId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.files.deleteFile({
    fileId: '<fileId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `downloadFile`

Download a file by ID.

**GET** `api/files/download-file/{fileId}`

Route parameters:

| Field | Type |
| --- | --- |
| `fileId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `FileDownload`

| Field | Type |
| --- | --- |
| `FileName` | `string` |
| `ContentType` | `string` |
| `Data` | `byte[]` |
| `Size` | `long` |

**Example**

```js
const { isError, message, result } = await oasis.files.downloadFile({
    fileId: '<fileId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "FileName": "example string", "ContentType": "example string", "Data": "<base64-bytes>", "Size": 1 }
}
```

---

### `getAllFilesStoredForCurrentLoggedInAvatar`

Get all files stored for the currently logged in avatar.

**GET** `api/files/get-all-files-stored-for-current-logged-in-avatar`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `StoredFile` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `FileName` | `string` |
| `ContentType` | `string` |
| `Size` | `long` |
| `UploadedAt` | `DateTime` |
| `ModifiedAt` | `DateTime?` |
| `Metadata` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.files.getAllFilesStoredForCurrentLoggedInAvatar({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FileName": "example string", "ContentType": "example string", "Size": 1, "UploadedAt": "2026-01-01T00:00:00Z", "ModifiedAt": "2026-01-01T00:00:00Z", "Metadata": { "<string>": {} } }]
}
```

---

### `getFileMetadata`

Get file metadata by ID.

**GET** `api/files/file-metadata/{fileId}`

Route parameters:

| Field | Type |
| --- | --- |
| `fileId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `StoredFile`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `FileName` | `string` |
| `ContentType` | `string` |
| `Size` | `long` |
| `UploadedAt` | `DateTime` |
| `ModifiedAt` | `DateTime?` |
| `Metadata` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.files.getFileMetadata({
    fileId: '<fileId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FileName": "example string", "ContentType": "example string", "Size": 1, "UploadedAt": "2026-01-01T00:00:00Z", "ModifiedAt": "2026-01-01T00:00:00Z", "Metadata": { "<string>": {} } }
}
```

---

### `updateFileMetadata`

Update file metadata.

**PUT** `api/files/update-file-metadata/{fileId}`

Route parameters:

| Field | Type |
| --- | --- |
| `fileId` | `Guid` |

**Request**

Body type: `Dictionary<string, object>` - a key/value map keyed by `string`, each value a `object`.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.files.updateFileMetadata({
    fileId: '<fileId>',
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `uploadFile`

Upload a file for the current avatar.

**POST** `api/files/upload-file`

**Request**

Body type: `byte[]`

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `StoredFile`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `FileName` | `string` |
| `ContentType` | `string` |
| `Size` | `long` |
| `UploadedAt` | `DateTime` |
| `ModifiedAt` | `DateTime?` |
| `Metadata` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.files.uploadFile({
    fileName: 'example string',
    contentType: 'example string',
    metadata: '<metadata>',
    /* ...request body fields */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FileName": "example string", "ContentType": "example string", "Size": 1, "UploadedAt": "2026-01-01T00:00:00Z", "ModifiedAt": "2026-01-01T00:00:00Z", "Metadata": { "<string>": {} } }
}
```

