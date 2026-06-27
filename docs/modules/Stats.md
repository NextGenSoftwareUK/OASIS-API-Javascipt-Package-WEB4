# Stats — `oasis.stats`

Source controller: [`StatsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/StatsController.cs)
Route prefix: `api/stats`
8 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getChatStats` | GET | `api/stats/chat-stats/{avatarId}` | `avatarId` |
| `getGiftStats` | GET | `api/stats/gift-stats/{avatarId}` | `avatarId` |
| `getKarmaHistory` | GET | `api/stats/karma-history/{avatarId}` | `avatarId` |
| `getKarmaStats` | GET | `api/stats/karma-stats/{avatarId}` | `avatarId` |
| `getKeyStats` | GET | `api/stats/key-stats/{avatarId}` | `avatarId` |
| `getLeaderboardStats` | GET | `api/stats/leaderboard-stats/{avatarId}` | `avatarId` |
| `getStatsForCurrentLoggedInAvatar` | GET | `api/stats/get-stats-for-current-logged-in-avatar` | – |
| `getSystemStats` | GET | `api/stats/system-stats` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.stats.getChatStats({
    avatarId: '<avatarId>'
  });
if (isError) throw new Error(message);
console.log(result);
```
