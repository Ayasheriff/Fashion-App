import React from 'react';
// import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './src/screens/signin/signin';
import Signup from './src/screens/signup/signup';
import Login from './src/screens/login/login';
import Home from './src/screens/Home/home';
import Upload from './src/screens/Upload/Upload';

import Sidebar from './src/components/Sidebar/Sidebar';

import {View, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={Styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="signin" component={Signin} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="sidebar" component={Sidebar} />
          <Stack.Screen name="upload" component={Upload} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};
const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(218, 205, 197, 0.62)',
    height: '100%',
  },
});

export default App;
