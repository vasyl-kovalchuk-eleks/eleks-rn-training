import { NavigationActions, StackActions } from "react-navigation";

import * as firebaseService from "../services/auth";

import { LOGIN_SCREEN, MAIN_SCREEN } from "../constants/navigation";
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SET_USER } from "../constants/actionTypes";

export const setUser = user => ({
  type: AUTH_SET_USER,
  payload: user
});

export const onAuthStateChanged = () => dispatch => firebaseService.onAuthStateChanged(user => {
  if(!user) {
    dispatch(setUser(null));
    dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: LOGIN_SCREEN})],
    }));
    return;
  }
  dispatch(setUser(user.toJSON()));
  dispatch(NavigationActions.navigate({routeName: MAIN_SCREEN}));
});

export const login = ({email, password}) => dispatch => {
  return firebaseService.signIn(email, password)
    .then((user) => {
      dispatch({type: AUTH_LOGIN_SUCCESS});
    return user;
  });
};

export const logout = () => dispatch => {
  return firebaseService.logout()
    .then(() => dispatch({type: AUTH_LOGOUT}))
};

export const signUpNewUser = ({email, password}) => () => {
  return firebaseService.createUser(email, password);
};
