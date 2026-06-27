# Keys — `oasis.keys`

Source controller: [`KeysController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/KeysController.cs)
Route prefix: `api/keys`
59 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `base58CheckDecode` | POST | `api/keys/base58_check_decode/{data}` | `data` |
| `clearCache` | POST | `api/keys/clear_cache` | – |
| `createKey` | POST | `api/keys/create` | – |
| `decodePrivateWif` | POST | `api/keys/decode_private_wif/{data}` | `data` |
| `deleteKey` | DELETE | `api/keys/{keyId}` | `keyId` |
| `encodeSignature` | POST | `api/keys/encode_signature/{source}` | `source` |
| `generateKeyPairAndLinkProviderKeysToAvatarByAvatarEmail` | POST | `api/keys/generate_keypair_and_link_provider_keys_to_avatar_by_email` | – |
| `generateKeyPairAndLinkProviderKeysToAvatarByAvatarId` | POST | `api/keys/generate_keypair_and_link_provider_keys_to_avatar_by_id` | – |
| `generateKeyPairAndLinkProviderKeysToAvatarByAvatarUsername` | POST | `api/keys/generate_keypair_and_link_provider_keys_to_avatar_by_username` | – |
| `generateKeyPairForProvider` | POST | `api/keys/generate_keypair_for_provider/{providerType}` | `providerType` |
| `generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarByEmail` | POST | `api/keys/generate_keypair_with_wallet_address_and_link_provider_keys_to_avatar_by_email` | – |
| `generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarById` | POST | `api/keys/generate_keypair_with_wallet_address_and_link_provider_keys_to_avatar_by_id` | – |
| `generateKeyPairWithWalletAddressAndLinkProviderKeysToAvatarByUsername` | POST | `api/keys/generate_keypair_with_wallet_address_and_link_provider_keys_to_avatar_by_username` | – |
| `generateKeyPairWithWalletAddressForProvider` | POST | `api/keys/generate_keypair_with_wallet_address_for_provider/{providerType}` | `providerType` |
| `getAllKeysForAvatar` | GET | `api/keys/all` | – |
| `getAllProviderPrivateKeysForAvatarById` | GET | `api/keys/get_all_provider_private_keys_for_avatar_by_id/{id}` | `id` |
| `getAllProviderPrivateKeysForAvatarByUsername` | GET | `api/keys/get_all_provider_private_keys_for_avatar_by_username/{username}` | `username` |
| `getAllProviderPublicKeysForAvatarByEmail` | GET | `api/keys/get_all_provider_public_keys_for_avatar_by_email/{email}` | `email` |
| `getAllProviderPublicKeysForAvatarById` | GET | `api/keys/get_all_provider_public_keys_for_avatar_by_id/{id}` | `id` |
| `getAllProviderPublicKeysForAvatarByUsername` | GET | `api/keys/get_all_provider_public_keys_for_avatar_by_username/{username}` | `username` |
| `getAllProviderUniqueStorageKeysForAvatarByEmail` | GET | `api/keys/get_all_provider_unique_storage_keys_for_avatar_by_email/{email}` | `email` |
| `getAllProviderUniqueStorageKeysForAvatarById` | GET | `api/keys/get_all_provider_unique_storage_keys_for_avatar_by_id/{id}` | `id` |
| `getAllProviderUniqueStorageKeysForAvatarByUsername` | GET | `api/keys/get_all_provider_unique_storage_keys_for_avatar_by_username/{username}` | `username` |
| `getAvatarEmailForProviderPublicKey` | GET | `api/keys/get_avatar_email_for_provider_public_key/{providerKey}` | `providerKey` |
| `getAvatarEmailForProviderUniqueStorageKey` | GET | `api/keys/get_avatar_email_for_provider_unique_storage_key/{providerKey}` | `providerKey` |
| `getAvatarForProviderPrivateKey` | GET | `api/keys/get_avatar_for_provider_private_key/{providerKey}` | `providerKey` |
| `getAvatarForProviderPublicKey` | GET | `api/keys/get_avatar_for_provider_public_key/{providerKey}` | `providerKey` |
| `getAvatarForProviderUniqueStorageKey` | GET | `api/keys/get_avatar_for_provider_unique_storage_key/{providerKey}` | `providerKey` |
| `getAvatarIdForProviderPrivateKey` | GET | `api/keys/get_avatar_id_for_provider_private_key/{providerKey}` | `providerKey` |
| `getAvatarIdForProviderPublicKey` | GET | `api/keys/get_avatar_id_for_provider_public_key/{providerKey}` | `providerKey` |
| `getAvatarIdForProviderUniqueStorageKey` | GET | `api/keys/get_avatar_id_for_provider_unique_storage_key/{providerKey}` | `providerKey` |
| `getAvatarUsernameForProviderPrivateKey` | GET | `api/keys/get_avatar_username_for_provider_private_key/{providerKey}` | `providerKey` |
| `getAvatarUsernameForProviderPublicKey` | GET | `api/keys/get_avatar_username_for_provider_public_key/{providerKey}` | `providerKey` |
| `getAvatarUsernameForProviderUniqueStorageKey` | GET | `api/keys/get_avatar_username_for_provider_unique_storage_key/{providerKey}` | `providerKey` |
| `getKeyStats` | GET | `api/keys/stats` | – |
| `getPrivateWif` | POST | `api/keys/get_private_wifi/{source}` | `source` |
| `getProviderPrivateKeyForAvatarById` | GET | `api/keys/get_provider_private_key_for_avatar_by_id` | – |
| `getProviderPrivateKeyForAvatarByUsername` | GET | `api/keys/get_provider_private_key_for_avatar_by_username` | – |
| `getProviderPublicKeysForAvatarByEmail` | GET | `api/keys/get_provider_public_keys_for_avatar_by_email` | – |
| `getProviderPublicKeysForAvatarById` | GET | `api/keys/get_provider_public_keys_for_avatar_by_id` | – |
| `getProviderPublicKeysForAvatarByUsername` | GET | `api/keys/get_provider_public_keys_for_avatar_by_username` | – |
| `getProviderUniqueStorageKeyForAvatarByEmail` | GET | `api/keys/get_provider_unique_storage_key_for_avatar_by_email` | – |
| `getProviderUniqueStorageKeyForAvatarById` | GET | `api/keys/get_provider_unique_storage_key_for_avatar_by_id` | – |
| `getProviderUniqueStorageKeyForAvatarByUsername` | GET | `api/keys/get_provider_unique_storage_key_for_avatar_by_username` | – |
| `getPublicWif` | POST | `api/keys/get_public_wifi` | – |
| `linkEOSIOAccountToAvatar` | POST | `api/keys/{avatarId}/{eosioAccountName}` | `avatarId`, `eosioAccountName` |
| `linkHolochainAgentIDToAvatar` | POST | `api/keys/{avatarId}/{holochainAgentID}` | `avatarId`, `holochainAgentID` |
| `linkProviderPrivateKeyToAvatarByAvatarId` | POST | `api/keys/link_provider_private_key_to_avatar_by_id` | – |
| `linkProviderPrivateKeyToAvatarByEmail` | POST | `api/keys/link_provider_private_key_to_avatar_by_email` | – |
| `linkProviderPrivateKeyToAvatarByUsername` | POST | `api/keys/link_provider_private_key_to_avatar_by_username` | – |
| `linkProviderPublicKeyToAvatarByAvatarId` | POST | `api/keys/link_provider_public_key_to_avatar_by_id` | – |
| `linkProviderPublicKeyToAvatarByEmail` | POST | `api/keys/link_provider_public_key_to_avatar_by_email` | – |
| `linkProviderPublicKeyToAvatarByUsername` | POST | `api/keys/link_provider_public_key_to_avatar_by_username` | – |
| `linkProviderWalletAddressToAvatarByEmail` | POST | `api/keys/link_provider_wallet_address_to_avatar_by_email` | – |
| `linkProviderWalletAddressToAvatarById` | POST | `api/keys/link_provider_wallet_address_to_avatar_by_id` | – |
| `linkProviderWalletAddressToAvatarByUsername` | POST | `api/keys/link_provider_wallet_address_to_avatar_by_username` | – |
| `linkTelosAccountToAvatar` | POST | `api/keys/{id:Guid}/{telosAccountName}` | `id`, `telosAccountName` |
| `linkTelosAccountToAvatar2` | POST | `api/keys` | – |
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
