import React, { forwardRef } from 'react';
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

export const CloseSaveButton = forwardRef((props, ref) => {
	const { children, onPress, type, ...rest } = props;
	return (
		<TouchableOpacity onPress={onPress} style={S.Button.CloseButton} type={type} {...rest}>
			<Text style={S.Button.TextButton}>{children}</Text>
		</TouchableOpacity>
	);
});
