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
  buttonsContainer: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 250,
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
      Welcome Lecture 4
    </Text>
    <View style={styles.buttonsContainer}>
      <Button
        onPress={ () => navigation.navigate('NFCManager') }
        title="NFC Manager"
      />
      <Button
        onPress={ () => navigation.navigate('TouchIDAuthentication') }
        title="Face ID/Touch ID authentication"
      />
      <Button
        onPress={ () => navigation.navigate('Camera') }
        title="Camera"
      />
      <Button
        onPress={ () => navigation.navigate('Sensors') }
        title="Sensors"
      />
      <Button
        onPress={ () => navigation.navigate('Sound') }
        title="Sound"
      />
    </View>
  </View>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
