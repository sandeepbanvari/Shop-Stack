import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navLinks = [
    { path: "/", name: "Home", mobileName: "Home", icon: "fa-solid fa-house" },
    { path: "/about", name: "About", mobileName: "About", icon: "fa-solid fa-circle-info" },
    { path: "/products", name: "Products", mobileName: "Products", icon: "fa-solid fa-bag-shopping" },
    // { path: "/categories", name: "Categories", mobileName: "Categories", icon: "fa-solid fa-layer-group" },
    // { path: "/deals", name: "Deals", mobileName: "Deals", icon: "fa-solid fa-fire" },
    { path: "/deals", name: "Deals", mobileName: "Deals", icon: "fa-solid fa-fire" },
    // { path: "/userdata", name: "UserData", mobileName: "UserData", icon: "fa-solid fa-user-gear" },
    { path: "/userlist", name: "UserList", mobileName: "Users", icon: "fa-solid fa-users" },
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="header-logo" aria-label="ShopStack">
            <img
              src="/ShopStack-Shopping-Logo.png"
              alt="ShopStack"
              className="header-logo-img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.parentElement?.querySelector(".header-logo-fallback");
                if (fallback) fallback.style.display = "flex";
              }}
            />
            {/* <div className="header-logo-fallback" style={{ display: "" }}>
              <i className="fa-solid fa-bag-shopping logo-icon"></i>
              <span className="logo-text">ShopStack</span>
            </div> */}
          </Link>

          {/* Desktop Center Navigation (Hidden on Mobile) */}
          <nav className="header-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                end={link.path === "/"}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side Action Icons */}
          <div className="header-actions">
            <Link to="/products" className="action-icon-btn" title="Products">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
            
            <Link to="/wishlist" className="action-icon-btn" title="Wishlist">
              <i className="fa-regular fa-heart"></i>
            </Link>

            <Link to="/cart" className="action-icon-btn" title="Shopping Cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-badge">0</span>
            </Link>

            <Link to="/signup" className="action-icon-btn" title="Account">
              <i className="fa-regular fa-user"></i>
            </Link>
          </div>
        </div>
      </header>

      {/* Floating Bottom Navigation Dock (Visible on Mobile only, max-width: 500px) */}
      <nav className="bottom-nav-dock" aria-label="Mobile Navigation">
        <div className="bottom-nav-container">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `bottom-nav-link ${isActive ? "active" : ""}`
              }
              end={link.path === "/"}
            >
              <div className="bottom-nav-icon-wrapper">
                <i className={link.icon}></i>
              </div>
              <span className="bottom-nav-label">{link.mobileName || link.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};
