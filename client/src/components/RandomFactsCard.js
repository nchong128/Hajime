import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Card, CardItem, Text} from "native-base";

const RandomFactsCard = (props) => {
	return (
		<Card style={styles.card}>
			<CardItem header >
				<Text style={styles.header}>Random Facts</Text>
			</CardItem>
			<CardItem>
				<Body>
					<Text>Sample Stuff</Text>
				</Body>
			</CardItem>
		</Card>
	)
};

const styles = StyleSheet.create({
	header: {
		fontFamily: 'josefinsans-regular'
	},
	card: {
		marginRight: 16,
		marginLeft: 16,
		borderRadius: 14,
		overflow: 'hidden',
		height: 120
	}
});

export default RandomFactsCard;