import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Player } from "../Models/player.model";

interface FavoriteState {
  favoriteList: Player[];
  totalFavoriteAmount: number;
}

const INITIALSTATE: FavoriteState = {
  favoriteList: [],
  totalFavoriteAmount: 0,
};

const favoriteSlice = createSlice({
  name: "list",
  initialState: INITIALSTATE,
  reducers: {
    addItemToFavorite(state, action: PayloadAction<Player>) {
      state.favoriteList.push(action.payload);
      state.totalFavoriteAmount++;
    },
    removeItemFromFavorite(state, action: PayloadAction<string>) {
      const name: string = action.payload;
      // copy favoriteList array to update the reducer
      const copyArray = state.favoriteList.filter(
        (item: any) => item.last_name !== name
      );
      state.favoriteList = [...copyArray];

      state.totalFavoriteAmount--;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;
