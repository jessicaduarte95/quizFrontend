import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Axios from "axios";

export const ModalNivel = (props) => {

    const {handleCloseModal, openModalNivel, nivel} = props;

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

    const [firstLevel, setFirstLevel] = useState({})
    const [perguntaAtual, setPerguntaAtual] = useState(0)

    useEffect(() => {

        Axios.post("http://192.168.0.3:5000/obterPerguntas", {
            nivel
        })
        .then((response) => {
            setFirstLevel(response.data);
            console.log(firstLevel[0].pergunta);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [nivel])

    return (
        <Modal
        visible={openModalNivel}
        transparent={true}
        onRequestClose={handleCloseModal}
        animationType='fade'>
           <View style={styles.modalBackGround}>
               <SafeAreaView style={styles.container}>
                   <View style={{paddingLeft: '7%', paddingTop: '7%'}}>
                       {/* <Text style={{color: '#E5E5E5', fontSize: 22}}>{firstLevel[perguntaAtual].pergunta}</Text> */}
                   </View>
                   <View style={{alignItems: 'flex-end', paddingRight: '8%'}}>
                       <Text style={{color: '#E5E5E5', fontSize: 18}}>Pergunta {perguntaAtual + 1} / 10</Text>
                   </View>
                   <View>
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%'}}>
                            <Text style={styles.textButton}>Opção 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%'}}>
                            <Text style={styles.textButton}>Opção 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%'}}>
                            <Text style={styles.textButton}>Opção 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: 'flex-start', padding: '4%'}}>
                            <Text style={styles.textButton}>Opção 4</Text>
                        </TouchableOpacity>
                   </View>
                   <View style= {{alignItems: 'flex-end', paddingBottom: '5%', paddingRight: '4%'}}>
                        <TouchableOpacity style={styles.buttom} activeOpacity={0.7} onPress={() => setPerguntaAtual(perguntaAtual + 1)}>
                            <Text style={styles.textButton}>Próxima Pergunta</Text>
                        </TouchableOpacity>
                    </View>
               </SafeAreaView>
           </View>
       </Modal>
    )
}