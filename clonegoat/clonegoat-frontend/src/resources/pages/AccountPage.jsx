import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Account.css";

const AccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Successful login
      navigate("/"); // Redirect to main page
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="account-page">
      <div className="account-container">
        <div className="account-header">
          <h2>Log In</h2>
          <button className="close-btn" onClick={() => navigate("/")}>
            Close
          </button>
        </div>

        <form className="account-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="input-group">
            <label>Email or Username</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              <button type="button" className="forgot-btn">
                Forgot
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "LOGGING IN..." : "LOG IN"}
          </button>
        </form>

        <p className="create-account" onClick={() => navigate("/create-account")}>
          Create Account
        </p>

        <p className="policy-text">
          By proceeding, you agree to the{" "}
          <a href="https://www.goat.com/privacy">Privacy Policy</a> &{" "}
          <a href="https://www.goat.com/terms">Terms of Service</a>.
        </p>
      </div>
    </div>
  );
};

export default AccountPage;
