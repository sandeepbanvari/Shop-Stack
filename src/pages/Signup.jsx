import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import "./Signup.css";

export const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [err, setErr] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const pattern = {
    errName: /^[A-Z][a-zA-Z\s]{2,}$/,
    errEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
    errMobile: /^[6-9]\d{9}$/,
    errPassword: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
  };

  function handleData(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validation(e) {
    e.preventDefault();
    setErr("");
    setIsSuccess(false);

    const { name, email, mobile, password } = form;
    const { errName, errEmail, errMobile, errPassword } = pattern;

    if (!name || !email || !mobile || !password) {
      return setErr("Please fill in all fields.");
    }
    if (!errName.test(name)) {
      return setErr("Name must start with a capital letter (e.g. John).");
    }
    if (!errEmail.test(email)) {
      return setErr("Please enter a valid email address.");
    }
    if (!errMobile.test(mobile)) {
      return setErr("Please enter a valid 10-digit mobile number.");
    }
    if (!errPassword.test(password)) {
      return setErr(
        "Password must contain 8+ characters, uppercase, lowercase, number and special character."
      );
    }

    localStorage.setItem("users", JSON.stringify(form));

    setIsSuccess(true);
    setErr("Registration Successful! Redirecting...");

    setTimeout(() => {
      navigate("/signin");
    }, 1200);
  }

  return (
    <div className="signup-page">
      {/* Left Column: Visual Banner */}
      <div className="signup-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h2>
            Shop Smart. <br />
            <span>Live Better.</span>
          </h2>
          <p>
            Discover amazing products and enjoy a simple, secure shopping experience.
          </p>
        </div>
      </div>

      {/* Right Column: Signup Form */}
      <div className="signup-form-container">
        <div className="signup-form-box">
          {/* Logo Header */}
          <Link to="/" className="signup-logo">
            <FaBagShopping className="logo-icon" />
            <span>ShopStack</span>
          </Link>

          <div className="form-header">
            <h2>Create Account</h2>
            <p>Join ShopStack and start shopping today.</p>
          </div>

          <form onSubmit={validation}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleData}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleData}
              />
            </div>

            <div className="input-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                value={form.mobile}
                onChange={handleData}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleData}
              />
            </div>

            {/* Checkbox */}
            <div className="terms-checkbox">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <label htmlFor="terms">
                I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span>
              </label>
            </div>

            {/* Error / Success Alert */}
            {err && (
              <div className={`auth-alert ${isSuccess ? "success" : ""}`}>
                {err}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="signup-btn"
              disabled={!agreedToTerms}
            >
              Create Account
            </button>
          </form>

          {/* Signin Redirect Link */}
          <div className="form-footer">
            <p>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};