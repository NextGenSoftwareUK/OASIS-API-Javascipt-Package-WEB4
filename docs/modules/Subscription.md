# Subscription — `oasis.subscription`

Source controller: [`SubscriptionController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SubscriptionController.cs)
Route prefix: `api/subscription`
70 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).


## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `alerts` | GET | `api/subscription/usage/alerts` | – |
| `analytics` | GET | `api/subscription/admin/analytics` | – |
| `appAccounts` | GET | `api/subscription/admin/app-accounts` | – |
| `appPoolUsage` | GET | `api/subscription/admin/app-accounts/{appId}/usage` | `appId` |
| `appSeriesAdmin` | GET | `api/subscription/admin/app-accounts/{appId}/usage/series` | `appId` |
| `appTopUsers` | GET | `api/subscription/admin/app-accounts/{appId}/top-users` | `appId` |
| `audit` | GET | `api/subscription/admin/usage/audit` | – |
| `authorizeDelegatedUsage` | POST | `api/subscription/usage/authorize-delegated` | – |
| `authorizeRequest` | POST | `api/subscription/authorize-request` | – |
| `authorizeUsage` | POST | `api/subscription/usage/authorize` | – |
| `billing` | GET | `api/subscription/app-owner/{appId}/payg` | `appId` |
| `cancelPendingCheckout` | POST | `api/subscription/checkout/operations/{operationId}/cancel` | `operationId` |
| `checkHyperDriveQuota` | POST | `api/subscription/check-hyperdrive-quota` | – |
| `correctUsage` | POST | `api/subscription/usage/admin/corrections` | – |
| `createAppAccount` | POST | `api/subscription/admin/app-accounts` | – |
| `createBillingPortal` | POST | `api/subscription/billing/portal` | – |
| `createCheckoutSession` | POST | `api/subscription/checkout/session` | – |
| `createUsageGrant` | POST | `api/subscription/usage/grants` | – |
| `events` | GET | `api/subscription/admin/usage/events` | – |
| `getAuthoritativeUsage` | GET | `api/subscription/usage/current` | – |
| `getCheckoutSessionStatus` | GET | `api/subscription/checkout/session/{sessionId}` | `sessionId` |
| `getHyperDriveUsage` | GET | `api/subscription/hyperdrive-usage` | – |
| `getMyOrders` | GET | `api/subscription/orders/me` | – |
| `getMySubscriptions` | GET | `api/subscription/subscriptions/me` | – |
| `getOverageStatements` | GET | `api/subscription/overages/statements` | – |
| `getOverageStatementsAdmin` | GET | `api/subscription/overages/admin/statements` | – |
| `getPaidOveragePrices` | GET | `api/subscription/overages/prices` | – |
| `getPendingCheckouts` | GET | `api/subscription/checkout/pending` | – |
| `getPlans` | GET | `api/subscription/plans` | – |
| `getUsage` | GET | `api/subscription/usage` | – |
| `getUsageAudit` | GET | `api/subscription/usage/audit` | – |
| `getUsageEvents` | GET | `api/subscription/usage/events` | – |
| `getUsageMigrationInventory` | GET | `api/subscription/usage/admin/migration/inventory` | – |
| `getUsageNotifications` | GET | `api/subscription/usage/notifications` | – |
| `grantPlan` | POST | `api/subscription/admin/plan-grant` | – |
| `importUsageOpeningBalance` | POST | `api/subscription/usage/admin/migration/opening-balance` | – |
| `invoices` | GET | `api/subscription/admin/invoices` | – |
| `listUsageGrants` | GET | `api/subscription/usage/grants` | – |
| `myApps` | GET | `api/subscription/app-owner/apps` | – |
| `myEstimate` | GET | `api/subscription/usage/estimate` | – |
| `mySeries` | GET | `api/subscription/usage/series` | – |
| `notifications` | GET | `api/subscription/app-owner/{appId}/notifications` | `appId` |
| `outboxes` | GET | `api/subscription/admin/outboxes` | – |
| `payNow` | POST | `api/subscription/app-owner/{appId}/payg/pay-now` | `appId` |
| `payOveragesNow` | POST | `api/subscription/overages/pay-now` | – |
| `providerReceipt` | POST | `api/subscription/usage/admin/reconciliation/provider-receipts` | – |
| `reconcileCheckout` | POST | `api/subscription/checkout/operations/{operationId}/reconcile` | `operationId` |
| `reports` | GET | `api/subscription/usage/admin/reconciliation/reports` | – |
| `requeue` | POST | `api/subscription/admin/outboxes/requeue` | – |
| `revokeUsageGrant` | POST | `api/subscription/usage/grants/{grantId}/revoke` | `grantId` |
| `rotateAppAccountKey` | POST | `api/subscription/admin/app-accounts/{appId}/rotate-key` | `appId` |
| `run` | POST | `api/subscription/usage/admin/reconciliation/run` | – |
| `save` | POST | `api/subscription/usage/notifications` | – |
| `saveBilling` | POST | `api/subscription/app-owner/{appId}/payg` | `appId` |
| `saveNotifications` | POST | `api/subscription/app-owner/{appId}/notifications` | `appId` |
| `saveSettings` | POST | `api/subscription/app-owner/{appId}/settings` | `appId` |
| `sendWarningEmails` | POST | `api/subscription/usage/alerts/email` | – |
| `setAppOwners` | POST | `api/subscription/admin/app-accounts/{appId}/owners` | `appId` |
| `settings` | GET | `api/subscription/app-owner/{appId}/settings` | `appId` |
| `settleNativeUsage` | POST | `api/subscription/usage/settle-native-v1` | – |
| `settleUsage` | POST | `api/subscription/usage/settle` | – |
| `startUsage` | POST | `api/subscription/usage/start` | – |
| `stripeInvoice` | POST | `api/subscription/usage/admin/reconciliation/stripe-invoices` | – |
| `stripeWebhook` | POST | `api/subscription/webhooks/stripe` | – |
| `subscriptions` | GET | `api/subscription/admin/subscriptions` | – |
| `togglePayAsYouGo` | POST | `api/subscription/toggle-pay-as-you-go` | – |
| `updateAppAccount` | POST | `api/subscription/admin/app-accounts/{appId}` | `appId` |
| `updateHyperDriveConfig` | POST | `api/subscription/update-hyperdrive-config` | – |
| `usage` | GET | `api/subscription/app-owner/{appId}/usage` | `appId` |
| `userSeriesAdmin` | GET | `api/subscription/admin/users/{userId}/usage/series` | `userId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.subscription.alerts({});
if (isError) throw new Error(message);
console.log(result);
```
