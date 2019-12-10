import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Button, Container, FooterTab, Header, Left, Body, Right, Title} from 'native-base';
import Ionicon from "react-native-vector-icons/Ionicons";
import MatComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {COLOURS, ICON_SIZE} from "../utils/constants";

const MyWorkoutsScreen = ({navigation}) => {
	return (
		<Container style={styles.container}>
			<Header style={styles.header}>
				<Left>
					<Button transparent onPress={() => navigation.navigate('Home')}>
						<Ionicon name='md-arrow-back' size={ICON_SIZE} style={styles.topIcon}/>
					</Button>
				</Left>
				<Body>
					<Title style={styles.title}>My Workouts</Title>
				</Body>
				<Right>
					<Button transparent onPress={() => navigation.navigate('NewWorkout')}>
						<MatComIcon name='plus' size={ICON_SIZE} style={styles.topIcon}/>
					</Button>
				</Right>
			</Header>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLOURS.WHITE
	},
	header: {
		backgroundColor: COLOURS.RED
	},
	title: {
		fontFamily: 'josefinsans-regular',
		marginLeft: 5
	},
	topIcon: {
		color: COLOURS.NEAR_WHITE
	},
});

export default MyWorkoutsScreen;