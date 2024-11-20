import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const FlatlistItem = ({
  DATA,
  pressable = true,
}: {
  DATA: {
    title: string | "title";
    time: string | null;
    pic: number | null;
    price: number | 999;
    id: number;
    pressable: boolean;
  };
}) => {
  const [extra, setExtra] = useState(false);
  console.log(DATA);
  return (
    <View style={styles.item}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#4445",
          marginRight: 10,
          borderRadius: 5,
          overflow: "hidden",
          width: 170,
        }}
      >
        <Pressable
          style={styles.homeScreenPressables}
          onPress={() => {
            pressable &&
              router.navigate({
                pathname: "/foodItem",
                params: {
                  pic: DATA?.pic,
                  title: DATA?.title,
                  id: DATA?.id,
                  subNote: DATA?.subNote,
                },
              });
          }}
        >
          <Image
            resizeMode="contain"
            source={DATA?.pic || require("../../assets/images/placeholder.jpg")}
            style={styles.images}
          />
          {!pressable && (
            <Pressable
              onPress={() => {
                setExtra((e) => !e);
              }}
              style={{
                position: "absolute",
                bottom: 0,
                zIndex: 2,
                width: "100%",
                // padding: 12,
                backgroundColor: extra ? "#06D001" : "#4445",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              {extra ? (
                <View style={{ paddingVertical: 5 }}>
                  <Text>Extra</Text>
                </View>
              ) : (
                <FontAwesome
                  name="plus"
                  size={15}
                  color="#fff"
                  style={{ paddingVertical: 5 }}
                />
              )}
            </Pressable>
          )}
        </Pressable>
        <View style={{ backgroundColor: "#fff", padding: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.dietaryPreview}
            >
              {DATA?.title}
            </Text>
            <Text style={{ textAlign: "right", fontSize: 12 }}>
              {DATA?.price || 999}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <FontAwesome
              name="clock-o"
              size={15}
              color="#999"
              style={{ marginRight: 3 }}
            />
            <Text
              style={{
                color: "#32cc34",
                fontWeight: "600",
                fontSize: 12,
              }}
            >
              {DATA?.time || "0"}min(s)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlatlistItem;

const styles = StyleSheet.create({
  item: {
    marginBottom: 12,
  },
  homeScreenPressables: {
    position: "relative",
    zIndex: 1,
    height: 170,
    borderBottomWidth: 1,
    borderColor: "#aaa",
    overflow: "hidden",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    flex: 1,
  },
  dietaryPreview: { maxWidth: "70%", fontSize: 13, fontWeight: "900" },
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
