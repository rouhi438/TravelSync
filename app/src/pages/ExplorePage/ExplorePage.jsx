import { useState } from "react";
import { packages } from "../../data/package";
import { PackageGrid } from "../../components/package/PackageGrid";
import "./ExplorePage.css";

export function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(packages.map((p) => p.category))];

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || pkg.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  console.log("filteredPackages count:", filteredPackages.length);

  return (
    <div className="explore-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by destination or package name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <PackageGrid packages={filteredPackages} />
    </div>
  );
}
