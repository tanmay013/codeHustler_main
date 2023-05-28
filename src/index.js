// Contains main for applying react
import React from "react";  // importing React
import ReactDOM from "react-dom/client"; //importing react dom for rendering
import App from "./App"; // importing app component
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

