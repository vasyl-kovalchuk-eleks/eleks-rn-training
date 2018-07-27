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
          secureTextEntry
          name="password"
          placeholder='Enter Password'
          placeholderTextColor='grey'
          component={renderInput}
          testID="password"
          accessibilityLabel="password"
          autoCapitalize="none"
        />
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{width: 100}}
            disabled={submitting}
            onPress={handleSubmit(onSubmit)}>
            {submitting
              ? <ActivityIndicator size="small" />
              : <Text style={styles.button}>{SIGN_IN}</Text>
            }
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: 100}}
            onPress={onSignUpPress}>
              <Text style={styles.button}>{SIGN_UP}</Text>
          </TouchableOpacity>
        </View>
        {submitFailed && <Text style={styles.text}>{error}</Text>}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    lineHeight: 30,
    height: 40,
    padding: 5,
    marginTop: 20,
    textAlign: 'center',
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
  }
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
