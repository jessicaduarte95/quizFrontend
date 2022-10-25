import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { Cadastrar } from './cadastro'

export const Principal = () => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#000720',
          alignItems: 'center',
          justifyContent: 'space-between', 
        },
        loginCadastro: {
          flex: 1,
          paddingTop: '12%',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        },
        firstPart: {
          justifyContent: 'center', 
          paddingBottom: '10%'
        },
        title: {
          color: '#BFBFBE',
          fontSize: 30,
          display: "flex",
          alignItems: 'flex-end'
      
        },
        title2: {
          color: '#DADADA',
          fontSize: 70,
        },
        backgroundImage: {
          height: '100%',
          width: '100%',
        }
    });

    const [openCadastrar, setOpenCadastrar] = useState(false);
    const handleCloseCadastrar = () => setOpenCadastrar(false)
    const handleOpenCadastrar = () => setOpenCadastrar(true)
    const handleSave = () => alert("Cadastro realizado com sucesso!")
    
    return (
    <View style={styles.container}>
      <View style={styles.loginCadastro}>
        <TouchableOpacity>
          <Text style={{color: '#D0D1CE', paddingRight: '6%', fontSize: 17}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOpenCadastrar}>
          <Text style={{color: '#D0D1CE', fontSize: 17}}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.firstPart}>
        <Text style={styles.title}>Quiz</Text>
        <Text style={styles.title2}>Universo</Text>
      </View>
      <View>
        <Image source={require('../../img/astronautaImg.png')}/>
      </View>
      <StatusBar style="auto"/>
      <Cadastrar openCadastrar={openCadastrar} handleClose={handleCloseCadastrar} handleSave={handleSave}/>
    </View>
  );
}