import { CREATE_PROJECT } from "../actions/actions";

const projects = [
  {
    id: 1,
    title: "delectus aut autem"
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui"
  },
  {
    id: 3,
    title: "fugiat veniam minus"
  },
  {
    id: 4,
    title: "et porro tempora"
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum"
  }
];

const projectReducer = (state = projects, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log("creating");
      return [...state, { id: action.id, title: action.title }];
    default:
      return state;
  }
};

export default projectReducer;
