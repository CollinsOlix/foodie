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
const width = Dimensions.get("window").width;

const AddToTray = ({ bounceAnimation }: { bounceAnimation: Function }) => {
  const { activeItem, orderRef, setOrderState, orderState } =
    useContext(Context);
  const [counter, setCounter] = useState(orderRef[`${activeItem}`]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton />,
    });
  }, []);
  useEffect(() => {
    orderRef[`${activeItem}`] = counter;
    setOrderState(orderRef);
  }, [counter]);

  useEffect(() => {
    console.log(orderState);
  }, [orderState, counter]);

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
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Add to Tray</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          style={styles.incrementorBtn}
          onPress={() => {
            handleCounter();
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
            handleCounter("increment");
            bounceAnimation();
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
