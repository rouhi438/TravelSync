import PackageCard from "./PackageCard";
import "./PackageGrid.css";
export function PackageGrid({ packages }) {
  const hasPackages = packages.length > 0;

  return (
    <div
      className={`package-grid${hasPackages ? "" : " package-grid-empty"}`}
      role="status"
      aria-live="polite"
    >
      {hasPackages ? (
        packages.map((pkg) => <PackageCard key={pkg.id} package={pkg} />)
      ) : (
        <p className="package-grid-empty">No packages match your search</p>
      )}
    </div>
  );
}
