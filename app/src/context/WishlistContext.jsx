import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  getWishlist,
  addWishlistItem,
  deleteWishlistItem,
} from "../services/wishlistService";
const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [isLoadingWishlist, setIsLoadingWishlist] = useState(false);

  useEffect(() => {
    async function loadWishlist() {
      try {
        setIsLoadingWishlist(true);
        const data = await getWishlist();
        setWishlist(data.filter(Boolean));
      } catch (error) {
        console.error("failed to load wishlist:", error);
      } finally {
        setIsLoadingWishlist(false);
      }
    }
    loadWishlist();
  }, []);

  const addToWishlist = async (pkg) => {
    const alreadyExists = wishlist.some((item) => item.packageId === pkg.id);
    if (alreadyExists) return;
    try {
      const newItem = await addWishlistItem(pkg);
      setWishlist((prev) => [...prev, newItem]);
    } catch (error) {
      console.error("failed to add wishlist item:", error);
    }
  };
  const removeFromWishlist = async (crudId) => {
    try {
      await deleteWishlistItem(crudId);
      setWishlist((prev) => prev.filter((item) => item._id !== crudId));
    } catch (error) {
      console.error("failed to remove wishlist item:", error);
    }
  };

  const toggleWishlist = async (pkg) => {
    const existingItem = wishlist.find(
      (item) => item && item.packageId === pkg.id
    );
    if (existingItem) {
      await removeFromWishlist(existingItem._id);
    } else {
      await addToWishlist(pkg);
    }
  };

  const isInWishlist = (packageId) => {
    return wishlist.some((item) => item && item.packageId === packageId);
  };

  const value = useMemo(
    () => ({
      wishlist,
      wishlistCount: wishlist.length,
      isLoadingWishlist,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isInWishlist,
    }),
    [wishlist, isLoadingWishlist]
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
