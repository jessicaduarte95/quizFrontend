import react from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export const ModalFinishLevel = (props) => {
    const { openFinishLevel, handleCloseFinishLevel, points, setPoints } = props;

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
            width: 345,
            height: 520
        },
        closeButtom: {
            display: 'flex',
            alignItems: 'flex-end',
            paddingRight: 8,
            paddingTop: 8
        },
        content: {
            flex: 1,
            display: 'flex'
        },
        contentSecond: {
            flex: 1,
            display: 'flex',
            alignItems: 'center'
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 8
        }
    });

    return (
        <Modal
            visible={openFinishLevel}
            transparent={true}
            onRequestClose={handleCloseFinishLevel}
            animationType='fade'>
            <View style={styles.modalBackGround}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.closeButtom}>
                        <TouchableOpacity onPress={() => {handleCloseFinishLevel(), setPoints(0)}}>
                            <Icon name="close" size={27} color="#D0D1CE" />
                        </TouchableOpacity>
                    </View>
                    {points < 6 ?
                        <Animatable.View  delay={1000} animation="fadeInUp" style={styles.contentSecond}>
                            <View style={styles.text}>
                                <Text style={{ color: "#D0D1CE", fontSize: 24, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Astronauta, não foi dessa vez!</Text>
                                <Text style={{ color: "#D0D1CE", fontSize: 20, display: 'flex', textAlign: 'center', marginLeft: 3, marginRight: 3 }}>Para atingir o próximo nível, é necessário acertar, no mínimo, seis questões.</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: '75%', width: '70%'}}>
                                <Image style={{ height: '100%', width: '100%' }} source={require('../../img/astronautaImg3.png')} />
                            </View>
                        </Animatable.View>

                        :
                        <Animatable.View  delay={1000} animation="fadeInUp" style={styles.content}>
                            <View style={styles.text}>
                                <Text style={{ color: "#D0D1CE", fontSize: 30, fontWeight: 'bold', marginBottom: 8 }}>Parabéns, Astronauta!</Text>
                                <Text style={{ color: "#D0D1CE", fontSize: 20, display: 'flex', textAlign: 'center' }}>Você acaba de alcançar o próximo patamar. Que a sorte esteja ao seu lado nessa jornada incrível!</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: '70%' }}>
                                <Image style={{ height: '100%', width: '100%' }} source={require('../../img/astronautaInteiro.png')} />
                            </View>
                        </Animatable.View>
                    }

                </SafeAreaView>
            </View>
        </Modal>
    )
}