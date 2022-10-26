import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Cadastrar } from './cadastro';
import { Login } from './login';
import { LinearGradient } from 'expo-linear-gradient';

export const Principal = () => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between', 
        },
        principal: {
          alignItems: 'center',
          justifyContent: 'space-between', 
        },
        loginCadastro: {
          flex: 1,
          paddingTop: '12%',
          flexDirection: 'row',
          width: '100%'
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
          fontSize: 80,
        },
        backgroundImage: {
          height: '100%',
          width: '100%',
        }
    });

    const [openCadastrar, setOpenCadastrar] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const handleCloseCadastrar = () => setOpenCadastrar(false)
    const handleOpenCadastrar = () => setOpenCadastrar(true)
    const handleCloseLogin = () => setOpenLogin(false)
    const handleOpenLogin = () => setOpenLogin(true)
    const handleSave = () => alert("Cadastro realizado com sucesso!")
    
    return (
    <View style={styles.container}>
      <LinearGradient 
        style={styles.principal}
        start={{x:1,y:1.9}}
        end={{x:1,y:0}}
        locations={[.3,0.67]}
        colors={['#3544A7','#000720']}>
      <View style={styles.loginCadastro}>
        <TouchableOpacity onPress={handleOpenLogin}>
          <Text style={{color: '#D0D1CE', paddingRight: '6%', fontSize: 17}}>Entrar</Text>
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
      <Cadastrar openCadastrar={openCadastrar} handleClose={handleCloseCadastrar} handleSave={handleSave} handleOpenCadastrar={handleOpenCadastrar}/>
      <Login openLogin={openLogin} handleCloseLogin={handleCloseLogin}/>
      </LinearGradient>
    </View>
  );
}