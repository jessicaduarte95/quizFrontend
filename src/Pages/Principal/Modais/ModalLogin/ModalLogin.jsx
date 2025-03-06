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
	const { open, handleClose, dadosUsuario, setDadosUsuario, setTitleAlert, setTextAlert, handleOpenAlert } = props;
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
		await Axios.post(`http://192.168.1.3:8080/user/login`, {
			email: data.email,
			password: data.senha
		})
			.then(response => {
				setDadosUsuario(response.data.result);
			})
			.catch(error => {
				setTitleAlert('Atenção');
				setTextAlert('Seu email e/ou sua senha estão incorretos!');
				handleOpenAlert();
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
				handleClose();
				reset();
				setIsCheck(false);
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
						setIsCheck(false);
					}}>
					Fechar
				</CloseSaveButton>
				<CloseSaveButton onPress={handleSubmit(handleChangePassword)} isLoading={isLoadingChangePassword}>
					Esqueci a senha
				</CloseSaveButton>
				<CloseSaveButton onPress={handleSubmit(onSubmit)} isLoading={isLoading}>
					Entrar
				</CloseSaveButton>
			</View>
		</BasicModal>
	);
};
