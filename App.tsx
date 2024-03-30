import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from '@expo-google-fonts/overpass';
import WellcomeScreen from './src/screens/WellcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
  });

  if (!fontsLoaded) {
    return;
  }

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false,
        }} name="Wellcome" component={WellcomeScreen} />
        <Stack.Screen options={{
          headerShown: false,
        }} name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/