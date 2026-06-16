import { useNavigate, useLoaderData, Link } from "react-router-dom";
import { packages } from "../../data/package";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import "./PackageDetailPage.css";

export function PackageDetailPage() {
  const { id } = useLoaderData();
  const navigate = useNavigate();

  const pkg = packages.find((p) => p.id === id);
  if (!pkg) return <ErrorPage />;

  const replaceImage = "../../assets/images/placeholder.png";

  return (
    <main className="package-detail-container">
      <h1 className="package-detail-name">{pkg.name}</h1>
      <article className="detail-row">
        <img
          src={pkg.image || replaceImage}
          alt={pkg.name}
          className="detail-image"
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
