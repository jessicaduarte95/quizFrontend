import { StyleSheet } from 'react-native';

export const Button = StyleSheet.create({
	Button: {
		margin: 0
	},
	Text: {
		color: '#d0d1ce',
		fontSize: 17
	},
	CloseButton: {
		zIndex: 99,
		alignItems: 'center',
		width: 75,
		backgroundColor: '#000720',
		borderRadius: 6,
		padding: 8,
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
	TextButton: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#E5E5E5'
	}
});
