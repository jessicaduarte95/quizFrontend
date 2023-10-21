import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import Axios from 'axios';

export const Admin = () => {
    const navigation = useNavigation();
    const route = useRoute('');

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'space-between',
        },
        containerButtonSair: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%'
        },
        buttonSair: {
            color: '#D0D1CE',
            fontSize: 17,
            margin: 35,
            marginBottom: 12
        },
        containerTitle: {
            margin: 35,
            marginTop: 0,
            marginBottom: 20
        },
        title: {
            color: '#DADADA',
            fontSize: 20,
        },
        containerbuttonQuestionOptions: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
        },
        buttonQuestionOptions: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            margin: 8,
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
            width: 180
        },
        textbuttonQuestionOptions: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5'
        },
        containerconfigText: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 120,
            marginRight: 15,
            marginLeft: 15,
            height: 300,
            borderRadius: 15,
            borderWidth: 1.5,
            borderColor: 'rgba(50,115,220, 0.4)',
            shadowRadius: 4
        },
        containerButtonQuestion: {
            width: '95%',
            marginTop: 12,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
        },
        configText: {
            color: '#DADADA',
            fontSize: 18,
            display: 'flex',
            justifyContent: 'center'
        },
        configLevelQuestion: {
            backgroundColor: "#000720",
            marginTop: 25,
            paddingLeft: 8,
            height: 50,
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
            width: '90%',
        },
        textButtonQuestionSave: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5'
        },
        scroll: {
            width: '100%'
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
    })

    const [configQuestion, setConfigQuestion] = useState(true);
    const [nivel, setNivel] = useState('');
    const [pergunta, setPergunta] = useState('');

    const submit = async () => {
        await Axios.post(`http://192.168.0.3:5000/insertQuestion`, {
            nivel, pergunta
        }).then((response) => {
            console.log("Response: ", response);
            setNivel('')
            setPergunta('')
        }).catch((error) => console.log("Erro: ", error));
    }

    return (
        <LinearGradient
            style={styles.container}
            start={{ x: 1, y: 1.9 }}
            end={{ x: 1, y: 0 }}
            locations={[.3, 0.67]}
            colors={['#3544A7', '#000720']}>
            <View style={styles.containerButtonSair}>
                <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                    <Text style={styles.buttonSair}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Configurações</Text>
            </View>
            <View style={styles.containerbuttonQuestionOptions}>
                <TouchableOpacity style={styles.buttonQuestionOptions} onPress={() => setConfigQuestion(true)}>
                    <Text style={styles.textbuttonQuestionOptions}>Configurar Questões</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonQuestionOptions} onPress={() => setConfigQuestion(false)}>
                    <Text style={styles.textbuttonQuestionOptions}>Configurar Opções</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scroll}>
                {
                    configQuestion ?
                        <View style={styles.containerconfigText}>
                            <Text style={styles.configText}>Configuração das Questões</Text>
                            <TextInput style={styles.configLevelQuestion} placeholder="Nível" placeholderTextColor='#D0D1CE' value={nivel} onChangeText={text => setNivel(text)} />
                            <TextInput style={styles.configLevelQuestion} placeholder="Pergunta" placeholderTextColor='#D0D1CE' value={pergunta} onChangeText={text => setPergunta(text)} />
                            <View style={styles.containerButtonQuestion}>
                                <TouchableOpacity style={styles.buttonQuestionOptions} onPress={submit}>
                                    <Text style={styles.textButtonQuestionSave}>Salvar Configuração</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View>
                            <TextInput style={styles.input} placeholder="Nível" placeholderTextColor='#D0D1CE' />
                            <TextInput style={styles.input} placeholder="Questão" placeholderTextColor='#D0D1CE' />
                            <View>
                                <TextInput style={styles.input} placeholder="Opção1" placeholderTextColor='#D0D1CE' />
                            </View>
                            <View>
                                <TextInput style={styles.input} placeholder="Opção2" placeholderTextColor='#D0D1CE' />
                            </View>
                            <View>
                                <TextInput style={styles.input} placeholder="Opção3" placeholderTextColor='#D0D1CE' />
                            </View>
                            <View>
                                <TextInput style={styles.input} placeholder="Opção4" placeholderTextColor='#D0D1CE' />
                            </View>
                        </View>
                }
            </ScrollView>
        </LinearGradient>
    )
}