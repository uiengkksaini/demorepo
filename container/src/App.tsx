import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Product from "productsApp/Product";
import CartItem from "cartApp/CartItem";
import AuthComponent from "authApp/AuthComponent";

import "./index.css";
// const AuthComponent = React.lazy(() => import('authApp/AuthComponent'));
console.log(Product);
console.log(AuthComponent);


const App = () => (
  <div className="container">
    <div>Name: container</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Product />
    <CartItem />
    <Suspense fallback={<div>Loading...</div>}>
      <AuthComponent />
    </Suspense>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
