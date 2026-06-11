import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Navbar />
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
