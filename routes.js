import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import { Principal } from './src/Pages/Principal/principal';
import { Nivel } from './src/Pages/Niveis/nivel';
import { MudarSenha } from './src/Pages/Principal/mudarSenha';
import { Admin } from './src/Pages/Admin/admin';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="Principal"
        component={Principal} />
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="Nivel"
        component={Nivel} />
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="MudarSenha"
        component={MudarSenha} />
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="Admin"
        component={Admin} />
    </Stack.Navigator>
  );
}