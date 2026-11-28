# Generated request-body binding

Generated methods retain their existing single argument object. Path parameters go in the URL. For the six scalar-body operations with declared bodyParam metadata, that field becomes the JSON body value and other arguments become query fields. This matches the current WEB4 controller contracts. Other generated operations retain their existing object-body behavior.

For example, map.visitLocation({ locationId, purpose: "Walking" }) sends the JSON string "Walking", while messaging.sendMessageToAvatar({ toAvatarId, content: "hello", messageType: "Direct" }) sends the JSON string "hello" and the messageType query parameter. An omitted optional purpose sends no body.

Local loopback wire regression:1/1 test,8 request shapes, actual HttpClient and generated modules, no external backend or funds. Run `node --test test/body-binding.test.js`. This is source-qualified code, not an npm publication or hosted/backend acceptance claim.


Wallet transfer uses the typed SendWeb4TokenRequest object directly: pass DTO fields as the argument object, not under request. This corrects stale primitive-object metadata; no funds/backend operation is performed by the serialization check. Map.search metadata now names its actual MapSearchBody with JSON filters. Body-bound methods remain in generated docs, and SDK warning/error/save flags live in the full raw envelope.
