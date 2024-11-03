import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../Models/player.model";

interface DataState {
  listData: Player[];
  selectedFilterValue: string;
  isLoading: boolean;
  selectedItem: unknown;
}

const INITIALSTATE: DataState = {
  listData: [],
  selectedFilterValue: "",
  isLoading: false,
  selectedItem: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState: INITIALSTATE,
  reducers: {
    listData(state, action: PayloadAction<Player[]>) {
      state.listData = action.payload;
    },
    changeFilterValue(state, action: PayloadAction<string>) {
      state.selectedFilterValue = action.payload;
    },
    isLoading(state) {
      state.isLoading = !state.isLoading;
    },
    selectedItem(state, action: PayloadAction<unknown>) {
      state.selectedItem = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
