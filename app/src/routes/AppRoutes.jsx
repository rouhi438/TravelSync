import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import { CartPage } from "../pages/CartPage/CartPage.jsx";
import { ExplorePage } from "../pages/ExplorePage/ExplorePage.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { LoginPage } from "../pages/LoginPage/LoginPage.jsx";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage.jsx";

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
    ],
  },
]);
