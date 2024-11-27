// Import your global CSS file
import "../global.css";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import Context from "./Context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [userOrderState, setUserOrderState] = useState({});
  const [activeItem, setActiveItem] = useState("");
  const userOrderRef = useRef(userOrderState).current;
  return (
    <Context.Provider
      value={{
        userOrderRef,
        userOrderState,
        setUserOrderState,
        activeItem,
        setActiveItem,
      }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="foodItem" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </Context.Provider>
  );
}
