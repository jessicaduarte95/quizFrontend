import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = StyleSheet.create({
	ContainerButton: {
		marginTop: 54,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		gap: 20
	},
	ContainerTitle: {
		justifyContent: 'center',
		marginTop: 20
	},
	Image: {
		height: width > 700 ? 350 : 420,
		width: 410
	}
});
