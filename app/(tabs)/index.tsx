import { Image, StyleSheet, View, Text, SectionList } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  GestureHandlerRootView,
  Pressable,
  TextInput,
} from "react-native-gesture-handler";

export default function HomeScreen() {
  const DATA = [
    {
      title: "Main dishes",
      pic: require("@/assets/images/placeholder.jpg"),
      data: [
        {
          title: "Salads",
          data: [
            {
              title: "Classic Caesar Salad",
              id: "ceaserSalad",
              subNote: "Parmesan Shavings and Garlic Croutons",
              pic: require("@/assets/images/csalad.jpg"),
            },
            {
              title: "Caprese Salad ",
              id: "capreseSalad ",
              subNote:
                "Sliced Roma Tomatoes, Buffalo Mozzarella, Balsamic Dressing and Basil (v)",
              pic: require("@/assets/images/capresesalad.jpg"),
            },
          ],
        },
        {
          title: "Soups",
          data: [
            {
              title: "Tomato Soup with Basil Cream (v)",
              id: "tomatoSoup",
              pic: require("@/assets/images/placeholder.jpg"),
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
          title: "Pizza",
          id: "pizza",
          pic: require("@/assets/images/placeholder.jpg"),
          data: [
            {
              title: "Burger",
              id: "burger",
              pic: require("@/assets/images/placeholder.jpg"),
            },
            {
              title: "Risotto",
              id: "risotto",
              pic: require("@/assets/images/placeholder.jpg"),
            },
            {
              title: "Makarna",
              id: "makarna",
              pic: require("@/assets/images/placeholder.jpg"),
            },
            {
              title: "Curry",
              id: "curry",
              pic: require("@/assets/images/placeholder.jpg"),
            },
          ],
        },
        {
          title: "Burger",
          id: "burger",
          pic: require("@/assets/images/placeholder.jpg"),
          data: [
            {
              title: "Burger",
              id: "burger",
              pic: require("@/assets/images/placeholder.jpg"),
            },
            {
              title: "Risotto",
              id: "risotto",
              pic: require("@/assets/images/placeholder.jpg"),
            },
          ],
        },
        {
          title: "Risotto",
          id: "risotto",
          pic: require("@/assets/images/placeholder.jpg"),
          data: [
            {
              title: "Burger",
              id: "burger",
              pic: require("@/assets/images/placeholder.jpg"),
            },
            {
              title: "Risotto",
              id: "risotto",
              pic: require("@/assets/images/placeholder.jpg"),
            },
          ],
        },
      ],
    },
  ];
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <GestureHandlerRootView>
        <View style={styles.profileNav}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text>loc_icon</Text>
              <Text>User_Location</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Pressable>
                <Text>Fav</Text>
              </Pressable>
              <Pressable>
                <Text>Bas</Text>
              </Pressable>
            </View>
          </View>
          <View>
            <TextInput
              multiline={false}
              style={styles.homeScreenTextInput}
              placeholderTextColor="#999"
              placeholder="Search for a dish"
            />
          </View>
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
            renderItem={({ item }) => (
              <>
                <Text style={styles.itemSubHeaders}>{item.title}</Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={item.data}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.item}>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={styles.dietaryPreview}
                        >
                          {item.title}
                        </Text>
                        <Pressable style={styles.homeScreenPressables}>
                          <Image source={item.pic} style={styles.images} />
                        </Pressable>
                      </View>
                    );
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
    padding: 15,
    justifyContent: "space-evenly",
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
  dietaryPreview: { width: 170, fontSize: 16 },
  homeScreenPressables: {
    width: 170,
    height: 170,
    borderColor: "#aaa",
    borderWidth: 2,
    overflow: "hidden",
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
  homeScreenTextInput: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
    fontSize: 17,
  },
});
