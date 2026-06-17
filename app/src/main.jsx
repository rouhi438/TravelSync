import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";

import React from "react";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  </React.StrictMode>,
    <RouterProvider router={router} />
  </React.StrictMode>
);
