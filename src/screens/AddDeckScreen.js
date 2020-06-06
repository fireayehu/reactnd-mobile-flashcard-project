import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  View,
} from "react-native";
import { connect } from "react-redux";
import { blue, white } from "../utils/colors";
import { addNewDeck } from "../redux/actions/deck";

import { getUniqueId } from "../utils/helpers";
import CustomButton from "../components/CustomButton";

class AddDeckScreen extends Component {
  state = {
    deck: {
      deckId: getUniqueId(),
      deckTitle: "",
      cards: [],
    },
  };

  handleChange = (input) => {
    let deck = { ...this.state.deck };
    deck.deckTitle = input;
    this.setState(() => ({ deck }));
  };

  handleSubmit = () => {
    const newDeck = { ...this.state.deck };
    if (newDeck.deckTitle === "") {
      alert("Please provide a deck title first.");
    } else {
      this.props.addNewDeck(newDeck);
      let resetDeck = { ...this.state.deck };
      this.setState({
        deck: {
          deckId: getUniqueId(),
          deckTitle: "",
          cards: [],
        },
      });
      setTimeout(() => {
        this.props.navigation.navigate("DeckDetails", { deck: resetDeck });
      }, 300);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.row}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Deck Title</Text>
          <TextInput
            onChangeText={this.handleChange}
            style={{
              backgroundColor: "#ededed",
              height: 50,
              width: 280,
              marginBottom: 20,
              padding: 7,
              borderRadius: 5,
              borderColor: blue,
              borderWidth: 1,
            }}
          />
          <CustomButton onPress={this.handleSubmit} text="ADD DECK" />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
  },
  row: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addNewDeck: (id, deck) => dispatch(addNewDeck(id, deck)),
});

export default connect(null, mapDispatchToProps)(AddDeckScreen);
