import React from 'react';

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { onAuthStateChanged } from "../actions/auth";

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    const { onAuthStateChanged } = this.props;

    // Add listener here
    this.unsubscribe = onAuthStateChanged();
  }

  componentWillUnmount() {
    // Don't forget to unsubscribe when the component unmounts
    this.unsubscribe();
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
  onAuthStateChanged,
};

AuthLoadingScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
