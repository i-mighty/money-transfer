import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const TabBar = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        backgroundColor: `rgba(21, 36, 83, 255)`,
        width: "100%",
        padding: 12,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity>
        <MaterialCommunityIcons name="speedometer" size={40} color="#eee4" />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "Quicksand_SemiBold",
          fontSize: 16,
          color: "white",
        }}
      >
        Overview
      </Text>
      <TouchableOpacity onPress={() => navigate("Transaction")}>
        <Ionicons name="swap-horizontal" size={40} color="#eee4" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="person-outline" size={40} color="#eee4" />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(TabBar);
