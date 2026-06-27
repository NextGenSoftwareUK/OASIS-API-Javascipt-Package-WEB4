# Subscription — `oasis.subscription`

Source controller: [`SubscriptionController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SubscriptionController.cs)
Route prefix: `api/subscription`
10 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `checkHyperDriveQuota` | POST | `api/subscription/check-hyperdrive-quota` | – |
| `createCheckoutSession` | POST | `api/subscription/checkout/session` | – |
| `getHyperDriveUsage` | GET | `api/subscription/hyperdrive-usage` | – |
| `getMyOrders` | GET | `api/subscription/orders/me` | – |
| `getMySubscriptions` | GET | `api/subscription/subscriptions/me` | – |
| `getPlans` | GET | `api/subscription/plans` | – |
| `getUsage` | GET | `api/subscription/usage` | – |
| `stripeWebhook` | POST | `api/subscription/webhooks/stripe` | – |
| `togglePayAsYouGo` | POST | `api/subscription/toggle-pay-as-you-go` | – |
| `updateHyperDriveConfig` | POST | `api/subscription/update-hyperdrive-config` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.subscription.checkHyperDriveQuota({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
