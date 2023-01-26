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
    })    

    const [firstLevel, setFirstLevel] = useState({})

    useEffect(() => {

        Axios.post("http://192.168.0.3:5000/obterPerguntas", {
            nivel
        })
        .then((response) => {
            setFirstLevel(response.data[0]);
            console.log(response.data);
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
                   <View style={{padding: '7%'}}>
                       <Text style={{color: '#E5E5E5', fontSize: 25}}>Teste</Text>
                   </View>
               </SafeAreaView>
           </View>
       </Modal>
    )
}