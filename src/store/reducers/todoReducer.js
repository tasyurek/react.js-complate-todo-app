const todos = [
  { id: 1, cardId: 1, todo: "Learn JavaScript" },
  { id: 2, cardId: 1, todo: "Learn React" },
  { id: 3, cardId: 2, todo: "Learn Redux" }
];

const todoReducer = (state = todos, action) => {
  return state;
};
export default todoReducer;
