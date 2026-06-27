'use strict';

/**
 * Hand-written ergonomic auth wrapper. Built on top of the generated
 * AvatarModule (api/avatar/authenticate, /register, /revoke-token) and
 * manages the SDK's TokenStore automatically on login/logout - this is
 * the one place callers don't have to think about JWTs themselves.
 */
class AuthModule {
  constructor(http, tokenStore, avatarModule) {
    this._http = http;
    this._tokenStore = tokenStore;
    this._avatar = avatarModule;
  }

  /** Returns the currently stored session ({ avatarId, username, email, jwtToken, ... }) or null. */
  getSession() {
    return this._tokenStore.getSession();
  }

  isAuthenticated() {
    return Boolean(this._tokenStore.getToken());
  }

  /**
   * @param {{username: string, password: string}} credentials `username` may also be an email,
   *   OASIS' authenticate endpoint accepts either.
   */
  async login({ username, password }) {
    const res = await this._avatar.authenticate({ Username: username, Password: password });
    if (res.isError || !res.result) return res;

    const avatar = res.result;
    const session = {
      avatarId: avatar.id || avatar.Id,
      username: avatar.username || avatar.Username || username,
      email: avatar.email || avatar.Email,
      firstName: avatar.firstName || avatar.FirstName,
      lastName: avatar.lastName || avatar.LastName,
      jwtToken: avatar.jwtToken || avatar.JwtToken,
      refreshToken: avatar.refreshToken || avatar.RefreshToken
    };

    if (!session.jwtToken) {
      return { isError: true, message: 'Authentication succeeded but no JWT token was returned.', raw: res.raw };
    }

    this._tokenStore.setSession(session);
    return { ...res, session };
  }

  /**
   * @param {object} data title, firstName, lastName, email, password, confirmPassword, avatarType, username (optional)
   */
  async register(data) {
    const res = await this._avatar.register({
      Title: data.title || 'Mx',
      FirstName: data.firstName,
      LastName: data.lastName,
      Email: data.email,
      Password: data.password,
      ConfirmPassword: data.confirmPassword || data.password,
      Username: data.username || data.email,
      AvatarType: data.avatarType || 'User',
      AcceptTerms: data.acceptTerms !== false
    });

    if (res.isError || !res.result) return res;

    const avatar = res.result;
    const session = {
      avatarId: avatar.id || avatar.Id,
      username: avatar.username || avatar.Username,
      email: avatar.email || avatar.Email,
      firstName: avatar.firstName || avatar.FirstName,
      lastName: avatar.lastName || avatar.LastName,
      jwtToken: avatar.jwtToken || avatar.JwtToken,
      refreshToken: avatar.refreshToken || avatar.RefreshToken
    };

    if (session.jwtToken) this._tokenStore.setSession(session);
    return { ...res, session };
  }

  async logout() {
    const token = this._tokenStore.getToken();
    if (token) {
      try {
        await this._avatar.revokeToken({ Token: token });
      } catch {
        // Best-effort - always clear the local session regardless of server response.
      }
    }
    this._tokenStore.clear();
  }
}

module.exports = { AuthModule };
