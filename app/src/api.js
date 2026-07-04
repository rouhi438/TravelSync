const defaultApiBaseUrl = "http://localhost:3001";

export default function api(route) {
  const normalizedRoute = route.startsWith("/") ? route : `/${route}`;
  const apiBaseUrl =
    import.meta.env.VITE_API_URL?.replace(/\/$/, "") ?? defaultApiBaseUrl;

  return `${apiBaseUrl}/api${normalizedRoute}`;
}
