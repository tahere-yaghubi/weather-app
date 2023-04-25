import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  isLoading: boolean;
  isInitial: boolean;
}
const initialState = {
  isLoading: false,
  isInitial: true,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state: IAppState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setInitial: (state: IAppState, action: PayloadAction<boolean>) => {
      state.isInitial = action.payload;
    },
  },
});
export const { setIsLoading, setInitial } = appSlice.actions;

export default appSlice.reducer;
