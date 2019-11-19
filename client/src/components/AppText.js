import React from 'react';
import {Text} from 'react-native';
import {FONTS} from "../constants";

const AppText = ({children, style}) => {
	return (
		<Text style={{fontFamily: FONTS.CONTENT, ...style}}>{children}</Text>
	);
};

export default AppText;