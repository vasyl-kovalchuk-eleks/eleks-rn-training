import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';
import {connect} from "react-redux";
import {switchToAnotherMainScreen} from "../actions/actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = ({switchToAnotherMainScreen}) => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
    <Button title="Switch screen" onPress={switchToAnotherMainScreen}/>
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default connect(null, {switchToAnotherMainScreen})(MainScreen);
