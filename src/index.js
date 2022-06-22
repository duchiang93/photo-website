import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Homepage from "./pages/Homepage";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  </React.StrictMode>
);
