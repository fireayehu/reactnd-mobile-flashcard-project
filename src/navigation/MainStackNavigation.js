import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabsNavigation";
import DecksScreen from "../screens/DecksScreeen";
const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
    <Stack.Screen name="NewDeck" component={DecksScreen} />
    <Stack.Screen name="DeckDetails" component={DecksScreen} />
    <Stack.Screen name="Quiz" component={DecksScreen} />
    <Stack.Screen name="Card" component={DecksScreen} />
  </Stack.Navigator>
);

export default MainStack;
