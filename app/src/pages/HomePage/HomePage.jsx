import { Link } from "react-router-dom";
import "./HomePage.css";
import animationMp4 from "../../assets/images/animation.mp4";

export function HomePage() {
  return (
    <>
      <main className="home-page">
        <section className="home-hero">
          <div className="home-video-box">
            <div className="home-tv-frame">
              <video autoPlay muted loop playsInline className="home-video">
                <source src={animationMp4} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="home-text-content">
            <span className="home-subtitle">Travel made simple</span>

            <h1>Discover Your Next Adventure</h1>

            <p>
              Browse personalized travel packages, compare destinations, and
              book unforgettable experiences with ease.
            </p>

            <div className="home-actions">
              <Link to="/explore" className="home-btn-primary">
                Explore
              </Link>

              <Link to="/register" className="home-btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
