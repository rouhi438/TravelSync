import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes.jsx";
import React from "react";
import "./main.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { BookingProvider } from "./context/BookingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <WishlistProvider>
        <BookingProvider>
          <RouterProvider router={router} />
        </BookingProvider>
      </WishlistProvider>
    </AuthProvider>
  </React.StrictMode>
);
