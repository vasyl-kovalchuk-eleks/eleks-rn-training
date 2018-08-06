import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';
import TouchIDAuthenticationScreen from '../components/TouchIDAuthenticationScreen';
import NFCManagerScreen from '../components/NFCManagerScreen';
import CameraScreen from '../components/CameraScreen';
import SensorsScreen from '../components/SensorsScreen';
import SoundScreen from '../components/SoundScreen';

export const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  TouchIDAuthentication: { screen: TouchIDAuthenticationScreen },
  NFCManager: { screen: NFCManagerScreen },
  Camera: { screen: CameraScreen },
  Sensors: { screen: SensorsScreen },
  Sound: { screen: SoundScreen },
}, {
  initialRouteName: "Home"
});

