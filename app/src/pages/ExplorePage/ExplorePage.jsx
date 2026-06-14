import { useState } from "react";
import { packages } from "../../data/package";
import { PackageGrid } from "../../components/package/PackageGrid";
import "./ExplorePage.css";
import { HiAnnotation } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

export function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [...new Set(packages.map((p) => p.category))];

  const filteredPackages = packages.filter((pkg) => {
    const trimmedSearch = searchTerm.trim();
    const matchesSearch =
      trimmedSearch === "" ||
      pkg.name.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
      pkg.location.toLowerCase().includes(trimmedSearch.toLowerCase());
    const matchesCategory =
      selectedCategory === null || pkg.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="explore-container">
      <div className="filters">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by destination or package name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Search"
          />
        </div>
        <div className="category-buttons">
          <button
            type="button"
            key="all"
            className={`category-btn ${selectedCategory === null ? "active" : ""}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              type="button"
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
