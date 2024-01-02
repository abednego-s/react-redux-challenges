import { createReducer } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const initialState: Todo[] = [];

export const todoReducer = createReducer(initialState, () => {});
