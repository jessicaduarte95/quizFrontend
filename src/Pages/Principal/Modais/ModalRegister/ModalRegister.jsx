import React, { useState, useEffect } from 'react';
import { BasicModal } from '../../../../components/Modal/Modal';
import { View } from 'react-native';
import * as S from './style';
import { TitleModal } from '../../../../components/Text/Text';
import { Input } from '../../../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { CloseSaveButton } from '../../../../components/Button/Button';
import { Checkbox } from '../../../../components/Checkbox/Checkbox';
import Axios from 'axios';

export const ModalRegister = props => {
	const { open, handleClose, setTitleAlert, setTextAlert, handleOpenAlert } = props;

	const [isCheck, setIsCheck] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { handleSubmit, control, reset } = useForm();

	const isChecked = () => {
		setIsCheck(!isCheck);
	};

	const onSubmit = async data => {
		setIsLoading(true);
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.email)) {
			setTitleAlert('Atenção!');
			setTextAlert('O email digitado é inválido.');
			reset();
			handleClose();
			handleOpenAlert();
		} else if (data.senha.length < 6 || data.nome.length == 0 || data.email.length == 0) {
			setTitleAlert('Atenção!');
			setTextAlert('A senha deve conter no mínimo 6 caracteres e todos os campos devem ser preenchidos.');
			reset();
			handleClose();
			handleOpenAlert();
		} else if (data.senha.length >= 6 || data.nome.length > 0 || data.email.length > 0) {
			await Axios.post(`http://192.168.1.8:8080/user/create`, {
				name: data.nome,
				email: data.email,
				password: data.senha
			})
				.then(_ => {
						setTitleAlert('Parabéns Astronauta!');
						setTextAlert('Seu cadastro foi realizado com sucesso!');
						reset();
						handleOpenAlert();
				})
				.catch(error => {
					console.log("Erro:", error.response?.data.message);
					if(error.response?.data.message == 'Error: already_registered_user') {
						setTitleAlert('Atenção!');
						setTextAlert('Esse email já existe! Cadastre outro email ou restaure a sua senha.');
						reset();
						handleOpenAlert();
					}
				})
				.finally(() => {
					setIsLoading(false);
					handleClose();
				});
		}
		setIsCheck(false);
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
				<CloseSaveButton onPress={handleSubmit(onSubmit)} isLoading={isLoading}>
					Salvar
				</CloseSaveButton>
			</View>
		</BasicModal>
	);
};
