import { Image, StyleSheet, View, Text, SectionList } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  GestureHandlerRootView,
  Pressable,
} from "react-native-gesture-handler";
import { Quicksand_600SemiBold, useFonts } from "@expo-google-fonts/quicksand";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function HomeScreen() {
  let [fontsLoaded, error] = useFonts({
    Quicksand_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  const DATA = [
    {
      title: "Main dishes",
      data: [
        {
          title: "Pizza",
          id: "pizza",
          pic: require("@/assets/images/placeholder.png"),
        },
        {
          title: "Burger",
          id: "burger",
          pic: require("@/assets/images/placeholder.png"),
        },
        {
          title: "Risotto",
          id: "risotto",
          pic: require("@/assets/images/placeholder.png"),
        },
        {
          title: "Wraps",
          id: "wraps",
          pic: require("@/assets/images/placeholder.png"),
        },
      ],
    },
    // {
    //   title: "Sides",
    //   data: [
    //     { title: "French Fries", id: "French Fries" },
    //     { title: "Onion Rings", id: "Onion Rings" },
    //     { title: "Fried Shrimps", id: "Fried Shrimps" },
    //   ],
    // },
    // {
    //   title: "Drinks",
    //   data: [
    //     { title: "Water", id: "Water" },
    //     { title: "Coke", id: "Coke" },
    //     { title: "Beer", id: "Beer" },
    //   ],
    // },
    // {
    //   title: "Desserts",
    //   data: ["Cheese Cake", "Ice Cream"],
    // },
  ];
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <GestureHandlerRootView>
        <View style={styles.profileNav}>
          <View>
            <Text
              style={{
                fontFamily: "Quicksand_600SemiBold",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              SomeText
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              SomeText
            </Text>
          </View>
          <View></View>
        </View>
        <View style={styles.bottomModal}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            // renderItem={({ item }) => (
            //   <View style={styles.item}>
            //     <Text style={styles.title}>{item}</Text>
            //   </View>
            // )}
            renderItem={() => <></>}
            renderSectionHeader={({ section }) => (
              <View style={{ margin: 10 }}>
                <Text style={styles.itemHearders}>{section.title}</Text>
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => (
                    <View>
                      <Text>{item.title}</Text>
                      <Pressable style={styles.homeScreenPressables}>
                        <Image source={item.pic} style={styles.images} />
                      </Pressable>
                    </View>
                  )}
                />
              </View>
            )}
          />
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#ff036a",
  },
  profileNav: {
    height: "20%",
  },
  bottomModal: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 7,
  },
  itemHearders: {
    fontWeight: "bold",
    fontSize: 30,
  },
  homeScreenPressables: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: "#4e4e4e30",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    flex: 1,
    resizeMode: "contain",
  },
});
