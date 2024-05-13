import React from 'react';
import * as S from './style';
import { TextInput } from 'react-native';
import { useController } from 'react-hook-form';

export const Input = props => {
	const { placeholder, control, name, secureTextEntry = false } = props;

	const { field } = useController({ control, name, defaultValue: '' });

	return <TextInput value={field.value} onChangeText={field.onChange} secureTextEntry={secureTextEntry} style={S.Input.Input} placeholder={placeholder} placeholderTextColor="#D0D1CE" />;
};
