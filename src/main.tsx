import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/index.css";
import AppStore from './store/store'
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={AppStore}>
    <React.StrictMode>
      {/* <CssBaseline /> */}
      <App />
    </React.StrictMode>
  </Provider>
);
