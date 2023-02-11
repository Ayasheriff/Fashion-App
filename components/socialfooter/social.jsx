import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

const Social = () => {
  return (
    <View
      style={{
        width: '80%',
        bottom: 0,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginBottom: 20,
      }}>
      <TouchableOpacity>
        <Image source={require('../../assets/images/google.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/facebook.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/twitter.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/github.jpg')} />
      </TouchableOpacity>
    </View>
  );
};

export default Social;
