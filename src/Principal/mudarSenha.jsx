import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';

export const MudarSenha = () => {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'red'
        },
        buttonSair: {
            paddingTop: 50,
            paddingRight: 15,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%'
        },
        title: {
            paddingTop: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%'
        },
        inputContainer: {
            marginTop: 10,
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center'
        },
        input: {
            backgroundColor: "#000720",
            marginBottom: 10,
            paddingLeft: 15,
            marginLeft: 25,
            marginRight: 25,
            height: 65,
            borderWidth: 1,
            borderColor: 'rgba(50,115,220, 0.4)',
            shadowColor: 'rgba(50,115,220, 0.9)',
            shadowOffset: {
                width: 0,
                height: 2
            },
            elevation: 5,
            shadowOpacity: 0.28,
            shadowRadius: 4,
            color: '#D0D1CE',
            fontSize: 18,
            borderRadius: 5,
        },
        content: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 15,
            marginBottom: 15
        },
        buttom: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginRight: 8,
            padding: 10,
            borderWidth: 1,
            borderColor: 'rgba(50,115,220, 0.4)',
            shadowColor: 'rgba(50,115,220, 0.9)',
            shadowOffset: {
                width: 0,
                height: 2
            },
            elevation: 5,
            shadowOpacity: 0.28,
            shadowRadius: 4,
        },
        textButton: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5'
        }
    })

    const [email, setEmail] = useState('');
    const [modalChangePassword, setModalChangePassword] = useState(false);

    const checkUser = async () => {

        await Axios.post(`${process.env.DOMAIN}/checkUser`, {
            email
        }).then((response) => {
            if (response.data) {
                setModalChangePassword(true);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <LinearGradient
            style={styles.container}
            start={{ x: 1, y: 1.9 }}
            end={{ x: 1, y: 0 }}
            locations={[.3, 0.67]}
            colors={['#3544A7', '#000720']}>
            <View style={styles.buttonSair}>
                <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                    <Text style={{ color: '#D0D1CE', fontSize: 17, width: 50, display: 'flex', justifyContent: 'flex-end' }}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={{ fontWeight: 'bold', color: '#E5E5E5', fontSize: 30 }}>Alterar Senha</Text>
            </View>
            <View style={{ padding: 30 }}>
                <Text style={{ color: '#E5E5E5', fontSize: 20, textAlign: 'justify' }}>
                    Para redefinir sua senha, por favor, insira seu endereço de email abaixo.
                </Text>
            </View>
            <TextInput style={styles.input} placeholder="Digite seu Email" placeholderTextColor='#D0D1CE' onChange={(e) => setEmail(e.target.value)}></TextInput>
            <View style={styles.content}>
                <TouchableOpacity style={styles.buttom} activeOpacity={0.7} onPress={checkUser}>
                    <Text style={styles.textButton}>OK</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image style={{ height: 500, width: 350 }} source={require('../../img/astronautaImg6.png')} />
            </View>
        </LinearGradient>
    )
}