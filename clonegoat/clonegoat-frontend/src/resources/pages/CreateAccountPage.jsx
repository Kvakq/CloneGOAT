import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateAccount.css";

const CreateAccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="create-account-page">
      <div className="create-account-container">
        <div className="create-account-header">
          <h2>Create Account</h2>
          <button className="close-btn" onClick={() => navigate("/")}>
            Close
          </button>
        </div>

        <form className="create-account-form">
          <div className="input-group">
            <label>First and Last Name</label>
            <input type="text" required />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" required />
          </div>

          <div className="input-group password-group">
            <label>Password (+8 characters)</label>
            <div className="password-field">
              <input type={showPassword ? "text" : "password"} required />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="create-btn">
            CREATE ACCOUNT
          </button>
        </form>

        <p className="login-link" onClick={() => navigate("/account")}>
          Log in
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

export default CreateAccountPage;
