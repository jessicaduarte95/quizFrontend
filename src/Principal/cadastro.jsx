import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ActivityIndicator, StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const Cadastrar = (props) => {
    const { openCadastrar, handleClose, handleOpenCadastrar, handleOpenCadastroFeito } = props;

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
            marginLeft: 10,
            marginRight: 10,
            flexDirection: 'row',
            justifyContent: 'flex-end'
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
        alertButtom: {
            zIndex: 99,
            borderRadius: 6,
            marginTop: 3,
            marginRight: 8,
            padding: 10
        },
        actionText: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5'
        },
        cancelText: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5'
        },
        containerAlert: {
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
        buttonOk: {
            marginVertical: -15,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 15,
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        containerLoading: {
            flex: 1,
            justifyContent: "center"
        },
        horizontalLoading: {
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10
        },
        checkbox: {
            display: "flex",
            flexDirection: "row",
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 8
        }
    })

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [alertImplemented, setAlertImplemented] = useState('');
    const [openAlert, setOpenAlert] = useState(false);
    const handleCloseAlert = () => setOpenAlert(false);
    const handleOpenAlert = () => setOpenAlert(true);
    const [loading, setLoading] = useState(false);
    const [isCheck, setIsCheck] = useState(false);

    const cadastroUsuario = async () => {
        setLoading(true);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setAlertImplemented('O email digitado é inválido.'); 
            handleOpenAlert();
        } else if (senha.length >= 6 && nome.length > 0 && email.length > 0) {
            await Axios.post(`${process.env.DOMAIN}/cadastrar`, {
                nome, email, senha
            })
                .then((response) => {
                    if (response.data == true) {
                        handleClose();
                        handleOpenCadastrar();
                        setAlertImplemented('Esse email já existe! Cadastre outro email ou restaure a sua senha.');
                        handleOpenAlert();
                    } else if (response.data == false) {
                        handleClose();
                        handleOpenCadastroFeito()
                    }
                })
                .catch((error) => {
                    console.log(error)
                    handleClose();
                })
        } else if (senha.length < 6 || nome.length == 0 || email.length == 0) {
            setAlertImplemented('A senha deve conter no mínimo 6 caracteres e todos os campos devem ser preenchidos.')
            await handleClose();
            await handleOpenCadastrar()
            handleOpenAlert()
        }
        setNome('');
        setEmail('');
        setSenha('');
        setLoading(false);
    }

    const isChecked = () => {
        setIsCheck(!isCheck);
    }

    useEffect(() => {
        alertImplemented;
    }, [alertImplemented])

    useEffect(() => {
        ;
    }, [isCheck])

    return (
        <Modal
            visible={openCadastrar}
            transparent={true}
            onRequestClose={() => { handleClose(), setIsCheck(false) }}
            animationType='fade'>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? 'padding' : 'height'}
                style={styles.modalBackGround}>
                <SafeAreaView style={styles.container}>
                    <View style={{ padding: '5%' }}>
                        <Text style={{ color: '#E5E5E5', fontSize: 30 }}>Cadastrar</Text>
                    </View>
                    <TextInput style={styles.input} placeholder="Nome" placeholderTextColor='#D0D1CE' onChangeText={text => setNome(text)} />
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor='#D0D1CE' onChangeText={text => setEmail(text)} />
                    {isCheck ?
                        <TextInput style={styles.inputSenha} secureTextEntry={false} placeholder="Senha" placeholderTextColor='#D0D1CE' onChangeText={text => setSenha(text)} />
                        :
                        <TextInput style={styles.inputSenha} secureTextEntry={true} placeholder="Senha" placeholderTextColor='#D0D1CE' onChangeText={text => setSenha(text)} />
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
                    <View style={styles.content}>
                        <TouchableOpacity style={styles.saveButton} onPress={cadastroUsuario} activeOpacity={0.7}>
                            {loading == true ?
                                <View style={[styles.containerLoading, styles.horizontalLoading]}>
                                    <ActivityIndicator size="small" color="#0000ff" />
                                </View>
                                :
                                <Text style={styles.actionText}>Salvar</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton} activeOpacity={0.7}>
                            <Text style={styles.cancelText} onPress={() => { handleClose(), setIsCheck(false) }}>Fechar</Text>
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
                            <Text style={{ marginBottom: 25, marginLeft: 15, marginRight: 15, color: '#D0D1CE', fontSize: 17 }}>
                                {alertImplemented}
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