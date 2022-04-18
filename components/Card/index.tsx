import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { CardType } from "../../App";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

const Card: React.FC<CardType & { index?: number }> = ({
  last4,
  balance,
  type,
  bank,
  index = 0,
}) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 300).duration(600)}
      exiting={FadeOutDown.duration(600)}
      style={{
        width: "100%",
        height: 200,
        backgroundColor: "#ddd9",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 80, width: 80, resizeMode: "contain" }}
          source={bank}
        />
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: "Quicksand_Bold",
              fontSize: 32,
              textAlignVertical: "center",
              textAlign: "center",
              marginTop: 3.5,
              letterSpacing: 5,
            }}
          >{`**** `}</Text>
          <Text
            style={{
              fontFamily: "Quicksand_Medium",
              fontSize: 28,
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            {last4}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Quicksand_Bold",
            fontSize: 28,
            textAlignVertical: "center",
            textAlign: "center",
            marginTop: 4,
            letterSpacing: 4,
          }}
        >
          {balance}
        </Text>
        <Image
          style={{ height: 60, width: 60, resizeMode: "contain" }}
          source={type}
        />
      </View>
    </Animated.View>
  );
};

export default React.memo(Card);
