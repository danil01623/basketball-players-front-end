import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data-slice";
import favoriteSlice from "./favorite-slice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    favorites: favoriteSlice.reducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
