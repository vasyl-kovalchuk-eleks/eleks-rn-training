import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';
import TouchIDAuthenticationScreen from '../components/TouchIDAuthenticationScreen';
import NFCManagerScreen from '../components/NFCManagerScreen';

export const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  TouchIDAuthentication: { screen: TouchIDAuthenticationScreen },
  NFCManager: { screen: NFCManagerScreen },
}, {
  initialRouteName: "Home"
});

