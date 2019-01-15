import { CREATE_CARD } from "./actions";

const createCard = (pId, title) => {
  console.log(title);
  return {
    type: CREATE_CARD,
    id: Math.random(),
    pId,
    title
  };
};
export default createCard;
