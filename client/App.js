import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import MyWorkoutsScreen from "./src/screens/MyWorkoutsScreen";
import NewWorkoutScreen from "./src/screens/NewWorkoutScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const MainNavigator = createStackNavigator({
  Welcome: { screen: WelcomeScreen},
  Home: { screen: HomeScreen},
  MyWorkouts: { screen: MyWorkoutsScreen},
  NewWorkout: { screen: NewWorkoutScreen},
  Profile: { screen: ProfileScreen}
}, {
  initialRouteName: 'Welcome',
  defaultNavigationOptions: {
    header: null
  }
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => <AppContainer/>;

export default App;