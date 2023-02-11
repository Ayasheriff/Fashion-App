import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.foContainer}>
      <TouchableOpacity>
        <Image source={require('../../assets/images/favourite.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('upload')}>
        <Image source={require('../../assets/images/upload.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Image source={require('../../assets/images/home.png')} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/rent.png')} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/sale.png')} />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  foContainer: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    borderColor: 'rgba(99, 132, 106, 1)',
    borderWidth: 2,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 8,
    position: 'relative',
    bottom: 0,
  },
});
export default Footer;
