import PackageCard from "./Package.Card";
import { ExplorePage } from "../../pages/ExplorePage/ExplorePage";
import "./PackageGrid.css";
export function PackageGrid({ packages }) {
  return (
    <div className="package-grid">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} package={pkg} />
      ))}
    </div>
  );
}
