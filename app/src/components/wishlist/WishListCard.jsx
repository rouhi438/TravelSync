import { useWishlist } from "../../context/WishlistContext.jsx";
import "./WishListCard.css";

export function WishListCard({ pkg }) {
  const { removeFromWishlist } = useWishlist();

  return (
    <article className="wishlist-card">
      <img src={pkg.image} alt={pkg.name} className="wishlist-card-img" />
      <div className="wishlist-card-body">
        <h3>{pkg.name}</h3>
        <p className="wishlist-location">{pkg.location}</p>
        <p className="wishlist-description">{pkg.shortDescription}</p>
        <div className="wishlist-meta-row">
          <span className="wishlist-price">EUR {pkg.price}</span>
          <span className="wishlist-duration">{pkg.duration}</span>
        </div>

        <button
          type="button"
          className="wishlist-remove-btn"
          onClick={() => removeFromWishlist(pkg.id)}
        >
          Remove from wishlist
        </button>
      </div>
    </article>
  );
}

export default WishListCard;
