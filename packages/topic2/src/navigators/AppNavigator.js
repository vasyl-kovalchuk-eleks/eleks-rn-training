import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, createSwitchNavigator, createTabNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import MainScreen2 from '../components/MainScreen2';
import ProfileTab1Screen from '../components/profile/ProfileTab1Screen';
import ProfileTab2Screen from '../components/profile/ProfileTab2Screen';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Main: {screen: MainScreen},
  Profile: {
    screen: createTabNavigator({
      ProfileTab1: {
        screen: ProfileTab1Screen
      },
      ProfileTab2: {
        screen: ProfileTab2Screen
      }
    }),
    navigationOptions: {
      title: "Profile"
    }

  },
}, {
  initialRouteName: "Main"
});

const RootNavigator = createSwitchNavigator({
  App: MainNavigator,
  Main2: createStackNavigator({
    Main2: {
      screen: MainScreen2
    }
  })
});


const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
