export const getRatingStats = (ratings) => {
  if (!ratings || ratings.length === 0) return { avg: 0, count: 0 };
  const sum = ratings.reduce((a, b) => a + b, 0);
  return { avg: sum / ratings.length, count: ratings.length };
};
