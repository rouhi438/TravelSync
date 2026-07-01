import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import travelLogo from "../../assets/images/Blue Minimalist Traveling Logo .jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img
            src={travelLogo}
            alt="TravelGurus Logo"
            className="footer-logo-image"
          />
          <h2 className="footer-logo">Travel Gurus</h2>
          <p>
            Your next journey starts here. Discover and book unforgettable
            travel experiences around the world.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-section">
          <h3>Support</h3>

          <p>Help Center</p>
          <p>FAQ</p>
          <p>Booking Policy</p>
          <p>Privacy Policy</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Copenhagen, Denmark</p>
          <p>✉ support@travelsync.com</p>
          <p>☎ +45 12 34 56 78</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/hackyourfuture.dk/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/hackyourfuture/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com/hackyourfuture.dk"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/hackyourfuture"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelSync. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
