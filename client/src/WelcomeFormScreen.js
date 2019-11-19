import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, Text, TextInput, Switch, Picker, Image, ScrollView, TouchableOpacity} from "react-native";
import AppText from "./components/AppText";
import {FONTS, COLOURS} from "./constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOURS.WHITE,
		padding: 15
	}
});

const GenderChoiceForm = ({isMaleSelected, onChange}) => {
	return (
		<View style={{flexDirection: 'row', justifyContent: 'space-around', height: 250}}>
			<TouchableOpacity
				style={{alignItems: 'center', opacity: isMaleSelected ? 1.0 : 0.2, borderRadius: 10}}
				onPress={() => onChange(true)}
			>
				<View style={{alignItems: 'center'}}>
					<Image
						source={require('./images/lilmac2.bmp')}
						style={{
							width: 100,
							resizeMode: 'contain',
							height:220,
							borderRadius: 10,
							backgroundColor: 'transparent',
							marginBottom: 5
						}}
					/>
					<AppText style={{fontSize: 16, color:COLOURS.DARK_GRAY}}>Male</AppText>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				style={{alignItems: 'center', opacity: !isMaleSelected ? 1.0 : 0.2, borderRadius: 10}}
				onPress={() => onChange(false)}
			>
				<View style={{alignItems: 'center'}}>
					<Image
						source={require('./images/trainer.bmp')}
						style={{
							width: 150,
							resizeMode: 'cover',
							height:220,
							borderRadius: 10,
							backgroundColor: 'transparent',
							marginBottom: 5
						}}
					/>
					<AppText style={{fontSize: 16, color:COLOURS.DARK_GRAY}}>Female</AppText>
				</View>
			</TouchableOpacity>
		</View>
	);
};


const WelcomeFormScreen = ({navigation}) => {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		isMaleGender: true,
	});

	const submitForm = (e) => {
		console.log(form);
	};

	return (
		<ScrollView style={styles.container}>
			<View style={{flex:1, marginBottom: 20}}>
				<AppText style={{fontSize:35, color:COLOURS.DARK_GRAY}}>Welcome to Hajime</AppText>
				<AppText style={{fontSize: 20, color:COLOURS.DARK_GRAY}}>Let's start by getting to know you</AppText>
			</View>

			<View style={{flex: 6, marginBottom: 30}}>
				<View style={{marginBottom: 20}}>
					<AppText style={{fontSize: 16, color:COLOURS.DARK_GRAY}}>First name</AppText>
					<TextInput
						style={{height: 40}}
						placeholder="First name"
						onChangeText={(firstName) => setForm({...form, firstName})}
						value={form.firstName}
					/>
				</View>
				<View style={{marginBottom: 20}}>
					<AppText style={{fontSize: 16, color:COLOURS.DARK_GRAY}}>Last name</AppText>
					<TextInput
						style={{height: 40}}
						placeholder="Last name"
						onChangeText={(lastName) => setForm({...form, lastName})}
						value={form.lastName}
					/>
				</View>
				<View style={{marginBottom: 20}}>
					<AppText style={{fontSize: 16, color:COLOURS.DARK_GRAY}}>Gender</AppText>
					<GenderChoiceForm
						isMaleSelected={form.isMaleGender}
						onChange={(maleSelected) => setForm({...form, isMaleGender: maleSelected})}
					/>
				</View>
			</View>

			<View style={{alignSelf: 'center'}}>
				<Button
					title="Get Started"
					color={COLOURS.GREEN}
					onPress={submitForm}
				/>
			</View>
		</ScrollView>
	);
};



export default WelcomeFormScreen;