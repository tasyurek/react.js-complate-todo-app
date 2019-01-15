import { CREATE_PROJECT } from "../actions/actions";

const projects = [
  {
    id: 1,
    title: "Working front-end"
  },
  {
    id: 2,
    title: "New Shopping Website"
  },
  {
    id: 3,
    title: "graphQL Project"
  },
  {
    id: 4,
    title: "Homework"
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
