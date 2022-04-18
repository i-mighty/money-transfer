import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import Card from "../../components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import { cards, spending } from "../../App";
import TabBar from "../../components/TabBar";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View entering={FadeIn.duration(500)} style={styles.container}>
        <Animated.View entering={FadeInUp.duration(600)}>
          <TouchableOpacity
            style={{
              padding: 16,
              borderColor: "#333A",
              borderWidth: 1,
              borderRadius: 20,
            }}
          >
            {/*//@ts-ignore */}
            <Fontisto name="spinner-fidget" size={46} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.duration(600)}
          style={{ marginVertical: 40 }}
        >
          <Text style={{ fontFamily: "Quicksand_SemiBold", fontSize: 40 }}>
            Accounts
          </Text>
        </Animated.View>
        {/* <SharedElement id="card_list"> */}
        <Card {...cards[0]} />
        {/* </SharedElement> */}

        <FlatList
          style={{ width: "100%", marginVertical: 20, paddingHorizontal: 5 }}
          data={spending}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInDown.delay(index * 200).duration(600)}
              style={{
                // width: "100%",
                flex: 1,
                marginVertical: 10,
                flexDirection: "row",
                marginHorizontal: 0,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderColor: "#3333",
                  borderWidth: 1,
                  borderRadius: 12,
                  padding: 12,
                }}
              >
                <Image
                  source={item.icon}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                />
              </View>
              <Text style={{ fontFamily: "Quicksand_SemiBold", fontSize: 20 }}>
                {item.title}
              </Text>
              <Text style={{ fontFamily: "Quicksand_SemiBold", fontSize: 20 }}>
                {item.amount}
              </Text>
            </Animated.View>
          )}
        />
        <Animated.View
          entering={FadeIn.duration(600)}
          style={{ flexDirection: "row", height: 60, marginTop: 20 }}
        >
          <TabBar />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // paddingVertical: 50,
    // justifyContent: "center",
    padding: 30,
  },
});
