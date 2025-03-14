import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  editingPost: null,
  message: ""
};

const postSlice = createSlice({
  name: "currentPost",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    createPost(state, action) {
        state.posts = [...state.posts, action.payload];
      },
    updatePost(state, action) {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
    setEditingPost(state, action) {
      state.editingPost = action.payload;
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    setMessage(state, action) {
      state.message = action.payload
    }
  },
})

export const { setPosts, createPost, updatePost, setEditingPost, deletePost, setMessage } = postSlice.actions;
export default postSlice.reducer
