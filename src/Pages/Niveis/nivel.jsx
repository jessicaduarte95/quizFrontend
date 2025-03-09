import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ModalNivel } from "./modal";
import { ModalFinishLevel } from "./modalFinishLevel";
import { ModalAjuda } from '../Ajuda/ajuda';
import Axios from "axios";
import * as Animatable from 'react-native-animatable';

export const Nivel = () => {
    const navigation = useNavigation();
    const route = useRoute('');
    const dadosUsuario = route.params.dadosUsuario;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center'
        },
        buttonSairAjuda: {
            flex: 1,
            paddingTop: 55,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
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
            flex: 1,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'center',
        },
        nomeText: {
            fontWeight: 'bold',
            color: '#E5E5E5',
            fontSize: 30
        },
        body: {
            flex: 15,
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 15
        },
        image: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        buttonLevelsDisabled: {
            backgroundColor: '#00061B',
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
        },
        actionText: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5',
            fontSize: 20
        },
        buttonLevelsAbled: {
            backgroundColor: '#000929',
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
            shadowRadius: 4
        },
        actionText: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5',
            paddingRight: 18,
            paddingLeft: 18,
            fontSize: 20
        },
        scroll: {
            flex: 1,
            marginBottom: 10,
            marginLeft: 10
        },
        startType1: {
            width: 0.8,
            height: 0.8,
            backgroundColor: 'white',
            borderRadius: '50%',
            borderWidth: 0.8,
            borderColor: 'white',
            shadowColor: 'rgba(50,115,220, 0.9)',
            marginBottom: 70,
            marginRight: 50
        },
        startType2: {
            width: 1.3,
            height: 1.3,
            backgroundColor: '#E5E5E5',
            borderRadius: '50%',
            borderWidth: 1.3,
            borderColor: '#E5E5E5',
            shadowColor: 'rgba(50,115,220, 0.9)',
            marginLeft: 30,
        },
        startType3: {
            width: 0.8,
            height: 0.8,
            backgroundColor: 'white',
            borderRadius: '50%',
            borderWidth: 0.8,
            borderColor: 'white',
            shadowColor: 'rgba(50,115,220, 0.9)',
            marginTop: 80,
            marginLeft: 30,
            marginRight: 50
        },
        startType4: {
            width: 1.3,
            height: 1.3,
            backgroundColor: '#E5E5E5',
            borderRadius: '50%',
            borderWidth: 1.3,
            borderColor: '#E5E5E5',
            shadowColor: 'rgba(50,115,220, 0.9)',
            marginLeft: 30,
            marginTop: 25
        },
        startType5: {
            width: 0.8,
            height: 0.8,
            backgroundColor: 'white',
            borderRadius: '50%',
            borderWidth: 0.8,
            borderColor: 'white',
            shadowColor: 'rgba(50,115,220, 0.9)',
            marginLeft: 70
        },
        startType6: {
            width: 0.8,
            height: 0.8,
            backgroundColor: '#E5E5E5',
            borderRadius: '50%',
            borderWidth: 0.8,
            borderColor: '#E5E5E5',
            shadowColor: 'rgba(50,115,220, 0.9)',
        },

    })

    const [openModalNivel, setOpenModalNivel] = useState(false);
    const [openFinishLevel, setOpenFinishLevel] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);
    const handleCloseModal = () => { setOpenModalNivel(false); }
    const handleOpenModal = () => setOpenModalNivel(true);
    const handleCloseFinishLevel = () => { setOpenFinishLevel(false); }
    const handleOpenFinishLevel = () => setOpenFinishLevel(true);
    const handleCloseModalHelp = () => setOpenHelp(false);
    const handleOpenModalHelp = () => setOpenHelp(true);
    const [nivel, setNivel] = useState(false);
    const handleChangeNivel = () => setNivel(0);
    const [level, setLevel] = useState()
    const [points, setPoints] = useState(0);
    const [finishLevel, setFinishLevel] = useState(false);
    const [disabled, setDisabled] = useState({
        nivel2: true, nivel3: true, nivel4: true,
        nivel5: true, nivel6: true, nivel7: true,
        nivel8: true, nivel9: true, nivel10: true
    })
    const perguntas = () => {
        handleChangeNivel()
        handleOpenModal()
    }

    const getEnableLevel = () => {
        let id = dadosUsuario.id
        Axios.get(`http://192.168.1.8:8080/enable/level/${id}`)
            .then((response) => {
                let dados = response.data.result
                dados.forEach(function (object) {
                    if (object.nivel == 2) {
                        setDisabled(prevState => ({
                            ...prevState,
                            nivel2: false
                        }))
                    } else if (object.nivel == 3) {
                        setDisabled(prevState => ({
                            ...prevState,
                            nivel3: false
                        }))
                    } else if (object.nivel == 4) {
                        setDisabled(prevState => ({
                            ...prevState,
                            nivel4: false
                        }))
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const checkFinishLevel = () => {
        let id = dadosUsuario.id
        Axios.get(`http://192.168.1.8:8080/completed/level/${id}`, {
                params: { level: 1 }})
            .then((response) => {
                const dataNivel = response.data.result
                if (dataNivel.length > 0 && dataNivel[0].concluido == 1) {
                    setFinishLevel(true);
                } else {
                    setFinishLevel(false);
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }


    useEffect(() => {
        if (nivel !== false) {
            Axios.get(`http://192.168.1.8:8080/question/${nivel}`)
                .then((response) => {
                    setLevel(response.data.result);
                })
                .catch((error) => {
                    console.log("Erro: ", error);
                })
        }
        dadosUsuario
    }, [dadosUsuario, nivel])

    useEffect(() => {
        if (dadosUsuario.id) {
            getEnableLevel()
        }
    }, [])

    useEffect(() => {
        if (nivel) {
            checkFinishLevel();
        }
    }, [nivel])

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
                    : ''}
                <TouchableOpacity onPress={() => handleOpenModalHelp()}>
                    <Text style={styles.buttonAjuda}>Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                    <Text style={styles.buttonSair}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nomeUsuario}>
                <Text style={styles.nomeText}>Olá {dadosUsuario.name}!</Text>
            </View>
            <Animatable.View delay={3000} animation="fadeInUp" style={styles.body}>
                <ScrollView style={styles.scroll}>
                    <TouchableOpacity style={styles.buttonLevelsAbled} onPress={() => { perguntas(); setNivel(1); checkFinishLevel(); }}>
                        <Text style={styles.actionText}>Nível 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={disabled.nivel2 ? styles.buttonLevelsDisabled : styles.buttonLevelsAbled} onPress={() => { perguntas(); setNivel(2); checkFinishLevel(); }} disabled={disabled.nivel2}>
                        <Text style={styles.actionText}>Nível 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={disabled.nivel3 ? styles.buttonLevelsDisabled : styles.buttonLevelsAbled} onPress={() => { perguntas(); setNivel(3); checkFinishLevel(); }} disabled={disabled.nivel3}>
                        <Text style={styles.actionText}>Nível 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={disabled.nivel4 ? styles.buttonLevelsDisabled : styles.buttonLevelsAbled} onPress={() => { perguntas(); setNivel(4); checkFinishLevel(); }} disabled={disabled.nivel4}>
                        <Text style={styles.actionText}>Nível 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={disabled.nivel5 ? styles.buttonLevelsDisabled : styles.buttonLevelsAbled} onPress={() => { perguntas(); setNivel(5); checkFinishLevel(); }} disabled={disabled.nivel5}>
                        <Text style={styles.actionText}>Nível 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={disabled.nivel6 ? styles.buttonLevelsDisabled : styles.buttonLevelsAbled} onPress={() => { perguntas(); setNivel(6); checkFinishLevel(); }} disabled={disabled.nivel6}>
                        <Text style={styles.actionText}>Nível 6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={disabled.nivel7 ? styles.buttonLevelsDisabled : styles.buttonLevelsAbled} onPress={() => { perguntas(); setNivel(7); checkFinishLevel(); }} disabled={disabled.nivel7}>
                        <Text style={styles.actionText}>Nível 7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={disabled.nivel8 ? styles.buttonLevelsDisabled : styles.buttonLevelsAbled} onPress={() => { perguntas(); setNivel(8); checkFinishLevel(); }} disabled={disabled.nivel8}>
                        <Text style={styles.actionText}>Nível 8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={disabled.nivel9 ? styles.buttonLevelsDisabled : styles.buttonLevelsAbled} onPress={() => { perguntas(); setNivel(9); checkFinishLevel(); }} disabled={disabled.nivel9}>
                        <Text style={styles.actionText}>Nível 9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={disabled.nivel8 ? styles.buttonLevelsDisabled : styles.buttonLevelsAbled} onPress={() => { perguntas(); setNivel(10); checkFinishLevel(); }} disabled={disabled.nivel10}>
                        <Text style={styles.actionText}>Nível 10</Text>
                    </TouchableOpacity>
                    <ModalNivel
                        openModalNivel={openModalNivel}
                        handleCloseModal={handleCloseModal}
                        nivel={nivel}
                        level={level}
                        dadosUsuario={dadosUsuario}
                        getEnableLevel={getEnableLevel}
                        setPoints={setPoints}
                        points={points}
                        handleOpenFinishLevel={handleOpenFinishLevel}
                        finishLevel={finishLevel}
                    />
                    <ModalFinishLevel
                        openFinishLevel={openFinishLevel}
                        handleCloseFinishLevel={handleCloseFinishLevel}
                        points={points}
                        setPoints={setPoints}
                    />
                    <ModalAjuda
                        openHelp={openHelp}
                        handleCloseModalHelp={handleCloseModalHelp}
                    />
                </ScrollView>
                <View style={styles.image}>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', marginBottom: 20, marginLeft: 20, height: '17%' }}>
                        <View>
                            <View style={styles.startType1} />
                            <View style={styles.startType2} />
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <View style={styles.startType4} />
                            <View style={styles.startType3} />
                        </View>
                        <View>
                            <View style={styles.startType1} />
                            <View style={styles.startType2} />
                        </View>
                    </View>
                    <View>
                        <View style={styles.startType5} />
                        <View style={styles.startType6} />
                    </View>
                    <Image style={{ width: 210, height: 560, marginBottom: 10 }} source={require('../../../img/astronautaImg4.png')} />
                </View>
            </Animatable.View>
        </LinearGradient>
    )
}