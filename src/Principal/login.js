import { useState } from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import  Axios  from 'axios';

export const Login = (props) => {
    const {openLogin, handleCloseLogin, handleOpenLogin} = props;

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
        },
        containerAlert: {
            height: 212,
            marginTop: '50%',
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
        alertButtom: {
            zIndex: 99,
            borderRadius: 6,
            marginTop: 3,
            marginRight: 8,
            padding: 10
        },
        buttonOk: {
            marginVertical: -15,
            marginLeft: 10,
            marginRight: 10,
            flexDirection: 'row',
            justifyContent: 'flex-end'
        }
    })

    const [loginEmail, setLoginEmail] = useState('');
    const [loginSenha, setLoginSenha] = useState('');
    const [openAlert, setOpenAlert] = useState(false);
    const handleCloseAlert = () => setOpenAlert(false);
    const handleOpenAlert = () => setOpenAlert(true);

    const loginUsuario = async () => {
        await Axios.post(`http://192.168.0.3:5000/login`, {
            loginEmail, loginSenha
        }).then((response) => {
            if(response.data == true){
                handleCloseLogin()
                alert('Seja Bem-Vindo ao quiz!')
            }else if (response.data == false){
                handleCloseLogin();
                handleOpenLogin();
                handleOpenAlert();
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
            <Modal
             visible={openAlert}
             transparent={true}
             onRequestClose={handleCloseAlert}
             animationType='fade'>
                <SafeAreaView style={styles.containerAlert}>
                    <View style={{padding: '5%'}}>
                        <Text style={{color: '#E5E5E5', fontSize: 30}}>Atenção</Text>
                    </View>
                    <View>
                        <Text style={{ marginBottom: 35, marginLeft: 15, marginRight: 15, color: '#D0D1CE', fontSize: 17}}>
                            Seu email e/ou sua senha estão incorretos!
                        </Text>
                    </View>
                    <View style={styles.buttonOk}>
                        <TouchableOpacity style={styles.alertButtom} onPress={handleCloseAlert} activeOpacity={0.7}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#E5E5E5',  fontSize: 17}}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </Modal>
    )
}