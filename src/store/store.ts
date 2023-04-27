import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./reducers/appSlice";
import weatherSlice from "./reducers/weatherSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    wether: weatherSlice,
  },
});
export type AppStore = ReturnType<typeof store.getState>;
export default store;
