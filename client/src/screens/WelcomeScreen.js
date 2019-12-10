import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {COLOURS, FONTS} from '../utils/constants';

const WelcomeScreen = ({navigation}) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [debug] = useState(true);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'banco-regular' : require('../../assets/fonts/Banco-Regular.ttf'),
        'josefinsans-regular' : require('../../assets/fonts/JosefinSans-Regular.ttf')
      });
      await setFontLoaded(true);
      // navigation.navigate('WelcomeForm');
      setTimeout(() => navigation.navigate('Home'), debug ? 0 : 3000);
    };

    loadFonts();
  });

  return (
    <View style={styles.container}>
        <Text style={styles.title}>HAJIME</Text>
        <Text style={styles.loading}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOURS.RED,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: FONTS.HEADER,
        color: COLOURS.NEAR_WHITE,
        fontSize: 55,
        position: 'absolute',
        bottom: '65%'
    },
    loading: {
        fontFamily: FONTS.CONTENT,
        color: COLOURS.NEAR_WHITE,
        fontSize: 25,
        position: 'absolute',
        bottom: '15%'
    }
});

export default WelcomeScreen;