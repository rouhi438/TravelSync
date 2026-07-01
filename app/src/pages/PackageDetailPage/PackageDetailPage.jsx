import { useLoaderData, Link } from "react-router-dom";
import "./PackageDetailPage.css";
import placeholderImage from "../../assets/images/placeholder.png";
import InteractiveRating from "../../components/rating/InteractiveRating";
import { getRatingStats } from "../../utils/ratingUtils";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../context/BookingContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useSearchParams } from "react-router-dom";

export function PackageDetailPage() {
  const { pkg } = useLoaderData();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setBookingData } = useBooking();

  const userId = user?.uid ?? "guest";
  const [params] = useSearchParams();
  const search = params.get("search") || "";
  const category = params.get("category") || "";

  const { avg, count } = getRatingStats(pkg.ratings);

  function handleBookNow() {
    if (!user) {
      navigate("/login");
      return;
    }
    setBookingData((prev) => ({
      ...prev,
      packageId: pkg.id,
      travelerName: "",
      travelerEmail: "",
    }));
    navigate("/booking", { state: pkg });
  }

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
          {user ? "Book now" : "Log in to book"}
        </button>
      </div>
    </main>
  );
}
