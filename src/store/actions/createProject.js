import { CREATE_PROJECT } from "./actions";

const createProject = title => {
  console.log(title);
  return {
    type: CREATE_PROJECT,
    id: Math.random(),
    title
  };
};

export default createProject;
