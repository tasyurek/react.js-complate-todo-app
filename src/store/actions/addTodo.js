import { ADD_TODO } from "./actions";

const addTodo = (content, cardId) => {
  console.log(this);
  return {
    type: ADD_TODO,
    id: Math.random(),
    cardId,
    content
  };
};

export default addTodo;
