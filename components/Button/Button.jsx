import React from 'react';
import * as S from './style';
import { TouchableOpacity, Text } from 'react-native';

export const Button = props => {
	const { children, onPress } = props;
	return (
		<TouchableOpacity onPress={onPress} style={S.Button.Button}>
			<Text style={S.Button.Text}>{children}</Text>
		</TouchableOpacity>
	);
};
