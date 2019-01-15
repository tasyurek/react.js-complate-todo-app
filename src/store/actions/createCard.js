import { CREATE_CARD } from "./actions";

const createCard = (pId, title) => {
  console.log(title);
  return {
    type: CREATE_CARD,
    cardId: Math.random(),
    pId,
    title
  };
};
export default createCard;
