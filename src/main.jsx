import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Parent1 from "./components/Parent1.jsx";
import C1 from "./components/C1.jsx";
import C2 from "./components/C2.jsx";
createRoot(document.getElementById("root")).render(<App />);
{
  /* <Parent1>
    <C1 />
    <C2 />
  </Parent1> */
}
