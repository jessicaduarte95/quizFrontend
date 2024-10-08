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
		backgroundColor: '#000720',
		borderRadius: 6,
		padding: 8,
		paddingLeft: 15,
		paddingRight: 15,
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
	},
	LevelButton: {
		zIndex: 99,
		alignItems: 'center',
		backgroundColor: '#00061B',
		maxWidth: 150,
		borderRadius: 6,
		padding: 14,
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
	LevelText: {
		fontWeight: 'bold',
		color: '#E5E5E5',
		fontSize: 22
	},
});
