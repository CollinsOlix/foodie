import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useContext, useLayoutEffect, useRef } from "react";
import { useNavigation } from "expo-router";
import BackButton from "./components/BackButton";
import Context from "./Context";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const OrderBasketScreen = () => {
  const navigation = useNavigation();
  const { orderState } = useContext(Context);
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerShown: true,
      headerStyle: { backgroundColor: "#ff036a" },
      headerTintColor: "#ff036a",
      headerTitle: () => (
        <Text style={styles.headerText}>Your Current orders</Text>
      ),
      headerLeft: () => <BackButton />,
    });
  }, []);
  return (
    <SafeAreaView style={tw`flex-1 bg-blue-100`}>
      <View style={tw`p-0 m-0 overflow-hidden h-1/3`}>
        <Image
          resizeMethod="resize"
          resizeMode="cover"
          source={require("@/assets/images/readying.gif")}
          style={{ height: 250 }}
        />
      </View>
      <Text>{JSON.stringify(orderState)}</Text>
    </SafeAreaView>
  );
};

export default OrderBasketScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: "600",
    color: "#fff",
  },
  header: {},
});
