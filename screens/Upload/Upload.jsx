import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/footer';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Upload = () => {
  return (
    <View style={{height: '100%'}}>
      <Navbar />
      <View style={{justifyContent: 'space-between'}}>
        <View style={Styles.uploadView}>
          <Text style={Styles.uploadText}>Uploading your photo here</Text>
        </View>
        <Text
          style={{
            color: 'rgba(99, 132, 106, 1)',
            width: '65%',
            textAlign: 'center',
          }}>
          Add your own picture here{' '}
        </Text>
        <View style={{marginTop: 10}}>
          <TouchableOpacity style={Styles.btnAdd}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
                marginTop: 10,
              }}>
              Add
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.btnAdd}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
                marginTop: 10,
              }}>
              Upload
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 0}}>
        <Footer />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  uploadView: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'rgba(255, 204, 156, 1)',
    borderWidth: 2,
    width: '80%',
    height: 318,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  uploadText: {
    textAlign: 'center',
  },
  btnAdd: {
    backgroundColor: 'rgba(99, 132, 106, 1)',
    width: '80%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 10,
  },
});
export default Upload;
