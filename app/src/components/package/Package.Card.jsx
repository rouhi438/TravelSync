import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { Navigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./PackageCard.css";

export default function PackageCard({ package: pkg }) {
  const fullStars = Math.floor(pkg.rating);
  const halfStar = pkg.rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(pkg.rating);
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
        <div className="rating">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={i} color="#ffc107" size={14} />
          ))}
          {halfStar && <FaStarHalfAlt color="#ffc107" size={14} />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaStarO key={i} color="#ffc107" size={14} />
          ))}
          <span className="rating-value">
            {" "}
            {pkg.rating} ({pkg.reviewCount} reviews)
          </span>
        </div>
        <Button
          variant="primary"
          fullWidth
          onClick={() => navigate(`/package/${pkg.id}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
