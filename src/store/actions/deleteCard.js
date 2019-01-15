import { DELETE_CARD } from "./actions";

const deleteCard = id => {
  console.log("id:", id, "is deleted");
  return {
    type: DELETE_CARD,
    id
  };
};

export default deleteCard;
