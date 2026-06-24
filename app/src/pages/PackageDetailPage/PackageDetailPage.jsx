import { useLoaderData, Link } from "react-router-dom";
import "./PackageDetailPage.css";
import placeholderImage from "../../assets/images/placeholder.png";
import InteractiveRating from "../../components/rating/InteractiveRating";
import { getRatingStats } from "../../utils/ratingUtils";
import { useNavigate } from "react-router-dom";

export function PackageDetailPage() {
  const { pkg } = useLoaderData();

  const userId = "user_1"; //replace with real user id from AuthContext
  const { avg, count } = getRatingStats(pkg.rating);

  const navigate = useNavigate();

  return (
    <main className="package-detail-container">
      <h1 className="package-detail-name">{pkg.name}</h1>
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
          {/* Rating section removed */}
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
        <button
          className="book-btn"
          onClick={() => navigate("/booking", { state: pkg })}
        >
          Book Now
        </button>
      </div>
    </main>
  );
}
