import React from "react";
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export const Nivel = () => {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        buttonSairAjuda: {
            flex: 1,
            paddingTop: '12%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%'
          },
    })

    return(
        <LinearGradient 
        style={styles.container}
        start={{x:1,y:1.9}}
        end={{x:1,y:0}}
        locations={[.3,0.67]}
        colors={['#3544A7','#000720']}>
            <View style={styles.buttonSairAjuda}>
                <TouchableOpacity>
                    <Text style={{color: '#D0D1CE', paddingRight: '3%', fontSize: 17}}>Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                    <Text style={{color: '#D0D1CE', paddingRight: '6%', fontSize: 17}}>Sair</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}