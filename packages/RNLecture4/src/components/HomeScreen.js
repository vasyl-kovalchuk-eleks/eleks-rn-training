import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

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

const HomeScreen = ({ navigation }) => (
  <View style={ styles.container }>
    <Text style={ styles.welcome }>
      Hello word!
    </Text>
    <Button
      onPress={ () => navigation.navigate('TouchIDAuthentication') }
      title="Face ID/Touch ID authentication"
    />
  </View>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
