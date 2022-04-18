import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import SwipeButton from "rn-swipe-button";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
const NumPad = () => {
  const [value, setValue] = useState(0);
  const [delayed, setDelayed] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelayed(true);
    }, 200);
  }, []);
  const addValue = (val: number) => {
    const valueStr = value.toFixed() + val.toFixed();
    setValue(parseFloat(valueStr));
  };
  const removeValue = () => {
    const valueStr = value.toFixed().slice(0, -1);
    setValue(parseFloat(valueStr || "0"));
  };
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View entering={FadeInDown.duration(500)} style={{ flex: 1 }}>
        <View
          style={{
            marginVertical: 20,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={styles.Text}>$</Text>
          <TextInput
            value={value.toFixed()}
            style={styles.Text}
            placeholder="0.00"
          />
        </View>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{
            flex: delayed ? 1 : 0,
            justifyContent: "space-between",
            alignItems: "center",
          }}
          data={numbers}
          numColumns={3}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => {
            if (item == "*") {
              return <View style={{ width: 120, marginVertical: 20 }} />;
            }
            if (item == "#") {
              return (
                <Animated.View
                  entering={FadeInDown.delay(800)}
                  style={{ width: 120, marginVertical: 20 }}
                >
                  <TouchableOpacity
                    onPress={() => removeValue()}
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons name="backspace-outline" size={48} />
                  </TouchableOpacity>
                </Animated.View>
              );
            }
            if (typeof item == "number") {
              return (
                <Animated.View
                  entering={FadeInDown.delay((Math.floor(index / 3) + 1) * 200)}
                  style={{ width: 120, marginVertical: 20 }}
                >
                  <TouchableOpacity
                    onPress={() => addValue(item)}
                    style={{ flex: 1, alignItems: "center" }}
                  >
                    <Text style={styles.Text}>{item}</Text>
                  </TouchableOpacity>
                </Animated.View>
              );
            }
          }}
        />
        <SwipeButton
          disabled={value == 0}
          railFillBackgroundColor={`#ddd`}
          railBackgroundColor="transparent"
          thumbIconComponent={() => (
            <Feather name="target" size={38} color="#fff" />
          )}
          thumbIconStyles={{
            backgroundColor: `rgba(21, 36, 83, 255)`,
            width: 100,
            height: 100,
          }}
          thumbIconBackgroundColor="rgba(21, 36, 83, 255)"
          railFillBorderColor="#fff"
          containerStyles={{
            borderWidth: 0,
            padding: 0,
          }}
          railStyles={{
            margin: -3,
          }}
          title="Send"
          titleStyles={{
            alignSelf: "flex-end",
            paddingRight: 20,
            textAlign: "right",
          }}
          onSwipeSuccess={() => {
            // navigate to completed page
            navigate("Completed");
          }}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontFamily: "Quicksand_Bold",
    fontSize: 40,
    color: `rgba(21, 36, 83, 255)`,
    textAlign: "center",
  },
});

export default NumPad;
