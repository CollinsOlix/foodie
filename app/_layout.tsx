// Import your global CSS file
import "../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import "react-native-reanimated";

import Context from "./Context";
import { DATA } from "./components/foodDATA";
import { Language, MenuSection } from "./components/types";

export default function RootLayout() {
  const [orderState, setOrderState] = useState({});
  const [activeItem, setActiveItem] = useState("");
  const orderRef = useRef(orderState).current;
  const [lang, setLang] = useState<Language>("en");
  const [activeData, setActiveData] = useState<MenuSection[]>(DATA?.[lang]);

  return (
    <Context.Provider
      value={{
        activeData,
        orderRef,
        orderState,
        setOrderState,
        activeItem,
        setActiveItem,
        lang,
        setLang,
      }}
    >
      <Stack
        screenOptions={{
          headerTitleStyle: { color: "#fff", fontWeight: "600" },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="foodItem" />
        <Stack.Screen name="OrderBasketScreen" />
        {/* <Stack.Screen name="ConfirmOrderScreen" /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </Context.Provider>
  );
}
