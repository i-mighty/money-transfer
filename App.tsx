import { Text } from "react-native";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Transaction from "./screens/Transaction";
import Home from "./screens/Home";
import NumPad from "./screens/NumPad";
import Completed from "./screens/Completed";

export const cards = [
  {
    last4: "4567",
    balance: "$8,100",
    type: require("./assets/cards_icon/visa.png"),
    bank: require("./assets/banks_icon/citi.png"),
  },
  {
    last4: "1234",
    balance: "$3,200",
    type: require("./assets/cards_icon/visa.png"),
    bank: require("./assets/banks_icon/boa.png"),
  },
  {
    last4: "4242",
    balance: "$5,400",
    type: require("./assets/cards_icon/paypal.png"),
    bank: require("./assets/banks_icon/citi.png"),
  },
  {
    last4: "9936",
    balance: "$1,582",
    type: require("./assets/cards_icon/maestro.png"),
    bank: require("./assets/banks_icon/bobcat.png"),
  },
];

export const spending = [
  {
    key: "transportation",
    title: "Transportation",
    icon: require("./assets/vehicles.png"),
    amount: "$1,000",
  },
  {
    key: "clothes",
    title: "Clothes",
    icon: require("./assets/laundry.png"),
    amount: "$2,000",
  },
];

export type CardType = typeof cards[0];
export type RecipientType = typeof recipients[0];
export const recipients = [
  {
    name: "John Doe",
    handle: "@john_doe",
    avatar:
      "https://pbs.twimg.com/profile_images/1508731916010332162/915B2myk_400x400.jpg",
  },
  {
    name: "Josiah Adegboye",
    handle: "@100_crown",
    avatar:
      "https://pbs.twimg.com/profile_images/1508731916010332162/915B2myk_400x400.jpg",
  },
  {
    name: "Other Guys",
    handle: "@other_guy",
    avatar:
      "https://pbs.twimg.com/profile_images/1508731916010332162/915B2myk_400x400.jpg",
  },
  {
    name: "Chimezie Okoro",
    handle: "@chimezie_okoro",
    avatar:
      "https://pbs.twimg.com/profile_images/1508731916010332162/915B2myk_400x400.jpg",
  },
  {
    name: "Name Cannot be Blank",
    handle: "@hack_sultan",
    avatar:
      "https://pbs.twimg.com/profile_images/1508731916010332162/915B2myk_400x400.jpg",
  },
  {
    name: "Tife Adunade",
    handle: "@tifeadunade",
    avatar:
      "https://pbs.twimg.com/profile_images/1508731916010332162/915B2myk_400x400.jpg",
  },
  {
    name: "Eni Eleni",
    handle: "@person_father",
    avatar:
      "https://pbs.twimg.com/profile_images/1508731916010332162/915B2myk_400x400.jpg",
  },
];

export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_Light: Quicksand_300Light,
    Quicksand_Regular: Quicksand_400Regular,
    Quicksand_Medium: Quicksand_500Medium,
    Quicksand_SemiBold: Quicksand_600SemiBold,
    Quicksand_Bold: Quicksand_700Bold,
  });
  const Stack = createSharedElementStackNavigator();

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => ({ header: () => null })}
          initialRouteName="List"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Transaction"
            component={Transaction}
            sharedElements={() => {
              return [`card_list`];
            }}
          />
          <Stack.Screen name="NumPad" component={NumPad} />
          <Stack.Screen name="Completed" component={Completed} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
