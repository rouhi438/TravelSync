import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

export function ErrorPage() {
  const error = useRouteError;
  let title = "Oops! Something went wrong.";
  let message = "An unexpected error has occurred.";

  if (error?.status === 404) {
    title = "Page not found";
    message = "The package or page you are looking for does not exist.";
  } else if (error?.status === 500) {
    title = "Server error";
    message =
      "We are having trouble loading this page. Please try again later.";
  }
  return (
    <main className="error-container">
      <h1 className="error-code">{error?.status || "Error"}</h1>
      <h2 className="error-title">{title}</h2>
      <p className="error-message">{message}</p>
      <Link to="/" className="error-link">
        Go Back Home
      </Link>
    </main>
  );
}
