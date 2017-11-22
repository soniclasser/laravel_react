import HTTP from '../../utils/Http';
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from '../action-types';

const user = {
  id: null,
  name: null,
  email: null,
  createdAt: null,
  updatedAt: null,
}

const initialState = {
  isAuthenticated: false,
};

const reducer = (state = initialState, { type, payload = null }) => {
  switch(type) {
    case AUTH_LOGIN:
      return login(state, payload);
    case AUTH_LOGOUT:
      return logout(state);
    default:
      return state;
  }
};

function login(state, payload) {
  localStorage.setItem('access_token', payload);
  HTTP.defaults.headers.common['Authorization'] = `Bearer ${payload}`;

  state = Object.assign({}, state, { isAuthenticated: true })

  return state
}

function logout(state) {
  localStorage.removeItem('access_token')

  state = Object.assign({}, state, {
    isAuthenticated: false,
    user,
  })

  return state;
}

export const getAuth = state => state.auth.isAuthenticated;

export default reducer;
