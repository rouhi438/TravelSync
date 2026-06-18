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
import { WishlistPage } from "../pages/WishlistPage/WishlistPage.jsx";
import { TravelerProfile } from "../pages/TravelerProfile/TravelerProfile.jsx";


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
      { path: "wishlist", element: <WishlistPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "confirmation", element: <ConfirmationPage /> },
      { path: "profile", element: <TravelerProfile /> },
    ],
  },
]);
