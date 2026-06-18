import { useLoaderData, Link } from "react-router-dom";
import { packages } from "../../data/package";
import "./PackageDetailPage.css";
import placeholderImage from "../../assets/images/placeholder.png";

export function PackageDetailPage() {
  const { pkg } = useLoaderData();

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
        </div>
      </article>
      <div className="btn-holder">
        <Link to="/explore" className="back-btn">
          Back to Explore
        </Link>
      </div>
    </main>
  );
}
