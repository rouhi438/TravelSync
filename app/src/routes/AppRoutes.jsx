import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import { CheckoutPage } from "../pages/Checkout/CheckoutPage.jsx";
import { ConfirmationPage } from "../pages/Confirmation/ConfirmationPage.jsx";
import { ExplorePage } from "../pages/ExplorePage/ExplorePage.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import BookingForm from "../pages/BookingForm/Booking.jsx";
import { WishlistPage } from "../pages/WishlistPage/WishlistPage.jsx";
import { PackageDetailPage } from "../pages/PackageDetailPage/PackageDetailPage.jsx";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage.jsx";
import { getPackageById } from "../services/packageService.js";

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
      { path: "booking", element: <BookingForm /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "confirmation", element: <ConfirmationPage /> },

      {
        path: "/package/:id",
        element: <PackageDetailPage />,
        loader: async ({ params }) => {
          try {
            const pkg = await getPackageById(params.id);
            return { pkg };
          } catch (error) {
            throw new Response(error.message || "Package not found", {
              status: 404,
            });
          }
        },
        errorElement: <ErrorPage />,
      },
      { path: "profile", element: <TravelerProfile /> },
    ],
  },
]);
