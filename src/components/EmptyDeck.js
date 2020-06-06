import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const EmptyDeck = () => (
  <View style={styles.conatiner}>
    <MaterialCommunityIcons name="emoticon-sad-outline" size={60} />
    <Text style={styles.text}>
      Ther are no decks currently, create new ones
    </Text>
  </View>
);

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 5,
    fontSize: 13,
  },
});

export default EmptyDeck;
