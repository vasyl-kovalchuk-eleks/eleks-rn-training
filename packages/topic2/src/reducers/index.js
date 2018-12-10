import { combineReducers } from 'redux';
import { NavigationActions, StackActions } from 'react-navigation';

import { RootNavigator } from '../navigators/AppNavigator';

function nav(state, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
    case 'Logout':
      nextState = RootNavigator.router.getStateForAction(
        StackActions.reset({
          index: 0,
          actions: [StackActions.push({routeName: "Main"})]
        }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
