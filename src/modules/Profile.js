'use strict';

/** Self-only revision-checked editable profile API. Account identity comes from the bearer token. */
class ProfileModule {
  constructor(http) {
    this._http = http;
  }

  getProfile({ providerType = 'Default', token } = {}) {
    return this._http.get('api/avatar/profile', { query: { providerType }, token });
  }

  applyProfile({ avatarRevision, detailRevision, changes, providerType }, { operationId, idempotencyKey, token } = {}) {
    return this._http.request('PATCH', 'api/avatar/profile', {
      body: { avatarRevision, detailRevision, changes, providerType },
      operationId, idempotencyKey, token
    });
  }
}

module.exports = { ProfileModule };
