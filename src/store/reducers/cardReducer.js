import { CREATE_CARD, DELETE_CARD } from "../actions/actions";

const cards = [
  { cardId: 1, pId: 1, title: "Todo" },
  { cardId: 2, pId: 1, title: "In Progress" },
  { cardId: 4, pId: 2, title: "Done" },
  { cardId: 5, pId: 2, title: "p2todo" }
];

const cardReducer = (state = cards, action) => {
  console.log("card action type", action.type);
  switch (action.type) {
    case CREATE_CARD:
      return [
        ...state,
        { cardId: action.cardId, pId: action.pId, title: action.title }
      ];

    case DELETE_CARD:
      let newState = state.filter(card => card.cardId !== action.cardId);
      return [...newState];

    default:
      return state;
  }
};
export default cardReducer;
