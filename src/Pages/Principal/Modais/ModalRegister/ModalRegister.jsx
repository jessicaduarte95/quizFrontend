import { BasicModal } from '../../../../components/Modal/Modal';
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import * as S from './style';
import { TitleModal } from '../../../../components/Text/Text';

export const ModalRegister = props => {
	const { open, handleClose } = props;
	return (
		<BasicModal open={open} handleClose={handleClose}>
			<TitleModal>Cadastrar</TitleModal>
		</BasicModal>
	);
};
