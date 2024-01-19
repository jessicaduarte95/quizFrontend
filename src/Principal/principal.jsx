import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,  Modal, SafeAreaView } from 'react-native';
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
        modalBackGround: {
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.82)',
          justifyContent: 'center',
          alignItems: 'center'
        },
        loginCadastro: {
          flex: 1,
          paddingTop: 54,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center'
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
        },
        containerAlert: {
          width: '90%',
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
      buttonOk: {
          marginVertical: -15,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 15,
          flexDirection: 'row',
          justifyContent: 'flex-end'
        },
        alertButtom: {
          zIndex: 99,
          borderRadius: 6,
          marginTop: 3,
          marginRight: 8,
          padding: 10
        },
    });

    const [openCadastrar, setOpenCadastrar] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const handleCloseCadastrar = () => setOpenCadastrar(false);
    const handleOpenCadastrar = () => setOpenCadastrar(true);
    const handleCloseLogin = () => setOpenLogin(false);
    const handleOpenLogin = () => setOpenLogin(true);
    const [openCadastroFeito, setOpenCadastroFeito] = useState(false);
    const handleCloseCadastroFeito = () => setOpenCadastroFeito(false);
    const handleOpenCadastroFeito = () => setOpenCadastroFeito(true);
    
    return (
      <LinearGradient 
        style={styles.container}
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
          <Image style={{height: 350, width: 410, marginRight: 20}} source={require('../../img/astronautaImg5.png')}/>
        </View>
        <StatusBar style="auto"/>
        <Cadastrar openCadastrar={openCadastrar} handleClose={handleCloseCadastrar} handleOpenCadastrar={handleOpenCadastrar} handleOpenCadastroFeito={handleOpenCadastroFeito}/>
        <Login openLogin={openLogin} handleCloseLogin={handleCloseLogin} handleOpenLogin={handleOpenLogin}/>
        <Modal 
            visible={openCadastroFeito}
            transparent={true}
            onRequestClose={handleCloseCadastroFeito}
            animationType='fade'>
                <View style={styles.modalBackGround}>
                <SafeAreaView style={styles.containerAlert}>
                    <View style={{padding: '5%'}}>
                        <Text style={{color: '#E5E5E5', fontSize: 30}}>Parabéns Astronauta!</Text>
                    </View>
                    <View>
                        <Text style={{ marginBottom: 25, marginLeft: 15, marginRight: 15, color: '#D0D1CE', fontSize: 19.5}}>
                            Seu cadastro foi realizado com sucesso!
                        </Text>
                    </View>
                    <View style={styles.buttonOk}>
                        <TouchableOpacity style={styles.alertButtom} onPress={handleCloseCadastroFeito} activeOpacity={0.7}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#E5E5E5',  fontSize: 17}}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                </View>
            </Modal>
      </LinearGradient>
  );
}