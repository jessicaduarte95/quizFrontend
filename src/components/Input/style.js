import { StyleSheet } from 'react-native';

export const Input = StyleSheet.create({
	Input: {
		backgroundColor: '#000720',
		width: '100%',
		padding: 10,
		marginTop: 16,
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
		color: '#D0D1CE'
	},
	TextError: {
		color: 'red', 
		marginTop: 5,
		marginLeft: 2
	}
});
