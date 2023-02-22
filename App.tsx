import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


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

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return(
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'Overpass-Black' }}>7DaysOfCode de React Native com Expo</Text>
      <Text style={{ fontFamily: 'Overpass-Black',fontSize:20 }}>Ilda Neta</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
