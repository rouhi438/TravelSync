import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="app">
      <header className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/explore">EXPLORE</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/register">REGISTER</Link>
          <Link to="/cart">CART</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div>© 2026 Travel Gurus. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Layout;
