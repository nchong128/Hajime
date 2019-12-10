import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput, ScrollView, Image } from 'react-native';
import {COLOURS, ICON_SIZE} from "../utils/constants";
import { Container, Header, Content, Footer, FooterTab, Button, Text, Badge, Body, Left, Title, Right, Card, CardItem } from 'native-base';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import WeeklyCard from "../components/WeeklyCard";
import RandomFactsCard from "../components/RandomFactsCard";
import MetricsCard from "../components/MetricsCard";

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

			<ScrollView>
				<WeeklyCard/>
				<MetricsCard/>
				<RandomFactsCard/>
			</ScrollView>
			<Footer style={styles.footer}>
				<FooterTab>
					<Button vertical>
						{/*<MatComIcon name="lightbulb" size={ICON_SIZE} style={styles.icon}/>*/}
						<Image
							style={styles.tinyImage}
							source={require('../images/lightbulb.svg')}
						/>
						<Text style={styles.footerText} uppercase={false}>Insights</Text>
					</Button>
					<Button vertical>
						<Image
							style={styles.image}
							source={require('../images/boxing.svg')}
						/>
					</Button>
					<Button vertical onPress={() => navigation.navigate('MyWorkouts')}>
						<Image
							style={styles.tinyImage}
							source={require('../images/dumbbell.svg')}
						/>
						<Text
							style={styles.footerText}
							uppercase={false}
						>
							My Workouts
						</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	)
};

const styles = StyleSheet.create({
	title: {
		fontFamily: 'josefinsans-regular',
		marginLeft: 5
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
		transform: [{rotateX: '90deg'}],
		position: 'relative',
		bottom: 10
	},
	footerText : {
		fontSize: 13,
		textAlign: 'center',
		color: COLOURS.DARK_GRAY,
		fontFamily: 'josefinsans-regular',
		paddingLeft: 0,
		paddingRight: 0
	},
	image : {
		width: 50,
		height: 50
	},
	tinyImage: {
		width: 25,
		height: 25
	}
});

export default HomeScreen;