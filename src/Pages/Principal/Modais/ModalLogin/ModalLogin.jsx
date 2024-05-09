import React, { useState, useEffect } from 'react';
import { BasicModal } from '../../../../components/Modal/Modal';
import { View } from 'react-native';
import * as S from './style';
import { TitleModal } from '../../../../components/Text/Text';
import { Input } from '../../../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { CloseSaveButton } from '../../../../components/Button/Button';
import { Checkbox } from '../../../../components/Checkbox/Checkbox';
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';

export const ModalLogin = props => {
	const { open, handleClose, dadosUsuario, setDadosUsuario } = props;
	const navigation = useNavigation();
	const [isCheck, setIsCheck] = useState(false);
	const { handleSubmit, control, reset } = useForm();
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingChangePassword, setIsLoadingChangePassword] = useState(false);

	const isChecked = () => {
		setIsCheck(!isCheck);
	};

	const handleChangePassword = () => {
		setIsLoadingChangePassword(true);
		handleClose();
		reset();
		navigation.navigate('MudarSenha');
		setIsLoadingChangePassword(false);
	};

	const onSubmit = async data => {
		setIsLoading(true);
		await Axios.post(`${process.env.DOMAIN}/login`, {
			loginEmail: data.email,
			loginSenha: data.senha
		})
			.then(response => {
				if (response.data[0] == true) {
					setDadosUsuario(response.data[1]);
				} else {
					// handleOpenAlert();
				}
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
				handleClose();
				reset();
			});
	};

	useEffect(() => {
		dadosUsuario;
		if (dadosUsuario !== '') {
			navigation.navigate('Nivel', { dadosUsuario: dadosUsuario });
		}
	}, [dadosUsuario]);

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
				<CloseSaveButton onPress={handleSubmit(handleChangePassword)} isLoading={isLoadingChangePassword}>
					Esqueci minha senha
				</CloseSaveButton>
				<CloseSaveButton onPress={handleSubmit(onSubmit)} isLoading={isLoading}>
					Entrar
				</CloseSaveButton>
			</View>
		</BasicModal>
	);
};
