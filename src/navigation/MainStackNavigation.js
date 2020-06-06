import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabsNavigation";
import DecksScreen from "../screens/DecksScreeen";
import DeckDetails from "../screens/DeckDetails";

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BottomTabs"
      component={BottomTabs}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="NewDeck" component={DecksScreen} />
    <Stack.Screen
      name="DeckDetails"
      component={DeckDetails}
      options={({ route }) => ({ title: route.params.deck.deckTitle })}
    />
    <Stack.Screen name="Quiz" component={DecksScreen} />
    <Stack.Screen name="Card" component={DecksScreen} />
  </Stack.Navigator>
);

export default MainStack;
