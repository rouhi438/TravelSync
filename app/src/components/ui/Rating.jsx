import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Rating = ({ rating, reviewCount }) => {
  const navigate = useNavigate(); // using in future to navigate to rating page
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="rating">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} color="#ffc107" size={14} />
      ))}
      {halfStar && <FaStarHalfAlt color="#ffc107" size={14} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} color="#ffc107" size={14} />
      ))}
      <span className="rating-value">
        {rating.toFixed(1)} ({reviewCount} reviews)
      </span>
    </div>
  );
};
export default Rating;
