import React from 'react';
import { FormInput } from "react-native-elements";

export const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <FormInput
    onChangeText={onChange}
    {...restInput}
  />
};
