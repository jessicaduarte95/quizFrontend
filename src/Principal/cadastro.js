import React, { useState } from 'react';
import  Axios  from 'axios';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

export const Cadastrar = (props) => {
    const {openCadastrar, handleClose, handleOpenCadastrar} = props; 

    const styles = StyleSheet.create({
        container: {
            height: 375,
            marginTop: '20%',
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
            marginVertical: -15,
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
        saveButtom: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginTop: 3,
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
            height: 230,
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
        }
    })

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [openAlert, setOpenAlert] = useState(false);
    const handleCloseAlert = () => setOpenAlert(false)
    const handleOpenAlert = () => setOpenAlert(true)

    const cadastroUsuario = async () => {
        if (senha.length >= 6 && nome.length > 0 && email.length > 0){
            await Axios.post(`http://192.168.0.3:5000/cadastrar`, {
                nome, email, senha
            })
            .then((response) => {
                console.log(response)
                handleClose();
            })
            .catch((error) => {
                console.log(error)
                handleClose();
            })
        }else if (senha.length < 6 || nome.length == 0 || email.length == 0){
            await handleClose();
            await handleOpenCadastrar()
            handleOpenAlert()
        }
        setNome('');
        setEmail('');
        setSenha('');
    }

    return(
        <Modal 
        visible={openCadastrar}
        transparent={true}
        onRequestClose={handleClose}
        animationType='fade'>
            <SafeAreaView style={styles.container}>
                <View style={{padding: '5%'}}>
                    <Text style={{color: '#E5E5E5', fontSize: 30}}>Cadastrar</Text>
                </View>
                <TextInput style={styles.input} placeholder="Nome"  placeholderTextColor='#D0D1CE' onChangeText={text => setNome(text)}/>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor='#D0D1CE'onChangeText={text => setEmail(text)}/>
                <TextInput style={styles.inputSenha} secureTextEntry={true} placeholder="Senha" placeholderTextColor='#D0D1CE'onChangeText={text => setSenha(text)}/>
                <View>
                    <Text style={{ marginBottom: 35, marginLeft: 15, marginRight: 15, color: '#D0D1CE'}}>Sua senha deve ter no mínimo 6 caracteres.</Text>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.saveButtom} onPress={cadastroUsuario} activeOpacity={0.7}>
                        <Text style={styles.actionText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButtom} activeOpacity={0.7}>
                        <Text style={styles.cancelText} onPress={handleClose}>Fechar</Text>
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
                            A senha deve conter no mínimo 6 caracteres e todos os campos devem ser preenchidos.
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <TouchableOpacity style={styles.alertButtom} onPress={handleCloseAlert} activeOpacity={0.7}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#E5E5E5',  fontSize: 17}}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </Modal>
    )
}