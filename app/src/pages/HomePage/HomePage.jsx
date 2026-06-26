import { Link } from "react-router-dom";
import "./HomePage.css";
import airplaneImg from "../../assets/images/airplane-removebg-preview.png";

export function HomePage() {
  return (
    <div className="hero">
      <div className="left">
        <div className="text-content">
          <h1>Discover Your Next Adventure</h1>
          <p>
            Browse personalized travel packages, compare destinations, and book
            unforgettable experiences.
          </p>
          <div className="hero-buttons">
            <Link to="/explore" className="btn-primary">
              Explore
            </Link>
            <Link to="/register" className="btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src={airplaneImg}
          alt="airplane"
          className="air-plain-image"
          loading="lazy"
        />
      </div>
    </div>
  );
}
