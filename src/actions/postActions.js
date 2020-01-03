export const deletePost = id => {
  return {
    type: "DELETE_POST",
    id
  };
};

export const likePost = id => {
  return {
    type: "LIKE_POST",
    id
  };
};

export const dislikePost = id => {
  return {
    type: "DISLIKE_POST",
    id
  };
};

export const markPost = id => {
  return {
    type: "BOOKMARK_TOGGLE",
    id
  };
};
