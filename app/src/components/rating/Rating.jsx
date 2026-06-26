import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./Rating.css";

export function Rating({ rating, reviewCount }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <section className="rating" aria-label={`${rating} out of 5 stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} color="#00a8a8" size={20} />
      ))}

      {halfStar && <FaStarHalfAlt color="#00a8a8" size={20} />}

      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} color="#00a8a8" size={20} />
      ))}

      <span className="rating-value">
        {rating.toFixed(1)} ({reviewCount} reviews)
      </span>
    </section>
  );
}
