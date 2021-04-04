/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react';
import { Text, Image, ScrollView, Dimensions, StyleSheet, FlatList, StatusBar } from 'react-native'
import Feed from './src/Screens/Feed/Feed'
import Login from './src/Screens/Login/Login'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer header>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Feed" component={Feed}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
