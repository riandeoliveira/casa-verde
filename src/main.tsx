import ReactDOM from "react-dom/client";
import React from "react";
import { GlobalStyle } from "./global";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
