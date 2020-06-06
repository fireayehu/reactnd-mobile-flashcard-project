import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import { white } from "../utils/colors";
import { getAllDecks } from "../redux/actions/deck";
import EmptyDeck from "../components/EmptyDeck";
import DeckItem from "../components/DeckItem";

class DecksScreen extends Component {
  componentDidMount() {
    this.props.getAllDecks();
  }

  render() {
    const { decks } = this.props;
    return decks.length === 0 ? (
      <EmptyDeck />
    ) : (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.deckId}
          data={decks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <DeckItem deck={item} navigation={this.props.navigation} />
          )}
        />
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
});

const mapDispatchToProps = (dispatch) => ({
  getAllDecks: () => dispatch(getAllDecks()),
});

const mapStateToProps = (state) => ({
  decks: state.decks.decks,
});

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen);
