# Competition — `oasis.competition`

Source controller: [`CompetitionController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/CompetitionController.cs)
Route prefix: `api/competition`
9 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getActiveTournaments` | GET | `api/competition/tournaments` | – |
| `getAvailableLeagues` | GET | `api/competition/leagues/{competitionType}/{seasonType}` | `competitionType`, `seasonType` |
| `getAvatarLeague` | GET | `api/competition/league/{avatarId}/{competitionType}/{seasonType}` | `avatarId`, `competitionType`, `seasonType` |
| `getAvatarRank` | GET | `api/competition/rank/{avatarId}/{competitionType}/{seasonType}` | `avatarId`, `competitionType`, `seasonType` |
| `getLeaderboard` | GET | `api/competition/leaderboard/{competitionType}/{seasonType}` | `competitionType`, `seasonType` |
| `getMyLeague` | GET | `api/competition/my-league/{competitionType}/{seasonType}` | `competitionType`, `seasonType` |
| `getMyRank` | GET | `api/competition/my-rank/{competitionType}/{seasonType}` | `competitionType`, `seasonType` |
| `getMyStats` | GET | `api/competition/stats/{competitionType}/{seasonType}` | `competitionType`, `seasonType` |
| `joinTournament` | POST | `api/competition/tournaments/{tournamentId}/join` | `tournamentId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.competition.getActiveTournaments({});
if (isError) throw new Error(message);
console.log(result);
```
