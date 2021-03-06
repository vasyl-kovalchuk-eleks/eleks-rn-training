import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Keyboard, StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { renderInput } from "../components/formFields";
import { signUpNewUser } from "../actions/auth";
import { SIGN_UP, SUBMIT } from "../constants/message";

const required = value => value ? undefined : 'Required';

const SignUpForm = props => {
  const { handleSubmit, onSubmit, submitting, invalid, submitFailed, error } = props;

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
          validate={required}
        />
        <Field
          autoFocus
          name="password"
          placeholder='Enter Password'
          placeholderTextColor='grey'

          component={renderInput}
          testID="password"
          accessibilityLabel="password"
          autoCapitalize="none"
          validate={required}
        />
        <TouchableOpacity
          disabled={submitting || invalid}
          onPress={handleSubmit(onSubmit)}>
           <Text style={styles.button}>{SUBMIT}</Text>
          {submitting && <ActivityIndicator size="small" />}
        </TouchableOpacity>
        {submitFailed && <Text style={[styles.errorText]}>{error}</Text>}
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
    marginTop: 30,
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
  },
  errorText: {
    marginTop: 20,
    fontSize: 14,
    alignSelf: 'center',
    color: 'red',
    backgroundColor: 'transparent',
  },
});

const mapDispatchToProps = dispatch => ({
  onSubmit: credentials => {
    Keyboard.dismiss();
    return dispatch(signUpNewUser(credentials)).catch(error => {
      throw new SubmissionError({ _error: error.message});
    })
  },
});

const SignUpScreen = compose(
  connect(null, mapDispatchToProps),
  reduxForm({form: 'SignUp'})
)(SignUpForm);

SignUpScreen.navigationOptions = {
  title: SIGN_UP
};

export default SignUpScreen;

