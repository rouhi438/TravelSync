import PackageCard from "./PackageCard";
import "./PackageGrid.css";

export function PackageGrid({ packages, loading }) {
  if (loading) {
    return <p>Loading packages...</p>;
  }

  return (
    <div className="package-grid">
      {packages.map((pkg) => (
        <PackageCard
          key={pkg._id ?? pkg.id}
          package={{ ...pkg, id: pkg._id ?? pkg.id }}
        />
      ))}
    </div>
  );
}
