import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSclice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
