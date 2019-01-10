import { DELETE_TODO } from "./actions";

const deleteTodo = id => {
  console.log(id);
  return { type: DELETE_TODO, id };
};

export default deleteTodo;
