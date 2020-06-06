import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { white, red, gray } from "../utils/colors";
import { getOneDeck } from "../redux/actions/deck";

import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import CustomButton from "../components/CustomButton";
class DeckDetails extends Component {
  state = {
    deckLoaded: false,
    deck: "",
    cards: [],
  };

  componentDidMount() {
    this.props.getOneDeck(this.props.route.params.deck.deckId);
  }

  startQuiz = (cards) => {
    if (cards.length === 0) {
      alert("This Deck has no cards, Add a card.");
    } else if (cards.length > 0) {
      // clearLocalNotification().then(setLocalNotification);
      this.props.navigation.navigate("Quiz", {
        title: this.props.singleDeck.deckTitle,
        cards,
      });
    }
  };

  render() {
    const deck = this.props.singleDeck;
    return (
      <View style={styles.container}>
        {this.props.singleDeck !== undefined ? (
          <View
            style={Platform.OS === "ios" ? styles.iosRow : styles.androidRow}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 27, fontWeight: "bold" }}>
                {deck.deckTitle}
              </Text>
              {this.props.singleDeck.cards === undefined ? null : (
                <Text style={{ paddingBottom: 10 }}>
                  {deck.cards.length === 0
                    ? " No cards"
                    : deck.cards.length + " Cards"}
                </Text>
              )}
            </View>
            <View
              style={{
                flex: 3,
                justifyContent: "center",
              }}
            >
              <CustomButton
                text="Add Card"
                margin={10}
                bg={white}
                color={gray}
                border={{ width: 1, color: gray }}
                onPress={() => this.props.navigation.navigate("NewCard", deck)}
              />
              <CustomButton
                text="Start Quize"
                margin={10}
                onPress={() => this.startQuiz(deck.cards)}
              />
              <CustomButton
                text="Delete Deck"
                onPress={this.startQuiz}
                color={red}
                bg={white}
              />
            </View>
          </View>
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
  },
  iosRow: {
    flex: 1,
    backgroundColor: "#efefef",
    padding: 15,
    paddingBottom: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  androidRow: {
    flex: 1,
    backgroundColor: "#efefef",
    padding: 15,
    alignSelf: "stretch",
    alignItems: "center",
  },
  deck: {
    flex: 1,
    margin: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: "#222",
    shadowOpacity: 0.4,
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  iosSubmitBtn: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: red,
    padding: 5,
    width: 170,
    borderRadius: 50,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
  },
  AndroidSubmitBtn: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: red,
    marginRight: 25,
    height: 45,
    width: 170,
    borderRadius: 2,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
  },
  submitBtnText: {
    color: red,
    fontSize: 22,
    textAlign: "center",
  },
});

const mapDispatchToProps = (dispatch) => ({
  getOneDeck: (deckId) => dispatch(getOneDeck(deckId)),
});

const mapStateToProps = (state) => ({
  singleDeck: state.decks.singleDeck,
  decks: state.decks.decks,
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails);
