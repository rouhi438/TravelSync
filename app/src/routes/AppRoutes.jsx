import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import { CartPage } from "../pages/CartPage/CartPage.jsx";
import { CheckoutPage } from "../pages/Checkout/CheckoutPage.jsx";
import { ConfirmationPage } from "../pages/Confirmation/ConfirmationPage.jsx";
import { ExplorePage } from "../pages/ExplorePage/ExplorePage.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import BookingForm from "../pages/BookingForm/Booking.jsx";
import { PackageDetailPage } from "../pages/PackageDetailPage/PackageDetailPage.jsx";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage.jsx";
import { packages } from "../data/package.js";

import TravelerProfile from "../pages/TravelerProfile/TravelerProfile.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "explore", element: <ExplorePage /> },
      { path: "cart", element: <CartPage /> },
      { path: "booking", element: <BookingForm /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "confirmation", element: <ConfirmationPage /> },

      {
        path: "/package/:id",
        element: <PackageDetailPage />,
        loader: async ({ params }) => {
          const id = Number(params.id);
          if (isNaN(id)) {
            throw new Response("Invalid ID", { status: 404 });
          }
          const pkg = packages.find((p) => p.id === id);
          if (!pkg) {
            throw new Response("Package not found", { status: 404 });
          }
          return { pkg };
        },
        errorElement: <ErrorPage />,
      },
      { path: "profile", element: <TravelerProfile /> },
    ],
  },
]);
