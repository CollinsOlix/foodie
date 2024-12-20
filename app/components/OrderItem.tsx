import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { ItemDetailsType } from "./types";

const OrderItem = ({
  item,
}: {
  item: { id: string; details: ItemDetailsType };
}) => {
  const { pic, quantity, price } = item.details;
  return (
    <View style={tw`bg-gray-100 mb-3 p-3 flex-row shadow-md rounded-lg`}>
      <View
        style={tw`border-gray-400 border-solid border-2 mr-3 rounded-md overflow-hidden`}
      >
        <Image source={pic} style={tw`h-25 w-25`} />
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`font-semibold text-xl`}>{item.id}</Text>
      </View>
      <View
        style={tw`border-l-2 border-gray-300 items-center justify-center w-15`}
      >
        <View style={tw`border-b-2 border-gray-200`}>
          <Text>
            {price} x {quantity}
          </Text>
        </View>
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`text-green-300 font-bold text-xl`}>
            {price * quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: "600",
    color: "#fff",
  },
});
