import { useLoaderData, Link } from "react-router-dom";
import "./PackageDetailPage.css";
import placeholderImage from "../../assets/images/placeholder.png";
import InteractiveRating from "../../components/rating/InteractiveRating";
import { getRatingStats } from "../../utils/ratingUtils";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../context/BookingContext.jsx";

import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useSearchParams } from "react-router-dom";

import {
  FaImage,
  FaMapMarkerAlt,
  FaClock,
  FaTag,
  FaStar,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaRegStar,
  FaChevronLeft,
  FaSuitcase,
  FaUmbrellaBeach,
  FaWifi,
  FaUtensils,
  FaShip,
  FaSwimmingPool,
  FaSpa,
  FaMountain,
  FaCamera,
  FaLeaf,
  FaSun,
  FaMoon,
  FaPlane,
  FaCar,
  FaBed,
  FaDollarSign,
  FaGlobeAmericas,
  FaInfoCircle,
} from "react-icons/fa";

export function PackageDetailPage() {
  const { pkg } = useLoaderData();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setBookingData } = useBooking();

  const [selectedImage, setSelectedImage] = useState(pkg.image);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const galleryRef = useRef(null);

  const userId = user?.uid ?? "guest";
  const [params] = useSearchParams();
  const search = params.get("search") || "";
  const category = params.get("category") || "";

  const { avg, count } = getRatingStats(pkg.ratings);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        gallery.scrollLeft += e.deltaY;
      }
    };

    gallery.addEventListener("wheel", handleWheel, { passive: false });
    return () => gallery.removeEventListener("wheel", handleWheel);
  }, []);

  function handleBookNow() {
    setBookingData((prev) => ({
      ...prev,
      packageId: pkg.id,
      travelerName: "",
      travelerEmail: "",
    }));
    navigate("/booking", { state: pkg });
  }
  // match highlight activity with related icon
  const getHighlightIcon = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("snorkel") || lower.includes("dive"))
      return <FaSwimmingPool />;
    if (lower.includes("sunset") || lower.includes("cruise")) return <FaShip />;
    if (lower.includes("spa") || lower.includes("massage")) return <FaSpa />;
    if (lower.includes("mountain") || lower.includes("hike"))
      return <FaMountain />;
    if (lower.includes("beach") || lower.includes("sand"))
      return <FaUmbrellaBeach />;
    if (lower.includes("wifi") || lower.includes("internet")) return <FaWifi />;
    if (
      lower.includes("food") ||
      lower.includes("cuisine") ||
      lower.includes("dinner")
    )
      return <FaUtensils />;
    if (lower.includes("camera") || lower.includes("photo"))
      return <FaCamera />;
    if (lower.includes("nature") || lower.includes("garden")) return <FaLeaf />;
    if (lower.includes("sun") || lower.includes("pool")) return <FaSun />;
    if (lower.includes("night") || lower.includes("moon")) return <FaMoon />;
    return <FaCheckCircle />;
  };

  //match include icon with related icon
  const getIncludeIcon = (text) => {
    const lower = text.toLowerCase();
    if (
      lower.includes("hotel") ||
      lower.includes("stay") ||
      lower.includes("resort")
    )
      return <FaBed />;
    if (lower.includes("airport") || lower.includes("transfer"))
      return <FaCar />;
    if (
      lower.includes("breakfast") ||
      lower.includes("meal") ||
      lower.includes("dinner")
    )
      return <FaUtensils />;
    if (lower.includes("tour") || lower.includes("guide"))
      return <FaGlobeAmericas />;
    if (lower.includes("flight") || lower.includes("plane")) return <FaPlane />;
    if (lower.includes("wifi")) return <FaWifi />;
    return <FaCheckCircle />;
  };

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

      <div className="detail-main-grid">
        <div className="detail-content-left">
          <div className="content-section">
            <h1 className="package-name">{pkg.name}</h1>
            {pkg.shortDescription && (
              <p className="package-short-desc">{pkg.shortDescription}</p>
            )}
            <p className="package-full-desc">{pkg.description}</p>
          </div>
          {/*highlights*/}
          {pkg.highlights && pkg.highlights.length > 0 && (
            <div className="content-section highlight-section">
              <h2 className="section-title">
                <FaStar className="section-icon" /> Highlights
              </h2>
              <ul className="highlight-list">
                {pkg.highlights.map((item, index) => (
                  <li className="highlight-item" key={index}>
                    <span className="highlight-icon">
                      {/* {getHighlightIcon(item)} */}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* includes*/}
          {pkg.includes && pkg.includes.length > 0 && (
            <div className="content-section includes-section">
              <h2 className="section-title">
                <FaCheckCircle className="section-icon" /> What's Included
              </h2>
              <ul className="includes-list">
                {pkg.includes.map((item, index) => (
                  <li key={index} className="include-item">
                    <span className="include-icon">{getIncludeIcon(item)}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/*--itinerary*/}
          {pkg.itinerary && pkg.itinerary.length > 0 && (
            <div className="content-section itinerary-section">
              <h2 className="section-title">
                <FaCalendarAlt className="section-icon" /> Itinerary
              </h2>
              <div className="itinerary-timeline">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="itinerary-day">
                    <div className="itinerary-day-header">
                      <span className="itinerary-day-number">
                        Day {day.day}
                      </span>
                      <span className="itinerary-day-line" />
                    </div>
                    <ul className="itinerary-activities">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="itinerary-activity">
                          <span className="activity-bullet" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/*right-side*/}
        <aside className="detail-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-price">
              <span className="sidebar-price-amount">{pkg.price}</span>
              <span className="sidebar-price-period">per person</span>
            </div>
            <div className="sidebar-divider" />
            <div className="sidebar-info-row">
              <FaClock className="sidebar-row-icon" />
              <span className="sidebar-row-label">Duration</span>
              <span className="sidebar-row-value">{pkg.duration}</span>
            </div>
            <div className="sidebar-info-row">
              <FaMapMarkerAlt className="sidebar-row-icon" />
              <span className="sidebar-row-label">Location</span>
              <span className="sidebar-row-value">{pkg.Location}</span>
            </div>
            {pkg.destination && pkg.destination !== pkg.location && (
              <div className="sidebar-info-row">
                <FaGlobeAmericas className="sidebar-row-icon" />
                <span className="sidebar-row-label">Destination</span>
                <span className="sidebar-row-value">{pkg.destination}</span>
              </div>
            )}
            {pkg.availableSlots !== undefined && (
              <div className="sidebar-info-row">
                <FaUsers className="sidebar-row-icon" />
                <span className="sidebar-row-label">Availability</span>
                <span
                  className={`sidebar-row-value ${pkg.availableSlots > 0 ? "available-text" : "sold-out-text"}</span>`}
                >
                  {pkg.availableSlots > 0
                    ? `${pkg.availableSlots} spots`
                    : "Sold Out"}
                </span>
              </div>
            )}
            <div className="sidebar-divider" />
            {/* Rating in sidebar */}
          </div>
        </aside>
      </div>
      {/* <article className="detail-row">
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
        <Link
          to={`/explore?search=${search}&category=${category}`}
          className="back-btn"
        >
          Back to Explore
        </Link>
        <button className="book-btn" onClick={handleBookNow}>
          Book now
        </button>
      </div> */}
    </main>
  );
}
