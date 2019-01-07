import { CREATE_PROJECT } from "../actions/actions";

const projects = [
  {
    id: 1,
    title: "Delectus aut autem"
  },
  {
    id: 2,
    title: "Quis ut nam facilis et officia qui"
  },
  {
    id: 3,
    title: "Fugiat veniam minus"
  },
  {
    id: 4,
    title: "Et porro tempora"
  },
  {
    id: 5,
    title: "Laboriosam mollitia"
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
