import React from 'react'
import { NavigationActions, StackActions } from 'react-navigation'
import { Button, Image, Platform, StyleSheet, Text, View } from 'react-native'
import firebase from 'react-native-firebase';

import { connect } from 'react-redux'

import * as MESSAGE from '../constants/message'
import { logout } from "../actions/auth";

class MainScreen extends React.Component {
  state = { currentUser: null };

  componentDidMount() {
    const { currentUser } = firebase.auth();

    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state;

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button onPress={this.props.logout} title={MESSAGE.LOGOUT}/>
      </View>
    )
  }
};

MainScreen.navigationOptions = {
  title: MESSAGE.HOME,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = () => ({

});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
