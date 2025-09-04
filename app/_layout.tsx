import { SplashScreen, Stack } from "expo-router";
import "./global.css"
import { useFonts } from "expo-font"
import { useEffect } from "react";
import * as Sentry from '@sentry/react-native';
import useAuthStore from "@/store/auth.store";

Sentry.init({
  dsn: 'https://9c609e025d64ad3273ef844cd3af25fa@o4509959785611264.ingest.us.sentry.io/4509959834238976',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});
 

export default Sentry.wrap(function RootLayout() {
    const { isLoading, fetchAuthenticatedUser } = useAuthStore();
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

  useEffect(() => {
    fetchAuthenticatedUser()
  }, []);

  if(!fontsLoaded || isLoading) return null;

  return <Stack  screenOptions={{headerShown: false}} />;
});