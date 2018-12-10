import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

const propTypes = {
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  keyboardType: PropTypes.oneOf([
    'default',
    'numeric',
    'email-address',
    'phone-pad',
  ]),
  style: TextInput.propTypes.style,
  editable: PropTypes.bool,
  testID: PropTypes.string,
  accessibilityLabel: PropTypes.string,
};

const defaultProps = {
  keyboardType: 'default',
};

const Input = props => {
  return (
    <TextInput
      autoCorrect={false}
      underlineColorAndroid="transparent"
      {...props}
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export { Input };
