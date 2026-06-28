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

`result` type: `FileDownload` _(type definition not found - field list unavailable)_

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
  "result": /* <FileDownload> */
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

`result` type: `List<StoredFile>` _(type definition not found - field list unavailable)_

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
  "result": [ /* <StoredFile> */ ]
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

`result` type: `StoredFile` _(type definition not found - field list unavailable)_

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
  "result": /* <StoredFile> */
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

Body type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

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

Body: `byte[]`

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `StoredFile` _(type definition not found - field list unavailable)_

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
  "result": /* <StoredFile> */
}
```

