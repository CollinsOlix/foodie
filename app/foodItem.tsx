import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
export default function FoodItem() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const { id, title, pic } = params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerStyle: { backgroundColor: "#ff036a" },
      // headerTitleStyle: { color: "#fff" },
    });
  }, []);
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <View style={styles.imageHolder}>
        <Image resizeMode="contain" source={pic} style={styles.images} />
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome
          name="heart"
          size={20}
          color="#06D001"
          style={{ marginRight: 5 }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View
        style={{
          backgroundColor: "#f0f0f0",
          padding: 10,
          width,
          position: "absolute",
          zIndex: 9,
          bottom: 1,
          flexDirection: "row",
          alignSelf: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "600" }}>Add to Tray</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            style={{
              padding: 7,
              backgroundColor: "#ff036a",
              margin: 0,
              borderRadius: 20,
              width: "35",
              aspectRatio: "1/1",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setCounter((c) => (c > 0 ? c - 1 : 0));
            }}
          >
            <FontAwesome name="minus" size={22} color="#222" />
          </Pressable>
          <Text
            style={{ marginHorizontal: 10, fontSize: 20, fontWeight: "600" }}
          >
            {counter}
          </Text>
          <Pressable
            style={{
              padding: 7,
              backgroundColor: "#ff036a",
              margin: 0,
              borderRadius: 20,
              width: "35",
              aspectRatio: "1/1",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setCounter((c) => c + 1);
            }}
          >
            <FontAwesome name="plus" size={22} color="#222" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  images: {
    width: "100%",
  },
  imageHolder: {
    backgroundColor: "#eee",
    height: "30%",
    width,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderColor: "#222",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
  },
});
