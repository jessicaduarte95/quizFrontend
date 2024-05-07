import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { Cadastrar } from './cadastro';
import { Login } from './login';
import * as Animatable from 'react-native-animatable';
import { BackgroundContainer } from '../../components/Background/Background';
import { Button } from '../../components/Button/Button';
import { Title, SubTitle } from '../../components/Text/Text';
import * as S from './Style/principalStyle';

export const Principal = () => {
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
			<View style={S.Container.ContainerButton}>
				<Button onPress={handleOpenLogin}>Entrar</Button>
				<Button onPress={handleOpenCadastrar}>Cadastrar</Button>
			</View>
			<Animatable.View animation="slideInRight" style={S.Container.ContainerTitle}>
				<SubTitle>Quiz</SubTitle>
				<Title>Universo</Title>
			</Animatable.View>
			<View>
				<Animatable.Image delay={1000} animation="fadeInUp" style={{ height: 350, width: 410, marginRight: 20 }} source={require('../../../img/astronautaImg5.png')} />
			</View>
			<StatusBar style="auto" />
			<Cadastrar openCadastrar={openCadastrar} handleClose={handleCloseCadastrar} handleOpenCadastrar={handleOpenCadastrar} handleOpenCadastroFeito={handleOpenCadastroFeito} />
			<Login openLogin={openLogin} handleCloseLogin={handleCloseLogin} handleOpenLogin={handleOpenLogin} />
			{/* <Modal visible={openCadastroFeito} transparent={true} onRequestClose={handleCloseCadastroFeito} animationType="fade">
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
			</Modal> */}
		</BackgroundContainer>
	);
};
