# Cross-app places and recorded routes

These names describe the qualified WEB4 source client (2.0.18); npm publication and deployment of new server fields are separate gates. The published WEB4 package remains 2.0.17. Use a server revision implementing sourceApp before relying on app attribution.

An authenticated avatar owns the shared visit ledger. Our World and other OASIS apps read the same ledger through OPORTAL. Source-app labels are reported display metadata, not authenticated app identity or permission.

```javascript
const nearby = await oasis.places.nearby({ category, latitude, longitude });
if (nearby.isError) throw new Error(nearby.message);
const observation = {
  id: crypto.randomUUID(), placeId: selectedPlace.id,
  latitude: actualLatitude, longitude: actualLongitude,
  observedUtc: new Date().toISOString(), sourceApp: applicationName
};
const saved = await oasis.places.observe(observation);
if (saved.isError || saved.isWarning) throw new Error(saved.message);
const visits = await oasis.places.visits({ offset: 0, limit: 50 });
if (visits.isError) throw new Error(visits.message);
```

Select a real catalogue place and use actual client coordinates. Observation IDs identify one logical observation; do not change place or sourceApp when replaying an ID. Source labels are 1–256 characters without surrounding whitespace or control characters. Omitted labels retain legacy Our World attribution. Changing labels does not reset physical-place reward eligibility.

Arrival is within 50m and departure at 100m or farther; presence remains unchanged between these boundaries. First visits earn 100 karma, returns 50. An already-active observation or departure can succeed without returning a new visit. visits.result contains items, total and optional nextOffset; records include oApp, karma, firstVisit and catalogue place identity. Stop paging on absent/null nextOffset.

The HTTP client supplies operation headers. For explicit replay identity use oasis.http.request('POST', 'api/places/observe', { body: observation, operationId: observation.id }); retain the same observation and identity. This does not imply automatic retry or device GPS attestation.

Recorded route methods are map.create(writeIntent), map.list({offset,limit}), map.getRoutesById({id}) and map.updateAccess({id,...writeIntent}). Creation needs the canonical operation ID, expected revisions and full route/geometry contract. Access updates use the exact returned revisions. App labels and GPX imports do not prove walked distance or grant rewards.

GeoNFTs, WEB5 hotspots and quests remain authoritative domain records; clients layer them on the map rather than duplicating them in the place-visit ledger. Legacy renderer operations need their configured runtime and are separate from browser MapLibre camera controls.

[Canonical routes and detailed request contract](https://github.com/NextGenSoftwareUK/OASIS/blob/Development/Docs/Devs/API%20Documentation/WEB4%20OASIS%20API/Map-API.md). Native GPX evidence is retained. The new cross-app visit check remains unaccepted after a real catalogue timeout; Unity/device and hosted acceptance remain open.


## JSON map search and manual visit purposes

Development POST api/map/search accepts MapSearchBody JSON with optional query, type, latitude, longitude and radiusKm; it is not a query-string POST. The SDK sends the argument object as that body. Native46151924276qualified SDK REST, actual gRPC SDK and GraphQL search3/3.

map.visitLocation({locationId,purpose:"Walking"}) sends the JSON string value, not a purpose object; native46153459167qualified the actual delivered SDK saved acknowledgement and private persisted purpose1/1. Server save/warning flags remain in response.raw. These are source/native isolated qualifications; hosted rollout and physical-place karma are separate.
