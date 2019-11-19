import React from 'react';
import {Text} from 'react-native';
import {FONTS} from "../constants";

const AppText = ({children}) => (
	<Text style= {{fontFamily: FONTS.CONTENT}}>{children}</Text>
);

export default AppText;