import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export const MudarSenha = () => {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'red'
        },
        buttonSair: {
            paddingTop: '12%',
            paddingRight: '5%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%'
          },
          title: {
            paddingTop: '0%',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%'
        },
        inputContainer: {
            marginTop: '2%',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '-5%',
        },
        input: {
            backgroundColor: "#000720",
            marginBottom: '10%',
            paddingLeft: '6%',
            marginLeft: '5%',
            marginRight: '5%',
            height: 65,
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
            fontSize: 18,
            borderRadius: 5,
        },
        content: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: '3%',
            marginBottom: '3%'
        },
        buttom: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginRight: 8,
            padding: 10,
            borderWidth: 1,
            width: '35%',
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
            color: '#E5E5E5'
        },
    })

    return(
        <LinearGradient 
        style={styles.container}
        start={{x:1,y:1.9}}
        end={{x:1,y:0}}
        locations={[.3,0.67]}
        colors={['#3544A7','#000720']}>
            <View style={styles.buttonSair}>
                <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                    <Text style={{color: '#D0D1CE', paddingRight: '3%', fontSize: 17}}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={{fontWeight: 'bold', color: '#E5E5E5', fontSize: 30}}>Alterar Senha</Text>
            </View>
            <View style={{padding: '5%'}}>
                <Text style={{color: '#E5E5E5', fontSize: 20, textAlign: 'justify'}}>
                    Caso queira mudar de senha, basta digitar seu email para que seja enviado um email e a senha possa ser alterada!
                </Text>
            </View>
            {/* <View style={styles.inputContainer}> */}
                <TextInput style={styles.input} placeholder="Digite seu Email" placeholderTextColor='#D0D1CE'></TextInput>
            {/* </View> */}
            <View style={styles.content}>
                <TouchableOpacity style={styles.buttom} activeOpacity={0.7}>
                    <Text style={styles.textButton}>Enviar Email</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'flex-start', marginBottom: '8%'}}>
                <Image style={{height: '68%', width: '82%'}} source={require('../../img/astronautaInteiro.png')}/>
            </View>
        </LinearGradient>
    )
}