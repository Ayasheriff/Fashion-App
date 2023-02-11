import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Navbar = ({navigation}) => {
  return (
    <View style={Styles.navContainer}>
      <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.mergeOptions('sidebar', {
              Sidebar: {left: {visible: true}},
            })
          }>
          <Image
            style={{marginTop: 10}}
            source={require('../../assets/images/lines.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/user.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image source={require('../../assets/images/bell.png')} />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  navContainer: {
    width: '100%',
    height: 70,
    backgroundColor: 'rgba(99, 132, 106, 1)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
});
export default Navbar;
