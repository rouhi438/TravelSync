import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import "./RegisterPage.css";

export default function RegisterPage() {
  const [role, setRole] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!role) {
      setError("Please select Traveler or Business");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }
    if (!formData.password) {
      setError("Password is required");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (role === "business" && !formData.businessName) {
      setError("Business name is required");
      return;
    }
    console.log("Registering:", { role, ...formData });
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h2>Create an Account</h2>
        {error && <p className="error-text">{error}</p>}

        <div className="role-buttons">
          <Button
            variant={role === "traveler" ? "primary" : "secondary"}
            type="button"
            onClick={() => setRole("traveler")}
          >
            Traveler
          </Button>
          <Button
            variant={role === "business" ? "primary" : "secondary"}
            type="button"
            onClick={() => setRole("business")}
          >
            Business
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          {role === "business" && (
            <Input
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          )}

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-field">
            <Input
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
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

          <div className="password-field">
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="eye-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <HiOutlineEye size={20} />
              ) : (
                <HiOutlineEyeOff size={20} />
              )}
            </button>
          </div>

          <Button variant="primary" fullWidth type="submit">
            Register
          </Button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
