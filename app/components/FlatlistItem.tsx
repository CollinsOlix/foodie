import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import Context from "../Context";
import { MenuItem } from "./types";
import tw from "twrnc";

const FlatlistItem = ({
  DATA,
  pressable = true,
}: {
  DATA: MenuItem;
  pressable: boolean;
}) => {
  const { activeItem, setActiveItem, orderRef, orderState, setOrderState } =
    useContext(Context);

  //functions used in this component
  const handlePress = () => {
    if (DATA.title) setActiveItem(DATA.title);
    if (orderRef && DATA.title) {
      orderRef[DATA.title] = {
        price: DATA.price,
        quantity: orderRef?.[DATA.title] ? orderRef?.[DATA.title]?.quantity : 0,
        title: DATA.title,
        pic: DATA.pic,
      };
      setOrderState({ ...orderRef });
    }
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
                  itemPrice: DATA?.price,
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
                <View style={tw`pt-2 pb-2`}>
                  <Text>Extra</Text>
                </View>
              ) : (
                <FontAwesome
                  name="plus"
                  size={15}
                  color="#fff"
                  style={tw`pt-2 pb-2`}
                />
              )}
            </Pressable>
          )}
        </Pressable>
        <View style={tw`bg-white p-2`}>
          <View style={tw`flex-row justify-between`}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={tw`font-black text-base w-8/12`}
            >
              {DATA?.title}
            </Text>
            <Text style={tw`text-right text-base`}>{DATA?.price}</Text>
          </View>
          <View style={tw`flex-row items-center flex-1`}>
            <FontAwesome
              name="clock-o"
              size={15}
              color="#999"
              style={tw`mr-1`}
            />
            <Text style={tw`text-green-300 font-bold text-base`}>
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
