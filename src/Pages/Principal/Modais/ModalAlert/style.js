import { StyleSheet } from 'react-native';

export const ModalBody = StyleSheet.create({
	Title: {
		color: '#E5E5E5',
		fontSize: 25
	},
	Text: {
		color: '#D0D1CE',
		marginTop: 5,
		fontSize: 19.5
	},
	ContainerButton: {
		display: 'flex',
		alignItems: 'end'
	},
	Button: {
		zIndex: 99,
		borderRadius: 6,
		marginTop: 3,
		alignItems: 'flex-end',
	}
});
