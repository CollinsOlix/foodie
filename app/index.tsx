import {
  Image,
  StyleSheet,
  View,
  Text,
  SectionList,
  Pressable,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  GestureHandlerRootView,
  TouchableOpacity,
  TextInput,
} from "react-native-gesture-handler";
import { EvilIcons, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import FlatlistItem from "./components/FlatlistItem";

export default function HomeScreen() {
  const DATA = [
    {
      title: "Main dishes",
      pic: require("@/assets/images/placeholder.jpg"),
      data: [
        {
          title: "Salads/Salatalar",
          data: [
            {
              title: "Classic Caesar Salad",
              id: "ceaserSalad",
              subNote: "Parmesan Shavings and Garlic Croutons",
              pic: require("@/assets/images/csalad.jpg"),
              time: "<20",
            },
            {
              title: "Caprese Salad ",
              id: "capreseSalad ",
              subNote:
                "Sliced Roma Tomatoes, Buffalo Mozzarella, Balsamic Dressing and Basil (v)",
              pic: require("@/assets/images/capresesalad.jpg"),
              time: "<20",
            },
          ],
        },
        {
          title: "Soups/Çorbalar",
          data: [
            {
              title: "Tomato Soup with Basil Cream (v)",
              id: "tomatoSoup",
              pic: require("@/assets/images/tomatoSoup.jpg"),
            },
          ],
        },
        {
          title: "Cold Sandwiches",

          data: [
            {
              title: "Egg Mayonnaise and Cress (v)",
              id: "eggMayoCress",
              pic: require("@/assets/images/placeholder.jpg"),
            },
            {
              title: "Smoked Salmon* and Cucumber in a Poppy Seed Bage",
              id: "smokedSalmonCucumber",
              pic: require("@/assets/images/placeholder.jpg"),
            },
          ],
        },

        {
          title: "Pizzas/Pizzalar",
          id: "pizza",
          pic: require("@/assets/images/placeholder.jpg"),
          data: [
            {
              title: "Hawaiian Pizza",
              id: "burger",
              pic: require("@/assets/images/placeholder.jpg"),
            },
          ],
        },
      ],
    },
    {
      title: "Drinks",

      data: [{}],
    },
  ];
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.safeAreaView}>
        <View
          style={{ flexDirection: "row", padding: 15, alignItems: "center" }}
        >
          <View style={{ flex: 1 }}>
            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome6
                name="location-dot"
                size={26}
                color="white"
                style={styles.pressableIcons}
              />
              <View>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  Address Line 1
                </Text>
                <Text style={{ color: "#fff" }}>Address Line 2</Text>
              </View>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable>
              <EvilIcons name="heart" color="white" size={30} />
            </Pressable>
            <Pressable>
              <EvilIcons name="cart" color="white" size={30} />
            </Pressable>
          </View>
        </View>
        <View style={styles.textInputWrapper}>
          <FontAwesome
            name="search"
            size={20}
            color="#333"
            style={{ alignSelf: "center", marginLeft: 5 }}
          />
          <TextInput
            multiline={false}
            style={styles.homeScreenTextInput}
            textAlignVertical="center"
            placeholderTextColor="#999"
            placeholder="Search for a dish"
            numberOfLines={1}
            maxLength={35}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingHorizontal: 15,
          }}
        >
          <SectionList
            showsVerticalScrollIndicator={false}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <>
                <Text style={styles.itemSubHeaders}>{item.title}</Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={item.data}
                  renderItem={({ item }) => {
                    return <FlatlistItem DATA={item} />;
                  }}
                />
              </>
            )}
            renderSectionHeader={({ section }) => (
              <View style={{ marginVertical: 10 }}>
                <Text style={styles.itemHeaders}>{section.title}</Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#ff036a",
  },
  profileNav: {
    padding: 15,
    justifyContent: "space-around",
    // height: "20%",
  },
  bottomModal: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 7,
  },
  item: {
    marginBottom: 12,
  },
  itemHeaders: {
    fontWeight: "bold",
    fontSize: 30,
  },
  itemSubHeaders: {
    fontSize: 24,
    fontWeight: "bold",

    // whiteSpace: "nowrap",
  },
  dietaryPreview: { maxWidth: "70%", fontSize: 13, fontWeight: "900" },
  homeScreenPressables: {
    height: 170,
    borderBottomWidth: 1,
    borderColor: "#aaa",
    overflow: "hidden",
    backgroundColor: "#4e4e4e30",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    flex: 1,
  },
  homeScreenTextInput: {
    fontSize: 20,
    flex: 1,
  },
  pressableIcons: {
    paddingRight: 5,
  },
  textInputWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  profileInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    // padding: 10,
    marginVertical: 10,
  },
});
