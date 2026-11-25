# Settings — `oasis.settings`

Source controller: [`SettingsController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SettingsController.cs)
Route prefix: `api/settings`
19 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getAllSettingsForCurrentLoggedInAvatar` | GET | `api/settings/get-all-settings-for-current-logged-in-avatar` | – |
| `getHolonStoragePolicy` | GET | `api/settings/holon-storage-policy` | – |
| `getHyperDriveSettings` | GET | `api/settings/hyperdrive-settings` | – |
| `getNotificationPreferences` | GET | `api/settings/notification-preferences` | – |
| `getOmniversePreferences` | GET | `api/settings/omniverse-preferences` | – |
| `getPrivacySettings` | GET | `api/settings/privacy-settings` | – |
| `getSubscriptionSettings` | GET | `api/settings/subscription-settings` | – |
| `getSystemConfig` | GET | `api/settings/system-config` | – |
| `getSystemSettings` | GET | `api/settings/system-settings` | – |
| `getVersion` | GET | `api/settings/version` | – |
| `resetHolonStoragePolicy` | DELETE | `api/settings/holon-storage-policy` | – |
| `updateHolonStoragePolicy` | PUT | `api/settings/holon-storage-policy` | – |
| `updateHyperDriveSettings` | PUT | `api/settings/hyperdrive-settings` | – |
| `updateNotificationPreferences` | PUT | `api/settings/notification-preferences` | – |
| `updateOmniversePreferences` | PUT | `api/settings/omniverse-preferences` | – |
| `updatePrivacySettings` | PUT | `api/settings/privacy-settings` | – |
| `updateSettings` | PUT | `api/settings/update-settings` | – |
| `updateSubscriptionSettings` | PUT | `api/settings/subscription-settings` | – |
| `updateSystemSettings` | PUT | `api/settings/system-settings` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.settings.getAllSettingsForCurrentLoggedInAvatar({});
if (isError) throw new Error(message);
console.log(result);
```
