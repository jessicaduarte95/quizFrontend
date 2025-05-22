import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Modal = StyleSheet.create({
	Background: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.82)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	Container: {
		width: width > 700 ? 400 : '90%',
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
    Body: {
        padding: 15
    }
});
