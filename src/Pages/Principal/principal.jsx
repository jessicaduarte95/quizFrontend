import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Cadastrar } from './cadastro';
import { Login } from './login';
import * as Animatable from 'react-native-animatable';
import { BackgroundContainer } from '../../components/Background/Background';
import { Button } from '../../components/Button/Button';
import { Title, SubTitle } from '../../components/Text/Text';
import * as S from './Style/principalStyle';
import { ModalAlert } from './Modais/ModalAlert/ModalAlert';
import { ModalRegister } from './Modais/ModalRegister/ModalRegister';
import { ModalLogin } from './Modais/ModalLogin/ModalLogin';

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
				<Animatable.Image delay={1000} animation="fadeInUp" style={S.Container.Image} source={require('../../../img/astronautaImg5.png')} />
			</View>
			<StatusBar style="auto" />
			{/* <Cadastrar openCadastrar={openCadastrar} handleClose={handleCloseCadastrar} handleOpenCadastrar={handleOpenCadastrar} handleOpenCadastroFeito={handleOpenCadastroFeito} /> */}
			{/* <Login openLogin={openLogin} handleCloseLogin={handleCloseLogin} handleOpenLogin={handleOpenLogin} /> */}
			<ModalLogin open={openLogin} handleClose={handleCloseLogin}/>
			<ModalAlert open={openCadastroFeito} handleClose={handleCloseCadastroFeito} title={'Parabéns Astronauta!'} text={'Seu cadastro foi realizado com sucesso!'} />
			<ModalRegister open={openCadastrar} handleClose={handleCloseCadastrar} />
		</BackgroundContainer>
	);
};
