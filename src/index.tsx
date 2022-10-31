import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
