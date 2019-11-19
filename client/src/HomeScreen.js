import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
	return (
		<View>
			<Text>Welcome {navigation.getParam('name', 'undefined')}</Text>
		</View>
	)
};

export default HomeScreen;