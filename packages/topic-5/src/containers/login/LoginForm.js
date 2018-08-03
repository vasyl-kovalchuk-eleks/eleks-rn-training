import React from 'react'
import { StackActions } from 'react-navigation'
import {
  ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity,
  View
} from 'react-native'

import * as NAVIGATION from '../../constants/navigation'
import { SIGN_IN, SIGN_UP } from '../../constants/message';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { renderInput } from "../../components/formFields";
import { login } from "../../actions/auth";
import { FormLabel } from "react-native-elements";

import Icon from 'react-native-vector-icons/FontAwesome';
const required = value => value ? undefined : 'Required';

const LoginForm = props => {
  const { handleSubmit, onSubmit, submitting, invalid, onSignUpPress, submitFailed, error } = props;

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <FormLabel>Email</FormLabel>
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
      <FormLabel>Password</FormLabel>
      <Field
        autoFocus
        name="password"
        placeholder='Enter Password'
        component={renderInput}
        testID="password"
        accessibilityLabel="password"
        autoCapitalize="none"
        validate={required}
        returnKeyType={'done'}
        autoCorrect={false}
        leftIcon={
          <Icon
            name='lock'
            color='rgba(171, 189, 219, 1)'
            size={25}
          />
        }
        containerStyle={{marginVertical: 10}}
        onChangeText={(password) => this.setState({password})}
        inputStyle={{marginLeft: 10, color: 'white'}}
        secureTextEntry={true}
        keyboardAppearance="light"
        keyboardType="default"
        blurOnSubmit={true}
        placeholderTextColor="white"
      />

      <View style={{flex: 1, flexDirection: 'column',} }>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={[styles.button, styles.loadingButton]}
            disabled={invalid || submitting}
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
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
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

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({form: 'SignIn'})
)(LoginForm);
