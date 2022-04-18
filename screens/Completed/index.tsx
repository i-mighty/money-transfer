import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Completed = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.Root}>
      {/* <View style={{ width: 400, height: 400 }}> */}
      <LottieView
        autoPlay
        onAnimationFinish={() => navigate("Home")}
        loop
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#fff",
        }}
        source={require("../../assets/lottie/completed.json")}
      />
      {/* </View> */}
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({
  Root: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
