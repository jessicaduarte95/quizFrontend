import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';

export const ModalNivel = (props) => {

    const { handleCloseModal, openModalNivel, level, dadosUsuario, getEnableLevel, setPoints, points, handleOpenFinishLevel, finishLevel } = props;

    const styles = StyleSheet.create({
        modalBackGround: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.82)',
            justifyContent: 'center',
            alignItems: 'center'
        },
        container: {
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
            shadowRadius: 4,
            width: 375
        },
        containerQuestion: {
            padding: 25,
            paddingTop: 0,
            paddingBottom: 10
        },
        closeButtom: {
            display: 'flex',
            alignItems: 'flex-end',
            paddingRight: 8,
            paddingTop: 8
        },
        question: {
            color: '#E5E5E5',
            fontSize: 22
        },
        containerOptions: {
            alignItems: "center"
        },
        containerNumberQuestion: {
            alignItems: 'flex-end',
            padding: 25,
            paddingTop: 0
        },
        numberQuestionText: {
            color: '#E5E5E5',
            fontSize: 18
        },
        stylesOptions: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginRight: 8,
            padding: 10,
            borderWidth: 1,
            width: 300,
            borderColor: 'rgba(50,115,220, 0.4)',
            shadowColor: 'rgba(50,115,220, 0.9)',
            shadowOffset: {
                width: 0,
                height: 2
            },
            elevation: 5,
            shadowOpacity: 0.28,
            shadowRadius: 4,
            alignItems: 'center',
            padding: 13,
            marginBottom: 10
        },
        correctQuestion: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginRight: 8,
            padding: 10,
            borderWidth: 1,
            width: 300,
            borderColor: 'rgba(50,115,220, 0.4)',
            shadowColor: 'rgba(50,115,220, 0.9)',
            shadowOffset: {
                width: 0,
                height: 2
            },
            elevation: 5,
            shadowOpacity: 0.28,
            shadowRadius: 4,
            alignItems: 'center',
            padding: 13,
            marginBottom: 10,
            backgroundColor: "green"
        },
        wrongQuestion: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginRight: 8,
            padding: 10,
            borderWidth: 1,
            width: 300,
            borderColor: 'rgba(50,115,220, 0.4)',
            shadowColor: 'rgba(50,115,220, 0.9)',
            shadowOffset: {
                width: 0,
                height: 2
            },
            elevation: 5,
            shadowOpacity: 0.28,
            shadowRadius: 4,
            alignItems: 'center',
            padding: 13,
            marginBottom: 10,
            backgroundColor: "red"
        },
        textButton: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5',
            fontSize: 17
        },
        conatinerNextQuestion: {
            alignItems: 'flex-end',
            padding: 20,
            paddingRight: 15
        },
        buttom: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginRight: 8,
            padding: 10,
            borderWidth: 1,
            width: 210,
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
    })

    const [perguntaAtual, setPerguntaAtual] = useState(0)
    const [opcoes, setOpcoes] = useState()
    const [mudarCor1, setMudarCor1] = useState(false);
    const [mudarCor2, setMudarCor2] = useState(false);
    const [mudarCor3, setMudarCor3] = useState(false);
    const [mudarCor4, setMudarCor4] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const change = () => {
        setMudarCor1(false);
        setMudarCor2(false);
        setMudarCor3(false);
        setMudarCor4(false);
    }

    const countPointOption1 = () => {
        if (opcoes[0].correta == 1) {
            setPoints(points + 1)
        }
    }
    const countPointOption2 = () => {
        if (opcoes[1].correta == 1) {
            setPoints(points + 1)
        }
    }
    const countPointOption3 = () => {
        if (opcoes[2].correta == 1) {
            setPoints(points + 1)
        }
    }
    const countPointOption4 = () => {
        if (opcoes[3].correta == 1) {
            setPoints(points + 1)
        }
    }

    const handlePontosNivel = () => {
        Axios.post("http://192.168.0.3:5000/cadastrarPontos", {
            pontos: points,
            id: dadosUsuario.id,
            nivel: level[0].nivel
        })
            .then(() => { })
            .catch((error) => { console.log(error); })
    }

    const handleChangeLevel = async () => {

        await Axios.post("http://192.168.0.3:5000/habilitarNivel", {
            pontos: points,
            id: dadosUsuario.id,
            nivel: level[0].nivel
        })
            .then(() => { })
            .catch((error) => { console.log(error); })

        setDisabled(false);
        change();
        handleCloseModal();
        handlePontosNivel();
        setPerguntaAtual(0);

        await getEnableLevel();

        if (!finishLevel) {
            await handleOpenFinishLevel();
        } else {
            setPoints(0);
        }

    }

    useEffect(() => {
        if (level != undefined) {
            Axios.post("http://192.168.0.3:5000/obterOpcoes", {
                level, perguntaAtual
            })
                .then((response) => {
                    setOpcoes(response.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }

    }, [level, perguntaAtual])


    return (
        <Modal
            visible={openModalNivel}
            transparent={true}
            onRequestClose={handleCloseModal}
            animationType='fade'>
            <View style={styles.modalBackGround}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.closeButtom}>
                        <TouchableOpacity onPress={handleCloseModal}>
                            <Icon name="close" size={27} color="#D0D1CE" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerQuestion}>
                        <Text style={styles.question}>{level != undefined ? level[perguntaAtual].pergunta : ""}</Text>
                    </View>
                    <View style={styles.containerNumberQuestion}>
                        <Text style={styles.numberQuestionText}>Pergunta {perguntaAtual + 1} / 10</Text>
                    </View>
                    <View style={styles.containerOptions}>
                        {mudarCor1 == true ? "" :
                            <TouchableOpacity style={styles.stylesOptions} onPress={() => { setMudarCor1(true); setDisabled(true); countPointOption1() }} disabled={disabled}>
                                <Text style={styles.textButton}>{opcoes != undefined ? opcoes[0].opcao : ""}</Text>
                            </TouchableOpacity>
                        }

                        {mudarCor1 == true && opcoes != undefined && opcoes[0].correta == 1 ?
                            <TouchableOpacity style={styles.correctQuestion} onPress={() => { setDisabled(true) }} disabled={disabled}>
                                <Text style={styles.textButton}>{opcoes != undefined ? opcoes[0].opcao : ""}</Text>
                            </TouchableOpacity>
                            : mudarCor1 == true && opcoes != undefined && opcoes[0].correta == 0 ?
                                <TouchableOpacity style={styles.wrongQuestion} onPress={() => { setDisabled(true) }} disabled={disabled}>
                                    <Text style={styles.textButton}>{opcoes != undefined ? opcoes[0].opcao : ""}</Text>
                                </TouchableOpacity>
                                : ""}

                        {mudarCor2 == true ? "" :
                            <TouchableOpacity style={styles.stylesOptions} onPress={() => { setMudarCor2(true); setDisabled(true); countPointOption2() }} disabled={disabled}>
                                <Text style={styles.textButton}>{opcoes != undefined ? opcoes[1].opcao : ""}</Text>
                            </TouchableOpacity>
                        }

                        {mudarCor2 == true && opcoes != undefined && opcoes[1].correta == 1 ?
                            <TouchableOpacity style={styles.correctQuestion} onPress={() => { setDisabled(true) }} disabled={disabled}>
                                <Text style={styles.textButton}>{opcoes != undefined ? opcoes[1].opcao : ""}</Text>
                            </TouchableOpacity>
                            : mudarCor2 == true && opcoes != undefined && opcoes[1].correta == 0 ?
                                <TouchableOpacity style={styles.wrongQuestion} onPress={() => { setDisabled(true) }} disabled={disabled}>
                                    <Text style={styles.textButton}>{opcoes != undefined ? opcoes[1].opcao : ""}</Text>
                                </TouchableOpacity>
                                : ""}
                        {mudarCor3 == true ? "" :
                            <TouchableOpacity style={styles.stylesOptions} onPress={() => { setMudarCor3(true); setDisabled(true); countPointOption3() }} disabled={disabled}>
                                <Text style={styles.textButton}>{opcoes != undefined ? opcoes[2].opcao : ""}</Text>
                            </TouchableOpacity>
                        }
                        {mudarCor3 == true && opcoes != undefined && opcoes[2].correta == 1 ?
                            <TouchableOpacity style={styles.correctQuestion} onPress={() => { setDisabled(true) }} disabled={disabled}>
                                <Text style={styles.textButton}>{opcoes != undefined ? opcoes[2].opcao : ""}</Text>
                            </TouchableOpacity>
                            : mudarCor3 == true && opcoes != undefined && opcoes[2].correta == 0 ?
                                <TouchableOpacity style={styles.wrongQuestion} onPress={() => { setDisabled(true) }} disabled={disabled}>
                                    <Text style={styles.textButton}>{opcoes != undefined ? opcoes[2].opcao : ""}</Text>
                                </TouchableOpacity>
                                : ""}
                        {mudarCor4 == true ? "" :
                            <TouchableOpacity style={styles.stylesOptions} onPress={() => { setMudarCor4(true); setDisabled(true); countPointOption4() }} disabled={disabled}>
                                <Text style={styles.textButton}>{opcoes != undefined ? opcoes[3].opcao : ""}</Text>
                            </TouchableOpacity>
                        }
                        {mudarCor4 == true && opcoes != undefined && opcoes[3].correta == 1 ?
                            <TouchableOpacity style={styles.correctQuestion} onPress={() => { setDisabled(true) }} disabled={disabled}>
                                <Text style={styles.textButton}>{opcoes != undefined ? opcoes[3].opcao : ""}</Text>
                            </TouchableOpacity>
                            : mudarCor4 == true && opcoes != undefined && opcoes[3].correta == 0 ?
                                <TouchableOpacity style={styles.wrongQuestion} onPress={() => { setDisabled(true) }} disabled={disabled}>
                                    <Text style={styles.textButton}>{opcoes != undefined ? opcoes[3].opcao : ""}</Text>
                                </TouchableOpacity>
                                : ""}
                    </View>
                    {perguntaAtual == 9 ?
                        <View style={styles.conatinerNextQuestion}>
                            <TouchableOpacity style={styles.buttom} activeOpacity={0.7} onPress={() => { handleChangeLevel() }}>
                                <Text style={styles.textButton}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.conatinerNextQuestion}>
                            <TouchableOpacity style={styles.buttom} activeOpacity={0.7} onPress={() => { setPerguntaAtual(perguntaAtual + 1); setDisabled(false); change(); handlePontosNivel() }}>
                                <Text style={styles.textButton}>Próxima Pergunta</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </SafeAreaView>
            </View>
        </Modal>
    )
}