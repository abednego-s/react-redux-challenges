import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Post = {
  id: number;
  title: string;
};

const initialState: { data: Post[] } = {
  data: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addPost } = postSlice.actions;
