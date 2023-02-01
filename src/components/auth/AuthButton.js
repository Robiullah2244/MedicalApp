import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';
import { Fonts } from '../../utils/fonts';
import size from '../../utils/size';

const AuthButton = ({
  text, onPress
}) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
    <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
      <Text style={styles.buttonText}>
        {text}
      </Text>
      <Image
        style={styles.forwardImage}
        source={require('../../assets/images/forward.png')}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    width: size(86),
    borderRadius: size(5),
    height: size(17.3),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: size(3.6),
    fontFamily: Fonts.NunitoSemiBold
  },
  forwardImage: {
    width: size(2.6),
    height: size(2),
    resizeMode: 'contain',
    marginTop: size(2),
    marginLeft: size(2),
  }
});

export default AuthButton;
