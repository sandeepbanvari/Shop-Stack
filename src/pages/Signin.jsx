import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import "./Signin.css";

export const Signin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleData(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validation(e) {
    e.preventDefault();
    setErr("");
    setIsSuccess(false);

    const { email, password } = form;

    if (!email || !password) {
      return setErr("Please fill in all fields.");
    }

    const storedUser = localStorage.getItem("users");

    if (!storedUser) {
      return setErr("User not found. Please sign up first.");
    }

    const user = JSON.parse(storedUser);

    if (email !== user.email) {
      return setErr("Invalid email address.");
    }
    if (password !== user.password) {
      return setErr("Invalid password.");
    }

    setIsSuccess(true);
    setErr("Login Successful!");

    sessionStorage.setItem("isLoggedin", "true");

    setTimeout(() => {
      navigate("/");
    }, 1200);
  }

  return (
    <div className="signin-page">
      {/* Left Column: Visual Banner */}
      <div className="signin-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <span className="banner-label">WELCOME TO SHOPSTACK</span>

          <h2>
            Your Style.
            <br />
            <span>Your Choice.</span>
          </h2>

          <p>
            Discover products you'll love, enjoy exclusive deals, and make every
            shopping experience better.
          </p>
        </div>
      </div>

      {/* Right Column: Signin Form */}
      <div className="signin-form-container">
        <div className="signin-form-box">
          {/* Logo Header */}
          <Link to="/" className="signin-logo">
            <FaBagShopping className="logo-icon" />
            <span>ShopStack</span>
          </Link>

          <div className="form-header">
            <h2>Welcome Back</h2>
            <p>Sign in to access your account</p>
          </div>

          <form onSubmit={validation}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleData}
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleData}
                placeholder="Enter password"
              />
            </div>

            <div className="forgot-password-wrapper">
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            {/* Error / Success Alert */}
            {err && (
              <div className={`auth-alert ${isSuccess ? "success" : ""}`}>
                {err}
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>

          {/* Signup Redirect Link */}
          <div className="form-footer">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};