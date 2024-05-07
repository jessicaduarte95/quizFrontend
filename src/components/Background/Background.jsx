import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as S from './style';

export const BackgroundContainer = props => {
	const { children } = props;

	return (
		<LinearGradient style={S.BackgroundContainer.Background} start={{ x: 1, y: 1.9 }} end={{ x: 1, y: 0 }} locations={[0.3, 0.67]} colors={['#3544A7', '#000720']}>
			{children}
		</LinearGradient>
	);
};
