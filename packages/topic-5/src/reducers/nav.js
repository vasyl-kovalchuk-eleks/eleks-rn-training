import { NavigationActions, StackActions } from 'react-navigation';

import { RootNavigator } from '../navigators/index';
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "../constants/actionTypes";
import { LOGIN_SCREEN, MAIN_SCREEN, HOME_SCREEN } from "../constants/navigation";

const initNavState = RootNavigator.router.getStateForAction({});

function nav(state = initNavState, action = {}) {
  let nextState;
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: MAIN_SCREEN }),
        state
      );
      break;
    case AUTH_LOGOUT:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: LOGIN_SCREEN }),
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

export default nav;
