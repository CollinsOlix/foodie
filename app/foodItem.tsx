import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  Animated,
  ImageSourcePropType,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import {
  router,
  Stack,
  UnknownOutputParams,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { Dimensions } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import AddToCart from "./components/AddToCart";
import FieldsetLegend from "./components/FieldsetLegend";
import FlatlistItem from "./components/FlatlistItem";
import BackButton from "./components/BackButton";
import Context from "./Context";
import tw from "twrnc";
import { navigate } from "expo-router/build/global-state/routing";

const width = Dimensions.get("window").width;

//component entry point
export default function FoodItem() {
  const { orderState } = useContext(Context);
  const animatedScale = useRef(new Animated.Value(0)).current;

  //sample data for rendering components
  const DATA = [
    {
      id: 1,
      title: "Ketchup",
      price: 10,
      pic: require("@/assets/images/ketchup.jpg"),
    },
    {
      id: 2,
      title: "Mayonnaise",
      price: 10,
      pic: require("@/assets/images/mayonnaise.png"),
    },
    {
      id: 3,
      title: "Hot Sauce",
      price: 10,
      pic: require("@/assets/images/hotsauce.jpg"),
    },
  ];

  const navigateToViewOrdersInBasket = () => {
    router.navigate({ pathname: "/OrderBasketScreen" });
  };

  //Handles Bounce Animation for when item is added to basket
  const bounceAnimation = () => {
    animatedScale.setValue(0.3);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 5,
      useNativeDriver: true,
    }).start();
  };
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const { title, pic, subNote, itemPrice }: UnknownOutputParams = params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Back to Room Service Menu",
      headerStyle: { backgroundColor: "#ff036a" },
      headerTintColor: "#ff036a",
      headerRight: () => (
        <Pressable onPress={navigateToViewOrdersInBasket}>
          <Animated.View
            style={[
              styles.ordersBtn,
              { transform: [{ scale: animatedScale }] },
            ]}
          >
            {orderState?.[`${title}`]?.quantity > 0 ? (
              <MaterialIcons name="room-service" size={27} color="white" />
            ) : (
              <MaterialCommunityIcons
                name="room-service-outline"
                size={27}
                color="white"
              />
            )}
          </Animated.View>
        </Pressable>
      ),
    });
    animatedScale.setValue(1);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.imageHolder}>
        <Image
          resizeMode="contain"
          source={pic as ImageSourcePropType}
          style={styles.images}
        />
      </View>

      <ScrollView style={tw`m-5 mb-25`}>
        <View style={tw`flex-row items-center self-auto`}>
          <View style={styles.titleHolder}>
            <FontAwesome
              name="heart"
              size={20}
              color="#06D001"
              style={tw`mr-4`}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={tw`font-bold text-lg text-black`}>{itemPrice}</Text>
        </View>
        <FieldsetLegend
          legend="Dietary Information/ Ingredients"
          innerText={`${subNote}` || "Some Dietary info goes here"}
        />
        <View style={tw`mt-7`}>
          <Text style={tw`text-lg font-semibold`}>Extras/Ekstralar</Text>
          <FlatList
            horizontal
            data={DATA}
            renderItem={({ item }) => {
              return (
                <FlatlistItem DATA={item} pressable={false} key={item.id} />
              );
            }}
          />
        </View>
      </ScrollView>
      <AddToCart bounceAnimation={bounceAnimation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  ordersBtn: {
    padding: 10,
  },
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
  titleHolder: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
  },
});
