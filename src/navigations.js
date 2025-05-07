import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { Nivel } from './Pages/Niveis/nivel';
import { MudarSenha } from './Pages/Principal/mudarSenha';
import { Admin } from './Pages/Admin/admin';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="Home"
        component={Home} />
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