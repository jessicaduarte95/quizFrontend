import React from 'react';
import * as S from './style';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';

export const Checkbox = props => {
	const { onPress, isCheck } = props;

	return (
		<>
			<View style={S.Checkbox.CheckboxContainer}>
				<TouchableOpacity onPress={onPress}>
					{isCheck && <MaterialIcons name="check-box" size={24} color="#D0D1CE" />}
					{!isCheck && <MaterialIcons name="check-box-outline-blank" size={24} color="#D0D1CE" />}
				</TouchableOpacity>
				<Text style={S.Checkbox.Text}>Mostrar Senha</Text>
			</View>
			<Text style={S.Checkbox.Text}>Sua senha deve ter no mínimo 6 caracteres.</Text>
		</>
	);
};
