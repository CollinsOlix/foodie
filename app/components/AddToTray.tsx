import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const AddToTray = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.wrapper}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Add to Tray</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          style={styles.incrementorBtn}
          onPress={() => {
            setCounter((c: number) => (c > 0 ? c - 1 : 0));
          }}
        >
          <FontAwesome name="minus" size={22} color="#222" />
        </Pressable>
        <Text style={{ marginHorizontal: 10, fontSize: 20, fontWeight: "600" }}>
          {counter}
        </Text>
        <Pressable
          style={styles.incrementorBtn}
          onPress={() => {
            setCounter((c) => c + 1);
          }}
        >
          <FontAwesome name="plus" size={22} color="#222" />
        </Pressable>
      </View>
    </View>
  );
};

export default AddToTray;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    width,
    position: "absolute",
    zIndex: 9,
    bottom: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "space-between",
    boxShadow: "0 0 8 0 #0005",
  },
  incrementorBtn: {
    padding: 7,
    backgroundColor: "#ff036a",
    margin: 0,
    borderRadius: 20,
    width: 35,
    aspectRatio: "1/1",
    justifyContent: "center",
    alignItems: "center",
  },
});
