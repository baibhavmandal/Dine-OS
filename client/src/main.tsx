import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter as Router, RouterProvider } from "react-router";

import "./index.css";
import App from "./App.tsx";
import Order from "./pages/Order.tsx";

const router = Router([
  { path: "/", element: <App /> },
  { path: "/order", element: <Order /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
