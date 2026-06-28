# Data — `oasis.data`

Source controller: [`DataController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/DataController.cs)
Route prefix: `api/data`
10 operation(s).

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

### `deleteHolon`

Delete a holon for the given id. Set SoftDelete to true if you wish this holon to be kept (can be un-deleted later) or to false to permanently delete (cannot be recovered). Pass in the provider you wish to use. Set the autoFailOverMode to 'ON' if you wish this call to work through the the providers in the auto-failover list until it succeeds. Set it to OFF if you do not or to 'DEFAULT' to default to the global OASISDNA setting. Set the autoReplicationMode to 'ON' if you wish this call to auto-replicate to the providers in the auto-replication list. Set it to OFF if you do not or to UseGlobalDefaultInOASISDNA to 'DEFAULT' to the global OASISDNA setting. Set the autoLoadBalanceMode to 'ON' if you wish this call to use the fastest provider in your area from the auto-loadbalance list. Set it to OFF if you do not or to UseGlobalDefaultInOASISDNA to 'DEFAULT' to the global OASISDNA setting. Set the waitForAutoReplicationResult flag to true if you wish for the API to wait for the auto-replication to complete before returning the results. Set the setglobally flag to false to use these settings only for this request or true for it to be used for all future requests. Set the showDetailedSettings flag to true to view detailed settings such as the list of providers in the auto-failover, auto-replication &amp; auto-load balance lists.

**DELETE** `api/data/delete-holon`

**Request**

Body type: `DeleteHolonRequest`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `SoftDelete` | `bool` |

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
const { isError, message, result } = await oasis.data.deleteHolon({
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    softDelete: true
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

### `loadAllHolons`

Load's all holons for the given HolonType. Use 'All' to load all holons. Set the loadChildren flag to true to load all the holon's child holon's. This defaults to true. If loadChildren is set to true, you can set the Recursive flag to true to load all the child's holon's recursively, or false to only load the first level of child holon's. This defaults to true. If loadChildren is set to true, you can set the maxChildDepth value to a custom int of how many levels down you wish to load, it defaults to 0, which means it will load to infinite depth. Set the continueOnError flag to true if you wish it to continue loading child holon's even if an error has occured, this defaults to true. Set the Version int to the version of the holon you wish to load (defaults to 0) which means the latest version. Pass in the provider you wish to use. Set the autoFailOverMode to 'ON' if you wish this call to work through the the providers in the auto-failover list until it succeeds. Set it to OFF if you do not or to 'DEFAULT' to default to the global OASISDNA setting. Set the autoReplicationMode to 'ON' if you wish this call to auto-replicate to the providers in the auto-replication list. Set it to OFF if you do not or to UseGlobalDefaultInOASISDNA to 'DEFAULT' to the global OASISDNA setting. Set the autoLoadBalanceMode to 'ON' if you wish this call to use the fastest provider in your area from the auto-loadbalance list. Set it to OFF if you do not or to UseGlobalDefaultInOASISDNA to 'DEFAULT' to the global OASISDNA setting. Set the waitForAutoReplicationResult flag to true if you wish for the API to wait for the auto-replication to complete before returning the results. Set the setglobally flag to false to use these settings only for this request or true for it to be used for all future requests. Set the showDetailedSettings flag to true to view detailed settings such as the list of providers in the auto-failover, auto-replication &amp; auto-load balance lists.

**POST** `api/data/load-all-holons`

**Request**

Body type: `LoadAllHolonsRequest`

| Field | Type |
| --- | --- |
| `HolonType` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IEnumerable<Holon>` (array)

| Field | Type |
| --- | --- |
| `GlobalHolonData` | `GlobalHolonData` |
| `ProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `ProviderMetaData` | `Dictionary<ProviderType, Dictionary<string, string>>` |
| `CustomKey` | `string` |
| `IsNewHolon` | `bool` |
| `IsSaving` | `bool` |
| `PreviousVersionId` | `Guid` |
| `PreviousVersionProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `CreatedProviderType` | `EnumValue<ProviderType>` |
| `InstanceSavedOnProviderType` | `EnumValue<ProviderType>` |
| `CreatedOASISType` | `EnumValue<OASISType>` |
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
const { isError, message, result } = await oasis.data.loadAllHolons({
    holonType: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "GlobalHolonData": {  }, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "ProviderMetaData": /* <Dictionary<ProviderType, Dictionary<string, string>>> */, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "CreatedProviderType": /* <EnumValue<ProviderType>> */, "InstanceSavedOnProviderType": /* <EnumValue<ProviderType>> */, "CreatedOASISType": /* <EnumValue<OASISType>> */, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": { "CreatedOASISType": /* <EnumValue<OASISType>> */, "CreatedProviderType": /* <EnumValue<ProviderType>> */, "GlobalHolonData": {}, "InstanceSavedOnProviderType": /* <EnumValue<ProviderType>> */, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "ProviderMetaData": /* <Dictionary<ProviderType, Dictionary<string, string>>> */, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [{ "HoloNETClient": { "Name": "example string", "Desc": "example string", "number": 1, "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": /* <HolochainVersion> */ }, "ZomeName": "example string", "Holons": [] }] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }]
}
```

---

### `loadData`

Loads custom data with the given key from the current logged in avatar.

**POST** `api/data/load-data`

**Request**

Body type: `LoadDataRequest`

| Field | Type |
| --- | --- |
| `Key` | `string` |
| `Provider` | `string` |
| `AvatarId` | `Guid?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `string`

**Example**

```js
const { isError, message, result } = await oasis.data.loadData({
    key: "example string",
    provider: "example string",
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
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

### `loadFile`

Loads a file with the given id.

**POST** `api/data/load-file`

**Request**

Body type: `LoadFileRequest`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Provider` | `string` |
| `AvatarId` | `Guid?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `byte[]`

**Example**

```js
const { isError, message, result } = await oasis.data.loadFile({
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    provider: "example string",
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "<base64-bytes>"
}
```

---

### `loadHolon`

Load's a holon data object for the given id. Set the loadChildren flag to true to load all the holon's child holon's. This defaults to true. If loadChildren is set to true, you can set the Recursive flag to true to load all the child's holon's recursively, or false to only load the first level of child holon's. This defaults to true. If loadChildren is set to true, you can set the maxChildDepth value to a custom int of how many levels down you wish to load, it defaults to 0, which means it will load to infinite depth. Set the continueOnError flag to true if you wish it to continue loading child holon's even if an error has occured, this defaults to true. Set the Version int to the version of the holon you wish to load (defaults to 0) which means the latest version. Pass in the provider you wish to use. Set the autoFailOverMode to 'ON' if you wish this call to work through the the providers in the auto-failover list until it succeeds. Set it to OFF if you do not or to 'DEFAULT' to default to the global OASISDNA setting. Set the autoReplicationMode to 'ON' if you wish this call to auto-replicate to the providers in the auto-replication list. Set it to OFF if you do not or to UseGlobalDefaultInOASISDNA to 'DEFAULT' to the global OASISDNA setting. Set the autoLoadBalanceMode to 'ON' if you wish this call to use the fastest provider in your area from the auto-loadbalance list. Set it to OFF if you do not or to UseGlobalDefaultInOASISDNA to 'DEFAULT' to the global OASISDNA setting. Set the waitForAutoReplicationResult flag to true if you wish for the API to wait for the auto-replication to complete before returning the results. Set the setglobally flag to false to use these settings only for this request or true for it to be used for all future requests. Set the showDetailedSettings flag to true to view detailed settings such as the list of providers in the auto-failover, auto-replication &amp; auto-load balance lists.

**POST** `api/data/load-holon`

**Request**

Body type: `LoadHolonRequest`

| Field | Type |
| --- | --- |
| `HolonId` | `Guid` |
| `PreferredProvider` | `ProviderType` |
| `RequestType` | `string` |
| `Priority` | `int` |
| `ProviderTypeString` | `string` |
| `Parameters` | `System.Collections.Generic.Dictionary<string, object>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Holon`

| Field | Type |
| --- | --- |
| `GlobalHolonData` | `GlobalHolonData` |
| `ProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `ProviderMetaData` | `Dictionary<ProviderType, Dictionary<string, string>>` |
| `CustomKey` | `string` |
| `IsNewHolon` | `bool` |
| `IsSaving` | `bool` |
| `PreviousVersionId` | `Guid` |
| `PreviousVersionProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `CreatedProviderType` | `EnumValue<ProviderType>` |
| `InstanceSavedOnProviderType` | `EnumValue<ProviderType>` |
| `CreatedOASISType` | `EnumValue<OASISType>` |
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
const { isError, message, result } = await oasis.data.loadHolon({
    holonId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    preferredProvider: {  },
    requestType: "example string",
    priority: 1,
    providerTypeString: "example string",
    parameters: /* <System.Collections.Generic.Dictionary<string, object>> */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "GlobalHolonData": {  }, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "ProviderMetaData": /* <Dictionary<ProviderType, Dictionary<string, string>>> */, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "CreatedProviderType": /* <EnumValue<ProviderType>> */, "InstanceSavedOnProviderType": /* <EnumValue<ProviderType>> */, "CreatedOASISType": /* <EnumValue<OASISType>> */, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": { "CreatedOASISType": /* <EnumValue<OASISType>> */, "CreatedProviderType": /* <EnumValue<ProviderType>> */, "GlobalHolonData": {}, "InstanceSavedOnProviderType": /* <EnumValue<ProviderType>> */, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "ProviderMetaData": /* <Dictionary<ProviderType, Dictionary<string, string>>> */, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [{ "HoloNETClient": { "Name": "example string", "Desc": "example string", "number": 1, "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": /* <HolochainVersion> */ }, "ZomeName": "example string", "Holons": [] }] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }
}
```

---

### `loadHolonsForParent`

Load's all holons for the given parent and the given HolonType. Use 'All' to load all holons. Set the loadChildren flag to true to load all the holon's child holon's. This defaults to true. If loadChildren is set to true, you can set the Recursive flag to true to load all the child's holon's recursively, or false to only load the first level of child holon's. This defaults to true. If loadChildren is set to true, you can set the maxChildDepth value to a custom int of how many levels down you wish to load, it defaults to 0, which means it will load to infinite depth. Set the continueOnError flag to true if you wish it to continue loading child holon's even if an error has occured, this defaults to true. Set the Version int to the version of the holon you wish to load (defaults to 0) which means the latest version. Pass in the provider you wish to use. Set the autoFailOverMode to 'ON' if you wish this call to work through the the providers in the auto-failover list until it succeeds. Set it to OFF if you do not or to 'DEFAULT' to default to the global OASISDNA setting. Set the autoReplicationMode to 'ON' if you wish this call to auto-replicate to the providers in the auto-replication list. Set it to OFF if you do not or to UseGlobalDefaultInOASISDNA to 'DEFAULT' to the global OASISDNA setting. Set the autoLoadBalanceMode to 'ON' if you wish this call to use the fastest provider in your area from the auto-loadbalance list. Set it to OFF if you do not or to UseGlobalDefaultInOASISDNA to 'DEFAULT' to the global OASISDNA setting. Set the waitForAutoReplicationResult flag to true if you wish for the API to wait for the auto-replication to complete before returning the results. Set the setglobally flag to false to use these settings only for this request or true for it to be used for all future requests. Set the showDetailedSettings flag to true to view detailed settings such as the list of providers in the auto-failover, auto-replication &amp; auto-load balance lists.

**POST** `api/data/load-holons-for-parent`

**Request**

Body type: `LoadHolonsForParentRequest`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `HolonType` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IEnumerable<Holon>` (array)

| Field | Type |
| --- | --- |
| `GlobalHolonData` | `GlobalHolonData` |
| `ProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `ProviderMetaData` | `Dictionary<ProviderType, Dictionary<string, string>>` |
| `CustomKey` | `string` |
| `IsNewHolon` | `bool` |
| `IsSaving` | `bool` |
| `PreviousVersionId` | `Guid` |
| `PreviousVersionProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `CreatedProviderType` | `EnumValue<ProviderType>` |
| `InstanceSavedOnProviderType` | `EnumValue<ProviderType>` |
| `CreatedOASISType` | `EnumValue<OASISType>` |
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
const { isError, message, result } = await oasis.data.loadHolonsForParent({
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    holonType: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "GlobalHolonData": {  }, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "ProviderMetaData": /* <Dictionary<ProviderType, Dictionary<string, string>>> */, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "CreatedProviderType": /* <EnumValue<ProviderType>> */, "InstanceSavedOnProviderType": /* <EnumValue<ProviderType>> */, "CreatedOASISType": /* <EnumValue<OASISType>> */, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": { "CreatedOASISType": /* <EnumValue<OASISType>> */, "CreatedProviderType": /* <EnumValue<ProviderType>> */, "GlobalHolonData": {}, "InstanceSavedOnProviderType": /* <EnumValue<ProviderType>> */, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "ProviderMetaData": /* <Dictionary<ProviderType, Dictionary<string, string>>> */, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [{ "HoloNETClient": { "Name": "example string", "Desc": "example string", "number": 1, "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": /* <HolochainVersion> */ }, "ZomeName": "example string", "Holons": [] }] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }]
}
```

---

### `saveData`

Saves custom data with a given key to the current logged in avatar.

**POST** `api/data/save-data`

**Request**

Body type: `SaveDataRequest`

| Field | Type |
| --- | --- |
| `Value` | `string` |
| `Key` | `string` |
| `AvatarId` | `Guid?` |
| `Provider` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.data.saveData({
    value: "example string",
    key: "example string",
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    provider: "example string"
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

### `saveFile`

Saves a file and returns the id linked to the holon that it is stored in.

**POST** `api/data/save-file`

**Request**

Body type: `SaveFileRequest`

| Field | Type |
| --- | --- |
| `Data` | `byte[]` |
| `FileName` | `string` |
| `FileExtension` | `string` |
| `MimeType` | `string` |
| `AvatarId` | `Guid?` |
| `Provider` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Guid`

**Example**

```js
const { isError, message, result } = await oasis.data.saveFile({
    data: "<base64-bytes>",
    fileName: "example string",
    fileExtension: "example string",
    mimeType: "example string",
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    provider: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

---

### `saveHolon`

Save's a holon data object. Set the saveChildren flag to true to save all the holon's child holon's. This defaults to true. If saveChildren is set to true, you can set the Recursive flag to true to save all the child's holon's recursively, or false to only save the first level of child holon's. This defaults to true. If saveChildren is set to true, you can set the maxChildDepth value to a custom int of how many levels down you wish to save, it defaults to 0, which means it will save to infinite depth. Set the continueOnError flag to true if you wish it to continue saving child holon's even if an error has occured, this defaults to true. Pass in the provider you wish to use. Set the autoFailOverMode to 'ON' if you wish this call to work through the the providers in the auto-failover list until it succeeds. Set it to OFF if you do not or to 'DEFAULT' to default to the global OASISDNA setting. Set the autoReplicationMode to 'ON' if you wish this call to auto-replicate to the providers in the auto-replication list. Set it to OFF if you do not or to UseGlobalDefaultInOASISDNA to 'DEFAULT' to the global OASISDNA setting. Set the autoLoadBalanceMode to 'ON' if you wish this call to use the fastest provider in your area from the auto-loadbalance list. Set it to OFF if you do not or to UseGlobalDefaultInOASISDNA to 'DEFAULT' to the global OASISDNA setting. Set the waitForAutoReplicationResult flag to true if you wish for the API to wait for the auto-replication to complete before returning the results. Set the setglobally flag to false to use these settings only for this request or true for it to be used for all future requests. Set the showDetailedSettings flag to true to view detailed settings such as the list of providers in the auto-failover, auto-replication &amp; auto-load balance lists.

**POST** `api/data/save-holon`

**Request**

Body type: `SaveHolonRequest`

| Field | Type |
| --- | --- |
| `HolonId` | `Guid` |
| `Holon` | `object` |
| `PreferredProvider` | `ProviderType` |
| `RequestType` | `string` |
| `Priority` | `int` |
| `ProviderTypeString` | `string` |
| `Parameters` | `System.Collections.Generic.Dictionary<string, object>` |

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
const { isError, message, result } = await oasis.data.saveHolon({
    holonId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    holon: {},
    preferredProvider: {  },
    requestType: "example string",
    priority: 1,
    providerTypeString: "example string",
    parameters: /* <System.Collections.Generic.Dictionary<string, object>> */
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

### `saveHolonOffChain`

Save's a holon data object (meta data) to the given off-chain provider and then links its hash to the on-chain provider. Set the showDetailedSettings flag to true to view detailed settings such as the list of providers in the auto-failover, auto-replication &amp; auto-load balance lists.

**POST** `api/data/save-holon-off-chain`

**Request**

Body type: `SaveHolonRequest`

| Field | Type |
| --- | --- |
| `HolonId` | `Guid` |
| `Holon` | `object` |
| `PreferredProvider` | `ProviderType` |
| `RequestType` | `string` |
| `Priority` | `int` |
| `ProviderTypeString` | `string` |
| `Parameters` | `System.Collections.Generic.Dictionary<string, object>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Holon`

| Field | Type |
| --- | --- |
| `GlobalHolonData` | `GlobalHolonData` |
| `ProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `ProviderMetaData` | `Dictionary<ProviderType, Dictionary<string, string>>` |
| `CustomKey` | `string` |
| `IsNewHolon` | `bool` |
| `IsSaving` | `bool` |
| `PreviousVersionId` | `Guid` |
| `PreviousVersionProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `CreatedProviderType` | `EnumValue<ProviderType>` |
| `InstanceSavedOnProviderType` | `EnumValue<ProviderType>` |
| `CreatedOASISType` | `EnumValue<OASISType>` |
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
const { isError, message, result } = await oasis.data.saveHolonOffChain({
    holonId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    holon: {},
    preferredProvider: {  },
    requestType: "example string",
    priority: 1,
    providerTypeString: "example string",
    parameters: /* <System.Collections.Generic.Dictionary<string, object>> */
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "GlobalHolonData": {  }, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "ProviderMetaData": /* <Dictionary<ProviderType, Dictionary<string, string>>> */, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "CreatedProviderType": /* <EnumValue<ProviderType>> */, "InstanceSavedOnProviderType": /* <EnumValue<ProviderType>> */, "CreatedOASISType": /* <EnumValue<OASISType>> */, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": { "CreatedOASISType": /* <EnumValue<OASISType>> */, "CreatedProviderType": /* <EnumValue<ProviderType>> */, "GlobalHolonData": {}, "InstanceSavedOnProviderType": /* <EnumValue<ProviderType>> */, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "ProviderMetaData": /* <Dictionary<ProviderType, Dictionary<string, string>>> */, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [{ "HoloNETClient": { "Name": "example string", "Desc": "example string", "number": 1, "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": /* <HolochainVersion> */ }, "ZomeName": "example string", "Holons": [] }] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": /* <Dictionary<ProviderType, string>> */, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }
}
```

