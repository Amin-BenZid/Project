import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "newPost",
  initialState: {
    newPost: [],
    newComment: [],
  },
  reducers: {
    addNewPost: (state, action) => {
      state.newPost = state.newPost.concat(action.payload);
    },
    delPost: (state, action) => {
      state.newPost = state.newPost.filter((post) => post.id != action.payload);
    },
    addNewComment: (state, action) => {
      state.newComment = state.newComment.concat(action.payload);
    },
    delComment: (state, action) => {
      state.newComment = state.newComment.filter(
        (newComment) => newComment.id != action.payload
      );
    },
  },
});

export const { addNewPost, delPost, addNewComment, delComment } =
  postSlice.actions;
export default postSlice.reducer;
