import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

export const Admin = () => {
    const navigation = useNavigation();
    const route = useRoute('');

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'space-between',
        },
        containerButtonSair: {
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
            marginTop: 0
        },
        title: {
            color: '#DADADA',
            fontSize: 20,
        }
    })

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
                <Text style={styles.title}>Configuração das perguntas</Text>
            </View>
        </LinearGradient>
    )
}