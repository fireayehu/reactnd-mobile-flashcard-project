import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  Animated,
  Dimensions,
} from "react-native";

const DeckItem = ({ deck, navigation }) => {
  const margin = new Animated.Value(0);

  const onDeckClick = () => {
    Animated.timing(margin, {
      toValue: Dimensions.get("window").width,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate("DeckDetails", {
        deck: deck,
      });

      Animated.timing(margin, {
        toValue: 1,
        duration: 10,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <TouchableOpacity
      style={[
        styles.deck,
        {
          transform: [
            {
              translateX: margin,
            },
          ],
        },
      ]}
      onPress={onDeckClick}
    >
      <View style={Platform.OS === "ios" ? styles.iosRow : styles.androidRow}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          {" "}
          {deck.deckTitle}{" "}
        </Text>
        <Text style={{ paddingBottom: 10 }}>
          {deck.cards.length === 0 ? " No cards" : deck.cards.length + " Cards"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iosRow: {
    flex: 1,
    backgroundColor: "#efefef",
    padding: 15,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 10,
  },
  androidRow: {
    flex: 1,
    backgroundColor: "#efefef",
    padding: 15,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#222",
  },
  deck: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#222",
    shadowOpacity: 0.4,
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default DeckItem;
