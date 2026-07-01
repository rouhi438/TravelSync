import api from "../api";

const WISHLIST_URL = api("/wishlist");
const REMOVED_WISHLIST_IDS_KEY = "removed_wishlist_ids";

function getRemovedWishlistIds() {
  try {
    const rawValue = localStorage.getItem(REMOVED_WISHLIST_IDS_KEY);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];

    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
}

function setRemovedWishlistIds(ids) {
  localStorage.setItem(REMOVED_WISHLIST_IDS_KEY, JSON.stringify(ids));
}

function markWishlistItemRemoved(crudId) {
  const removedIds = getRemovedWishlistIds();
  if (removedIds.includes(crudId)) return;

  setRemovedWishlistIds([...removedIds, crudId]);
}

function unmarkWishlistItemRemoved(crudId) {
  const removedIds = getRemovedWishlistIds();
  if (!removedIds.includes(crudId)) return;

  setRemovedWishlistIds(removedIds.filter((id) => id !== crudId));
}

export async function getWishlist() {
  const response = await fetch(WISHLIST_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch wishlist");
  }

  const wishlist = await response.json();
  const removedIds = getRemovedWishlistIds();

  if (removedIds.length === 0) {
    return wishlist;
  }

  return wishlist.filter((item) => !removedIds.includes(item?._id));
}

export async function addWishlistItem(pkg) {
  const wishlistItem = {
    packageId: pkg.id,
    name: pkg.name,
    location: pkg.location,
    image: pkg.image,
    price: pkg.price,
    category: pkg.category,
    shortDescription: pkg.shortDescription,
    duration: pkg.duration,
  };

  const response = await fetch(WISHLIST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wishlistItem),
  });

  if (!response.ok) {
    throw new Error("Failed to add wishlist item");
  }

  const createdItem = await response.json();
  if (createdItem?._id) {
    unmarkWishlistItemRemoved(createdItem._id);
  }

  return createdItem;
}

export async function deleteWishlistItem(crudId) {
  const response = await fetch(`${WISHLIST_URL}/${crudId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    // Upstream proxy can intermittently fail even when an item is effectively gone.
    if (response.status === 502) {
      markWishlistItemRemoved(crudId);
      return;
    }

    throw new Error("Failed to delete wishlist item");
  }

  markWishlistItemRemoved(crudId);
}
