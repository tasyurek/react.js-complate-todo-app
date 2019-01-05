import { CREATE_CARD } from "../actions/actions";
const cards = [
  { cardId: 1, title: "Todo" },
  { cardId: 2, title: "In Progress" },
  { cardId: 3, title: "Done" }
];

const cardReducer = (state = cards, action) => {
  switch (action.type) {
    case CREATE_CARD:
      console.log(action.cardId, action.title);
      return [...state, { cardId: action.cardId, title: action.title }];
    default:
      console.log("failed");
      return state;
  }
};
export default cardReducer;
