import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreen from './src/WelcomeScreen';
import WelcomeFormScreen from './src/WelcomeFormScreen';
import HomeScreen from './src/HomeScreen';

const MainNavigator = createStackNavigator({
  Welcome: {
    screen : WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  WelcomeForm: WelcomeFormScreen,
  Home: HomeScreen,
}, {
  initialRouteName: 'Welcome'
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => <AppContainer/>;

export default App;