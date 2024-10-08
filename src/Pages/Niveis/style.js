import { StyleSheet } from 'react-native';

export const Nivel = StyleSheet.create({
	Container: {
		flex: 1,
		display: 'flex',
		width: '100%',
		height: '100%'
	},
	Header: {
		height: '12vh'
	},
	ContainerButton: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		gap: 15,
		margin: 15,
		marginBottom: 8,
		paddingRight: 40
	},
	ContainerTitle: {
		width: '100%',
		display: 'flex',
		alignItems: 'center'
	},
	Content: {
		height: '78vh',
		display: 'flex',
		flexDirection: 'row',
		maxWidth: '100%',
		justifyContent: 'center',
		margin: 20
	},
	ScrollView: {
		maxHeight: '78vh',
		maxWidth: 180,
		marginLeft: 10
	},
	Levels: {
		gap: 30,
		maxWidth: 180
	},
	Images: {
		display: 'flex',
		justifyContent: 'flex-end',
		height: '100%'
	}
});
