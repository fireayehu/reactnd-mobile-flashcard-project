import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabsNavigation";
import DecksScreen from "../screens/DecksScreeen";
import DeckDetails from "../screens/DeckDetails";
import QuizScreen from "../screens/QuizScreen";
import AddCardScreen from "../screens/AddCardScreen";
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
    <Stack.Screen
      name="DeckDetails"
      component={DeckDetails}
      options={({ route }) => ({ title: route.params.deck.deckTitle })}
    />
    <Stack.Screen
      name="Quiz"
      component={QuizScreen}
      options={({ route }) => ({ title: route.params.title })}
    />
    <Stack.Screen
      name="Card"
      component={AddCardScreen}
      options={{
        title: "Add Card",
      }}
    />
  </Stack.Navigator>
);

export default MainStack;
