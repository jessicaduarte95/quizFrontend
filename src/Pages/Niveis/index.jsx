import { useNavigation, useRoute } from '@react-navigation/native';
import { BackgroundContainer } from '../../components/Background/Background';
import { Button, ButtonLevel } from '../../components/Button/Button';
import { View, Text, ScrollView, Image } from 'react-native';
import * as S from './style';
import { SubTitle } from '../../components/Text/Text';
import * as Animatable from 'react-native-animatable';

export const Nivel = () => {
	const navigation = useNavigation();
	const route = useRoute('');
	const dadosUsuario = route.params.dadosUsuario;

	return (
		<BackgroundContainer>
			<View style={S.Nivel.Container}>
				<ScrollView>
					<View style={S.Nivel.Header}>
						<View style={S.Nivel.ContainerButton}>
							<Button>Ajuda</Button>
							<Button onPress={() => navigation.navigate('Principal')}>Sair</Button>
						</View>
						<View style={S.Nivel.ContainerTitle}>
							<SubTitle>Olá {dadosUsuario.nome}!</SubTitle>
						</View>
					</View>
					<Animatable.View delay={1000} animation="fadeInUp" style={S.Nivel.Content}>
						<ScrollView style={S.Nivel.ScrollView}>
							<View style={S.Nivel.Levels}>
								<ButtonLevel>Nível 1</ButtonLevel>
								<ButtonLevel>Nível 2</ButtonLevel>
								<ButtonLevel>Nível 3</ButtonLevel>
								<ButtonLevel>Nível 4</ButtonLevel>
								<ButtonLevel>Nível 5</ButtonLevel>
								<ButtonLevel>Nível 6</ButtonLevel>
								<ButtonLevel>Nível 7</ButtonLevel>
								<ButtonLevel>Nível 8</ButtonLevel>
								<ButtonLevel>Nível 9</ButtonLevel>
							</View>
						</ScrollView>
						<View style={S.Nivel.Images}>
							<Image style={{ width: 210, height: 550 }} source={require('../../../img/astronautaImg4.png')} />
						</View>
					</Animatable.View>
				</ScrollView>
			</View>
		</BackgroundContainer>
	);
};
