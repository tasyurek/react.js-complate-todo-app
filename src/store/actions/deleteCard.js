import { DELETE_CARD } from "./actions";

const deleteCard = cardId => {
  console.log("cardId:", cardId, "is deleted");
  return {
    type: DELETE_CARD,
    cardId
  };
};

export default deleteCard;
