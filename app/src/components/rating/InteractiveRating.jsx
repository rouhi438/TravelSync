import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css";

export default function InteractiveRating({
  packageId,
  userId,
  initialAvg,
  initialCount,
}) {
  const [userRating, setUserRating] = useState(() => {
    const stored = localStorage.getItem(`rating_${packageId}_${userId}`);
    return stored ? parseInt(stored, 10) : 0;
  });

  const [avg, setAvg] = useState(initialAvg || 0);
  const [count, setCount] = useState(initialCount || 0);
  const [hover, setHover] = useState(0);

  const handleRate = (rating) => {
    if (userRating > 0) return;
    localStorage.setItem(`rating_${packageId}_${userId}`, rating);
    setUserRating(rating);
    const newCount = count + 1;
    const newAvg = (avg * count + rating) / newCount;
    setAvg(newAvg);
    setCount(newCount);
  };

  return (
    <div className="rating-section">
      {userRating > 0 ? (
        <div className="user-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              color={i < userRating ? "#00a8a8" : "#e4e5e9"}
              size={20}
            />
          ))}
          <span className="avg-display">({avg.toFixed(1)} / 5.0)</span>
        </div>
      ) : (
        <div className="rating-interactive">
          {[...Array(5)].map((_, i) => {
            const val = i + 1;
            return (
              <FaStar
                key={i}
                size={20}
                color={val <= (hover || 0) ? "#00a8a8" : "#e4e5e9"}
                onClick={() => handleRate(val)}
                onTouchEnd={() => handleRate(val)}
                onMouseEnter={() => setHover(val)}
                onMouseLeave={() => setHover(0)}
                style={{ cursor: "pointer", touchAction: "manipulation" }}
              />
            );
          })}
          <span className="avg-display">({avg.toFixed(1)} / 5.0)</span>
        </div>
      )}
    </div>
  );
}
