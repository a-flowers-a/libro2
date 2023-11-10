import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
//Providers
import UnitProvider from "./context/UnitProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UnitProvider>
      <App />
    </UnitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
