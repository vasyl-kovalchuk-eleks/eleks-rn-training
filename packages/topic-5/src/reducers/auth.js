import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SET_USER } from "../constants/actionTypes";

const initialAuthState = {
  isLoggedIn: false,
  user: null
};

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case AUTH_LOGOUT:
      return { ...state, isLoggedIn: false };
    case AUTH_SET_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
}

export default auth;
