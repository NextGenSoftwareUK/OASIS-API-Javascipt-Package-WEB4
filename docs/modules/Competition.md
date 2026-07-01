# Competition — `oasis.competition`

Source controller: [`CompetitionController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/CompetitionController.cs)
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

`result` type: `Tournament` (array)

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
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "TournamentType": {  }, "CompetitionType": {  }, "Status": {  }, "StartDate": "2026-01-01T00:00:00Z", "EndDate": "2026-01-01T00:00:00Z", "RegistrationStart": "2026-01-01T00:00:00Z", "RegistrationEnd": "2026-01-01T00:00:00Z", "MaxParticipants": 1, "CurrentParticipants": 1, "MinLevel": 1, "MaxLevel": 1, "Prerequisites": ["example string"], "Rewards": [{ "Type": "example string", "Name": "example string", "Description": "example string", "Value": 1, "Position": 1, "ItemId": "example string", "Properties": { "<string>": {} } }], "Participants": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarName": "example string", "AvatarUsername": "example string", "Score": 1, "Rank": 1, "IsEliminated": true, "JoinedAt": "2026-01-01T00:00:00Z", "Stats": { "<string>": {} } }], "Matches": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Participant1Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Participant2Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Round": 1, "Status": {  }, "Participant1Score": 1, "Participant2Score": 1, "WinnerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "StartTime": "2026-01-01T00:00:00Z", "EndTime": "2026-01-01T00:00:00Z", "MatchData": { "<string>": {} } }], "Rules": { "<string>": {} }, "Metadata": { "<string>": {} }, "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "CreatedAt": "2026-01-01T00:00:00Z" }]
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

`result` type: `League` (array)

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
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "LeagueType": {  }, "CompetitionType": {  }, "MinScore": 1, "MaxScore": 1, "MaxPlayers": 1, "CurrentPlayers": 1, "IsActive": true, "CreatedAt": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "Rewards": [{ "Type": "example string", "Name": "example string", "Description": "example string", "Value": 1, "ItemId": "example string", "Properties": { "<string>": {} } }], "Requirements": { "<string>": {} }, "Metadata": { "<string>": {} } }]
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
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "LeagueType": {  }, "CompetitionType": {  }, "MinScore": 1, "MaxScore": 1, "MaxPlayers": 1, "CurrentPlayers": 1, "IsActive": true, "CreatedAt": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "Rewards": [{ "Type": "example string", "Name": "example string", "Description": "example string", "Value": 1, "ItemId": "example string", "Properties": { "<string>": {} } }], "Requirements": { "<string>": {} }, "Metadata": { "<string>": {} } }
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
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarName": "example string", "AvatarUsername": "example string", "CompetitionType": {  }, "Score": 1, "Rank": 1, "PreviousRank": 1, "RankChange": 1, "LastUpdated": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "CurrentLeague": {  }, "PreviousLeague": {}, "LeaguePromoted": true, "LeagueDemoted": true, "Stats": { "<string>": {} }, "Achievements": { "<string>": {} }, "Badges": ["example string"], "Metadata": { "<string>": {} } }
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

`result` type: `LeaderboardEntry` (array)

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
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarName": "example string", "AvatarUsername": "example string", "CompetitionType": {  }, "Score": 1, "Rank": 1, "PreviousRank": 1, "RankChange": 1, "LastUpdated": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "CurrentLeague": {  }, "PreviousLeague": {}, "LeaguePromoted": true, "LeagueDemoted": true, "Stats": { "<string>": {} }, "Achievements": { "<string>": {} }, "Badges": ["example string"], "Metadata": { "<string>": {} } }]
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
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "LeagueType": {  }, "CompetitionType": {  }, "MinScore": 1, "MaxScore": 1, "MaxPlayers": 1, "CurrentPlayers": 1, "IsActive": true, "CreatedAt": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "Rewards": [{ "Type": "example string", "Name": "example string", "Description": "example string", "Value": 1, "ItemId": "example string", "Properties": { "<string>": {} } }], "Requirements": { "<string>": {} }, "Metadata": { "<string>": {} } }
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
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvatarName": "example string", "AvatarUsername": "example string", "CompetitionType": {  }, "Score": 1, "Rank": 1, "PreviousRank": 1, "RankChange": 1, "LastUpdated": "2026-01-01T00:00:00Z", "SeasonStart": "2026-01-01T00:00:00Z", "SeasonEnd": "2026-01-01T00:00:00Z", "SeasonType": {  }, "CurrentLeague": {  }, "PreviousLeague": {}, "LeaguePromoted": true, "LeagueDemoted": true, "Stats": { "<string>": {} }, "Achievements": { "<string>": {} }, "Badges": ["example string"], "Metadata": { "<string>": {} } }
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

`result` type: `Dictionary<string, object>` - a key/value map keyed by `string`, each value a `object`.

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
  "result": { "<string>": {} }
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

