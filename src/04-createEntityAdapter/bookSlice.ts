import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export type Book = {
  id: string;
  title: string;
  read: boolean;
};

export const booksAdapter = createEntityAdapter({});

export const bookSlice = createSlice({
  name: "book",
  initialState: booksAdapter.getInitialState(),
  reducers: {},
});
