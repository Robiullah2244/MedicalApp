import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AuthButton from '../../components/auth/AuthButton';
import AuthInput from '../../components/auth/AuthInput';
import colors from '../../utils/colors';
import { Fonts } from '../../utils/fonts';
import size from '../../utils/size';

const Login = ({
    params,
}) => {
  // console.log('size(3.6)', size(3.6));
  return(
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        style={{
          flex: 1,
          backgroundColor: colors.blue
        }}
        source={require('../../assets/images/backgound1.png')}
        // imageStyle={{opacity: 1, borderRadius: 22}}
      >
        <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />

        <View style={styles.upperPortion}>

          <ImageBackground
            style={styles.informationBg}
            source={require('../../assets/images/informationBg.png')}
          >
            <Image
              style={styles.teethImage}
              source={require('../../assets/images/teeth.png')}
            />
            <Text style={styles.informationText}>
              {`Studio\nOdontoiatrico\nPellegrino\nSTP srl`}
            </Text>
            <Text style={styles.poweredByText}>powered by</Text>
          </ImageBackground>

          <Image
            style={styles.logoImage}
            source={require('../../assets/images/logo.png')}
          />
        </View>

        <View style={styles.bottomPortion}>
          
          <AuthInput placeholder={'email'}/>
          <AuthInput placeholder={'password'} style={{marginTop: size(3)}}/>

          <Text style={styles.forgotPass}>
            {'Password dimenticata?'}
          </Text>

          <AuthButton text={'Accedi'} onPress={() => alert('LogIn pressed')}/>

          <View style={{height: size(10)}}/>
        </View>
        
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  forgotPass: {
    alignSelf: 'flex-end',
    marginRight: size(7),
    marginTop: size(2),
    marginBottom: size(4),
    fontFamily: Fonts.NunitoRegular,
    fontSize: size(3.6)
  },
  informationBg: {
    width: size(90),
    height: size(70),
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  teethImage: {
    width: size(50),
    height: size(22),
    resizeMode: 'contain',
    // backgroundColor: 'red',
    position: 'absolute',
    right: size(6),
    top: size(16),
  },
  informationText: {
    color: colors.black,
    fontFamily: Fonts.NunitoMedium,
    fontSize: size(4),
    position: 'absolute',
    top: size(38),
    left: size(9),
    textAlign: 'center',
  },
  logoImage: {
    width: size(30),
    height: size(18),
    resizeMode: 'contain',
    marginTop: size(2),
  },
  poweredByText: {
    color: 'white',
    fontSize: size(3.6),
    fontFamily: Fonts.NunitoRegular,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0
  },
  upperPortion: {
    height: Dimensions.get('screen').height * 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomPortion: {
    height: Dimensions.get('screen').height * 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default Login;
