import "./CategoryFilter.css";

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="category-buttons">
      <button
        type="button"
        key="all"
        className={`category-btn ${selectedCategory === null ? "active" : ""}`}
        onClick={() => onSelectCategory(null)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
