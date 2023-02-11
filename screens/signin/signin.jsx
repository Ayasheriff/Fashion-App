import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import Social from '../../components/socialfooter/social';

const Signin = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.4,
          position: 'absolute',
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 50,
          gap: 80,
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              marginTop: 30,
            }}
            source={require('../../assets/images/logoGreen.png')}
          />
        </View>

        <View>
          <TouchableOpacity
            style={Styles.btnsignin}
            onPress={() => navigation.navigate('signup')}>
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

          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={Styles.btnsignin}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Login
            </Text>
          </TouchableOpacity>
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
});
export default Signin;
