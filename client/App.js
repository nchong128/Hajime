import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import MyWorkoutsScreen from "./src/screens/MyWorkoutsScreen";
import NewWorkoutScreen from "./src/screens/NewWorkoutScreen";

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
  },
  MyWorkouts: {
  	screen: MyWorkoutsScreen,
    navigationOptions: {
  		header: null
	}
  },
  NewWorkout: {
    screen: NewWorkoutScreen,
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