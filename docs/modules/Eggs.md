# Eggs — `oasis.eggs`

Source controller: [`EggsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/EggsController.cs)
Route prefix: `api/eggs`
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

### `discoverEgg`

Discover a new egg

**POST** `api/eggs/discover`

**Request**

Body type: `EggDiscoveryMethod`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Egg` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.eggs.discoverEgg({
    eggType: '<eggType>',
    name: 'example string',
    locationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    locationName: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Egg> */
}
```

---

### `getAllEggs`

Get's all eggs currently hidden in the OASIS

**GET** `api/eggs/get-all-eggs`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<Egg>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.eggs.getAllEggs({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <Egg> */ ]
}
```

---

### `getCurrentEggQuestLeaderBoard`

Get's the current egg quest leaderboard

**GET** `api/eggs/get-current-egg-quest-leader-board`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<EggQuestLeaderboard>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.eggs.getCurrentEggQuestLeaderBoard({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <EggQuestLeaderboard> */ ]
}
```

---

### `getCurrentEggQuests`

Get's the current egg quests

**GET** `api/eggs/get-current-egg-quests`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<EggQuest>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.eggs.getCurrentEggQuests({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <EggQuest> */ ]
}
```

---

### `getMyEggs`

Get eggs for the current avatar

**GET** `api/eggs/my-eggs`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<Egg>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.eggs.getMyEggs({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <Egg> */ ]
}
```

---

### `hatchEgg`

Hatch an egg

**POST** `api/eggs/hatch/{eggId}`

Route parameters:

| Field | Type |
| --- | --- |
| `eggId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Egg` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.eggs.hatchEgg({
    eggId: '<eggId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Egg> */
}
```

