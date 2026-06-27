import { Link } from "react-router-dom";
import WishListCard from "../../components/wishlist/WishListCard.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";
import "./WishlistPage.css";

export function WishlistPage() {
  const { wishlist, isLoadingWishlist } = useWishlist();
  if (isLoadingWishlist) {
    return <div> Loading wishlist... </div>;
  }
  const safeWishlist = wishlist?.filter(Boolean) ?? [];

  if (safeWishlist.length === 0) {
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
        {safeWishlist.length} package
        {safeWishlist.length > 1 ? "s" : ""} saved
      </p>

      <div className="wishlist-grid">
        {safeWishlist.map((pkg) => (
          <WishListCard key={pkg._id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}

export default WishlistPage;
