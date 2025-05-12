import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex flex-col w-full min-h-screen">
      <App />
    </main>
  </StrictMode>
);
