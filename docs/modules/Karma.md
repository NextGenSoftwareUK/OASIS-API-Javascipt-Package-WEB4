# Karma — `oasis.karma`

Source controller: [`KarmaController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/KarmaController.cs)
Route prefix: `api/karma`
12 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `addKarmaToAvatar` | POST | `api/karma/add-karma-to-avatar/{avatarId}` | `avatarId` |
| `getKarmaAkashicRecordsForAvatar` | GET | `api/karma/get-karma-akashic-records-for-avatar/{avatarId}` | `avatarId` |
| `getKarmaForAvatar` | GET | `api/karma/get-karma-for-avatar/{avatarId}` | `avatarId` |
| `getKarmaHistory` | GET | `api/karma/get-karma-history/{avatarId}` | `avatarId` |
| `getKarmaStats` | GET | `api/karma/get-karma-stats/{avatarId}` | `avatarId` |
| `getNegativeKarmaWeighting` | GET | `api/karma/get-negative-karma-weighting/{karmaType}` | `karmaType` |
| `getPositiveKarmaWeighting` | GET | `api/karma/get-positive-karma-weighting/{karmaType}` | `karmaType` |
| `removeKarmaFromAvatar` | POST | `api/karma/remove-karma-from-avatar/{avatarId}` | `avatarId` |
| `setNegativeKarmaWeighting` | POST | `api/karma/set-negative-karma-weighting/{karmaType}/{weighting}` | `karmaType`, `weighting` |
| `setPositiveKarmaWeighting` | POST | `api/karma/set-positive-karma-weighting/{karmaType}/{weighting}` | `karmaType`, `weighting` |
| `voteForNegativeKarmaWeighting` | POST | `api/karma/vote-for-negative-karma-weighting/{karmaType}/{weighting}` | `karmaType`, `weighting` |
| `voteForPositiveKarmaWeighting` | POST | `api/karma/vote-for-positive-karma-weighting/{karmaType}/{weighting}` | `karmaType`, `weighting` |

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
