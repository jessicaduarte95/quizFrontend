import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { Cadastrar } from './cadastro';
import { Login } from './login';
import * as Animatable from 'react-native-animatable';
import { BackgroundContainer } from '../../components/Background/Background';
import { Button } from '../../components/Button/Button';
import { Title, SubTitle } from '../../components/Text/Text';

export const Principal = () => {
	const styles = StyleSheet.create({
		modalBackGround: {
			flex: 1,
			backgroundColor: 'rgba(0,0,0,0.82)',
			justifyContent: 'center',
			alignItems: 'center'
		},
		loginCadastro: {
			flex: 1,
			paddingTop: 54,
			flexDirection: 'row',
			width: '100%',
			justifyContent: 'center'
		},
		firstPart: {
			justifyContent: 'center',
			paddingBottom: '10%'
		},
		title: {
			color: '#BFBFBE',
			fontSize: 30,
			display: 'flex',
			alignItems: 'flex-end'
		},
		title2: {
			color: '#DADADA',
			fontSize: 80
		},
		backgroundImage: {
			height: '100%',
			width: '100%'
		},
		containerAlert: {
			width: '90%',
			backgroundColor: '#000929',
			borderRadius: 15,
			borderWidth: 1.5,
			borderColor: 'rgba(50,115,220, 0.4)',
			shadowColor: 'rgba(50,115,220, 0.9)',
			shadowOffset: {
				width: 0,
				height: 2
			},
			elevation: 5,
			shadowOpacity: 0.28,
			shadowRadius: 4
		},
		buttonOk: {
			marginVertical: -15,
			marginLeft: 10,
			marginRight: 10,
			marginBottom: 15,
			flexDirection: 'row',
			justifyContent: 'flex-end'
		},
		alertButtom: {
			zIndex: 99,
			borderRadius: 6,
			marginTop: 3,
			marginRight: 8,
			padding: 10
		}
	});

	const [openCadastrar, setOpenCadastrar] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);
	const handleCloseCadastrar = () => setOpenCadastrar(false);
	const handleOpenCadastrar = () => setOpenCadastrar(true);
	const handleCloseLogin = () => setOpenLogin(false);
	const handleOpenLogin = () => setOpenLogin(true);
	const [openCadastroFeito, setOpenCadastroFeito] = useState(false);
	const handleCloseCadastroFeito = () => setOpenCadastroFeito(false);
	const handleOpenCadastroFeito = () => setOpenCadastroFeito(true);

	return (
		<BackgroundContainer>
			<View style={styles.loginCadastro}>
				<Button onPress={handleOpenLogin}>Entrar</Button>
				<Button onPress={handleOpenCadastrar}>Cadastrar</Button>
			</View>
			<Animatable.View animation="slideInRight" style={styles.firstPart}>
				<SubTitle>Quiz</SubTitle>
				<Title>Universo</Title>
			</Animatable.View>
			<View>
				<Animatable.Image delay={1000} animation="fadeInUp" style={{ height: 350, width: 410, marginRight: 20 }} source={require('../../img/astronautaImg5.png')} />
			</View>
			<StatusBar style="auto" />
			<Cadastrar openCadastrar={openCadastrar} handleClose={handleCloseCadastrar} handleOpenCadastrar={handleOpenCadastrar} handleOpenCadastroFeito={handleOpenCadastroFeito} />
			<Login openLogin={openLogin} handleCloseLogin={handleCloseLogin} handleOpenLogin={handleOpenLogin} />
			<Modal visible={openCadastroFeito} transparent={true} onRequestClose={handleCloseCadastroFeito} animationType="fade">
				<View style={styles.modalBackGround}>
					<SafeAreaView style={styles.containerAlert}>
						<View style={{ padding: '5%' }}>
							<Text style={{ color: '#E5E5E5', fontSize: 30 }}>Parabéns Astronauta!</Text>
						</View>
						<View>
							<Text style={{ marginBottom: 25, marginLeft: 15, marginRight: 15, color: '#D0D1CE', fontSize: 19.5 }}>Seu cadastro foi realizado com sucesso!</Text>
						</View>
						<View style={styles.buttonOk}>
							<TouchableOpacity style={styles.alertButtom} onPress={handleCloseCadastroFeito} activeOpacity={0.7}>
								<Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#E5E5E5', fontSize: 17 }}>Ok</Text>
							</TouchableOpacity>
						</View>
					</SafeAreaView>
				</View>
			</Modal>
		</BackgroundContainer>
	);
};
