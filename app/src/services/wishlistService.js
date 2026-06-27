const CRUD_CRUD_KEY = import.meta.env.VITE_CRUD_CRUD_API_KEY;
const WISHLIST_URL = `https://crudcrud.com/api/${CRUD_CRUD_KEY}/wishlist`;

export async function getWishlist() {
  const response = await fetch(WISHLIST_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch wishlist");
  }

  return response.json();
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

  return response.json();
}

export async function deleteWishlistItem(crudId) {
  const response = await fetch(`${WISHLIST_URL}/${crudId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete wishlist item");
  }
}
