import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Sidebar = () => {
  return (
    <View style={styles.sideContainer}>
      <Text>Side bar</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sideContainer: {
    width: '70%',
    height: '100%',
    backgroundColor: 'white',
  },
});
export default Sidebar;
