import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import {navigateToAppScreen} from "../actions/actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = ({navigateToAppScreen}) => (
  <View style={styles.container}>
    <Button  title="Back to main app" onPress={navigateToAppScreen}/>
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen 2',
};

export default connect(null, {navigateToAppScreen})(MainScreen);
