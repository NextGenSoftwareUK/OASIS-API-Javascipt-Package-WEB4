# Gifts — `oasis.gifts`

Source controller: [`GiftsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/GiftsController.cs)
Route prefix: `api/gifts`
6 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getGiftHistory` | GET | `api/gifts/history` | – |
| `getGiftStats` | GET | `api/gifts/stats` | – |
| `getMyGifts` | GET | `api/gifts/my-gifts` | – |
| `openGift` | POST | `api/gifts/open-gift/{giftId}` | `giftId` |
| `receiveGift` | POST | `api/gifts/receive-gift/{giftId}` | `giftId` |
| `sendGift` | POST | `api/gifts/send-gift/{toAvatarId}` | `toAvatarId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.gifts.getGiftHistory({});
if (isError) throw new Error(message);
console.log(result);
```
