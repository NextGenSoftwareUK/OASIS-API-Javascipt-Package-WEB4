# Competition — `oasis.competition`

Source controller: [`CompetitionController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/CompetitionController.cs)
Route prefix: `api/competition`
9 operation(s).

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

### `getActiveTournaments`

Get active tournaments

**GET** `api/competition/tournaments`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `competitionType` | `CompetitionType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<Tournament>` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Name` | `string` |
| `Description` | `string` |
| `TournamentType` | `TournamentType` |
| `CompetitionType` | `CompetitionType` |
| `Status` | `TournamentStatus` |
| `StartDate` | `DateTime` |
| `EndDate` | `DateTime` |
| `RegistrationStart` | `DateTime` |
| `RegistrationEnd` | `DateTime` |
| `MaxParticipants` | `int` |
| `CurrentParticipants` | `int` |
| `MinLevel` | `int` |
| `MaxLevel` | `int` |
| `Prerequisites` | `List<string>` |
| `Rewards` | `List<TournamentReward>` |
| `Participants` | `List<TournamentParticipant>` |
| `Matches` | `List<TournamentMatch>` |
| `Rules` | `Dictionary<string, object>` |
| `Metadata` | `Dictionary<string, object>` |
| `CreatedBy` | `Guid` |
| `CreatedAt` | `DateTime` |
| `AvatarId` | `Guid` |
| `AvatarName` | `string` |
| `AvatarUsername` | `string` |
| `Score` | `long` |
| `Rank` | `int` |
| `IsEliminated` | `bool` |
| `JoinedAt` | `DateTime` |
| `Stats` | `Dictionary<string, object>` |
| `Participant1Id` | `Guid` |
| `Participant2Id` | `Guid` |
| `Round` | `int` |
| `Participant1Score` | `long` |
| `Participant2Score` | `long` |
| `WinnerId` | `Guid?` |
| `StartTime` | `DateTime?` |
| `EndTime` | `DateTime?` |
| `MatchData` | `Dictionary<string, object>` |
| `Type` | `string` |
| `Value` | `int` |
| `Position` | `int` |
| `ItemId` | `string` |
| `Properties` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.competition.getActiveTournaments({
    competitionType: '<competitionType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "TournamentType": {  }, "CompetitionType": {  }, "Status": /* <TournamentStatus> */, "StartDate": "2026-01-01T00:00:00Z", "EndDate": "2026-01-01T00:00:00Z", "RegistrationStart": "2026-01-01T00:00:00Z", "RegistrationEnd": "2026-01-01T00:00:00Z", "MaxParticipants": 1, "CurrentParticipants": 1, "MinLevel": 1, "MaxLevel": 1, "Prerequisites": ["example string"], "Rewards": [ /* <TournamentReward> */ ], "Participants": [ /* <TournamentParticipant> */ ], "Matches": [ /* <TournamentMatch> */ ], "Rules": /* <Dictionary<string, object>> */, "Metadata": /* <Dictionary<string, object>> */, "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "CreatedAt": "2026-01-01T00:00:00Z", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarName": "example string", "AvatarUsername": "example string", "Score": 1, "Rank": 1, "IsEliminated": true, "JoinedAt": "2026-01-01T00:00:00Z", "Stats": /* <Dictionary<string, object>> */, "Participant1Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Participant2Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Round": 1, "Participant1Score": 1, "Participant2Score": 1, "WinnerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "StartTime": "2026-01-01T00:00:00Z", "EndTime": "2026-01-01T00:00:00Z", "MatchData": /* <Dictionary<string, object>> */, "Type": "example string", "Value": 1, "Position": 1, "ItemId": "example string", "Properties": /* <Dictionary<string, object>> */ }]
}
```

---

### `getAvailableLeagues`

Get available leagues for a competition type and season

**GET** `api/competition/leagues/{competitionType}/{seasonType}`

Route parameters:

| Field | Type |
| --- | --- |
| `competitionType` | `CompetitionType` |
| `seasonType` | `SeasonType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<League>` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Name` | `string` |
| `Description` | `string` |
| `LeagueType` | `LeagueType` |
| `CompetitionType` | `CompetitionType` |
| `MinScore` | `long` |
| `MaxScore` | `long` |
| `MaxPlayers` | `int` |
| `CurrentPlayers` | `int` |
| `IsActive` | `bool` |
| `CreatedAt` | `DateTime` |
| `SeasonStart` | `DateTime?` |
| `SeasonEnd` | `DateTime?` |
| `SeasonType` | `SeasonType` |
| `Rewards` | `List<LeagueReward>` |
| `Requirements` | `Dictionary<string, object>` |
| `Metadata` | `Dictionary<string, object>` |
| `Type` | `string` |
| `Value` | `int` |
| `ItemId` | `string` |
| `Properties` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.competition.getAvailableLeagues({
    competitionType: '<competitionType>',
    seasonType: '<seasonType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "LeagueType": {  }, "CompetitionType": {  }, "MinScore": 1, "MaxScore": 1, "MaxPlayers": 1, "CurrentPlayers": 1, "IsActive": true, "CreatedAt": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "Rewards": [ /* <LeagueReward> */ ], "Requirements": /* <Dictionary<string, object>> */, "Metadata": /* <Dictionary<string, object>> */, "Type": "example string", "Value": 1, "ItemId": "example string", "Properties": /* <Dictionary<string, object>> */ }]
}
```

---

### `getAvatarLeague`

Get avatar's league by ID

**GET** `api/competition/league/{avatarId}/{competitionType}/{seasonType}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `competitionType` | `CompetitionType` |
| `seasonType` | `SeasonType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `League`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Name` | `string` |
| `Description` | `string` |
| `LeagueType` | `LeagueType` |
| `CompetitionType` | `CompetitionType` |
| `MinScore` | `long` |
| `MaxScore` | `long` |
| `MaxPlayers` | `int` |
| `CurrentPlayers` | `int` |
| `IsActive` | `bool` |
| `CreatedAt` | `DateTime` |
| `SeasonStart` | `DateTime?` |
| `SeasonEnd` | `DateTime?` |
| `SeasonType` | `SeasonType` |
| `Rewards` | `List<LeagueReward>` |
| `Requirements` | `Dictionary<string, object>` |
| `Metadata` | `Dictionary<string, object>` |
| `Type` | `string` |
| `Value` | `int` |
| `ItemId` | `string` |
| `Properties` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.competition.getAvatarLeague({
    avatarId: '<avatarId>',
    competitionType: '<competitionType>',
    seasonType: '<seasonType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "LeagueType": {  }, "CompetitionType": {  }, "MinScore": 1, "MaxScore": 1, "MaxPlayers": 1, "CurrentPlayers": 1, "IsActive": true, "CreatedAt": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "Rewards": [ /* <LeagueReward> */ ], "Requirements": /* <Dictionary<string, object>> */, "Metadata": /* <Dictionary<string, object>> */, "Type": "example string", "Value": 1, "ItemId": "example string", "Properties": /* <Dictionary<string, object>> */ }
}
```

---

### `getAvatarRank`

Get avatar's rank by ID in a specific competition

**GET** `api/competition/rank/{avatarId}/{competitionType}/{seasonType}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |
| `competitionType` | `CompetitionType` |
| `seasonType` | `SeasonType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `LeaderboardEntry`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `AvatarName` | `string` |
| `AvatarUsername` | `string` |
| `CompetitionType` | `CompetitionType` |
| `Score` | `long` |
| `Rank` | `int` |
| `PreviousRank` | `int` |
| `RankChange` | `int` |
| `LastUpdated` | `DateTime` |
| `SeasonStart` | `DateTime` |
| `SeasonEnd` | `DateTime` |
| `SeasonType` | `SeasonType` |
| `CurrentLeague` | `LeagueType` |
| `PreviousLeague` | `LeagueType` |
| `LeaguePromoted` | `bool` |
| `LeagueDemoted` | `bool` |
| `Stats` | `Dictionary<string, object>` |
| `Achievements` | `Dictionary<string, object>` |
| `Badges` | `List<string>` |
| `Metadata` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.competition.getAvatarRank({
    avatarId: '<avatarId>',
    competitionType: '<competitionType>',
    seasonType: '<seasonType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarName": "example string", "AvatarUsername": "example string", "CompetitionType": {  }, "Score": 1, "Rank": 1, "PreviousRank": 1, "RankChange": 1, "LastUpdated": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "CurrentLeague": {  }, "PreviousLeague": {}, "LeaguePromoted": true, "LeagueDemoted": true, "Stats": /* <Dictionary<string, object>> */, "Achievements": /* <Dictionary<string, object>> */, "Badges": ["example string"], "Metadata": /* <Dictionary<string, object>> */ }
}
```

---

### `getLeaderboard`

Get leaderboard for a specific competition type and season

**GET** `api/competition/leaderboard/{competitionType}/{seasonType}`

Route parameters:

| Field | Type |
| --- | --- |
| `competitionType` | `CompetitionType` |
| `seasonType` | `SeasonType` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `limit` | `int (optional)` |
| `offset` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `List<LeaderboardEntry>` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `AvatarName` | `string` |
| `AvatarUsername` | `string` |
| `CompetitionType` | `CompetitionType` |
| `Score` | `long` |
| `Rank` | `int` |
| `PreviousRank` | `int` |
| `RankChange` | `int` |
| `LastUpdated` | `DateTime` |
| `SeasonStart` | `DateTime` |
| `SeasonEnd` | `DateTime` |
| `SeasonType` | `SeasonType` |
| `CurrentLeague` | `LeagueType` |
| `PreviousLeague` | `LeagueType` |
| `LeaguePromoted` | `bool` |
| `LeagueDemoted` | `bool` |
| `Stats` | `Dictionary<string, object>` |
| `Achievements` | `Dictionary<string, object>` |
| `Badges` | `List<string>` |
| `Metadata` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.competition.getLeaderboard({
    competitionType: '<competitionType>',
    seasonType: '<seasonType>',
    limit: 1,
    offset: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarName": "example string", "AvatarUsername": "example string", "CompetitionType": {  }, "Score": 1, "Rank": 1, "PreviousRank": 1, "RankChange": 1, "LastUpdated": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "CurrentLeague": {  }, "PreviousLeague": {}, "LeaguePromoted": true, "LeagueDemoted": true, "Stats": /* <Dictionary<string, object>> */, "Achievements": /* <Dictionary<string, object>> */, "Badges": ["example string"], "Metadata": /* <Dictionary<string, object>> */ }]
}
```

---

### `getMyLeague`

Get current avatar's league

**GET** `api/competition/my-league/{competitionType}/{seasonType}`

Route parameters:

| Field | Type |
| --- | --- |
| `competitionType` | `CompetitionType` |
| `seasonType` | `SeasonType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `League`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Name` | `string` |
| `Description` | `string` |
| `LeagueType` | `LeagueType` |
| `CompetitionType` | `CompetitionType` |
| `MinScore` | `long` |
| `MaxScore` | `long` |
| `MaxPlayers` | `int` |
| `CurrentPlayers` | `int` |
| `IsActive` | `bool` |
| `CreatedAt` | `DateTime` |
| `SeasonStart` | `DateTime?` |
| `SeasonEnd` | `DateTime?` |
| `SeasonType` | `SeasonType` |
| `Rewards` | `List<LeagueReward>` |
| `Requirements` | `Dictionary<string, object>` |
| `Metadata` | `Dictionary<string, object>` |
| `Type` | `string` |
| `Value` | `int` |
| `ItemId` | `string` |
| `Properties` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.competition.getMyLeague({
    competitionType: '<competitionType>',
    seasonType: '<seasonType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "LeagueType": {  }, "CompetitionType": {  }, "MinScore": 1, "MaxScore": 1, "MaxPlayers": 1, "CurrentPlayers": 1, "IsActive": true, "CreatedAt": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "Rewards": [ /* <LeagueReward> */ ], "Requirements": /* <Dictionary<string, object>> */, "Metadata": /* <Dictionary<string, object>> */, "Type": "example string", "Value": 1, "ItemId": "example string", "Properties": /* <Dictionary<string, object>> */ }
}
```

---

### `getMyRank`

Get current avatar's rank in a specific competition

**GET** `api/competition/my-rank/{competitionType}/{seasonType}`

Route parameters:

| Field | Type |
| --- | --- |
| `competitionType` | `CompetitionType` |
| `seasonType` | `SeasonType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `LeaderboardEntry`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AvatarId` | `Guid` |
| `AvatarName` | `string` |
| `AvatarUsername` | `string` |
| `CompetitionType` | `CompetitionType` |
| `Score` | `long` |
| `Rank` | `int` |
| `PreviousRank` | `int` |
| `RankChange` | `int` |
| `LastUpdated` | `DateTime` |
| `SeasonStart` | `DateTime` |
| `SeasonEnd` | `DateTime` |
| `SeasonType` | `SeasonType` |
| `CurrentLeague` | `LeagueType` |
| `PreviousLeague` | `LeagueType` |
| `LeaguePromoted` | `bool` |
| `LeagueDemoted` | `bool` |
| `Stats` | `Dictionary<string, object>` |
| `Achievements` | `Dictionary<string, object>` |
| `Badges` | `List<string>` |
| `Metadata` | `Dictionary<string, object>` |

**Example**

```js
const { isError, message, result } = await oasis.competition.getMyRank({
    competitionType: '<competitionType>',
    seasonType: '<seasonType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarName": "example string", "AvatarUsername": "example string", "CompetitionType": {  }, "Score": 1, "Rank": 1, "PreviousRank": 1, "RankChange": 1, "LastUpdated": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "CurrentLeague": {  }, "PreviousLeague": {}, "LeaguePromoted": true, "LeagueDemoted": true, "Stats": /* <Dictionary<string, object>> */, "Achievements": /* <Dictionary<string, object>> */, "Badges": ["example string"], "Metadata": /* <Dictionary<string, object>> */ }
}
```

---

### `getMyStats`

Get competition statistics for the current avatar

**GET** `api/competition/stats/{competitionType}/{seasonType}`

Route parameters:

| Field | Type |
| --- | --- |
| `competitionType` | `CompetitionType` |
| `seasonType` | `SeasonType` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `Dictionary<string, object>` _(type definition not found - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.competition.getMyStats({
    competitionType: '<competitionType>',
    seasonType: '<seasonType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <Dictionary<string, object>> */
}
```

---

### `joinTournament`

Join a tournament

**POST** `api/competition/tournaments/{tournamentId}/join`

Route parameters:

| Field | Type |
| --- | --- |
| `tournamentId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await oasis.competition.joinTournament({
    tournamentId: '<tournamentId>'
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

