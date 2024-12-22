import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { FontAwesome } from "@expo/vector-icons";
import Context from "../Context";
import { useNavigation } from "@react-navigation/native";
import BackButton from "./BackButton";
import tailwind from "twrnc";
const width = Dimensions.get("window").width;

const AddToCart = ({ bounceAnimation }: { bounceAnimation: Function }) => {
  //retrieving items stored in context store
  const { activeItem, orderRef, setOrderState } = useContext(Context);

  //Counter stateful variable for incrementing
  //or decrementing item quantity
  const [counter, setCounter] = useState(
    orderRef[`${activeItem}`]?.[`quantity`]
  );

  //layout navigation object
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton />,
    });
  }, []);

  //.
  useEffect(() => {
    orderRef[`${activeItem}`].quantity = counter;
    setOrderState(orderRef);
  }, [counter]);

  //functions used in this component
  const handleCounter = (incType?: string) => {
    if (incType == "increment") {
      setCounter((c: number) => c + 1);
    } else {
      setCounter((c: number) => (c > 0 ? c - 1 : 0));
    }
  };
  return (
    <View style={styles.wrapper}>
      <Text style={tailwind`text-xl font-bold`}>Add to Tray</Text>
      <View style={tailwind`flex-row items-center`}>
        {/* Minus Icon to indicate reduction */}
        <Pressable
          style={styles.incrementorBtn}
          onPress={() => {
            handleCounter();
          }}
        >
          <FontAwesome name="minus" size={22} color="#222" />
        </Pressable>
        <Text style={tailwind`mr-5 ml-5 text-xl font-semibold`}>{counter}</Text>
        <Pressable
          style={styles.incrementorBtn}
          onPress={() => {
            handleCounter("increment");
            !orderRef?.[activeItem].quantity && bounceAnimation();
          }}
        >
          <FontAwesome name="plus" size={22} color="#222" />
        </Pressable>
      </View>
    </View>
  );
};

export default AddToCart;

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
