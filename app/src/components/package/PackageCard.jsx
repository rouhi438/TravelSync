import { Link } from "react-router-dom";
import { Rating } from "../rating/Rating";
import { getRatingStats } from "../../utils/ratingUtils";
import { useWishlist } from "../../context/WishlistContext.jsx";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import "./PackageCard.css";

export default function PackageCard({
  package: pkg,
  searchTerm,
  selectedCategory,
}) {
  const { avg: avgRating, count: reviewCount } = getRatingStats(pkg.ratings);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const packageId = pkg._id ?? pkg.id;
  const inWishlist = isInWishlist(packageId);

  return (
    <div className="package-card">
      <button
        type="button"
        className="wishlist-heart"
        onClick={() => toggleWishlist(pkg)}
        aria-label="Toggle wishlist"
      >
        {inWishlist ? <HiHeart size={24} /> : <HiOutlineHeart size={24} />}
      </button>
      <img
        src={pkg.image}
        alt={pkg.name}
        className="package-img"
        loading="lazy"
      />
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
        <Link
          to={`/package/${packageId}?search=${searchTerm}&category=${selectedCategory || ""}`}
          className="details-link"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
