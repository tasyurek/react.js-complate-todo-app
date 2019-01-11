import { CREATE_PROJECT } from "../actions/actions";

const projects = [
  {
    pId: 1,
    title: "Working front-end"
  },
  {
    pId: 2,
    title: "New Shopping Website"
  },
  {
    pId: 3,
    title: "graphQL Project"
  },
  {
    pId: 4,
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
