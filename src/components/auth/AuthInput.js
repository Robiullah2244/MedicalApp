import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../../utils/colors';
import { Fonts } from '../../utils/fonts';
import size from '../../utils/size';

const AuthInput = ({
  placeholder, style
}) => (
  <TextInput
    style={[styles.input, style]}
    placeholder={placeholder}
  />
);

const styles = StyleSheet.create({
  input: {
    width: size(86),
    height: size(17.3),
    backgroundColor: 'white',
    borderColor: colors.blue,
    borderWidth: 2,
    borderRadius: size(5),
    paddingHorizontal: size(8),
    fontFamily: Fonts.NunitoSemiBold,
    fontSize: size(3.6),
    shadowColor: 'rgba(75, 193, 203, 0.15)',
    // shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
  }
});

export default AuthInput;
