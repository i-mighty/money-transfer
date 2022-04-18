import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { recipients } from "../../App";
import Recipient from "../Recipient";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

const RecipientList = () => {
  const { navigate } = useNavigation();

  return (
    <FlatList
      style={{ width: "100%", marginVertical: 40, paddingHorizontal: 5 }}
      data={recipients}
      keyExtractor={(item) => item.handle}
      numColumns={2}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => navigate("NumPad")}
          style={{ flex: 1, marginVertical: 20 }}
        >
          <Animated.View
            entering={FadeInDown.delay(
              (Math.floor(index / 2) + 1) * 200
            ).duration(600)}
            exiting={FadeOutDown.duration(600)}
          >
            <Recipient {...item} />
          </Animated.View>
        </TouchableOpacity>
      )}
    />
  );
};

export default RecipientList;
