import React from 'react';
import { connect } from 'react-redux';
import { createSwitchNavigator } from 'react-navigation';
import { createReactNavigationReduxMiddleware, reduxifyNavigator, } from 'react-navigation-redux-helpers';
import { Platform } from "react-native";

import UnauthorizedNavigator from "./UnauthorizedNavigator";
import AuthorizedNavigator from "./AuthorizedNavigator";

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createSwitchNavigator({
  UnauthorizedNavigation: UnauthorizedNavigator,
  AuthorizedNavigation: AuthorizedNavigator,
});

const APP_PREFIX = Platform.OS === 'android' ? 'rntrainingtest://rntrainingtest/' : 'rntrainingtest://';
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
