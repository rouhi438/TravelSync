import { useWishlist } from "../../context/WishlistContext.jsx";
import "./PackageCard.css";

export default function PackageCard({ package: pkg }) {
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

        <button
          type="button"
          className="wishlist-btn"
          onClick={() => toggleWishlist(pkg.id)}
        >
          {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}
