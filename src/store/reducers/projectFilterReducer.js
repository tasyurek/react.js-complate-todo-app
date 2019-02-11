import { FILTER_PROJECT } from "../actions/actions";

const projectId = 1;

const projectFilterReducer = (state = projectId, action) => {
  switch (action.type) {
    case FILTER_PROJECT:
      state = action.id;
      return state;
    default:
      return state;
  }
};

export default projectFilterReducer;
