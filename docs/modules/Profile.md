# Editable self profile

Use `client.profile` for a single revision-checked profile save. This client calls the real WEB4 `GET/PATCH api/avatar/profile` routes through the shared authenticated HTTP transport.

```js
const opened = await client.profile.getProfile();
if (opened.isError) throw new Error(opened.message);
const { profile, providerType } = opened.result;
const saved = await client.profile.applyProfile({
  avatarRevision: profile.avatarRevision,
  detailRevision: profile.detailRevision,
  providerType,
  changes: { title: 'Dr', address: '' }
});
if (saved.isError) throw new Error(saved.message);
const confirmed = saved.result.profile;
```

The bearer identifies the caller; the edit body has no avatar ID. Only title, firstName, lastName, username, email and address are editable. Omitted fields remain unchanged; optional null/empty values clear a field. Username and email cannot be cleared. Use both original revisions and the concrete serving provider from the read.

Update application state from the confirmed response. A conflict requires a fresh read and user review. An uncertain outcome requires reconciliation/reload; do not automatically replay the edit. A saved primary can carry a replication warning in the raw OASIS response. Preserve the operation identifier returned by configured usage admission; explicit operationId/idempotencyKey and per-call bearer token options use the existing HTTP transport.

The API must be deployed with its supported native capabilities and applicable admission configuration. Source implementation is not proof of production availability, billing, deployment or portal acceptance.
