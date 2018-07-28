import React from 'react';
import { connect } from 'react-redux';
import { createSwitchNavigator } from 'react-navigation';
import { createReactNavigationReduxMiddleware, reduxifyNavigator, } from 'react-navigation-redux-helpers';

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import * as routes from "../constants/navigation";
import LoadingScreen from "../containers/LoadingScreen";

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createSwitchNavigator({
  [routes.AUTH_LOADING_SCREEN]: {screen: LoadingScreen},
  Auth: AuthStack,
  App: AppStack,
}, {
  initialRouteName: routes.AUTH_LOADING_SCREEN
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
