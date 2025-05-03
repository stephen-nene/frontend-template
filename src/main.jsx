import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./components/App/App.jsx";
import { Analytics } from "@vercel/analytics/react"


import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Analytics/>
    </BrowserRouter>
  </StrictMode>
);
