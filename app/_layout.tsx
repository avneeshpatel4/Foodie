import { SplashScreen, Stack } from "expo-router";
import "./global.css"
import { useFonts } from "expo-font"
import { useEffect } from "react";
 

export default function RootLayout() {
  const [fontsLoaded,error] = useFonts({
        // "QuickSand-Bold": require('../assets/fonts/QuickSand-Bold.ttf'),
        // "QuickSand-Medium": require('../assets/fonts/QuickSand-Medium.ttf'),
        // "QuickSand-Regular": require('../assets/fonts/QuickSand-Regular.ttf'),
        // "QuickSand-SemiBold": require('../assets/fonts/QuickSand-SemiBold.ttf'),
        // "QuickSand-Light": require('../assets/fonts/QuickSand-Light.ttf'),
  });

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync()
  },[fontsLoaded,error])
  return <Stack  screenOptions={{headerShown: false}} />;
}
