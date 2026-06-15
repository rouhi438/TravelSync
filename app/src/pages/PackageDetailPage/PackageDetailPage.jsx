import { useNavigate, useParams } from "react-router-dom";
import { packages } from "../../data/package";
import "./PackageDetailPage.css";

export function PackageDetail() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  if (!packages || packages.length === 0) {
    return <div>Loading packages...</div>;
  }
  const pkg = packages.find((p) => String(p.id) === id);
  if (!pkg) return <div className="not-found">Package not found.</div>;
  return (
    <div className="package-detail-container">
      <img src={pkg.image} alt={pkg.name} className="detail-image" />
      <div className="detail-content">
        <h1 className="package-detail-name">{pkg.name}</h1>
        <p className="detail-location">{pkg.location}</p>
        <p className="detail-description">{pkg.description}</p>
        <div className="detail-meta">
          <span className="detail-price">€ {pkg.price}</span>
          <span className="detail-duration">{pkg.duration}</span>
        </div>
      </div>
    </div>
  );
}
