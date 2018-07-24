import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { createReactNavigationReduxMiddleware, reduxifyNavigator, } from 'react-navigation-redux-helpers';

import * as routes from '../constants/navigation';

import LoginScreen from '../containers/LoginScreen';
import MainScreen from '../containers/MainScreen';
import ProfileScreen from '../containers/ProfileScreen';


const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator({
  [routes.LOGIN]: { screen: LoginScreen },
  [routes.MAIN]: { screen: MainScreen },
  [routes.PROFILE]: { screen: ProfileScreen },
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
