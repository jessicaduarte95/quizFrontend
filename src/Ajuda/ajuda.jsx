import react from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ModalAjuda = (props) => {
    const { handleCloseModalHelp, openHelp } = props;

    const styles = StyleSheet.create({
        modalBackGround: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.82)',
            justifyContent: 'center',
            alignItems: 'center'
        },
        container: {
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
            shadowRadius: 4,
            width: 360,
            height: 520
        },
        closeButtom: {
            display: 'flex',
            alignItems: 'flex-end',
            paddingRight: 8,
            paddingTop: 8
        },
    })


    return (
        <Modal
            visible={openHelp}
            transparent={true}
            onRequestClose={handleCloseModalHelp}
            animationType='fade'>
            <View style={styles.modalBackGround}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.closeButtom}>
                        <TouchableOpacity onPress={handleCloseModalHelp}>
                            <Icon name="close" size={27} color="#D0D1CE" />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </Modal>
    )
}