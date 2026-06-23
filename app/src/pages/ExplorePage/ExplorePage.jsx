import { useState } from "react";
import { packages } from "../../data/package";
import { PackageGrid } from "../../components/package/PackageGrid";
import "./ExplorePage.css";
import { FaSearch } from "react-icons/fa";
import { CategoryFilter } from "../../components/category/CategoryFilter";

export function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoriesList = [...new Set(packages.map((p) => p.category))];

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
      <h1 className="explore-title">Explore Your Next Adventure with Us</h1>
      <p className="explore-subtitle">
        Find travel experience that matches your budget, destination and
        interests.
      </p>
      <div className="filters">
        <CategoryFilter
          categories={categoriesList}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
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
        <p className="results-count" aria-live="polite">
          {filteredPackages.length > 0
            ? `${filteredPackages.length} package${filteredPackages.length > 1 ? "s" : ""} found`
            : "No packages match your search"}
        </p>
      </div>
      <PackageGrid packages={filteredPackages} />
    </div>
  );
}
