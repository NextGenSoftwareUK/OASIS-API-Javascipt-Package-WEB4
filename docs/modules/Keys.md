# Keys — `oasis.keys`

Source controller: [`KeysController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/KeysController.cs)
Route prefix: `api/keys`
51 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL. GET sends remaining fields as query parameters; other methods send a JSON body.
For a declared body parameter, that named argument becomes the JSON body value and
other fields become query parameters. See [body binding](../body-binding.md).


## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `base58CheckDecode` | POST | `api/keys/base58-check-decode/{data}` | `data` |
| `clearCache` | POST | `api/keys/clear-cache` | – |
| `createKey` | POST | `api/keys/create` | – |
| `decodePrivateWif` | POST | `api/keys/decode-private-wif/{data}` | `data` |
| `deleteKey` | DELETE | `api/keys/{keyId}` | `keyId` |
| `encodeSignature` | POST | `api/keys/encode-signature/{source}` | `source` |
| `generateKeyPairAndLinkProviderKeysToAvatarByAvatarEmail` | POST | `api/keys/generate-keypair-and-link-provider-keys-to-avatar-by-email` | – |
| `generateKeyPairAndLinkProviderKeysToAvatarByAvatarId` | POST | `api/keys/generate-keypair-and-link-provider-keys-to-avatar-by-id` | – |
| `generateKeyPairAndLinkProviderKeysToAvatarByAvatarUsername` | POST | `api/keys/generate-keypair-and-link-provider-keys-to-avatar-by-username` | – |
| `generateKeyPairForProvider` | POST | `api/keys/generate-keypair-for-provider/{providerType}` | `providerType` |
| `generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarByEmail` | POST | `api/keys/generate-keypair-with-wallet-address-and-link-provider-keys-to-avatar-by-email` | – |
| `generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarById` | POST | `api/keys/generate-keypair-with-wallet-address-and-link-provider-keys-to-avatar-by-id` | – |
| `generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarByUsername` | POST | `api/keys/generate-keypair-with-wallet-address-and-link-provider-keys-to-avatar-by-username` | – |
| `generateKeyPairWithWalletAddressForProvider` | POST | `api/keys/generate-keypair-with-wallet-address-for-provider/{providerType}` | `providerType` |
| `getAllKeysForAvatar` | GET | `api/keys/all` | – |
| `getAllProviderPrivateKeysForAvatarById` | GET | `api/keys/get-all-provider-private-keys-for-avatar-by-id/{id}` | `id` |
| `getAllProviderPrivateKeysForAvatarByUsername` | GET | `api/keys/get-all-provider-private-keys-for-avatar-by-username/{username}` | `username` |
| `getAllProviderPublicKeysForAvatarByEmail` | GET | `api/keys/get-all-provider-public-keys-for-avatar-by-email/{email}` | `email` |
| `getAllProviderPublicKeysForAvatarById` | GET | `api/keys/get-all-provider-public-keys-for-avatar-by-id/{id}` | `id` |
| `getAllProviderPublicKeysForAvatarByUsername` | GET | `api/keys/get-all-provider-public-keys-for-avatar-by-username/{username}` | `username` |
| `getAllProviderUniqueStorageKeysForAvatarByEmail` | GET | `api/keys/get-all-provider-unique-storage-keys-for-avatar-by-email/{email}` | `email` |
| `getAllProviderUniqueStorageKeysForAvatarById` | GET | `api/keys/get-all-provider-unique-storage-keys-for-avatar-by-id/{id}` | `id` |
| `getAllProviderUniqueStorageKeysForAvatarByUsername` | GET | `api/keys/get-all-provider-unique-storage-keys-for-avatar-by-username/{username}` | `username` |
| `getAvatarEmailForProviderPublicKey` | GET | `api/keys/get-avatar-email-for-provider-public-key/{providerKey}` | `providerKey` |
| `getAvatarEmailForProviderUniqueStorageKey` | GET | `api/keys/get-avatar-email-for-provider-unique-storage-key/{providerKey}` | `providerKey` |
| `getAvatarForProviderPublicKey` | GET | `api/keys/get-avatar-for-provider-public-key/{providerKey}` | `providerKey` |
| `getAvatarForProviderUniqueStorageKey` | GET | `api/keys/get-avatar-for-provider-unique-storage-key/{providerKey}` | `providerKey` |
| `getAvatarIdForProviderPublicKey` | GET | `api/keys/get-avatar-id-for-provider-public-key/{providerKey}` | `providerKey` |
| `getAvatarIdForProviderUniqueStorageKey` | GET | `api/keys/get-avatar-id-for-provider-unique-storage-key/{providerKey}` | `providerKey` |
| `getAvatarUsernameForProviderPublicKey` | GET | `api/keys/get-avatar-username-for-provider-public-key/{providerKey}` | `providerKey` |
| `getAvatarUsernameForProviderUniqueStorageKey` | GET | `api/keys/get-avatar-username-for-provider-unique-storage-key/{providerKey}` | `providerKey` |
| `getKeyStats` | GET | `api/keys/stats` | – |
| `getPrivateWif` | POST | `api/keys/get-private-wifi/{source}` | `source` |
| `getProviderPrivateKeyForAvatarById` | GET | `api/keys/get-provider-private-key-for-avatar-by-id` | – |
| `getProviderPrivateKeyForAvatarByUsername` | GET | `api/keys/get-provider-private-key-for-avatar-by-username` | – |
| `getProviderPublicKeysForAvatarByEmail` | GET | `api/keys/get-provider-public-keys-for-avatar-by-email` | – |
| `getProviderPublicKeysForAvatarById` | GET | `api/keys/get-provider-public-keys-for-avatar-by-id` | – |
| `getProviderPublicKeysForAvatarByUsername` | GET | `api/keys/get-provider-public-keys-for-avatar-by-username` | – |
| `getProviderUniqueStorageKeyForAvatarByEmail` | GET | `api/keys/get-provider-unique-storage-key-for-avatar-by-email` | – |
| `getProviderUniqueStorageKeyForAvatarById` | GET | `api/keys/get-provider-unique-storage-key-for-avatar-by-id` | – |
| `getProviderUniqueStorageKeyForAvatarByUsername` | GET | `api/keys/get-provider-unique-storage-key-for-avatar-by-username` | – |
| `getPublicWif` | POST | `api/keys/get-public-wifi` | – |
| `linkProviderPrivateKeyToAvatarByAvatarId` | POST | `api/keys/link-provider-private-key-to-avatar-by-id` | – |
| `linkProviderPrivateKeyToAvatarByUsername` | POST | `api/keys/link-provider-private-key-to-avatar-by-username` | – |
| `linkProviderPublicKeyToAvatarByAvatarId` | POST | `api/keys/link-provider-public-key-to-avatar-by-id` | – |
| `linkProviderPublicKeyToAvatarByEmail` | POST | `api/keys/link-provider-public-key-to-avatar-by-email` | – |
| `linkProviderPublicKeyToAvatarByUsername` | POST | `api/keys/link-provider-public-key-to-avatar-by-username` | – |
| `linkProviderWalletAddressToAvatarByEmail` | POST | `api/keys/link-provider-wallet-address-to-avatar-by-email` | – |
| `linkProviderWalletAddressToAvatarById` | POST | `api/keys/link-provider-wallet-address-to-avatar-by-id` | – |
| `linkProviderWalletAddressToAvatarByUsername` | POST | `api/keys/link-provider-wallet-address-to-avatar-by-username` | – |
| `updateKey` | PUT | `api/keys/{keyId}` | `keyId` |

## Example

```js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.keys.base58CheckDecode({
    data: '<data>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
