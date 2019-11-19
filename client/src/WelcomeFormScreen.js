import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, Text, TextInput} from "react-native";
import AppText from "./components/AppText";
import {FONTS, COLOURS} from "./constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOURS.BACKGROUND,
		alignItems: 'center',
		justifyContent: 'center'
	},
});

const WelcomeFormScreen = ({navigation}) => {
	const [name, setName] = useState('');

	const submitForm = () => {

	};

	return (
		<View style={styles.container}>
			<AppText style={{fontSize: 30}}>Welcome to Hajime</AppText>
			<AppText>Let's start with getting some basic info</AppText>
			<TextInput
				style={{height: 40}}
				placeholder="Your name"
				onChangeText={(text) => setName(text)}
				value={name}
			/>
		</View>

	)
};

export default WelcomeFormScreen;