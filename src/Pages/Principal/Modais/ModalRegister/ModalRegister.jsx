import { BasicModal } from '../../../../components/Modal/Modal';
import { View } from 'react-native';
import * as S from './style';
import { TitleModal } from '../../../../components/Text/Text';
import { Input } from '../../../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { CloseSaveButton } from '../../../../components/Button/Button';

export const ModalRegister = props => {
	const { open, handleClose } = props;

	const { handleSubmit, control, reset } = useForm();

	const onSubmit = data => {
		handleClose();
		console.log('Dados: ', data);
		reset();
	};

	return (
		<BasicModal open={open} handleClose={handleClose}>
			<TitleModal>Cadastrar</TitleModal>
			<Input name="nome" control={control} placeholder={'Nome'} />
			<Input name="email" control={control} placeholder={'Email'} />
			<View style={S.ModalRegister.ContainerButton}>
				<CloseSaveButton onPress={handleClose}>Fechar</CloseSaveButton>
				<CloseSaveButton onPress={handleSubmit(onSubmit)}>Salvar</CloseSaveButton>
			</View>
		</BasicModal>
	);
};
