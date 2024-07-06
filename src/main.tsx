import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CryptoConverter from "./CryptoConverter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CryptoConverter />
  </React.StrictMode>,
);
