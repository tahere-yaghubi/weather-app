import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./reducers/appSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
export type AppStore = ReturnType<typeof store.getState>;
export default store;
