import { BasicModal } from '../../../../components/Modal/Modal';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import * as S from './style';

export const ModalAlert = props => {
	const { open, handleClose, title, text } = props;
	return (
		<BasicModal open={open} handleClose={handleClose}>
			<Text style={S.ModalBody.Title}>{title}</Text>
			<Text style={S.ModalBody.Text}>{text}</Text>
			<View style={S.ModalBody.ContainerButton}>
				<TouchableOpacity style={S.ModalBody.Button} onPress={handleClose} activeOpacity={0.7}>
					<Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#E5E5E5', fontSize: 17 }}>Ok</Text>
				</TouchableOpacity>
			</View>
		</BasicModal>
	);
};
