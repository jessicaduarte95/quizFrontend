import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import Axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown'

export const Admin = () => {
    const navigation = useNavigation();
    const route = useRoute('');

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center'
        },
        containerButtonSair: {
            paddingTop: 12,
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
            marginTop: 40,
            marginRight: 15,
            marginLeft: 15,
            height: 360,
            borderRadius: 15,
            borderWidth: 1.5,
            borderColor: 'rgba(50,115,220, 0.4)',
            shadowRadius: 4
        },
        containerconfigOptions: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            marginRight: 15,
            marginLeft: 15,
            height: 530
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
            justifyContent: 'center',
            alignItems: 'center',
        },
        configTextOptions: {
            color: '#DADADA',
            fontSize: 18,
            marginLeft: 80,
            alignItems: 'center',
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
            marginBottom: 10,
            marginTop: 15,
            paddingLeft: 8,
            marginLeft: 17,
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
            color: '#D0D1CE',
            width: "91.5%"
        },
        containerOptions: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around"
        },
        inputOptions: {
            backgroundColor: "#000720",
            marginBottom: 10,
            marginTop: 15,
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
            color: '#D0D1CE',
            width: "40%"
        },
        select: {
            width: '40%',
            height: 42,
            marginTop: 15,
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
            backgroundColor: "#000720",
            color: '#D0D1CE'
        },
        selectOptions: {
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
            backgroundColor: "#000720",
            color: '#D0D1CE',
        }
    })

    const [configQuestion, setConfigQuestion] = useState(true);
    const [id, setId] = useState('');
    const [nivel, setNivel] = useState('');
    const [nivelOptions, setNivelOptions] = useState('');
    const [questionOptions, setQuestionOptions] = useState('');
    const [pergunta, setPergunta] = useState('');
    const [notification, setNotification] = useState(false);
    const [options, setOptions] = useState([
        { option1: '', correct1: 0 },
        { option2: '', correct2: 0 },
        { option3: '', correct3: 0 },
        { option4: '', correct4: 0 }
    ]);
    const optionsSelect = ['Não', 'Sim'];

    const submitConfigurationQuestion = async () => {
        await Axios.post(`${process.env.DOMAIN}/insertQuestion`, {
            id, nivel, pergunta
        }).then(() => {
            setNotification(true)
            setId('')
            setNivel('')
            setPergunta('')
            setTimeout(() => setNotification(false), 2000)
        }).catch((error) => console.log("Erro: ", error));
    }

    const submitConfigurationOptions = async () => {
        await Axios.post(`${process.env.DOMAIN}/insertOptions`, {
            nivelOptions, questionOptions, options
        }).then(() => {
            setNotification(true)
            setOptions([
                { option1: '', correct1: 0 },
                { option2: '', correct2: 0 },
                { option3: '', correct3: 0 },
                { option4: '', correct4: 0 }
            ])
            setNivelOptions('')
            setQuestionOptions('')
            setTimeout(() => setNotification(false), 2000)
        }).catch((error) => console.log("Erro: ", error));

    }

    const changeOption1 = (data) => {
        let newArray = [...options];
        newArray[0].option1 = data
        setOptions(newArray)
    }

    const changeOption2 = (data) => {
        let newArray = [...options];
        newArray[1].option2 = data
        setOptions(newArray)
    }

    const changeOption3 = (data) => {
        let newArray = [...options];
        newArray[2].option3 = data
        setOptions(newArray)
    }

    const changeOption4 = (data) => {
        let newArray = [...options];
        newArray[3].option4 = data
        setOptions(newArray)
    }


    useEffect(() => {
    }, [options])

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
                        <KeyboardAvoidingView
                            behavior={Platform.OS == "ios" ? 'padding' : 'height'}
                            style={styles.containerconfigText}>
                            <Text style={styles.configText}>Configuração das Questões</Text>
                            <TextInput style={styles.configLevelQuestion} keyboardType="numeric" placeholder="Id" placeholderTextColor='#D0D1CE' value={id} onChangeText={text => setId(text)} />
                            <TextInput style={styles.configLevelQuestion} keyboardType="numeric" placeholder="Nível" placeholderTextColor='#D0D1CE' value={nivel} onChangeText={text => setNivel(text)} />
                            <TextInput style={styles.configLevelQuestion} placeholder="Pergunta" placeholderTextColor='#D0D1CE' value={pergunta} onChangeText={text => setPergunta(text)} />
                            <View style={styles.containerButtonQuestion}>
                                <TouchableOpacity style={styles.buttonQuestionOptions} onPress={submitConfigurationQuestion}>
                                    <Text style={styles.textButtonQuestionSave}>Salvar Configuração</Text>
                                </TouchableOpacity>
                                {
                                    notification ? <Text style={{ color: 'green', marginRight: 10 }}>OK</Text> : ''
                                }
                            </View>
                        </KeyboardAvoidingView>
                        :
                        <KeyboardAvoidingView
                            behavior={Platform.OS == "ios" ? 'padding' : 'height'}
                            keyboardVerticalOffset={250}
                            style={styles.containerconfigOptions}>
                            <ScrollView style={{width: "100%"}}>
                                <Text style={styles.configTextOptions}>Configuração das Opções</Text>
                                <TextInput style={styles.input} placeholder="Nível" placeholderTextColor='#D0D1CE' value={nivelOptions} onChangeText={text => setNivelOptions(text)} />
                                <TextInput style={styles.input} placeholder="Questão" placeholderTextColor='#D0D1CE' value={questionOptions} onChangeText={text => setQuestionOptions(text)} />
                                <View style={styles.containerOptions}>
                                    <TextInput style={styles.inputOptions} value={options[0].option1} placeholder="Opção1" placeholderTextColor='#D0D1CE' onChangeText={(e) => changeOption1(e)} />
                                    <SelectDropdown
                                        data={optionsSelect}
                                        buttonStyle={styles.select}
                                        defaultButtonText="Correta"
                                        rowStyle={styles.selectOptions}
                                        buttonTextStyle={{ color: '#D0D1CE' }}
                                        rowTextStyle={{ color: '#D0D1CE' }}
                                        onSelect={(_, index) => {
                                            let newArray = [...options];
                                            newArray[0].correct1 = index
                                            setOptions(newArray)
                                        }} />
                                </View>
                                <View style={styles.containerOptions}>
                                    <TextInput style={styles.inputOptions} value={options[1].option2} placeholder="Opção2" placeholderTextColor='#D0D1CE' onChangeText={(e) => changeOption2(e)} />
                                    <SelectDropdown
                                        data={optionsSelect}
                                        buttonStyle={styles.select}
                                        defaultButtonText="Correta"
                                        rowStyle={styles.selectOptions}
                                        buttonTextStyle={{ color: '#D0D1CE' }}
                                        rowTextStyle={{ color: '#D0D1CE' }}
                                        onSelect={(_, index) => {
                                            let newArray = [...options];
                                            newArray[1].correct2 = index
                                            setOptions(newArray)
                                        }} />
                                </View>
                                <View style={styles.containerOptions}>
                                    <TextInput style={styles.inputOptions} value={options[2].option3} placeholder="Opção3" placeholderTextColor='#D0D1CE' onChangeText={(e) => changeOption3(e)} />
                                    <SelectDropdown
                                        data={optionsSelect}
                                        buttonStyle={styles.select}
                                        defaultButtonText="Correta"
                                        rowStyle={styles.selectOptions}
                                        buttonTextStyle={{ color: '#D0D1CE' }}
                                        rowTextStyle={{ color: '#D0D1CE' }}
                                        onSelect={(_, index) => {
                                            let newArray = [...options];
                                            newArray[2].correct3 = index
                                            setOptions(newArray)
                                        }} />
                                </View>
                                <View style={styles.containerOptions}>
                                    <TextInput style={styles.inputOptions} value={options[3].option4} placeholder="Opção4" placeholderTextColor='#D0D1CE' onChangeText={(e) => changeOption4(e)} />
                                    <SelectDropdown
                                        data={optionsSelect}
                                        buttonStyle={styles.select}
                                        defaultButtonText="Correta"
                                        rowStyle={styles.selectOptions}
                                        buttonTextStyle={{ color: '#D0D1CE' }}
                                        rowTextStyle={{ color: '#D0D1CE' }}
                                        onSelect={(_, index) => {
                                            let newArray = [...options];
                                            newArray[3].correct4 = index
                                            setOptions(newArray)
                                        }} />
                                </View>
                                <View style={styles.containerButtonQuestion}>
                                    <TouchableOpacity style={styles.buttonQuestionOptions} onPress={submitConfigurationOptions}>
                                        <Text style={styles.textButtonQuestionSave}>Salvar Configuração</Text>
                                    </TouchableOpacity>
                                    {
                                        notification ? <Text style={{ color: 'green', marginRight: 10 }}>OK</Text> : ''
                                    }
                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                }
            </ScrollView>
        </LinearGradient>
    )
}