// create a function that return action
export const deletePost = id => {
  return {
    type: "Delete_Post",
    id
  };
};
