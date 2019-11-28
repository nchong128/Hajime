import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {COLOURS} from "./constants";
import { Container, Header, Content, Footer, FooterTab, Button, Text, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
	return (
		<Container style={styles.container}>
			{/*<Header />*/}
			<Content />
			<Footer style={styles.footer}>
				<FooterTab>
					<Button vertical>
						<Icon name="apps" size={ICON_SIZE} style={styles.icon}/>
						<Text style={styles.footerText}>Insights</Text>
					</Button>
					<Button vertical>
						<Icon name="boxing-glove" size={ICON_SIZE*3} style={styles.icon}/>
					</Button>
					<Button vertical>
						<Icon name="camera" size={ICON_SIZE} style={styles.icon}/>
						<Text style={styles.footerText}>My Workouts</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	)
};

const ICON_SIZE = 20;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLOURS.RED
	},
	footer: {
		backgroundColor: COLOURS.NEAR_WHITE
	},
	icon: {
		color: COLOURS.DARK_GRAY
	},
	footerText : {
		fontSize: 10,
		textAlign: 'center',
		color: COLOURS.DARK_GRAY,
		fontFamily: 'josefinsans-regular'
	}
});

export default HomeScreen;