import * as api from "../../utils/api";

export const ADD_NEW_CARD = "ADD_NEW_CARD";

export const addNewCard = (deckId, card) => (dispatch) => {
  api.addCard(deckId, card).then((decks) =>
    dispatch({
      type: ADD_NEW_CARD,
      decks,
      deckId,
    })
  );
};
