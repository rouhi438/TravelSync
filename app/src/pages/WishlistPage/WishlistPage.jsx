import { Link } from "react-router-dom";
import WishListCard from "../../components/wishlist/WishListCard.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";
import { packages } from "../../data/package";
import "./WishlistPage.css";

export function WishlistPage() {
  const { wishlistIds } = useWishlist();

  const wishlistPackages = packages.filter((pkg) =>
    wishlistIds.includes(pkg.id)
  );

  if (wishlistPackages.length === 0) {
    return (
      <section className="wishlist-page">
        <h2>My Wishlist</h2>
        <p className="wishlist-empty-text">
          You have no saved packages yet. Add packages from Explore.
        </p>
        <Link to="/explore" className="wishlist-browse-btn">
          Browse Packages
        </Link>
      </section>
    );
  }

  return (
    <section className="wishlist-page">
      <h2>My Wishlist</h2>
      <p className="wishlist-count">
        {wishlistPackages.length} package
        {wishlistPackages.length > 1 ? "s" : ""} saved
      </p>

      <div className="wishlist-grid">
        {wishlistPackages.map((pkg) => (
          <WishListCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}

export default WishlistPage;
