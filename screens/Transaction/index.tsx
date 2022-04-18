import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import CardList from "../../components/CardList";
import RecipientList from "../../components/RecipientList";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutUp,
} from "react-native-reanimated";
const Transaction = () => {
  const [status, setStatus] = useState("select_card");
  const renderTitle = () => {
    switch (status) {
      case "select_card":
        return (
          <Animated.Text
            exiting={FadeOut}
            entering={FadeInDown.delay(400).duration(600)}
            style={styles.Text}
          >
            an account
          </Animated.Text>
        );
      case "select_person":
        return (
          <Animated.Text
            exiting={FadeOutUp}
            entering={FadeInDown.delay(400).duration(600)}
            style={styles.Text}
          >
            a recipient
          </Animated.Text>
        );
    }
  };

  const renderContent = () => {
    switch (status) {
      case "select_card":
        return <CardList onCardPress={() => setStatus("select_person")} />;
      case "select_person":
        return <RecipientList />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {status && (
          <View>
            <Animated.Text
              entering={FadeIn.delay(200).duration(600)}
              style={{
                fontFamily: "Quicksand_SemiBold",
                fontSize: 40,
                color: `rgba(21, 36, 83, 255)`,
                textAlign: "center",
              }}
            >
              Choose
            </Animated.Text>
            {/* <Animated.Text
              entering={FadeInDown.delay(400)}
              style={{
                fontFamily: "Quicksand_SemiBold",
                fontSize: 40,
                color: `rgba(21, 36, 83, 255)`,
                textAlign: "center",
              }}
            > */}
            {renderTitle()}
            {/* </Animated.Text> */}
          </View>
        )}
        {renderContent()}
      </View>
    </SafeAreaView>
  );
};

export default Transaction;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 10,
    // justifyContent: "center",
    paddingHorizontal: 30,
  },
  Text: {
    fontFamily: "Quicksand_SemiBold",
    fontSize: 40,
    color: `rgba(21, 36, 83, 255)`,
    textAlign: "center",
  },
});
