import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/products", name: "Products" },
    // { path: "/categories", name: "Categories" },
    { path: "/deals", name: "Deals" },
    // { path: "/userdata", name: "UserData" },
    { path: "/userlist", name: "UserList" },
  ];

  return (
    <header className="header">
      <div className="header-container">


        <Link to="/" className="header-logo">
          {/* <i className="fa-solid fa-bag-shopping logo-icon"></i>
          <span className="logo-text">ShopStack</span> */}
                    <img
            src="/ShopStack-Shopping-Logo.png"
            alt="ShopStack"
            className="header-logo-img"
          />
        </Link>

        <nav className="header-nav">

          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className="nav-link">
              {link.name}
            </NavLink>
          ))}


        </nav>

        <div className="header-actions">
          {/* <div className="search-box">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
          </div> */}

          <Link to="/wishlist" className="action-icon-btn" title="Wishlist">
            <i className="fa-regular fa-heart"></i>
          </Link>


          <Link to="/cart" className="action-icon-btn " title="Shopping Cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-badge">0</span>
          </Link>


          <Link to="/signup" className="action-icon-btn" title="Account">
            <i className="fa-regular fa-user"></i>
          </Link>


          <button className="mobile-hamburger" aria-label="Menu">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};
