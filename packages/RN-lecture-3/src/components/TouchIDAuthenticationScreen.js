import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const TouchIDAuthenticationScreen = () => (
  <View style={ styles.container }>
    <Text style={ styles.welcome }>
      Touch ID authentication
    </Text>
  </View>
);

TouchIDAuthenticationScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

TouchIDAuthenticationScreen.navigationOptions = {
  title: 'Touch ID authentication',
};

export default TouchIDAuthenticationScreen;
