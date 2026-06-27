import { Link } from "react-router-dom";
import { Rating } from "../rating/Rating";
import { getRatingStats } from "../../utils/ratingUtils";
import { useWishlist } from "../../context/WishlistContext.jsx";
import "./PackageCard.css";

export default function PackageCard({ package: pkg }) {
  const { avg: avgRating, count: reviewCount } = getRatingStats(pkg.ratings);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(pkg.id);

  return (
    <div className="package-card">
      <img src={pkg.image} alt={pkg.name} className="package-img" />
      <div className="package-info">
        <h3>{pkg.name}</h3>
        <p className="location">{pkg.location}</p>
        <p className="short-desc">{pkg.shortDescription}</p>
        <div className="price-row">
          <span className="price">€ {pkg.price}</span>
          <span className="duration">{pkg.duration}</span>
        </div>

        <div className="rating-section">
          <Rating rating={avgRating} reviewCount={reviewCount} />
        </div>

        <button
          type="button"
          className="wishlist-btn"
          onClick={() => toggleWishlist(pkg)}
        >
          {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
        <Link to={`/package/${pkg.id}`} className="details-link">
          View Details
        </Link>
      </div>
    </div>
  );
}
