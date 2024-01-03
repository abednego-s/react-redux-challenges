import { WithSlice, combineSlices, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { postSlice } from "./postSlice";

interface LazyLoadSlices extends WithSlice<typeof postSlice> {}

export const rootReducer =
  combineSlices(userSlice).withLazyLoadedSlices<LazyLoadSlices>();

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
