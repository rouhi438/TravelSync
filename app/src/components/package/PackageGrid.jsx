import PackageCard from "./PackageCard";
import "./PackageGrid.css";
export function PackageGrid({ packages, searchTerm, selectedCategory }) {
  return (
    <div className="package-grid" role="status" aria-live="polite">
      {packages.map((pkg) => (
        <PackageCard
          key={pkg.id}
          package={pkg}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />
      ))}
    </div>
  );
}
