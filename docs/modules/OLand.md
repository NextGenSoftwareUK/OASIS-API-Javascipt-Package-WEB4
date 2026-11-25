# OLand — `oasis.oLand`

Source controller: [`OLandController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/OLandController.cs)
Route prefix: `api/oLand`
19 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `cancelQuote` | DELETE | `api/oLand/quotes/{orderId}` | `orderId` |
| `checkout` | POST | `api/oLand/orders/{orderId}/checkout` | `orderId` |
| `checkoutReturn` | GET | `api/oLand/checkout-return` | – |
| `confirmPayment` | POST | `api/oLand/orders/{orderId}/confirm-payment` | `orderId` |
| `deleteOlandAsync` | POST | `api/oLand/delete-oland/{olandId}` | `olandId` |
| `fulfil` | POST | `api/oLand/orders/{orderId}/fulfil` | `orderId` |
| `getOlandPrice` | GET | `api/oLand/get-oland-price` | – |
| `loadAllOlands` | GET | `api/oLand/load-all-olands` | – |
| `loadOlandAsync` | GET | `api/oLand/load-oland/{olandId}` | `olandId` |
| `nftMetadata` | GET | `api/oLand/nft-metadata/{orderId}` | `orderId` |
| `oLandStripeWebhook` | POST | `api/oLand/webhooks/stripe` | – |
| `orderHistory` | GET | `api/oLand/orders` | – |
| `orderStatus` | GET | `api/oLand/orders/{orderId}` | `orderId` |
| `parcelGrid` | GET | `api/oLand/parcel-grid` | – |
| `purchaseOland` | POST | `api/oLand/purchase-oland` | – |
| `purchaseOptions` | GET | `api/oLand/purchase-options` | – |
| `quote` | POST | `api/oLand/quotes` | – |
| `saveOlandAsync` | POST | `api/oLand/save-oland` | – |
| `updateOlandAsync` | POST | `api/oLand/update-oland` | – |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.oLand.cancelQuote({
    orderId: '<orderId>'
  });
if (isError) throw new Error(message);
console.log(result);
```
