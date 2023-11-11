 // import 'react-native-gesture-handler'
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as Splashscreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding } from "./src/Authentication";
const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    SFBold: require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    SFRegular: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    SFSemibold: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}
