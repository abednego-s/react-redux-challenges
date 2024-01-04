import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User, ApiResponse } from "./utils";
import { fetchUserById } from "./utils";

export const fetchUser = createAsyncThunk<User, number>(
  "users/fetchById",
  async (userId) => {
    return await fetchUserById(userId);
  }
);

const initialState: ApiResponse = {
  data: null,
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default userSlice.reducer;
