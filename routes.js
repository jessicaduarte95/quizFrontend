import { createStackNavigator } from '@react-navigation/stack';
import { Principal } from './src/Principal/principal';
import { Nivel } from './src/Niveis/nivel';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Principal" component={Principal}/>
      <Stack.Screen name="Nivel" component={Nivel}/>
    </Stack.Navigator>
  );
}