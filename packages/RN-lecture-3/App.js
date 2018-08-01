import React from 'react';
import { AppRegistry } from 'react-native';

import { AppNavigator } from './src/navigators/AppNavigator';


class ExampleApp extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

AppRegistry.registerComponent('ExampleApp', () => ExampleApp);

export default ExampleApp;
