import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPackages } from "../../services/packageService";
import "./HomePage.css";
import animationWebm from "../../assets/videos/animation.webm";

export function HomePage() {
  const [featuredPackages, setFeaturedPackages] = useState([]);
  useEffect(() => {
    async function loadFeaturedPackages() {
      try {
        const data = await getPackages();
        setFeaturedPackages(
          [...data].sort(() => Math.random() - 0.5).slice(0, 3)
        );
      } catch (error) {
        console.error("failed to load featured packages:", error);
      }
    }
    loadFeaturedPackages();
  }, []);

  return (
    <>
      <main className="home-page">
        <section className="home-hero">
          <div className="home-video-box">
            <div className="home-tv-frame">
              <video autoPlay muted loop playsInline className="home-video">
                <source src={animationWebm} type="video/webm" />
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
        <section className="home-featured-section">
          <h2>Featured Packages</h2>

          <div className="home-cards-grid">
            {featuredPackages.map((pkg) => (
              <Link
                key={pkg.id}
                to={`/package/${pkg.id}`}
                className="home-package-card"
              >
                <img src={pkg.image} alt={pkg.name} />

                <div className="home-card-info">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
