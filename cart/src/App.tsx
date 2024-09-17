import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Cart from "./Cart/Cart";

const App = () => (
  <div className="container">
    <div>Name: cart</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Cart />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
