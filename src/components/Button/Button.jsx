import React, { forwardRef } from 'react';
import * as S from './style';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

export const Button = props => {
	const { children, onPress } = props;
	return (
		<TouchableOpacity onPress={onPress} style={S.Button.Button}>
			<Text style={S.Button.Text}>{children}</Text>
		</TouchableOpacity>
	);
};

export const CloseSaveButton = forwardRef((props, ref) => {
	const { children, onPress, type, isLoading, ...rest } = props;
	return (
		<TouchableOpacity onPress={onPress} style={S.Button.CloseButton} type={type} {...rest}>
			{!isLoading && <Text style={S.Button.TextButton}>{children}</Text>}
			{isLoading && <ActivityIndicator size="small" color="#0000ff" />}
		</TouchableOpacity>
	);
});

export const ButtonLevel = props => {
	const { children, onPress, ...rest } = props;
	return (
		<TouchableOpacity onPress={onPress} style={S.Button.LevelButton} {...rest}>
			<Text style={S.Button.LevelText}>{children}</Text>
		</TouchableOpacity>
	);
};
