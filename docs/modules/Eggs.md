# Eggs — `oasis.eggs`

Source controller: [`EggsController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/EggsController.cs)
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

Body fields:

| Field | Type |
| --- | --- |
| `eggType` | `EggType` |
| `name` | `string` |
| `locationId` | `Guid` |
| `locationName` | `string` |
| `discoveryMethod` | `EggDiscoveryMethod (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Egg`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `EggType` | `EggType` |
| `Name` | `string` |
| `Description` | `string` |
| `Rarity` | `EggRarity` |
| `DiscoveredAt` | `DateTime` |
| `Location` | `string` |
| `LocationId` | `Guid` |
| `DiscoveryMethod` | `EggDiscoveryMethod` |
| `IsDisplayed` | `bool` |
| `GalleryPosition` | `GalleryPosition` |
| `EggCategory` | `EggCategory` |
| `IsHatchable` | `bool` |
| `IsHatched` | `bool` |
| `HatchedAt` | `DateTime?` |
| `HatchedDate` | `DateTime?` |
| `DiscoveredDate` | `DateTime?` |
| `Score` | `int` |
| `UnlockedQuests` | `List<string>` |
| `UnlockedAreas` | `List<string>` |
| `AvatarUpgrades` | `List<AvatarUpgrade>` |
| `HatchedPets` | `List<Pet>` |
| `Stats` | `Dictionary<string, object>` |
| `Metadata` | `Dictionary<string, object>` |
| `Tags` | `List<string>` |

**Example**

```js
const { isError, message, result } = await oasis.eggs.discoverEgg({
    eggType: '<eggType>',
    name: 'example string',
    locationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    locationName: 'example string',
    discoveryMethod: '<discoveryMethod>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "EggType": {  }, "Name": "example string", "Description": "example string", "Rarity": {  }, "DiscoveredAt": "2026-01-01T00:00:00Z", "Location": "example string", "LocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "DiscoveryMethod": {  }, "IsDisplayed": true, "GalleryPosition": {  }, "EggCategory": {  }, "IsHatchable": true, "IsHatched": true, "HatchedAt": "2026-01-01T00:00:00Z", "HatchedDate": "2026-01-01T00:00:00Z", "DiscoveredDate": "2026-01-01T00:00:00Z", "Score": 1, "UnlockedQuests": ["example string"], "UnlockedAreas": ["example string"], "AvatarUpgrades": [{ "UpgradeType": "example string", "Value": 1, "Description": "example string", "IsPermanent": true, "ExpiresAt": "2026-01-01T00:00:00Z" }], "HatchedPets": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Species": "example string", "Element": "example string", "Level": 1, "Experience": 1, "Stats": { "<string>": 1 }, "Abilities": ["example string"], "IsActive": true, "HatchedAt": "2026-01-01T00:00:00Z", "Metadata": { "<string>": {} } }], "Stats": { "<string>": {} }, "Metadata": { "<string>": {} }, "Tags": ["example string"] }
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

`result` type: `Egg` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `EggType` | `EggType` |
| `Name` | `string` |
| `Description` | `string` |
| `Rarity` | `EggRarity` |
| `DiscoveredAt` | `DateTime` |
| `Location` | `string` |
| `LocationId` | `Guid` |
| `DiscoveryMethod` | `EggDiscoveryMethod` |
| `IsDisplayed` | `bool` |
| `GalleryPosition` | `GalleryPosition` |
| `EggCategory` | `EggCategory` |
| `IsHatchable` | `bool` |
| `IsHatched` | `bool` |
| `HatchedAt` | `DateTime?` |
| `HatchedDate` | `DateTime?` |
| `DiscoveredDate` | `DateTime?` |
| `Score` | `int` |
| `UnlockedQuests` | `List<string>` |
| `UnlockedAreas` | `List<string>` |
| `AvatarUpgrades` | `List<AvatarUpgrade>` |
| `HatchedPets` | `List<Pet>` |
| `Stats` | `Dictionary<string, object>` |
| `Metadata` | `Dictionary<string, object>` |
| `Tags` | `List<string>` |

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
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "EggType": {  }, "Name": "example string", "Description": "example string", "Rarity": {  }, "DiscoveredAt": "2026-01-01T00:00:00Z", "Location": "example string", "LocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "DiscoveryMethod": {  }, "IsDisplayed": true, "GalleryPosition": {  }, "EggCategory": {  }, "IsHatchable": true, "IsHatched": true, "HatchedAt": "2026-01-01T00:00:00Z", "HatchedDate": "2026-01-01T00:00:00Z", "DiscoveredDate": "2026-01-01T00:00:00Z", "Score": 1, "UnlockedQuests": ["example string"], "UnlockedAreas": ["example string"], "AvatarUpgrades": [{ "UpgradeType": "example string", "Value": 1, "Description": "example string", "IsPermanent": true, "ExpiresAt": "2026-01-01T00:00:00Z" }], "HatchedPets": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Species": "example string", "Element": "example string", "Level": 1, "Experience": 1, "Stats": { "<string>": 1 }, "Abilities": ["example string"], "IsActive": true, "HatchedAt": "2026-01-01T00:00:00Z", "Metadata": { "<string>": {} } }], "Stats": { "<string>": {} }, "Metadata": { "<string>": {} }, "Tags": ["example string"] }]
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

`result` type: `EggQuestLeaderboard` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `AvatarName` | `string` |
| `Score` | `int` |
| `Rank` | `int` |
| `LastUpdated` | `DateTime` |
| `Achievements` | `Dictionary<string, object>` |

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
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarName": "example string", "Score": 1, "Rank": 1, "LastUpdated": "2026-01-01T00:00:00Z", "Achievements": { "<string>": {} } }]
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

