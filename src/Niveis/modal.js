import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Axios from "axios";

export const ModalNivel = (props) => {

    const {handleCloseModal, openModalNivel, firstLevel} = props;

    const styles = StyleSheet.create({
        modalBackGround: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.82)',
            justifyContent: 'center',
            alignItems: 'center'
        },
        container: {
            width: '90%',
            height: '60%',
            justifyContent: 'space-around',
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
        buttom: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginRight: 8,
            padding: 10,
            borderWidth: 1,
            width: '50%',
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
            color: '#E5E5E5',
            fontSize: 17
        },
    })    

    const [perguntaAtual, setPerguntaAtual] = useState(0)
    const [opcoes, setOpcoes] = useState()
    const [mudarCor1, setMudarCor1] = useState(false);
    const [mudarCor2, setMudarCor2] = useState(false);
    const [mudarCor3, setMudarCor3] = useState(false);
    const [mudarCor4, setMudarCor4] = useState(false);

    const change = () => {
        setMudarCor1(false)
        setMudarCor2(false)
        setMudarCor3(false)
        setMudarCor4(false)
    }

    useEffect(() => {
        if(firstLevel != undefined){
            Axios.post("http://192.168.0.3:5000/obterOpcoes", {
            firstLevel, perguntaAtual
            })
            .then((response) => {
                setOpcoes(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
        console.log("Opções: ",opcoes);
    }, [firstLevel, perguntaAtual])

    return (
        <Modal
        visible={openModalNivel}
        transparent={true}
        onRequestClose={handleCloseModal}
        animationType='fade'>
           <View style={styles.modalBackGround}>
               <SafeAreaView style={styles.container}>
                   <View style={{paddingLeft: '7%', paddingTop: '7%', paddingRight: '7%'}}>
                       <Text style={{color: '#E5E5E5', fontSize: 22}}>{firstLevel != undefined ? firstLevel[perguntaAtual].pergunta : ""}</Text>
                   </View>
                   <View style={{alignItems: 'flex-end', paddingRight: '8%'}}>
                       <Text style={{color: '#E5E5E5', fontSize: 18}}>Pergunta {perguntaAtual + 1} / 10</Text>
                   </View>
                   <View>
                        {mudarCor1 == true ? "":
                            <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%'}}  onPress={() => {setMudarCor1(true)}}>
                                <Text style={styles.textButton}>{opcoes != undefined ? opcoes[0].opcao : ""}</Text>
                            </TouchableOpacity>
                        }
                        {mudarCor1 == true && opcoes != undefined && opcoes[0].correta == 1 ?
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%', backgroundColor: "green"}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[0].opcao : ""}</Text>
                        </TouchableOpacity>
                        : mudarCor1 == true && opcoes != undefined && opcoes[0].correta == 0 ?
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%', backgroundColor: "red"}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[0].opcao : ""}</Text>
                        </TouchableOpacity>
                        :""}
                        {mudarCor2 == true ? "":
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%'}} onPress={() => {setMudarCor2(true)}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[1].opcao: ""}</Text>
                        </TouchableOpacity>
                        }
                        {mudarCor2 == true && opcoes != undefined && opcoes[1].correta == 1 ?
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%', backgroundColor: "green"}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[1].opcao : ""}</Text>
                        </TouchableOpacity>
                        : mudarCor2 == true && opcoes != undefined && opcoes[1].correta == 0 ?
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%', backgroundColor: "red"}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[1].opcao : ""}</Text>
                        </TouchableOpacity>
                        :""}
                        {mudarCor3 == true ? "":
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%'}} onPress={() => {setMudarCor3(true)}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[2].opcao: ""}</Text>
                        </TouchableOpacity>
                        }
                        {mudarCor3 == true && opcoes != undefined && opcoes[2].correta == 1 ?
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%', backgroundColor: "green"}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[2].opcao : ""}</Text>
                        </TouchableOpacity>
                        : mudarCor3 == true && opcoes != undefined && opcoes[2].correta == 0 ?
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%', backgroundColor: "red"}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[2].opcao : ""}</Text>
                        </TouchableOpacity>
                        :""}
                        {mudarCor4 == true ? "":
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%'}} onPress={() => {setMudarCor4(true)}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[3].opcao: ""}</Text>
                        </TouchableOpacity>
                        }
                        {mudarCor4 == true && opcoes != undefined && opcoes[3].correta == 1 ?
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%', backgroundColor: "green"}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[3].opcao : ""}</Text>
                        </TouchableOpacity>
                        : mudarCor4 == true && opcoes != undefined && opcoes[3].correta == 0 ?
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%', backgroundColor: "red"}}>
                            <Text style={styles.textButton}>{opcoes != undefined ? opcoes[3].opcao : ""}</Text>
                        </TouchableOpacity>
                        :""}
                   </View>
                   <View style= {{alignItems: 'flex-end', paddingBottom: '5%', paddingRight: '4%'}}>
                        <TouchableOpacity style={styles.buttom} activeOpacity={0.7} onPress={() => {setPerguntaAtual(perguntaAtual + 1); change()}}>
                            <Text style={styles.textButton}>Próxima Pergunta</Text>
                        </TouchableOpacity>
                    </View>
               </SafeAreaView>
           </View>
       </Modal>
    )
}