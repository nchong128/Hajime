import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {COLOURS, FONTS} from './constants';

const WelcomeScreen = ({navigation}) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'banco-regular' : require('../assets/fonts/Banco-Regular.ttf'),
        'josefinsans-regular' : require('../assets/fonts/JosefinSans-Regular.ttf')
      });
      await setFontLoaded(true);
      setTimeout(() => {navigation.navigate('WelcomeForm')}, 1500);
    };

    loadFonts();
    console.log('Fonts loaded');
  }, []);

  return (
    fontLoaded ? (
        <View style={styles.container}>
            <Text style={styles.title}>HAJIME</Text>
            <Text style={styles.loading}>Loading...</Text>
        </View>
    ) : <AppLoading/>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOURS.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: FONTS.HEADER,
        fontSize: 70,
        position: 'absolute',
        bottom: '75%'
    },
    loading: {
        fontFamily: FONTS.CONTENT,
        fontSize: 25,
        position: 'absolute',
        bottom: '20%'
    }
});

export default WelcomeScreen;