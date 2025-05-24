import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { Nivel } from './Pages/Niveis/nivel';
import { ChangePassword } from './screens/ChangePassword';
import { Admin } from './Pages/Admin/admin';
import { GameLevels } from './screens/GameLevels';

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
        name="GameLevels"
        component={GameLevels} />
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
        name="ChangePassword"
        component={ChangePassword} />
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="Admin"
        component={Admin} />
    </Stack.Navigator>
  );
}