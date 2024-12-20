import "./index.css";

import App from "@/providers/app-provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootNode = document.getElementById("root");

if (!rootNode) {
  throw new Error(
    "Error: The root element with id 'root' was not found in the document. Ensure that an element with id 'root' exists in the HTML.",
  );
}

createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
