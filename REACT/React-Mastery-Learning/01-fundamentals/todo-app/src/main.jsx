// 📚 CONCEPT: React Entry Point
// This is where React takes control of the DOM
// We're telling React to render our App component into the div with id="root"

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Create a root and render our App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 🎯 KEY LEARNING POINTS:
// 1. ReactDOM.createRoot() - Creates a React root for concurrent features
// 2. StrictMode - Helps identify problems in development
// 3. Single App component - Everything starts from one root component
