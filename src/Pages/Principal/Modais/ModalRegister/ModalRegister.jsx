import { BasicModal } from '../../../../components/Modal/Modal';
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import * as S from './style';
import { TitleModal } from '../../../../components/Text/Text';
import { Input } from '../../../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { CloseSaveButton } from '../../../../components/Button/Button';

export const ModalRegister = props => {
	const { open, handleClose } = props;

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const onSubmit = data => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<BasicModal open={open} handleClose={handleClose}>
				<TitleModal>Cadastrar</TitleModal>
				<Input {...register('nome')} placeholder={'Nome'} />
				<Input {...register('email')} placeholder={'Email'} />
				<View style={S.ModalRegister.ContainerButton}>
					<CloseSaveButton>Salvar</CloseSaveButton>
					<CloseSaveButton>Fechar</CloseSaveButton>
				</View>
			</BasicModal>
		</form>
	);
};
