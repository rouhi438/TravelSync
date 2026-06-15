import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import "./PackageCard.css";

export default function PackageCard({ package: pkg }) {
  const navigate = useNavigate();
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
        <Button
          variant="primary"
          fullWidth
          type="button"
          onClick={() => navigate(`/package/${pkg.id}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
