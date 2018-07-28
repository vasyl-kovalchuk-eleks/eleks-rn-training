import React from 'react'
import { StackActions } from 'react-navigation'
import { ActivityIndicator, Button, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import * as NAVIGATION from '../constants/navigation'
import { SIGN_IN, SIGN_UP } from '../constants/message';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { renderInput } from "../components/formFields";
import { login } from "../actions/auth";

const LoginForm = props => {
  const { handleSubmit, onSubmit, submitting, onSignUpPress, submitFailed, error } = props;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Field
          autoFocus
          name="email"
          placeholder='Enter Email'
          placeholderTextColor='grey'
          component={renderInput}
          testID="email"
          accessibilityLabel="email"
        />
        <Field
          autoFocus
          secureTextEntry={true}
          name="password"
          placeholder='Enter Password'
          placeholderTextColor='grey'
          component={renderInput}
          testID="password"
          accessibilityLabel="password"
          autoCapitalize="none"
        />

        <View style={{flex: 1, flexDirection: 'column',} }>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={[styles.button, styles.loadingButton]}
              disabled={submitting}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>{SIGN_IN}</Text>
              {submitting && <ActivityIndicator style={styles.loadingIndicator} size='small'/>}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={onSignUpPress}>
              <Text style={styles.buttonText}>{SIGN_UP}</Text>
            </TouchableOpacity>
          </View>
          {submitFailed && <Text style={[styles.errorText]}>{error}</Text>}
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: 'blue',
    height: 40,
    padding: 10,
    marginTop: 30,
  },
  loadingButton: {
    position: 'relative'
  },
  loadingIndicator: {
    position: 'absolute',
    right: 0,
    top: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 40,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    marginTop: 20
  },
  errorText: {
    marginTop: 20,
    fontSize: 14,
    alignSelf: 'center',
    color: 'red',
    backgroundColor: 'transparent',
  },
});

LoginForm.navigationOptions = {
  header: null,
};

const mapDispatchToProps = dispatch => ({
  onSignUpPress() {
    dispatch(StackActions.push({routeName: NAVIGATION.SIGN_UP_SCREEN}))
  },
  onSubmit(credentials) {
    Keyboard.dismiss();
    return dispatch(login(credentials)).catch(error => {
      throw new SubmissionError({_error: error.message});
    })
  },
});

const SignInScreen = compose(
  connect(null, mapDispatchToProps),
  reduxForm({form: 'SignIn'})
)(LoginForm);

export default SignInScreen;
