import PackageCard from "./PackageCard";
import "./PackageGrid.css";
export function PackageGrid({ packages }) {
  return (
    <div className="package-grid" role="status" aria-live="polite">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} package={pkg} />
      ))}
    </div>
  );
}
