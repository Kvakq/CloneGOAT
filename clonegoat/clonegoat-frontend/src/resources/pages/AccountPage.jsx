import React, { useState } from "react";
import "../styles/Account.css";

const AccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="account-page">
      <div className="account-container">
        <div className="account-header">
          <h2>Log In</h2>
          <button className="close-btn">Close</button>
        </div>

        <form className="account-form">
          <div className="input-group">
            <label>Email or Username</label>
            <input type="email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-field">
              <input type={showPassword ? "text" : "password"} required />
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

          <button type="submit" className="login-btn">
            LOG IN
          </button>
        </form>

        <p className="create-account">Create Account</p>

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
