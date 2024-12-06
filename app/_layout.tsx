// Import your global CSS file
import "../global.css";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import Context from "./Context";
import { DATA } from "./components/foodDATA";

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [userOrderState, setUserOrderState] = useState({});
  const [activeItem, setActiveItem] = useState("");
  const userOrderRef = useRef(userOrderState).current;
  const [lang, setLang] = useState<string>("en");
  const [activeData, setActiveData] = useState(DATA[`${lang}`]);

  return (
    <Context.Provider
      value={{
        activeData,
        userOrderRef,
        userOrderState,
        setUserOrderState,
        activeItem,
        setActiveItem,
        lang,
        setLang,
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
