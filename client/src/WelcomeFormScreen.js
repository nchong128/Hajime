import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, Text, TextInput} from "react-native";
import AppText from "./components/AppText";

const styles = StyleSheet.create({
	text: { fontFamily: 'josefinsans-regular'}
});

const WelcomeFormScreen = ({navigation}) => {
	const submitForm = () => {

	};

	return (
		<View>
			<AppText>Welcome Form</AppText>
			<AppText>Let's start by getting your name...</AppText>
			<TextInput
				style={{height: 40}}
				placeholder="Type here!"
				onChangeText={(text) => setName(text)}
				value={name}
			/>
			<Button
				onPress={submitForm}
				style={{width: 20}}
				title="Submit"
			/>
		</View>
	)
};

export default WelcomeFormScreen;