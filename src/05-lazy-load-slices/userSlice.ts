import { createSlice } from "@reduxjs/toolkit";

export type User = {
  id: number;
  name: string;
};

const initialState: User[] = [];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
