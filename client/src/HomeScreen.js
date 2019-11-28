import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {COLOURS} from "./constants";
import { Container, Header, Content, Footer, FooterTab, Button, Text, Badge, Body, Left, Title, Right } from 'native-base';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
	return (
		<Container style={styles.container}>
			<Header style={styles.header}>
				<Left>
					<Title style={styles.title}>Hajime</Title>
				</Left>
				<Right>
					<Button transparent>
						<Ionicon name='ios-person' size={ICON_SIZE} style={styles.topIcon}/>
					</Button>
					<Button transparent>
						<MatComIcon name='dots-vertical' size={ICON_SIZE} style={styles.topIcon}/>
					</Button>
				</Right>
			</Header>
			<Content />
			<Footer style={styles.footer}>
				<FooterTab>
					<Button vertical>
						<MatComIcon name="apps" size={ICON_SIZE} style={styles.icon}/>
						<Text uppercase={false} style={styles.footerText}>Insights</Text>
					</Button>
					<Button vertical>
						<MatComIcon name="boxing-glove" size={ICON_SIZE*3} style={styles.mainIcon}/>
					</Button>
					<Button vertical>
						<MatComIcon name="camera" size={ICON_SIZE} style={styles.icon}/>
						<Text uppercase={false} style={styles.footerText}>My Workouts</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	)
};

const ICON_SIZE = 20;

const styles = StyleSheet.create({
	title: {
		fontFamily: 'josefinsans-regular'
	},
	container: {
		backgroundColor: COLOURS.RED
	},
	header: {
		backgroundColor: COLOURS.RED
	},
	footer: {
		backgroundColor: COLOURS.NEAR_WHITE
	},
	topIcon: {
		color: COLOURS.NEAR_WHITE
	},
	icon: {
		color: COLOURS.DARK_GRAY
	},
	mainIcon: {
		color: COLOURS.DARK_GRAY,
		transform: 'rotate(90deg)',
		position: 'relative',
		bottom: 10
	},
	footerText : {
		fontSize: 13,
		textAlign: 'center',
		color: COLOURS.DARK_GRAY,
		fontFamily: 'josefinsans-regular',
		textTransform: 'none'
	}
});

export default HomeScreen;