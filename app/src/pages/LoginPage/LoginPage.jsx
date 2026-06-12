import { useState } from "react";
import "./LoginPage.css";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }

    if (!role) {
      setError("Please select a role");
      return;
    }
    console.log("Logging in:", { email, password, role });
  };
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login or Create an account</h2>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <div className="role-buttons">
            <Button
              variant={role === "traveler" ? "primary" : "secondary"}
              onClick={() => setRole("traveler")}
              type="button"
            >
              Traveler
            </Button>

            <Button
              variant={role === "business" ? "primary" : "secondary"}
              onClick={() => setRole("business")}
              type="button"
            >
              Business
            </Button>
          </div>

          <Button variant="primary" fullWidth type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
