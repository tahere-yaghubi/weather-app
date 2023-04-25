import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  isLoading: boolean;
}
const initialState = {
  isLoading: false,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state: IAppState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
// const { setIsLoading } = app;

export default appSlice.reducer;
