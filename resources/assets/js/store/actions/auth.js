/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from '../action-types';

export function authLogin(payload) {
  return {
    type: AUTH_LOGIN,
    payload,
  };
}

export function authLogout() {
  return {
    type: AUTH_LOGOUT,
  }
}
}
