import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BgColorPicker from "./ui/BgColorPicker.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <BgColorPicker />
      <App />
    </>
  </React.StrictMode>
);
