import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity } from 'react-native';

export const Cadastrar = (props) => {
    const {openCadastrar, handleClose, handleSave} = props; 

    const styles = StyleSheet.create({
        container: {
            flex: 0.50,
            marginTop: '20%',
            marginRight: 14,
            marginLeft: 14,
            backgroundColor: '#000929',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: 'rgba(50,115,220, 0.3)',
            shadowColor: 'rgba(50,115,220, 0.9)',
            shadowOffset: {
                width: 0,
                height: 2
            },
            elevation: 5,
            shadowOpacity: 0.28,
            shadowRadius: 4 
        },
        content: {
            marginVertical: 20,
            marginLeft: 10,
            marginRight: 10,
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        saveButtom: {
            zIndex: 99,
            backgroundColor: '#000720',
            borderRadius: 6,
            marginTop: 8,
            marginRight: 8,
            padding: 10,
            borderWidth: 1,
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
        actionText: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5'
        },
        cancelText: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#E5E5E5'
        }
    })

    return(
        <Modal 
        visible={openCadastrar}
        transparent={true}
        onRequestClose={handleClose}
        animationType='fade'>
            <SafeAreaView style={styles.container}>
                <View style={{padding: '5%'}}>
                    <Text style={{color: '#E5E5E5', fontSize: 30}}>Cadastrar</Text>
                </View>
                <TouchableOpacity style={{flex: 1, zIndex: 9}} onPress={handleClose}></TouchableOpacity>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.saveButtom} onPress={handleSave} activeOpacity={0.7}>
                        <Text style={styles.actionText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButtom} activeOpacity={0.7}>
                        <Text style={styles.cancelText} onPress={handleClose}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    )
}