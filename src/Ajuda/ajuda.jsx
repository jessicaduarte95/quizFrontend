import react from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export const ModalAjuda = (props) => {
    const { handleCloseModalHelp, openHelp } = props;

    const styles = StyleSheet.create({
        modalBackGround: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.82)',
            justifyContent: 'center',
            alignItems: 'center'
        },
        container: {
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
            shadowRadius: 4,
            margin: 25
        },
        closeButtom: {
            display: 'flex',
            alignItems: 'flex-end',
            paddingRight: 8,
            paddingTop: 8
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            margin: 12,
            marginTop: 0
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            margin: 18,
            marginTop: 0
        }
    })


    return (
        <Modal
            visible={openHelp}
            transparent={true}
            onRequestClose={handleCloseModalHelp}
            animationType='fade'>
            <Animatable.View delay={500} animation="fadeInUp" style={styles.modalBackGround}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.closeButtom}>
                        <TouchableOpacity onPress={handleCloseModalHelp}>
                            <Icon name="close" size={27} color="#D0D1CE" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.title}>
                        <Text style={{ fontWeight: 'bold', color: '#E5E5E5', fontSize: 30 }}>Olá Astronauta!</Text>
                    </View>
                    <View style={styles.text}>
                        <Text style={{ color: '#E5E5E5', fontSize: 18, textAlign: 'center' }}>
                            Prepare-se para embarcar em uma jornada emocionante de conhecimento científico e exploração do universo!
                            Ao iniciar nosso jogo de perguntas, você começará no nível 1. Se você conseguir acertar 6 ou mais questões,
                            desbloqueará o próximo nível e estará pronto para desafios ainda mais fascinantes.
                            Cada pergunta é uma oportunidade de expandir seus horizontes e aprofundar seu entendimento sobre o mundo ao nosso redor.
                            Esteja pronto para explorar conceitos científicos intrigantes e descobrir os mistérios do cosmos.
                            Então, ajuste seu cinto de segurança, pois esta nave do conhecimento está prestes a decolar.
                        </Text>
                    </View>
                </SafeAreaView>
            </Animatable.View>
        </Modal>
    )
}