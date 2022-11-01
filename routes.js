import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import { Principal } from './src/Principal/principal';
import { Nivel } from './src/Niveis/nivel';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen  
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="Principal" 
        component={Principal}/>
      <Stack.Screen 
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="Nivel" 
        component={Nivel}/>
    </Stack.Navigator>
  );
}