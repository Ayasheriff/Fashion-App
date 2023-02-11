import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';

const Header = () => {
  return (
    <View style={Styles.headContainer}>
      <ScrollView horizontal={true}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
          }}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/all.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              ALL
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assets/images/women.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              WOMEN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assets/images/men.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              MEN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assets/images/kids.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              KIDS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assets/images/bride.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              BRIDES
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assets/images/groom.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              GROOMS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assets/images/hairstyle.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              HAIRSTYLE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assets/images/shoes.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              SHOES
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assets/images/nails.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              NAILS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assets/images/makeup.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              MAKEUP
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assets/images/access.png')} />
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(99, 132, 106, 1)',
                fontSize: 10,
              }}>
              ACCESSORIES
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  headContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
});
export default Header;
