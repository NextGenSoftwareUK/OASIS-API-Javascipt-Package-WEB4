# Karma — `oasis.karma`

Source controller: [`KarmaController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/KarmaController.cs)
Route prefix: `api/karma`
27 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `addKarmaToAvatar` | POST | `api/karma/add-karma-to-avatar/{avatarId}` | `avatarId` |
| `addKarmaToAvatarByAvatarIdProviderType` | POST | `api/karma/add-karma-to-avatar/{avatarId}/{providerType}/{setGlobally}` | `avatarId`, `providerType`, `setGlobally` |
| `getActivityFeed` | GET | `api/karma/activity` | – |
| `getKarmaAkashicRecordsForAvatar` | GET | `api/karma/get-karma-akashic-records-for-avatar/{avatarId}` | `avatarId` |
| `getKarmaAkashicRecordsForAvatarByAvatarIdProviderType` | GET | `api/karma/get-karma-akashic-records-for-avatar/{avatarId}/{providerType}/{setGlobally}` | `avatarId`, `providerType`, `setGlobally` |
| `getKarmaForAvatar` | GET | `api/karma/get-karma-for-avatar/{avatarId}` | `avatarId` |
| `getKarmaForAvatarByAvatarIdProviderType` | GET | `api/karma/get-karma-for-avatar/{avatarId}/{providerType}/{setGlobally}` | `avatarId`, `providerType`, `setGlobally` |
| `getKarmaHistory` | GET | `api/karma/get-karma-history/{avatarId}` | `avatarId` |
| `getKarmaHistoryByAvatarIdProviderType` | GET | `api/karma/get-karma-history/{avatarId}/{providerType}/{setGlobally}` | `avatarId`, `providerType`, `setGlobally` |
| `getKarmaStats` | GET | `api/karma/get-karma-stats/{avatarId}` | `avatarId` |
| `getKarmaStatsByAvatarIdProviderType` | GET | `api/karma/get-karma-stats/{avatarId}/{providerType}/{setGlobally}` | `avatarId`, `providerType`, `setGlobally` |
| `getLevelThresholds` | GET | `api/karma/get-level-thresholds` | – |
| `getNegativeKarmaWeighting` | GET | `api/karma/get-negative-karma-weighting/{karmaType}` | `karmaType` |
| `getNegativeKarmaWeightingByKarmaTypeProviderType` | GET | `api/karma/get-negative-karma-weighting/{karmaType}/{providerType}/{setGlobally}` | `karmaType`, `providerType`, `setGlobally` |
| `getPositiveKarmaWeighting` | GET | `api/karma/get-positive-karma-weighting/{karmaType}` | `karmaType` |
| `getPositiveKarmaWeightingByKarmaTypeProviderType` | GET | `api/karma/get-positive-karma-weighting/{karmaType}/{providerType}/{setGlobally}` | `karmaType`, `providerType`, `setGlobally` |
| `getWeightings` | GET | `api/karma/weightings` | – |
| `removeKarmaFromAvatar` | POST | `api/karma/remove-karma-from-avatar/{avatarId}` | `avatarId` |
| `removeKarmaFromAvatarByAvatarIdProviderType` | POST | `api/karma/remove-karma-from-avatar/{avatarId}/{providerType}/{setGlobally}` | `avatarId`, `providerType`, `setGlobally` |
| `setNegativeKarmaWeighting` | POST | `api/karma/set-negative-karma-weighting/{karmaType}/{weighting}` | `karmaType`, `weighting` |
| `setNegativeKarmaWeightingByKarmaTypeWeighting` | POST | `api/karma/set-negative-karma-weighting/{karmaType}/{weighting}/{providerType}/{setGlobally}` | `karmaType`, `weighting`, `providerType`, `setGlobally` |
| `setPositiveKarmaWeighting` | POST | `api/karma/set-positive-karma-weighting/{karmaType}/{weighting}` | `karmaType`, `weighting` |
| `setPositiveKarmaWeightingByKarmaTypeWeighting` | POST | `api/karma/set-positive-karma-weighting/{karmaType}/{weighting}/{providerType}/{setGlobally}` | `karmaType`, `weighting`, `providerType`, `setGlobally` |
| `voteForNegativeKarmaWeighting` | POST | `api/karma/vote-for-negative-karma-weighting/{karmaType}/{weighting}` | `karmaType`, `weighting` |
| `voteForNegativeKarmaWeightingByKarmaTypeWeighting` | POST | `api/karma/vote-for-negative-karma-weighting/{karmaType}/{weighting}/{providerType}/{setGlobally}` | `karmaType`, `weighting`, `providerType`, `setGlobally` |
| `voteForPositiveKarmaWeighting` | POST | `api/karma/vote-for-positive-karma-weighting/{karmaType}/{weighting}` | `karmaType`, `weighting` |
| `voteForPositiveKarmaWeightingByKarmaTypeWeighting` | POST | `api/karma/vote-for-positive-karma-weighting/{karmaType}/{weighting}/{providerType}/{setGlobally}` | `karmaType`, `weighting`, `providerType`, `setGlobally` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.karma.addKarmaToAvatar({
    avatarId: '<avatarId>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
