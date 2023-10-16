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
            paddingTop: 35,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%'
        },
        buttonAdmin: {
            color: '#D0D1CE',
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
    const [firstLevel, setFirstLevel] = useState()

    const perguntas = () => {
        handleChangeNivel()
        handleOpenModal()
    }

    useEffect(() => {
        if (nivel !== false) {
            Axios.post("http://192.168.0.3:5000/obterPerguntas", {
                nivel
            })
                .then((response) => {
                    setFirstLevel(response.data);
                })
                .catch((error) => {
                    console.log(error);
                })
            console.log("nivel: ", nivel);
        }
        dadosUsuario
    }, [dadosUsuario, nivel])

    return (
        <LinearGradient
            style={styles.container}
            start={{ x: 1, y: 1.9 }}
            end={{ x: 1, y: 0 }}
            locations={[.3, 0.67]}
            colors={['#3544A7', '#000720']}>
            <View style={styles.buttonSairAjuda}>
                <TouchableOpacity>
                    <Text style={styles.buttonAdmin}>Admin</Text>
                </TouchableOpacity>
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
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(2) }}>
                        <Text style={styles.actionText}>Nível 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(3) }}>
                        <Text style={styles.actionText}>Nível 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(4) }}>
                        <Text style={styles.actionText}>Nível 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(5) }}>
                        <Text style={styles.actionText}>Nível 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(6) }}>
                        <Text style={styles.actionText}>Nível 6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(7) }}>
                        <Text style={styles.actionText}>Nível 7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLevels} onPress={() => { perguntas(); setNivel(8) }}>
                        <Text style={styles.actionText}>Nível 8</Text>
                    </TouchableOpacity>
                    <ModalNivel openModalNivel={openModalNivel} handleCloseModal={handleCloseModal} nivel={nivel} firstLevel={firstLevel} />
                </View>
            </ScrollView>
            <View>
                <Image source={require('../../img/astronautaImg2.png')} />
            </View>
        </LinearGradient>
    )
}