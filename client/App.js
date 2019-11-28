import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from './src/WelcomeScreen';
import HomeScreen from './src/HomeScreen';

const MainNavigator = createStackNavigator({
  Welcome: {
    screen : WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen : HomeScreen,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'Welcome'
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => <AppContainer/>;

export default App;