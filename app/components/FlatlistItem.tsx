import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import Context from "../Context";
import { MenuItem } from "./types";

const FlatlistItem = ({
  DATA,
  pressable = true,
}: {
  DATA: MenuItem;
  pressable: boolean;
}) => {
  const { activeItem, setActiveItem, userOrderRef, setUserOrderState } =
    useContext(Context);

  //functions used in this component
  const handlePress = () => {
    if (DATA.title) setActiveItem(DATA.title);
    userOrderRef[`${DATA.title}`] = userOrderRef[`${DATA.title}`] || 0;
    setUserOrderState({ ...userOrderRef });
  };

  const toggleExtra = () => {
    setExtra((e) => !e);
  };
  const [extra, setExtra] = useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.a}>
        <Pressable
          style={styles.homeScreenPressables}
          onPress={() => {
            if (pressable) {
              handlePress();
              router.navigate({
                pathname: "/foodItem",
                params: {
                  pic: DATA?.pic,
                  title: DATA?.title,
                  id: DATA?.id,
                  subNote: DATA?.subNote,
                },
              });
            }
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
                toggleExtra();
              }}
              style={[
                styles.b,
                {
                  backgroundColor: extra ? "#06D001" : "#4445",
                },
              ]}
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
  a: {
    borderWidth: 1,
    borderColor: "#4445",
    marginRight: 10,
    borderRadius: 5,
    overflow: "hidden",
    width: 170,
  },
  b: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    width: "100%",
    // padding: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
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
