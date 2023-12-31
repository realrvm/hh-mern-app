import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app/App";
import { StoreProvider } from "@/app/providers/rtk-provider";

import "@/shared/config/i18n/";

import "@/app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
