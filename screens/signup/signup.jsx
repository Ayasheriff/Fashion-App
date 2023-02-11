import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Social from '../../components/socialfooter/social';

const Signup = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require('../../assets/images/background2.jpg')}
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.4,
          position: 'absolute',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('signin')}>
          <Image source={require('../../assets/images/backicon.png')} />
        </TouchableOpacity>
        <Image
          style={{
            width: 50,
            height: 50,
            alignSelf: 'center',
          }}
          source={require('../../assets/images/logoGreen.png')}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
        }}>
        <View>
          <TextInput
            style={Styles.btnform}
            placeholder="Username"
            placeholderTextColor="rgba(99, 132, 106, 0.4)"
            keyboardType="decimal-pad"
          />
          <TextInput
            style={Styles.btnform}
            placeholder="Email"
            placeholderTextColor="rgba(99, 132, 106, 0.4)"
            keyboardType="email-address"
          />
          <TextInput
            style={Styles.btnform}
            placeholder="Password"
            placeholderTextColor="rgba(99, 132, 106, 0.4)"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={Styles.btnsignin}
            onPress={() => navigation.navigate('home')}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Signup
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: 'black'}}>I have already an account</Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text
                style={{
                  color: 'rgba(99, 132, 106, 1)',
                  textDecorationLine: 'underline',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Social />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(218, 205, 197, 0.62)',
    height: '100%',
    position: 'relative',
    justifyContent: 'space-between',
  },
  btnsignin: {
    backgroundColor: 'rgba(99, 132, 106, 1)',
    height: 50,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  btnform: {
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    height: 70,
    marginTop: 20,
    borderRadius: 15,
    borderColor: 'rgba(255, 204, 156, 1)',
    borderWidth: 2,
  },
});
export default Signup;
