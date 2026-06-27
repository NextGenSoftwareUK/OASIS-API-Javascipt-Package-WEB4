# Map — `oasis.map`

Source controller: [`MapController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/MapController.cs)
Route prefix: `api/map`
23 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `createAndDrawRouteOnMapBetweenHolons` | POST | `api/map/CreateAndDrawRouteOnMapBetweenHolons/{holonDNA}` | `holonDNA` |
| `createAndDrawRouteOnMapBeweenPoints` | POST | `api/map/CreateAndDrawRouteOnMapBeweenPoints/{points}` | `points` |
| `draw2DSpriteOnHUD` | POST | `api/map/Draw2DSpriteOnHUD/{sprite}/{x}/{y}` | `sprite`, `x`, `y` |
| `draw2DSpriteOnMap` | POST | `api/map/Draw2DSpriteOnMap/{sprite}/{x}/{y}` | `sprite`, `x`, `y` |
| `draw3DObjectOnMap` | POST | `api/map/Draw3DObjectOnMap/{obj}/{x}/{y}` | `obj`, `x`, `y` |
| `getMapStats` | GET | `api/map/stats` | – |
| `getNearbyLocations` | GET | `api/map/nearby` | – |
| `getVisitHistory` | GET | `api/map/visit-history` | – |
| `highlightBuildingOnMap` | POST | `api/map/HighlightBuildingOnMap/{building}` | `building` |
| `pamMapDown` | POST | `api/map/PamMapDown/{value}` | `value` |
| `pamMapLeft` | POST | `api/map/PamMapLeft/{value}` | `value` |
| `pamMapRight` | POST | `api/map/PamMapRight/{value}` | `value` |
| `pamMapUp` | POST | `api/map/PamMapUp/{value}` | `value` |
| `search` | POST | `api/map/search` | – |
| `searchLocations` | GET | `api/map/search-locations` | – |
| `selectBuildingOnMap` | POST | `api/map/SelectBuildingOnMap/{building}` | `building` |
| `selectHolonOnMap` | POST | `api/map/SelectHolonOnMap/{holon}` | `holon` |
| `selectQuestOnMap` | POST | `api/map/SelectQuestOnMap/{quest}` | `quest` |
| `visitLocation` | POST | `api/map/visit/{locationId}` | `locationId` |
| `zoomMapIn` | POST | `api/map/ZoomMapIn/{value}` | `value` |
| `zoomMapOut` | POST | `api/map/ZoomMapOut/{value}` | `value` |
| `zoomToHolonOnMap` | POST | `api/map/ZoomToHolonOnMap/{holon}` | `holon` |
| `zoomToQuestOnMap` | POST | `api/map/ZoomToQuestOnMap/{quest}` | `quest` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.map.createAndDrawRouteOnMapBetweenHolons({
    holonDNA: '<holonDNA>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
