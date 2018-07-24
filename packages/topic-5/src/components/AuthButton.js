import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

const AuthButton = ({ logout, loginScreen, isLoggedIn }) => (
  <Button
    title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
    onPress={isLoggedIn ? logout : loginScreen}
  />
);

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired,
};

export default AuthButton;
