import React from 'react';
import * as S from './style';
import { TextInput } from 'react-native';

export const Input = props => {
	const { placeholder } = props;
	return (
        <TextInput 
            style={S.Input.Input}
            placeholder={placeholder}
            placeholderTextColor='#D0D1CE'
        />
    );
};