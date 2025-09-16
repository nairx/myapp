import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CRUD from "./components/CRUD.jsx";
import ProductTest from "./components/ProductTest.jsx";
createRoot(document.getElementById("root")).render(<App />);

