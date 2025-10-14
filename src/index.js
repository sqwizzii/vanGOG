import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // не обов’язково, якщо немає стилів

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
