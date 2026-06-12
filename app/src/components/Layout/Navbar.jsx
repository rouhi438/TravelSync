import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Travel Gurus</div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
      </button>

      <nav className={`nav ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/explore" onClick={() => setOpen(false)}>
          Explore
        </Link>
        <Link to="/login" onClick={() => setOpen(false)}>
          Login
        </Link>
        <Link to="/register" onClick={() => setOpen(false)}>
          Register
        </Link>
        <Link to="/cart" onClick={() => setOpen(false)}>
          Cart
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
