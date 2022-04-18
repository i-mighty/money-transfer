import { Text, View, Image } from "react-native";
import { RecipientType } from "../../App";
import React from "react";

const Recipient: React.FC<RecipientType> = (item) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={{ uri: item.avatar }}
        style={{
          width: 80,
          height: 80,
          resizeMode: "contain",
          borderRadius: 20,
          borderColor: "#3336",
          borderWidth: 2,
          padding: 10,
        }}
      />
      <Text
        style={{
          fontFamily: "Quicksand_SemiBold",
          fontSize: 18,
          color: "#333",
          textAlign: "center",
          marginVertical: 5,
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          fontFamily: "Quicksand_SemiBold",
          fontSize: 14,
          color: "#3337",
          textAlign: "center",
        }}
      >
        {item.handle}
      </Text>
    </View>
  );
};

export default React.memo(Recipient);
