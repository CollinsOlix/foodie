import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Context from "../Context";
import { useNavigation } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const BackButton = () => {
  const navigation = useNavigation();
  const { orderRef, activeItem, setOrderState } = useContext(Context);
  return (
    <Pressable
      onPress={() => {
        if (!orderRef?.[activeItem]) delete orderRef[`${activeItem}`];
        setOrderState(orderRef[`${activeItem}`]);
        navigation.goBack();
      }}
      style={{
        paddingRight: 10,
      }}
    >
      <FontAwesome name="arrow-left" size={24} color="white" />
    </Pressable>
  );
};

export default BackButton;
