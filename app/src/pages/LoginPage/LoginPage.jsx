import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import "./LoginPage.css";
import { users } from "../../data/users";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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

    const foundUser = users.find((u) => {
      const normalizedRole = u.role.toLowerCase();
      const selectedRole = role.toLowerCase();
      return u.email === email && normalizedRole.includes(selectedRole);
    });

    if (!foundUser) {
      setError("Invalid email, password, or role");
      return;
    }
    navigate("/profile", { state: { user: foundUser } });
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

          <div className="password-field">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <HiOutlineEye size={20} />
              ) : (
                <HiOutlineEyeOff size={20} />
              )}
            </button>
          </div>

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

        <p className="register-link">
          Don&apos;t have an account? <Link to="/register">Register now</Link>
        </p>
      </div>
    </div>
  );
}
