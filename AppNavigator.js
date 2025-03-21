import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from './components/MainMenu';
import GameScreen from './components/GameScreen';
import Instructions from './components/Instructions';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainMenu" component={MainMenu} options={{ headerShown: false }} />
      <Stack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Instructions" component={Instructions} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}