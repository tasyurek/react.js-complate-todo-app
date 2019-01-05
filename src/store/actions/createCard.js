import { CREATE_CARD } from "./actions";

const createCard = title => {
  console.log(title);
  return {
    type: CREATE_CARD,
    cardId: Math.random(),
    title
  };
};
export default createCard;
