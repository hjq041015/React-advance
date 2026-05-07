import { StrictMode } from "react";
import App from "./App.tsx";
import { PrimeReactProvider } from "primereact/api";
import { createRoot } from "react-dom/client";

import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "./index.css";
import "./flag.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
