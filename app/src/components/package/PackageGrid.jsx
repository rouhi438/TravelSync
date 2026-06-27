import PackageCard from "./PackageCard";
import "./PackageGrid.css";
export function PackageGrid({ packages, totalSlots = packages.length }) {
  const placeholderCount = Math.max(0, totalSlots - packages.length);

  return (
    <div className="package-grid">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} package={pkg} />
      ))}

      {Array.from({ length: placeholderCount }).map((_, index) => (
        <div
          key={`package-placeholder-${index}`}
          className="package-card package-card-placeholder"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
