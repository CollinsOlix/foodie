import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import {
  UnknownOutputParams,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AddToTray from "./components/AddToTray";
import FieldsetLegend from "./components/FieldsetLegend";
import FlatlistItem from "./components/FlatlistItem";

const width = Dimensions.get("window").width;

//component entry point
export default function FoodItem() {
  //sample data for rendering components
  const DATA = [
    {
      id: 1,
      title: "Ketchup",
      price: 10,
      pic: require("../assets/images/ketchup.jpg"),
    },
    {
      id: 2,
      title: "Mayonnaise",
      price: 10,
      pic: require("../assets/images/mayonnaise.png"),
    },
    {
      id: 3,
      title: "Hot Sauce",
      price: 10,
      pic: require("../assets/images/hotsauce.jpg"),
    },
  ];
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const { id, title, pic, subNote }: UnknownOutputParams = params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerStyle: { backgroundColor: "#ff036a" },
      headerTitleStyle: { fontWeight: "600" },
    });
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.imageHolder}>
        <Image resizeMode="contain" source={pic} style={styles.images} />
      </View>
      <ScrollView
        style={{
          margin: 10,
          marginBottom: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "auto",
          }}
        >
          <View style={styles.titleHolder}>
            <FontAwesome
              name="heart"
              size={20}
              color="#06D001"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text>999</Text>
        </View>
        <FieldsetLegend
          legend="Dietary Information/ Ingredients"
          innerText={`${subNote}` || "Some Dietary info goes here"}
        />
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 17, fontWeight: "600" }}>
            Extras/Ekstralar
          </Text>
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
      <AddToTray />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
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
