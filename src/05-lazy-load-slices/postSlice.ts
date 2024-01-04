import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});
