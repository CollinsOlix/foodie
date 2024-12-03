import {
  Image,
  StyleSheet,
  View,
  Text,
  SectionList,
  Pressable,
} from "react-native";
import DATA from "./components/foodDATA";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import { EvilIcons, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import FlatlistItem from "./components/FlatlistItem";
import Context from "./Context";
import { useContext } from "react";

export default function HomeScreen() {
  const { lang, setLang } = useContext(Context);
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.a}>
          <View style={styles.b}>
            <Pressable style={styles.c}>
              <FontAwesome6
                name="location-dot"
                size={26}
                color="white"
                style={styles.pressableIcons}
              />
              <View>
                <Text
                  style={{
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  Address Line 1
                </Text>
                <Text style={{ color: "#fff", lineHeight: 15 }}>
                  Address Line 2
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.c}>
            <Pressable>
              <EvilIcons name="cart" color="white" size={30} />
            </Pressable>
            <Pressable
              onPress={() => {
                setLang((lang) =>
                  lang == "en" ? (lang = "tr") : (lang = "en")
                );
              }}
            >
              <FontAwesome name="language" color="white" size={30} />
            </Pressable>
          </View>
        </View>
        <View style={styles.textInputWrapper}>
          <FontAwesome
            name="search"
            size={20}
            color="#333"
            style={{ alignSelf: "center", marginLeft: 10 }}
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
            sections={DATA[`${lang}`]}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => {
              return <></>;
              // return <FlatlistItem DATA={item} />
              // return (
              //   <>
              //     <Text style={styles.itemSubHeaders}>{item.title}</Text>
              //     <FlatList
              //       horizontal
              //       showsHorizontalScrollIndicator={false}
              //       data={item.data}
              //       renderItem={({ item }) => {
              //       }}
              //     />
              //   </>
              // );
            }}
            renderSectionHeader={({ section }) => (
              <View style={{ marginTop: 5 }}>
                <Text style={styles.itemHeaders}>{section.title}</Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={section.data}
                  renderItem={({ item }) => <FlatlistItem DATA={item} />}
                />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  a: { flexDirection: "row", padding: 15, alignItems: "center" },
  b: { flex: 1 },
  c: { flexDirection: "row", alignItems: "center" },
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
    fontWeight: "600",
    fontSize: 25,
    marginVertical: 5,
    textTransform: "uppercase",
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
    borderRadius: 30,
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
