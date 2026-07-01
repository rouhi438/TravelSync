import { useLoaderData, Link } from "react-router-dom";
import "./PackageDetailPage.css";
import placeholderImage from "../../assets/images/placeholder.png";
import InteractiveRating from "../../components/rating/InteractiveRating";
import { getRatingStats } from "../../utils/ratingUtils";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../context/BookingContext.jsx";
import { useRef, useState, useEffect } from "react";

import {
  FaImage,
  FaMapMarkerAlt,
  FaClock,
  FaTag,
  FaStar,
  FaUsers,
} from "react-icons/fa";
export function PackageDetailPage() {
  const { pkg } = useLoaderData();
  const navigate = useNavigate();

  const userId = "user_1"; //replace with real user id from AuthContext
  const { avg, count } = getRatingStats(pkg.ratings);
  const { setBookingData } = useBooking();

  const [selectedImage, setSelectedImage] = useState(pkg.image);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
  });

  function handleBookNow() {
    setBookingData((prev) => ({ ...prev, package: pkg }));
    navigate("/booking", { state: pkg });
    setBookingData((prev) => ({
      ...prev,
      packageId: pkg.id,
      travelerName: "",
      travelerEmail: "",
    }));
  }
  const allImages = pkg.gallery ? [pkg.image, ...pkg.gallery] : [pkg.image];
  const hasGallery = pkg.gallery && pkg.gallery.length > 0;

  return (
    <main className="package-detail-container">
      <nav className="page-path" aria-label="Page-path">
        <Link to="/">Home</Link>
        <span className="path-separator">›</span>
        <Link to="/explore">Explore</Link>
        <span className="path-separator">›</span>
        <span className="current-path">{pkg.name}</span>
      </nav>

      <section className="detail-hero">
        <div className="hero-image-wrapper">
          <img
            src={selectedImage || placeholderImage}
            alt={pkg.name}
            className="hero-image"
            onError={(e) => {
              e.target.src = placeholderImage;
            }}
          />
          {hasGallery && (
            <button
              className="gallery-toggle-btn"
              onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              aria-label="Toggle gallery"
            >
              <FaImage /> {isGalleryOpen ? "Hide Gallery" : "Show Gallery"}
            </button>
          )}
          <div className="hero-badge">
            <span className="badge-category">{pkg.category || "package"}</span>
            {pkg.availableSlots !== undefined && (
              <span
                className={`badge-availability ${pkg.availableSlots > 0 ? "available" : "sold-out"}`}
              >
                {pkg.availableSlots > 0
                  ? `${pkg.availableSlots} spots left`
                  : "Sold out"}
              </span>
            )}
          </div>
        </div>

        {isGalleryOpen && hasGallery && (
          <div className="gallery-preview" ref={galleryRef}>
            {allImages.map((img, index) => (
              <button
                key={index}
                className={`gallery-view ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={img || placeholderImage}
                  alt={`${pkg.name} - view ${index + 1}`}
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </section>
      <div className="info-bar">
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <span className="info-label">Location</span>
          <span className="info-value">{pkg.location}</span>
          {pkg.country && pkg.country !== pkg.location && (
            <span className="info-sub">{pkg.country}</span>
          )}
        </div>
        <div className="info-divider" />
        <div className="info-item">
          <FaClock className="info-icon" />
          <span className="info-label">Duration</span>
          <span className="info-value">{pkg.duration}</span>
        </div>
        <div className="info-divider" />
        <div className="info-item">
          <FaTag className="info-icon" />
          <span className="info-label">Price</span>
          <span className="info-value price-highlight">€{pkg.price}</span>
        </div>
        <div className="info-divider" />
        <div className="info-item">
          <FaStar className="info-icon star-icon" />
          <span className="info-label">Rating</span>
          <span className="info-value">
            {avg.toFixed(1)} <span className="info-sub">({count} reviews)</span>
          </span>
        </div>
        {pkg.travelerType && (
          <>
            <div className="info-divider" />
            <div className="info-item">
              <FaUsers className="info-icon" />
              <span className="info-label">For</span>
              <span className="info-value">{pkg.travelerType}</span>
            </div>
          </>
        )}
      </div>
      <article className="detail-row">
        <img
          src={pkg.image || placeholderImage}
          alt={pkg.name}
          className="detail-image"
          onError={(e) => {
            e.target.src = placeholderImage;
          }}
        />
        <div className="detail-content">
          <p className="detail-location">{pkg.location}</p>
          <p className="detail-description">{pkg.description}</p>
          <div className="detail-meta">
            <span className="detail-price">€ {pkg.price}</span>
            <span className="detail-duration">{pkg.duration}</span>
          </div>
          <div className="rating-holder">
            <InteractiveRating
              packageId={pkg.id}
              userId={userId}
              initialAvg={avg}
              initialCount={count}
            />
          </div>
        </div>
      </article>
      <div className="btn-holder">
        <Link to="/explore" className="back-btn">
          Back to Explore
        </Link>
        <button className="book-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </main>
  );
}
