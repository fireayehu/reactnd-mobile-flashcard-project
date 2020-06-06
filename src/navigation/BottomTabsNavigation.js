import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import DecksScreen from "../screens/DecksScreeen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Decks"
      component={DecksScreen}
      options={{
        tabBarLabel: "Decks",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome
            name={Platform.select({
              ios: "home",
              android: "home",
            })}
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="NewDeck"
      component={DecksScreen}
      options={{
        tabBarLabel: "New Deck",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome
            name={Platform.select({
              ios: "plus",
              android: "plus",
            })}
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;
