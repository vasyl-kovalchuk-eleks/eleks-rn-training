import React, { PureComponent } from 'react';

import { Text, TextInput } from 'react-native';

export const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput onChangeText={onChange} {...restInput} />
};
