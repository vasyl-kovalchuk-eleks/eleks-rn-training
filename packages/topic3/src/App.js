import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import { TransitionConfiguration } from './utils/transitions';
import DirectionsScreen from './screens/DirectionsScreen';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import AnimationScreen from './screens/AnimationScreen';

const RootNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null,
    })
  },
  Directions: {
    screen: DirectionsScreen,
    navigationOptions: () => ({
      title: 'FlatList Example'
    })
  },
  Durer: {
    screen: ImageScreen,
    navigationOptions: () => ({
      title: 'Durer\'s Picture'
    }),
  },
  Animation: {
    screen: AnimationScreen,
    navigationOptions: () => ({
      title: 'Animation',
    })
  } 
},
  {
    initialRouteName: 'Home',
    // transitionConfig: TransitionConfiguration
  }
);

export default class App extends Component {
  render() {
    return <RootNavigation />;
  }
}