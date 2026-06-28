# OLand — `oasis.oLand`

Source controller: [`OLandController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/OLandController.cs)
Route prefix: `api/oland`
7 operation(s).

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

### `deleteOlandAsync`

**POST** `api/oland/delete-oland/{olandId}`

Route parameters:

| Field | Type |
| --- | --- |
| `olandId` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IHolon`

| Field | Type |
| --- | --- |
| `CreatedOASISType` | `EnumValue<OASISType>` |
| `CreatedProviderType` | `EnumValue<ProviderType>` |
| `GlobalHolonData` | `GlobalHolonData` |
| `InstanceSavedOnProviderType` | `EnumValue<ProviderType>` |
| `IsChanged` | `bool` |
| `IsNewHolon` | `bool` |
| `IsSaving` | `bool` |
| `Original` | `IHolon` |
| `PreviousVersionId` | `Guid` |
| `PreviousVersionProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `ProviderMetaData` | `Dictionary<ProviderType, Dictionary<string, string>>` |
| `ProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `Nodes` | `IList<INode>` |
| `ParentOmniverseId` | `Guid` |
| `ParentOmniverse` | `IOmiverse` |
| `ParentMultiverseId` | `Guid` |
| `ParentMultiverse` | `IMultiverse` |
| `ParentUniverseId` | `Guid` |
| `ParentUniverse` | `IUniverse` |
| `ParentDimensionId` | `Guid` |
| `ParentDimension` | `IDimension` |
| `DimensionLevel` | `DimensionLevel` |
| `SubDimensionLevel` | `SubDimensionLevel` |
| `ParentGalaxyClusterId` | `Guid` |
| `ParentGalaxyCluster` | `IGalaxyCluster` |
| `ParentGalaxyId` | `Guid` |
| `ParentGalaxy` | `IGalaxy` |
| `ParentSolarSystemId` | `Guid` |
| `ParentSolarSystem` | `ISolarSystem` |
| `ParentGreatGrandSuperStarId` | `Guid` |
| `ParentGreatGrandSuperStar` | `IGreatGrandSuperStar` |
| `ParentGrandSuperStarId` | `Guid` |
| `ParentGrandSuperStar` | `IGrandSuperStar` |
| `ParentSuperStarId` | `Guid` |
| `ParentSuperStar` | `ISuperStar` |
| `ParentStarId` | `Guid` |
| `ParentStar` | `IStar` |
| `ParentPlanetId` | `Guid` |
| `ParentPlanet` | `IPlanet` |
| `ParentMoonId` | `Guid` |
| `ParentMoon` | `IMoon` |
| `ParentCelestialSpaceId` | `Guid` |
| `ParentCelestialSpace` | `ICelestialSpace` |
| `ParentCelestialBodyId` | `Guid` |
| `ParentCelestialBody` | `ICelestialBody` |
| `ParentZomeId` | `Guid` |
| `ParentZome` | `IZome` |

**Example**

```js
const { isError, message, result } = await oasis.oLand.deleteOlandAsync({
    olandId: '<olandId>',
    avatarId: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "CreatedOASISType": /* <EnumValue<OASISType>> */, "CreatedProviderType": /* <EnumValue<ProviderType>> */, "GlobalHolonData": {  }, "InstanceSavedOnProviderType": /* <EnumValue<ProviderType>> */, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "ProviderMetaData": /* <Dictionary<ProviderType, Dictionary<string, string>>> */, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": {}, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [{ "HoloNETClient": { "Name": "example string", "Desc": "example string", "number": 1, "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": /* <HolochainVersion> */ }, "ZomeName": "example string", "Holons": [{ "GlobalHolonData": {}, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "ProviderMetaData": /* <Dictionary<ProviderType, Dictionary<string, string>>> */, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "CreatedProviderType": /* <EnumValue<ProviderType>> */, "InstanceSavedOnProviderType": /* <EnumValue<ProviderType>> */, "CreatedOASISType": /* <EnumValue<OASISType>> */, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }] }] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }
}
```

---

### `getOlandPrice`

**GET** `api/oland/get-oland-price`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `count` | `int` |
| `couponCode` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `int`

**Example**

```js
const { isError, message, result } = await oasis.oLand.getOlandPrice({
    count: 1,
    couponCode: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": 1
}
```

---

### `loadAllOlands`

**GET** `api/oland/load-all-olands`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IEnumerable<IOLand>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.oLand.loadAllOlands({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [ /* <IOLand> */ ]
}
```

---

### `loadOlandAsync`

**GET** `api/oland/load-oland/{olandId}`

Route parameters:

| Field | Type |
| --- | --- |
| `olandId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOLand` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.oLand.loadOlandAsync({
    olandId: '<olandId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <IOLand> */
}
```

---

### `purchaseOland`

**POST** `api/oland/purchase-oland`

**Request**

Body type: `PurchaseOlandRequest`

| Field | Type |
| --- | --- |
| `OlandIds` | `List<Guid>` |
| `AvatarId` | `Guid` |
| `AvatarUsername` | `string` |
| `Tiles` | `string` |
| `WalletAddress` | `string` |
| `ProviderType` | `ProviderType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `PurchaseOlandResponse`

| Field | Type |
| --- | --- |
| `TransactionHash` | `string` |
| `OlandIds` | `List<Guid>` |
| `OLandPurchaseId` | `Guid` |

**Example**

```js
const { isError, message, result } = await oasis.oLand.purchaseOland({
    olandIds: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    avatarUsername: "example string",
    tiles: "example string",
    walletAddress: "example string",
    providerType: {  }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "TransactionHash": "example string", "OlandIds": ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], "OLandPurchaseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" }
}
```

---

### `saveOlandAsync`

**POST** `api/oland/save-oland`

**Request**

Body type: `IOLand` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.oLand.saveOlandAsync({
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
  "result": "example string"
}
```

---

### `updateOlandAsync`

**POST** `api/oland/update-oland`

**Request**

Body type: `IOLand` _(type definition not found - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.oLand.updateOlandAsync({
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
  "result": "example string"
}
```

