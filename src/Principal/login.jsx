import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';

export const Login = (props) => {
    const { openLogin, handleCloseLogin, handleOpenLogin } = props;
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        modalBackGround: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.82)',
            justifyContent: 'center',
            alignItems: 'center'
        },
        container: {
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
        content: {
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 17,
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
            width: '90%',
            height: 198,
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
        alertButtom: {
            marginRight: '5%',
        },
        buttonOk: {
            height: '15%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginVertical: -11,
        },
        containerLoading: {
            flex: 1,
            justifyContent: "center"
        },
        horizontalLoading: {
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10
        }
    })

    const [loginEmail, setLoginEmail] = useState('');
    const [loginSenha, setLoginSenha] = useState('');
    const [openAlert, setOpenAlert] = useState(false);
    const handleCloseAlert = () => setOpenAlert(false);
    const handleOpenAlert = () => setOpenAlert(true);
    const [dadosUsuario, setDadosUsuario] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingMudarSenha, setLoadingMudarSenha] = useState(false);

    const loginUsuario = async () => {
        setLoading(true);
        await Axios.post(`${process.env.DOMAIN}/login`, {
            loginEmail, loginSenha
        }).then((response) => {
            if (response.data[0] == true) {
                setDadosUsuario(response.data[1])
                handleCloseLogin()
            } else {
                handleCloseLogin();
                handleOpenLogin();
                handleOpenAlert();
            }
        }).catch((error) => {
            console.log(error)
        })
        setLoginEmail('');
        setLoginSenha('');
        setLoading(false);
    }

    const mudarSenha = () => {
        setLoadingMudarSenha(true);
        handleCloseLogin();
        navigation.navigate('MudarSenha')
        setLoadingMudarSenha(false);
    }

    useEffect(() => {
        dadosUsuario
        if (dadosUsuario !== "") {
            navigation.navigate('Nivel', { dadosUsuario: dadosUsuario })
        }
    }, [dadosUsuario])

    return (
        <Modal
            visible={openLogin}
            transparent={true}
            onRequestClose={handleCloseLogin}
            animationType='fade'>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? 'padding' : 'height'}
                style={styles.modalBackGround}>
                <SafeAreaView style={styles.container}>
                    <View style={{ padding: '5%' }}>
                        <Text style={{ color: '#E5E5E5', fontSize: 30 }}>Entrar</Text>
                    </View>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor='#D0D1CE' onChangeText={text => setLoginEmail(text)} />
                    <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" placeholderTextColor='#D0D1CE' onChangeText={text => setLoginSenha(text)} />
                    <View style={styles.content}>
                        {loadingMudarSenha == true ?
                            <View style={[styles.containerLoading, styles.horizontalLoading]}>
                                <ActivityIndicator size="small" color="#0000ff" />
                            </View>
                            :
                            <TouchableOpacity style={styles.saveButtom} activeOpacity={0.7} onPress={mudarSenha}>
                                <Text style={styles.actionText}>Esqueci minha senha</Text>
                            </TouchableOpacity>
                        }
                        <TouchableOpacity style={styles.saveButtom} onPress={loginUsuario} activeOpacity={0.7}>
                            {loading == true ?
                                <View style={[styles.containerLoading, styles.horizontalLoading]}>
                                    <ActivityIndicator size="small" color="#0000ff" />
                                </View>
                                :
                                <Text style={styles.actionText}>
                                    Entrar
                                </Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButtom} activeOpacity={0.7}>
                            <Text style={styles.actionText} onPress={handleCloseLogin}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
            <Modal
                visible={openAlert}
                transparent={true}
                onRequestClose={handleCloseAlert}
                animationType='fade'>
                <View style={styles.modalBackGround}>
                    <SafeAreaView style={styles.containerAlert}>
                        <View style={{ padding: '5%' }}>
                            <Text style={{ color: '#E5E5E5', fontSize: 30 }}>Atenção</Text>
                        </View>
                        <View>
                            <Text style={{ marginBottom: 35, marginLeft: 15, marginRight: 15, color: '#D0D1CE', fontSize: 17 }}>
                                Seu email e/ou sua senha estão incorretos!
                            </Text>
                        </View>
                        <View style={styles.buttonOk}>
                            <TouchableOpacity style={styles.alertButtom} onPress={handleCloseAlert} activeOpacity={0.7}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#E5E5E5', fontSize: 17 }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>
            </Modal>
        </Modal>
    )
}