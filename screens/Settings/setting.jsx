import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const Settings = ({navigation}) => {
  return (
    <View style={{height: '100%', justifyContent: 'space-between'}}>
      <Navbar />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Image
          style={{width: 150, height: 150}}
          source={require('../../assets/images/setting.png')}
        />
        <Text style={{color: 'black', fontSize: 18}}>
          Update Profile Picture
        </Text>
      </View>
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
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const Styles = StyleSheet.create({
  btnform: {
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    height: 70,
    marginTop: 15,
    borderRadius: 15,
    borderColor: 'rgba(255, 204, 156, 1)',
    borderWidth: 2,
  },
  btnsignin: {
    backgroundColor: 'rgba(99, 132, 106, 1)',
    height: 50,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 10,
  },
});
export default Settings;
