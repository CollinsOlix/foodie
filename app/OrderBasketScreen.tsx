import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { router, useNavigation } from "expo-router";
import BackButton from "./components/BackButton";
import Context from "./Context";
import { SafeAreaView } from "react-native";
import tw from "twrnc";
import OrderItem from "./components/OrderItem";
import { ItemDetailsType } from "./components/types";

const OrderBasketScreen = () => {
  //Boolean variable to conditionally render
  //delete order item component
  const [active, setActive] = useState<boolean>(false);

  //Layout navigation hook
  const navigation = useNavigation();

  //User's orders that were stored in a stateful variable
  const { orderState } = useContext(Context);

  //A function to convert user's orders from
  //an object having the food items like so
  // {"Breakfast Plate": {"pic": 25, "price": "900",
  // "quantity": 0, "title": "Breakfast Plate"}}
  //to an array of objects like so
  //[{"details": {"pic": 25, "price": "900",
  // "quantity": 0, "title": "Breakfast Plate"},
  //  "id": "Breakfast Plate"}]
  function convertToArray(obj: { [key: string]: any }) {
    return Object.entries(obj).map(([key, value]) => ({
      id: key,
      details: value,
    }));
  }

  //The converted array from the above function is stored here
  const [data, setData] = useState(convertToArray(orderState));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: "#ff036a",
      },
      headerTintColor: "#ff036a",
      headerTitle: () => (
        <Text style={styles.headerText}>Your Current orders</Text>
      ),
      headerLeft: () => <BackButton />,
    });
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-1 relative`}>
      <ScrollView style={tw`mb-1`}>
        {data.map(
          (
            item: {
              details: ItemDetailsType;
              id: string;
            },
            index: number
          ) => (
            <Pressable
              key={index}
              onPress={() => {
                setActive((active) => !active);
              }}
            >
              <OrderItem item={item} />
            </Pressable>
          )
        )}
      </ScrollView>
      {active && (
        <View
          style={tw`p-5 rounded-lg bg-gray-200 relative z-9 mb-2 shadow-lg`}
        >
          <Text>Lorem Ipsum</Text>
        </View>
      )}
      <Pressable
        onPress={() => {
          router.navigate({ pathname: "/ConfirmOrderScreen" });
        }}
        style={tw`p-4 rounded-lg bg-blue-300 relative z-9 shadow-lg bg-rose-500`}
      >
        <Text style={tw`text-white text-lg text-center font-bold`}>
          Confirm Order
        </Text>
      </Pressable>
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

  container: {
    borderLeftColor: "red",
    borderLeftWidth: 1,
  },
});
