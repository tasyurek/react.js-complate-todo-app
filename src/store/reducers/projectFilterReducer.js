import { FILTER_PROJECT } from "../actions/actions";

const projectId = 1;

const projectFilterReducer = (state = projectId, action) => {
  console.log("filtering");
  switch (action.type) {
    case FILTER_PROJECT:
      state = action.pId;
      console.log(action.pId);
      return state;
    default:
      return state;
  }
};

export default projectFilterReducer;