`result` type: `EggQuest` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `QuestName` | `string` |
| `Description` | `string` |
| `CreatedAt` | `DateTime` |
| `CompletedAt` | `DateTime?` |
| `IsActive` | `bool` |
| `IsCompleted` | `bool` |
| `RequiredSteps` | `int` |
| `CompletedSteps` | `int` |
| `Rewards` | `Dictionary<string, object>` |

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
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "QuestName": "example string", "Description": "example string", "CreatedAt": "2026-01-01T00:00:00Z", "CompletedAt": "2026-01-01T00:00:00Z", "IsActive": true, "IsCompleted": true, "RequiredSteps": 1, "CompletedSteps": 1, "Rewards": { "<string>": {} } }]
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

`result` type: `Egg` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `EggType` | `EggType` |
| `Name` | `string` |
| `Description` | `string` |
| `Rarity` | `EggRarity` |
| `DiscoveredAt` | `DateTime` |
| `Location` | `string` |
| `LocationId` | `Guid` |
| `DiscoveryMethod` | `EggDiscoveryMethod` |
| `IsDisplayed` | `bool` |
| `GalleryPosition` | `GalleryPosition` |
| `EggCategory` | `EggCategory` |
| `IsHatchable` | `bool` |
| `IsHatched` | `bool` |
| `HatchedAt` | `DateTime?` |
| `HatchedDate` | `DateTime?` |
| `DiscoveredDate` | `DateTime?` |
| `Score` | `int` |
| `UnlockedQuests` | `List<string>` |
| `UnlockedAreas` | `List<string>` |
| `AvatarUpgrades` | `List<AvatarUpgrade>` |
| `HatchedPets` | `List<Pet>` |
| `Stats` | `Dictionary<string, object>` |
| `Metadata` | `Dictionary<string, object>` |
| `Tags` | `List<string>` |

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
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "EggType": {  }, "Name": "example string", "Description": "example string", "Rarity": {  }, "DiscoveredAt": "2026-01-01T00:00:00Z", "Location": "example string", "LocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "DiscoveryMethod": {  }, "IsDisplayed": true, "GalleryPosition": {  }, "EggCategory": {  }, "IsHatchable": true, "IsHatched": true, "HatchedAt": "2026-01-01T00:00:00Z", "HatchedDate": "2026-01-01T00:00:00Z", "DiscoveredDate": "2026-01-01T00:00:00Z", "Score": 1, "UnlockedQuests": ["example string"], "UnlockedAreas": ["example string"], "AvatarUpgrades": [{ "UpgradeType": "example string", "Value": 1, "Description": "example string", "IsPermanent": true, "ExpiresAt": "2026-01-01T00:00:00Z" }], "HatchedPets": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Species": "example string", "Element": "example string", "Level": 1, "Experience": 1, "Stats": { "<string>": 1 }, "Abilities": ["example string"], "IsActive": true, "HatchedAt": "2026-01-01T00:00:00Z", "Metadata": { "<string>": {} } }], "Stats": { "<string>": {} }, "Metadata": { "<string>": {} }, "Tags": ["example string"] }]
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

`result` type: `Egg`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `EggType` | `EggType` |
| `Name` | `string` |
| `Description` | `string` |
| `Rarity` | `EggRarity` |
| `DiscoveredAt` | `DateTime` |
| `Location` | `string` |
| `LocationId` | `Guid` |
| `DiscoveryMethod` | `EggDiscoveryMethod` |
| `IsDisplayed` | `bool` |
| `GalleryPosition` | `GalleryPosition` |
| `EggCategory` | `EggCategory` |
| `IsHatchable` | `bool` |
| `IsHatched` | `bool` |
| `HatchedAt` | `DateTime?` |
| `HatchedDate` | `DateTime?` |
| `DiscoveredDate` | `DateTime?` |
| `Score` | `int` |
| `UnlockedQuests` | `List<string>` |
| `UnlockedAreas` | `List<string>` |
| `AvatarUpgrades` | `List<AvatarUpgrade>` |
| `HatchedPets` | `List<Pet>` |
| `Stats` | `Dictionary<string, object>` |
| `Metadata` | `Dictionary<string, object>` |
| `Tags` | `List<string>` |

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
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "EggType": {  }, "Name": "example string", "Description": "example string", "Rarity": {  }, "DiscoveredAt": "2026-01-01T00:00:00Z", "Location": "example string", "LocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "DiscoveryMethod": {  }, "IsDisplayed": true, "GalleryPosition": {  }, "EggCategory": {  }, "IsHatchable": true, "IsHatched": true, "HatchedAt": "2026-01-01T00:00:00Z", "HatchedDate": "2026-01-01T00:00:00Z", "DiscoveredDate": "2026-01-01T00:00:00Z", "Score": 1, "UnlockedQuests": ["example string"], "UnlockedAreas": ["example string"], "AvatarUpgrades": [{ "UpgradeType": "example string", "Value": 1, "Description": "example string", "IsPermanent": true, "ExpiresAt": "2026-01-01T00:00:00Z" }], "HatchedPets": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Species": "example string", "Element": "example string", "Level": 1, "Experience": 1, "Stats": { "<string>": 1 }, "Abilities": ["example string"], "IsActive": true, "HatchedAt": "2026-01-01T00:00:00Z", "Metadata": { "<string>": {} } }], "Stats": { "<string>": {} }, "Metadata": { "<string>": {} }, "Tags": ["example string"] }
}
```

