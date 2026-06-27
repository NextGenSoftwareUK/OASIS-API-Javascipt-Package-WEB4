# Eggs — `oasis.eggs`

Source controller: [`EggsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/EggsController.cs)
Route prefix: `api/eggs`
6 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `discoverEgg` | POST | `api/eggs/discover` | – |
| `getAllEggs` | GET | `api/eggs/get-all-eggs` | – |
| `getCurrentEggQuestLeaderBoard` | GET | `api/eggs/get-current-egg-quest-leader-board` | – |
| `getCurrentEggQuests` | GET | `api/eggs/get-current-egg-quests` | – |
| `getMyEggs` | GET | `api/eggs/my-eggs` | – |
| `hatchEgg` | POST | `api/eggs/hatch/{eggId}` | `eggId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.eggs.discoverEgg({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
