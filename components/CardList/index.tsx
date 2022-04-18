import { View, FlatList } from "react-native";
import Card from "../../components/Card";
import { cards } from "../../App";
import { SharedElement } from "react-navigation-shared-element";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface Props {
  onCardPress?: () => {};
}
const CardList: React.FC<Props> = ({ onCardPress }) => {
  return (
    <FlatList
      style={{ width: "100%", marginVertical: 20, paddingHorizontal: 5 }}
      contentContainerStyle={{ padding: 20 }}
      data={cards}
      keyExtractor={(item) => item.last4}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity onPress={() => onCardPress && onCardPress()}>
            <View
              style={{
                marginVertical: 10,
                transform: [
                  { rotate: index % 2 ? -Math.PI / 15 : Math.PI / 15 },
                ],
              }}
            >
              <Card {...item} index={index} />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default CardList;
