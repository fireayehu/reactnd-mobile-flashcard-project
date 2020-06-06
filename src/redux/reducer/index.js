import { combineReducers } from "redux";
import { ADD_NEW_DECK, GET_ALL_DECKS, GET_SINGLE_DECK } from "../actions/deck";
import { ADD_NEW_CARD } from "../actions/card";

export const INITAL_STATE = {
  decks: [],
  singleDeck: {},
};

const reducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_DECK:
      let newDeck = { ...action.deckObject };
      return {
        decks: [...state.decks, newDeck],
        singleDeck: newDeck,
      };
    case ADD_NEW_CARD:
      let editedSingleDeck = action.decks.filter(
        (deck) => deck.deckId === action.deckId
      );
      return {
        decks: action.decks,
        singleDeck: editedSingleDeck[0],
      };
    case GET_ALL_DECKS:
      return {
        decks: action.decks ? action.decks : [],
        singleDeck: state.singleDeck,
      };
    case GET_SINGLE_DECK:
      let singleDeck = state.decks.filter(
        (deck) => deck.deckId === action.deckId
      );
      return {
        decks: state.decks,
        singleDeck: singleDeck[0],
      };
    default:
      return state;
  }
};

export default combineReducers({
  decks: reducer,
});
