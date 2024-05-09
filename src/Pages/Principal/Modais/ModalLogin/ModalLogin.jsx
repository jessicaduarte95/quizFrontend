import React, { useState, useEffect } from 'react';
import { BasicModal } from '../../../../components/Modal/Modal';
import { View } from 'react-native';
import * as S from './style';
import { TitleModal } from '../../../../components/Text/Text';
import { Input } from '../../../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { CloseSaveButton } from '../../../../components/Button/Button';
import { Checkbox } from '../../../../components/Checkbox/Checkbox';

export const ModalLogin = props => {
	const { open, handleClose } = props;

	const [isCheck, setIsCheck] = useState(false);
	const { handleSubmit, control, reset } = useForm();

	const isChecked = () => {
		setIsCheck(!isCheck);
	};

	const handleChangePassword = () => {};

	const onSubmit = data => {
		handleClose();
		console.log('Dados: ', data);
		reset();
	};

	return (
		<BasicModal open={open} handleClose={handleClose}>
			<TitleModal>Entrar</TitleModal>
			<Input name="email" control={control} placeholder={'Email'} />
			<Input name="senha" control={control} placeholder={'Senha'} secureTextEntry={!isCheck} />
			<Checkbox onPress={isChecked} isCheck={isCheck} />
			<View style={S.ModalLogin.ContainerButton}>
				<CloseSaveButton
					onPress={() => {
						handleClose();
						reset();
					}}>
					Fechar
				</CloseSaveButton>
				<CloseSaveButton onPress={handleSubmit(handleChangePassword)}>Esqueci minha senha</CloseSaveButton>
				<CloseSaveButton onPress={handleSubmit(onSubmit)}>Entrar</CloseSaveButton>
			</View>
		</BasicModal>
	);
};
