import {  
  useFonts, 
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold, 
} from '@expo-google-fonts/overpass';
import WellcomeScreen from './src/screens/WellcomeScreen';

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
    <>
      <WellcomeScreen />
    </>
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