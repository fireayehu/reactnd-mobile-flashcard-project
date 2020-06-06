import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  Picker,
  View,
} from "react-native";
import { connect } from "react-redux";
import { white, red, blue } from "../utils/colors";
import { addNewCard } from "../redux/actions/card";
import CustomButton from "../components/CustomButton";

class AddCardScreen extends Component {
  state = {
    card: {
      question: "",
      answer: true,
    },
  };

  handleChange = (input) => {
    let card = { ...this.state.card };
    card.question = input;
    this.setState(() => ({ card }));
  };

  grabCardAnswer = (input) => {
    let card = { ...this.state.card };
    if (input === "true") {
      card.answer = true;
    }
    if (input === "false") {
      card.answer = false;
    }
    this.setState(() => ({ card }));
  };

  handleSubmit = () => {
    if (this.state.card.question === "") {
      alert("Please provide a question first.");
    } else {
      const card = { ...this.state.card };
      const deck = this.props.route.params.deck;
      const deckId = deck.deckId;
      this.props.addNewCard(deckId, card);
      this.props.navigation.navigate("DeckDetails", { deck: deck });
    }
  };

  toHome = () => {
    this.props.navigation.navigate("DeckDetails", { deckId: deckId });
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          style={Platform.OS === "ios" ? styles.iosRow : styles.androidRow}
        >
          <KeyboardAvoidingView behavior="padding">
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Question</Text>
            <TextInput
              onChangeText={this.handleChange}
              style={{
                backgroundColor: white,
                height: 50,
                width: 280,
                marginBottom: 20,
                padding: 7,
                borderRadius: 5,
                borderColor: blue,
                borderWidth: 1,
              }}
            />
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
              Pick Answer: Correct/Incorrect
            </Text>
            <Picker
              selectedValue={this.state.card.answer ? "true" : "false"}
              mode="dropdown"
              style={{ width: 280, height: 110 }}
              itemStyle={{
                backgroundColor: white,
                color: red,
                borderBottomColor: red,
                borderRadius: 10,
                borderColor: red,
                borderWidth: 1,
                height: 110,
              }}
              onValueChange={(itemValue) => this.grabCardAnswer(itemValue)}
            >
              <Picker.Item label="Correct" value="true" />
              <Picker.Item label="Incorrect" value="false" />
            </Picker>
          </KeyboardAvoidingView>
          <CustomButton onPress={this.handleSubmit} text="SUBMIT" />
        </KeyboardAvoidingView>
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
    borderRadius: 5,
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
});

const mapDispatchToProps = (dispatch) => ({
  addNewCard: (deckId, card) => dispatch(addNewCard(deckId, card)),
});

export default connect(null, mapDispatchToProps)(AddCardScreen);
