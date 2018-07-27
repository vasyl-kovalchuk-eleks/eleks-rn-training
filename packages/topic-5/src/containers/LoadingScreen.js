import React from 'react';

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { initializeApp } from "../actions/auth";

class LoadingScreen extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const mapDispatchToProps = {
  initializeApp
};

LoadingScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(null, mapDispatchToProps)(LoadingScreen);
