import { StrictMode } from "react";
import App from "./App.tsx";
import { PrimeReactProvider } from "primereact/api";
import { createRoot } from "react-dom/client";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import "primeicons/primeicons.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
