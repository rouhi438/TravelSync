const crudCrudBaseUrl = import.meta.env.VITE_CRUDCRUD_API?.trim();

export async function getPackages() {
  if (!crudCrudBaseUrl) {
    throw new Error("Missing VITE_CRUDCRUD_API in app/.env.local");
  }

  const response = await fetch(`${crudCrudBaseUrl}/packages`);
  if (!response.ok) {
    throw new Error("Failed to fetch packages");
  }

  const data = await response.json();

  return data.map((pkg) => ({
    ...pkg,
    id: pkg._id ?? pkg.id,
    name: pkg.name ?? "Untitled Package",
    location: pkg.location ?? pkg.destination ?? "Unknown location",
    category: pkg.category ?? "General",
    ratings: Array.isArray(pkg.ratings) ? pkg.ratings : [],
  }));
}
