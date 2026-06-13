import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import travelLogo from "../../assets/images/Blue Minimalist Traveling Logo .jpg";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img
          src={travelLogo}
          alt="Travel Gurus logo"
          className="navbar-logo-image"
        />
        <h3 className="navbar-brand">Travel Gurus</h3>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <HiOutlineX size={40} /> : <HiOutlineMenu size={40} />}
      </button>

      <nav className={`nav ${open ? "open" : ""}`}>
        <Link className="nav-link" to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link className="nav-link" to="/explore" onClick={() => setOpen(false)}>
          Explore
        </Link>
        <Link className="nav-link" to="/login" onClick={() => setOpen(false)}>
          Login
        </Link>
        <Link
          className="nav-link"
          to="/register"
          onClick={() => setOpen(false)}
        >
          Register
        </Link>
        <Link className="nav-link" to="/cart" onClick={() => setOpen(false)}>
          Cart
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
