const crudCrudBaseUrl = `https://crudcrud.com/api/${import.meta.env.VITE_CRUD_CRUD_API_KEY?.trim()}`;

function normalizePackage(pkg) {
  return {
    ...pkg,
    id: pkg._id ?? pkg.id,
    name: pkg.name ?? "Untitled Package",
    location: pkg.location ?? pkg.destination ?? "Unknown location",
    category: pkg.category ?? "General",
    ratings: Array.isArray(pkg.ratings) ? pkg.ratings : [],
  };
}

export async function getPackages() {
  if (!crudCrudBaseUrl) {
    throw new Error("Missing VITE_CRUD_CRUD_API_KEY in app/.env.local");
  }

  const response = await fetch(`${crudCrudBaseUrl}/packages`);
  if (!response.ok) {
    throw new Error("Failed to fetch packages");
  }

  const data = await response.json();

  return data.map(normalizePackage);
}

export async function getPackageById(packageId) {
  if (!crudCrudBaseUrl) {
    throw new Error("Missing VITE_CRUD_CRUD_API_KEY in app/.env.local");
  }

  const response = await fetch(`${crudCrudBaseUrl}/packages/${packageId}`);
  if (!response.ok) {
    throw new Error("Package not found");
  }

  const data = await response.json();

  return normalizePackage(data);
}
