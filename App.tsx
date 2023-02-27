import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { theme } from './src/theme';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Overpass-Black': require('./src/assets/fonts/Overpass-Black.ttf'),
    'Overpass-Bold': require('./src/assets/fonts/Overpass-Bold.ttf'),
    'Overpass-ExtraBold': require('./src/assets/fonts/Overpass-ExtraBold.ttf'),
    'Overpass-ExtraLight': require('./src/assets/fonts/Overpass-ExtraLight.ttf'),
    'Overpass-Italic': require('./src/assets/fonts/Overpass-Italic.ttf'),
    'Overpass-Light': require('./src/assets/fonts/Overpass-Light.ttf'),
    'Overpass-Medium': require('./src/assets/fonts/Overpass-Medium.ttf'),
    'Overpass-Regular': require('./src/assets/fonts/Overpass-Regular.ttf'),
    'Overpass-SemiBold': require('./src/assets/fonts/Overpass-SemiBold.ttf'),
    'Overpass-Thin': require('./src/assets/fonts/Overpass-Thin.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }
  
  return(
    <>
      <StatusBar style="light" backgroundColor={theme.colors.dark}/>
      <Routes/>
    </>
    
  );
}


