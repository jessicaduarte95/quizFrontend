import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ModalNivel } from "./modal";
import Axios from "axios";

export const Nivel = () => {
    const navigation = useNavigation();
    const route = useRoute('');
    const dadosUsuario = route.params.dadosUsuario;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
        },
        buttonSairAjuda: {
            paddingTop: 42,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%'
        },
        buttonAdmin: {
            color: '#D0D1CE',
            paddingLeft: 10,
            paddingRight: 15,
            fontSize: 17,
            display: 'flex',
            alignItems: 'flex-start',
            width: 270
        },
        buttonAjuda: {
            color: '#D0D1CE',
            paddingRight: 15,
            fontSize: 17
        },
        buttonSair: {
            color: '#D0D1CE',
            paddingRight: 25,
            fontSize: 17
        },
        nomeUsuario: {
            paddingTop: 15,
            marginBottom: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingLeft: 35,
            width: '100%'
        },
        nomeText: {
            fontWeight: 'bold',
            color: '#E5E5E5',
            fontSize: 30
        },
        levels: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonLevels: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginTop: 13,
            marginBottom: 13,
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
            width: 230,
        },
        actionText: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5',
            fontSize: 20
        },
        scroll: {
            width: 270
        }
    })

    const [openModalNivel, setOpenModalNivel] = useState(false);
    const handleCloseModal = () => setOpenModalNivel(false);
    const handleOpenModal = () => setOpenModalNivel(true);
    const [nivel, setNivel] = useState(false);
    const handleChangeNivel = () => setNivel(0);
    const [level, setLevel] = useState()
    const [disabled, setDisabled] = useState({
        nivel2: true, nivel3: true, nivel4: true,
        nivel5: true, nivel6: true, nivel7: true,
        nivel8: true
    })

    const perguntas = () => {
        handleChangeNivel()
        handleOpenModal()
    }

    const getEnableLevel = () => {
        let id = dadosUsuario.id
        Axios.get(`http://192.168.0.3:5000/habilitarNivel/${id}`)
            .then((response) => {
                console.log("Response: ", response.data);
                let dados = response.data  
                dados.forEach(function(object) {
                    if (object.nivel == 2){
                        setDisabled(prevState => ({
                            ...prevState,
                            nivel2: false
                        }))
                    }else if(object.nivel == 3){
                        setDisabled(prevState => ({
                            ...prevState,
                            nivel3: false
                        }))
                    }else if(object.nivel == 4){
                        setDisabled(prevState => ({
                            ...prevState,
                            nivel4: false
                        }))
                    }
                })

                console.log('disabled', disabled)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (nivel !== false) {
            Axios.post("http://192.168.0.3:5000/obterPerguntas", {
                nivel
            })
                .then((response) => {
                    setLevel(response.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        dadosUsuario
    }, [dadosUsuario, nivel])

    useEffect(() => {
        if(dadosUsuario.id){
            getEnableLevel()
        }
    }, [])

    return (
        <LinearGradient
            style={styles.container}
            start={{ x: 1, y: 1.9 }}
            end={{ x: 1, y: 0 }}
            locations={[.3, 0.67]}
            colors={['#3544A7', '#000720']}>
            <View style={styles.buttonSairAjuda}>
                {dadosUsuario.id == 1 ?
                <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
                    <Text style={styles.buttonAdmin}>Admin</Text>
                </TouchableOpacity>
                :''}
                <TouchableOpacity>
                    <Text style={styles.buttonAjuda}>Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                    <Text style={styles.buttonSair}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nomeUsuario}>
                <Text style={styles.nomeText}>Olá {dadosUsuario.nome}!</Text>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.levels}>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(1) }}>
                        <Text style={styles.actionText}>Nível 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(2) }} disabled={disabled.nivel2}>
                        <Text style={styles.actionText}>Nível 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(3) }} disabled={disabled.nivel3}>
                        <Text style={styles.actionText}>Nível 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(4) }} disabled={disabled.nivel4}>
                        <Text style={styles.actionText}>Nível 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(5) }} disabled={disabled.nivel5}>
                        <Text style={styles.actionText}>Nível 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(6) }} disabled={disabled.nivel6}>
                        <Text style={styles.actionText}>Nível 6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(7) }} disabled={disabled.nivel7}>
                        <Text style={styles.actionText}>Nível 7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(8) }} disabled={disabled.nivel8}>
                        <Text style={styles.actionText}>Nível 8</Text>
                    </TouchableOpacity>
                    <ModalNivel
                        openModalNivel={openModalNivel}
                        handleCloseModal={handleCloseModal}
                        nivel={nivel}
                        level={level}
                        dadosUsuario={dadosUsuario}
                    />
                </View>
            </ScrollView>
            <View>
                <Image source={require('../../img/astronautaImg2.png')} />
            </View>
        </LinearGradient>
    )
}