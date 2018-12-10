import React from 'react'
import { NavigationActions, StackActions } from 'react-navigation'
import { Button, Image, Platform, StyleSheet, Text, View } from 'react-native'

import { connect } from 'react-redux'

import * as MESSAGE from '../constants/message'
import { logout } from "../actions/auth";

const ProfileScreen = ({ user, logout }) => (
  (
    <View style={styles.container}>
      <Text>
        Hi {user && user.email}!
        {user.emailVerified
          ? `Your account have been successfully verified!!!`
          : `Your account haven't been verified yet! Please check the email to verify account!`
        }
      </Text>
      <Button onPress={logout} title={MESSAGE.LOGOUT}/>
    </View>
  )
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
