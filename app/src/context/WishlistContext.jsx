import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "travelsync_wishlist_ids";
const WishlistContext = createContext(null);

const loadWishlistIds = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function WishlistProvider({ children }) {
  const [wishlistIds, setWishlistIds] = useState(loadWishlistIds);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const addToWishlist = (packageId) => {
    setWishlistIds((prev) =>
      prev.includes(packageId) ? prev : [...prev, packageId],
    );
  };

  const removeFromWishlist = (packageId) => {
    setWishlistIds((prev) => prev.filter((id) => id !== packageId));
  };

  const toggleWishlist = (packageId) => {
    setWishlistIds((prev) =>
      prev.includes(packageId)
        ? prev.filter((id) => id !== packageId)
        : [...prev, packageId],
    );
  };

  const isInWishlist = (packageId) => wishlistIds.includes(packageId);

  const value = useMemo(
    () => ({
      wishlistIds,
      wishlistCount: wishlistIds.length,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isInWishlist,
    }),
    [wishlistIds],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export default WishlistContext;
