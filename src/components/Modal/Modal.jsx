import React from 'react';
import * as S from './style';
import { View, Modal, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

export const BasicModal = props => {
	const { children, handleClose, open } = props;

	return (
		<Modal visible={open} onRequestClose={handleClose} transparent={true} animationType="fade">
			<KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={S.Modal.Background}>
				<SafeAreaView style={S.Modal.Container}>
					<View style={S.Modal.Body}>{children}</View>
				</SafeAreaView>
			</KeyboardAvoidingView>
		</Modal>
	);
};
