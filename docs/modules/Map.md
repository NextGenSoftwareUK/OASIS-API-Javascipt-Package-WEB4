# Map — `oasis.map`

Source controller: [`MapController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/MapController.cs)
Route prefix: `api/map`
22 operation(s).

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

### `createAndDrawRouteOnMapBetweenHolons`

Create and draw a route on the map between two holons.

**POST** `api/map/CreateAndDrawRouteOnMapBetweenHolons/{holonDNA}`

Route parameters:

| Field | Type |
| --- | --- |
| `holonDNA` | `HolonDNA` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.createAndDrawRouteOnMapBetweenHolons({
    holonDNA: '<holonDNA>'
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

### `createAndDrawRouteOnMapBeweenPoints`

Create and draw a route on the map between two points.

**POST** `api/map/CreateAndDrawRouteOnMapBeweenPoints/{points}`

Route parameters:

| Field | Type |
| --- | --- |
| `points` | `MapPoints` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.createAndDrawRouteOnMapBeweenPoints({
    points: '<points>'
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

### `draw2DSpriteOnHUD`

Draw a 2D sprint on the Our World HUD.

**POST** `api/map/Draw2DSpriteOnHUD/{sprite}/{x}/{y}`

Route parameters:

| Field | Type |
| --- | --- |
| `sprite` | `string` |
| `x` | `float` |
| `y` | `float` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.draw2DSpriteOnHUD({
    sprite: '<sprite>',
    x: '<x>',
    y: '<y>'
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

### `draw2DSpriteOnMap`

Draw a 2D sprint on the map.

**POST** `api/map/Draw2DSpriteOnMap/{sprite}/{x}/{y}`

Route parameters:

| Field | Type |
| --- | --- |
| `sprite` | `string` |
| `x` | `float` |
| `y` | `float` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.draw2DSpriteOnMap({
    sprite: '<sprite>',
    x: '<x>',
    y: '<y>'
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

### `draw3DObjectOnMap`

Draw a 3D object on the map.

**POST** `api/map/Draw3DObjectOnMap/{obj}/{x}/{y}`

Route parameters:

| Field | Type |
| --- | --- |
| `obj` | `string` |
| `x` | `float` |
| `y` | `float` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.draw3DObjectOnMap({
    obj: '<obj>',
    x: '<x>',
    y: '<y>'
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

### `getMapStats`

Get map statistics for the current avatar

**GET** `api/map/stats`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` - a key/value map keyed by `string`, each value a `object`.

**Example**

```js
const { isError, message, result } = await oasis.map.getMapStats({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "<string>": {} }
}
```

---

### `getNearbyLocations`

Get nearby locations for the current avatar

**GET** `api/map/nearby`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `latitude` | `double` |
| `longitude` | `double` |
| `radiusKm` | `double (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `MapLocation` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Name` | `string` |
| `Description` | `string` |
| `Latitude` | `double` |
| `Longitude` | `double` |
| `Type` | `LocationType` |
| `IsActive` | `bool` |
| `Metadata` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.map.getNearbyLocations({
    latitude: 1.0,
    longitude: 1.0,
    radiusKm: 1.0
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "Latitude": 1.0, "Longitude": 1.0, "Type": {  }, "IsActive": true, "Metadata": { "<string>": {} } }]
}
```

---

### `getVisitHistory`

Get visit history for the current avatar

**GET** `api/map/visit-history`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `limit` | `int (optional)` |
| `offset` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `MapVisit` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `LocationId` | `Guid` |
| `Purpose` | `string` |
| `VisitedAt` | `DateTime` |

**Example**

```js
const { isError, message, result } = await oasis.map.getVisitHistory({
    limit: 1,
    offset: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "LocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Purpose": "example string", "VisitedAt": "2026-01-01T00:00:00Z" }]
}
```

---

### `highlightBuildingOnMap`

Highlight a building on the map.

**POST** `api/map/HighlightBuildingOnMap/{building}`

Route parameters:

| Field | Type |
| --- | --- |
| `building` | `Building` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.highlightBuildingOnMap({
    building: '<building>'
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

### `pamMapDown`

Pam the map down.

**POST** `api/map/PamMapDown/{value}`

Route parameters:

| Field | Type |
| --- | --- |
| `value` | `float` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.pamMapDown({
    value: '<value>'
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

### `pamMapLeft`

Pam the map left.

**POST** `api/map/PamMapLeft/{value}`

Route parameters:

| Field | Type |
| --- | --- |
| `value` | `float` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.pamMapLeft({
    value: '<value>'
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

### `pamMapRight`

Pam the map right.

**POST** `api/map/PamMapRight/{value}`

Route parameters:

| Field | Type |
| --- | --- |
| `value` | `float` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.pamMapRight({
    value: '<value>'
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

### `pamMapUp`

Pam the map up.

**POST** `api/map/PamMapUp/{value}`

Route parameters:

| Field | Type |
| --- | --- |
| `value` | `float` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.pamMapUp({
    value: '<value>'
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

### `search`

Search the map for locations, points of interest, and other map features

**POST** `api/map/search`

**Request**

Body type: `LocationType`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `MapLocation` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Name` | `string` |
| `Description` | `string` |
| `Latitude` | `double` |
| `Longitude` | `double` |
| `Type` | `LocationType` |
| `IsActive` | `bool` |
| `Metadata` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.map.search({
    query: 'example string',
    latitude: '<latitude>',
    longitude: '<longitude>',
    radiusKm: '<radiusKm>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "Latitude": 1.0, "Longitude": 1.0, "Type": {  }, "IsActive": true, "Metadata": { "<string>": {} } }]
}
```

---

### `selectBuildingOnMap`

Select building on map.

**POST** `api/map/SelectBuildingOnMap/{building}`

Route parameters:

| Field | Type |
| --- | --- |
| `building` | `Building` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.selectBuildingOnMap({
    building: '<building>'
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

### `selectHolonOnMap`

Select holon on map.

**POST** `api/map/SelectHolonOnMap/{holon}`

Route parameters:

| Field | Type |
| --- | --- |
| `holon` | `Holon` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.selectHolonOnMap({
    holon: '<holon>'
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

### `selectQuestOnMap`

Select quest on map.

**POST** `api/map/SelectQuestOnMap/{quest}`

Route parameters:

| Field | Type |
| --- | --- |
| `quest` | `Quest` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.selectQuestOnMap({
    quest: '<quest>'
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

### `visitLocation`

Visit a location

**POST** `api/map/visit/{locationId}`

Route parameters:

| Field | Type |
| --- | --- |
| `locationId` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `purpose` | `string (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.visitLocation({
    locationId: '<locationId>',
    purpose: 'example string'
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

### `zoomMapIn`

Zoom map in.

**POST** `api/map/ZoomMapIn/{value}`

Route parameters:

| Field | Type |
| --- | --- |
| `value` | `float` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.zoomMapIn({
    value: '<value>'
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

### `zoomMapOut`

Zoom map out.

**POST** `api/map/ZoomMapOut/{value}`

Route parameters:

| Field | Type |
| --- | --- |
| `value` | `float` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.zoomMapOut({
    value: '<value>'
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

### `zoomToHolonOnMap`

Zoom to holon on map.

**POST** `api/map/ZoomToHolonOnMap/{holon}`

Route parameters:

| Field | Type |
| --- | --- |
| `holon` | `Holon` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.zoomToHolonOnMap({
    holon: '<holon>'
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

### `zoomToQuestOnMap`

Zoom to quest on map.

**POST** `api/map/ZoomToQuestOnMap/{quest}`

Route parameters:

| Field | Type |
| --- | --- |
| `quest` | `Quest` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.map.zoomToQuestOnMap({
    quest: '<quest>'
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

