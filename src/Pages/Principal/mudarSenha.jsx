import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

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
        buttonOK: {
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
        },
        modalBackGround: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.82)',
            justifyContent: 'center',
            alignItems: 'center'
        },
        containerModal: {
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
        inputSenha: {
            backgroundColor: "#000720",
            marginBottom: 10,
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
        button: {
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        saveButton: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginBottom: 17,
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
            shadowRadius: 4
        },
        checkbox: {
            display: "flex",
            flexDirection: "row",
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 8
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
    })

    const [email, setEmail] = useState('');
    const [modalChangePassword, setModalChangePassword] = useState(false);
    const handleCloseChangePassword = () => setModalChangePassword(false);
    const [modalAlert, setModalAlert] = useState(false);
    const handleCloseAlert = () => setModalAlert(false);
    const [isCheck, setIsCheck] = useState(false);
    const [senha, setSenha] = useState('');
    const [textAlert, setTextAlert] = useState('');
    const [titleAlert, setTitleAlert] = useState('');
    const [idUser, setIdUser] = useState('');

    const checkUser = async () => {

        await Axios.post(`${process.env.DOMAIN}/checkUser`, {
            email
        }).then((response) => {
            if (response.data) {
                setIdUser(response.data.id)
                setModalChangePassword(true);
            } else {
                setTitleAlert('Atenção!')
                setTextAlert('O email digitado não existe.');
                setModalAlert(true);
            }
        }).catch((error) => {
            console.log(error);
        });
    }


    const changePassword = async () => {

        if (senha.length < 6) {
            setTitleAlert('Atenção!')
            setTextAlert('A senha deve conter no mínimo 6 caracteres.');
            setModalAlert(true);
            handleCloseChangePassword();
        } else {
            await Axios.put(`${process.env.DOMAIN}/changePassword`, {
                idUser, email, senha
            })
                .then(() => {
                    setTitleAlert('Parabéns!')
                    setTextAlert('Sua senha foi alterada com sucesso.');
                    setModalAlert(true);
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    handleCloseChangePassword();
                    setSenha('');
                    setEmail('');
                })
        }
    }

    const isChecked = () => {
        setIsCheck(!isCheck);
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
                <TouchableOpacity style={styles.buttonOK} activeOpacity={0.7} onPress={checkUser}>
                    <Text style={styles.textButton}>OK</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image style={{ height: 500, width: 350 }} source={require('../../../img/astronautaImg6.png')} />
            </View>
            <Modal
                visible={modalChangePassword}
                transparent={true}
                onRequestClose={handleCloseChangePassword}
                animationType='fade'>
                <View style={styles.modalBackGround}>
                    <SafeAreaView style={styles.containerModal}>
                        <View>
                            <Text style={{ margin: 25, color: '#D0D1CE', fontSize: 19.5 }}>
                                Digite sua nova senha:
                            </Text>
                        </View>
                        {isCheck ?
                            <TextInput style={styles.inputSenha} secureTextEntry={false} placeholder="Senha" placeholderTextColor='#D0D1CE' onChangeText={senha => setSenha(senha)} />
                            :
                            <TextInput style={styles.inputSenha} secureTextEntry={true} placeholder="Senha" placeholderTextColor='#D0D1CE' onChangeText={senha => setSenha(senha)} />
                        }
                        <View style={styles.checkbox}>
                            <TouchableOpacity onPress={isChecked}>
                                {isCheck ?
                                    <MaterialIcons name="check-box" size={24} color="#D0D1CE" />
                                    :
                                    <MaterialIcons name="check-box-outline-blank" size={24} color="#D0D1CE" />
                                }
                            </TouchableOpacity>
                            <Text style={{ marginLeft: 5, marginTop: 5, color: '#D0D1CE' }}>Mostrar Senha</Text>
                        </View>
                        <View>
                            <Text style={{ marginBottom: 15, marginLeft: 15, marginRight: 15, color: '#D0D1CE' }}>Sua senha deve ter no mínimo 6 caracteres.</Text>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.saveButton} activeOpacity={0.7}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#E5E5E5', fontSize: 17 }} onPress={() => { handleCloseChangePassword(); setIsCheck(false); setSenha(''); setEmail('') }}>Fechar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton} onPress={changePassword} activeOpacity={0.7}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#E5E5E5', fontSize: 17 }}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>
            </Modal>
            <Modal
                visible={modalAlert}
                transparent={true}
                onRequestClose={() => { handleCloseAlert(); setSenha(''); setEmail('') }}
                animationType='fade'>
                <View style={styles.modalBackGround}>
                    <SafeAreaView style={styles.containerModal}>
                        <View>
                            <Text style={{ color: '#E5E5E5', fontSize: 30, margin: 10 }}>{titleAlert}</Text>
                        </View>
                        <View>
                            <Text style={{ marginBottom: 25, marginLeft: 15, marginRight: 15, color: '#D0D1CE', fontSize: 17 }}>
                                {textAlert}
                            </Text>
                        </View>
                        <View style={styles.buttonOk}>
                            <TouchableOpacity style={styles.alertButtom} onPress={() => { handleCloseAlert(); setSenha(''); setEmail('') }} activeOpacity={0.7}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#E5E5E5', fontSize: 17 }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>
            </Modal>
        </LinearGradient>
    )
}