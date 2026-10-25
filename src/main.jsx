import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import App from "./App.jsx";

// On a GitHub Pages project site the app lives under "/<repo>/". Vite exposes that as BASE_URL;
// the router wants it without the trailing slash, and not at all when the site is at the root.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
