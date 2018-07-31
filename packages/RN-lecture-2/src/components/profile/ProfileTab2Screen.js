import React from 'react';
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

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Profile Tab 2 Screen
    </Text>
  </View>
);

ProfileScreen.navigationOptions = {
  title: 'Profile Tab 2',
};

export default ProfileScreen;
