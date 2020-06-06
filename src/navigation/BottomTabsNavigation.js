import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DecksScreen from "../screens/DecksScreeen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Decks" component={DecksScreen} />
    <Tab.Screen name="NewDeck" component={DecksScreen} />
  </Tab.Navigator>
);

export default BottomTabs;
