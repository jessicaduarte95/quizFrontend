import { useState } from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import  Axios  from 'axios';

export const Login = (props) => {
    const {openLogin, handleCloseLogin} = props;

    const styles = StyleSheet.create({
        container: {
            height: 270,
            marginTop: '40%',
            marginRight: 14,
            marginLeft: 14,
            backgroundColor: '#000929',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: 'rgba(50,115,220, 0.3)',
            shadowColor: 'rgba(50,115,220, 0.9)',
            shadowOffset: {
                width: 0,
                height: 2
            },
            elevation: 5,
            shadowOpacity: 0.28,
            shadowRadius: 4 
        },
        content: {
            marginVertical: -8,
            marginLeft: 15,
            marginRight: 15,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        input: {
            backgroundColor: "#000720",
            marginBottom: 20,
            marginLeft: 15,
            marginRight: 15,
            paddingLeft: 8,
            height: 42,
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
            color: '#D0D1CE'
        },
        saveButtom: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginTop: 8,
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
            shadowRadius: 4 
        },
        actionText: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5'
        }
    })

    const [loginEmail, setLoginEmail] = useState('');
    const [loginSenha, setLoginSenha] = useState('');

    const loginUsuario = async () => {
        await Axios.post(`http://192.168.0.3:5000/login`, {
            loginEmail, loginSenha
        }).then((response) => {
            if(response.data == true){
                console.log("Está funcionando if")
                handleCloseLogin()
                alert('Seja Bem-Vindo ao quiz!')
            }else if (response.data == false){
                console.log("Está funcionando else")
                alert('Seu email ou sua senha estão errados!')
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <Modal
        visible={openLogin}
        transparent={true}
        onRequestClose={handleCloseLogin}
        animationType='fade'>
            <SafeAreaView style={styles.container}>
                <View style={{padding: '5%'}}>
                    <Text style={{color: '#E5E5E5', fontSize: 30}}>Entrar</Text>
                </View>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor='#D0D1CE' onChangeText={text => setLoginEmail(text)}/>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" placeholderTextColor='#D0D1CE' onChangeText={text => setLoginSenha(text)}/>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.saveButtom} activeOpacity={0.7}>
                        <Text style={styles.actionText}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButtom} onPress={loginUsuario} activeOpacity={0.7}>
                        <Text style={styles.actionText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButtom} activeOpacity={0.7}>
                        <Text style={styles.actionText} onPress={handleCloseLogin}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    )
}