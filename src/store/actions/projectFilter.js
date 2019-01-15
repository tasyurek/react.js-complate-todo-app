import { FILTER_PROJECT } from "./actions";

const projectFilter = pId => {
  console.log("action", pId);
  return {
    type: FILTER_PROJECT,
    pId
  };
};

export default projectFilter;
