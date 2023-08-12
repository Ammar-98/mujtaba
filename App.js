import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import DateScreen from './Screens/DateScreen';
import LastScreen from './Screens/LastScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
      <Stack.Screen name="DateScreen" component={DateScreen} options={{headerShown:false}}/>
      <Stack.Screen name="LastScreen" component={LastScreen} options={{headerShown:false}}/>

    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})