import React, { useState, useEffect } from 'react';
import { BasicModal } from '../../../../components/Modal/Modal';
import { View } from 'react-native';
import * as S from './style';
import { TitleModal } from '../../../../components/Text/Text';
import { Input } from '../../../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { CloseSaveButton } from '../../../../components/Button/Button';
import { Checkbox } from '../../../../components/Checkbox/Checkbox';

export const ModalRegister = props => {
	const { open, handleClose } = props;

	const [isCheck, setIsCheck] = useState(false);
	const { handleSubmit, control, reset } = useForm();

	const isChecked = () => {
		setIsCheck(!isCheck);
	};

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
			<Input name="senha" control={control} placeholder={'Senha'} secureTextEntry={!isCheck} />
			<Checkbox onPress={isChecked} isCheck={isCheck} />
			<View style={S.ModalRegister.ContainerButton}>
				<CloseSaveButton
					onPress={() => {
						handleClose();
						reset();
					}}>
					Fechar
				</CloseSaveButton>
				<CloseSaveButton onPress={handleSubmit(onSubmit)}>Salvar</CloseSaveButton>
			</View>
		</BasicModal>
	);
};
