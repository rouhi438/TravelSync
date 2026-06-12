import { Link } from "react-router-dom";
import travelLogo from "../../assets/images/Blue Minimalist Traveling Logo .jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={travelLogo}
          alt="Travel Gurus logo"
          className="navbar-logo-image"
        />
        <div className="navbar-logo">Travel Gurus</div>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
