import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

export const Footer = () => {
  return (
    <footer className="footer">


      {/* Main Footer Links Section */}
      <div className="footer-top">
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="logo-text">ShopStack</span>
            </Link>
            <p className="footer-tagline">
              Your ultimate online shopping partner. Providing top-tier products,
              unmatched rates, and customer support that never sleeps.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-btn facebook" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-btn instagram" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-btn twitter" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-btn linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="social-btn youtube" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/deals">Deals</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/userdata">UserData</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-col">
            <h4 className="footer-col-title">Categories</h4>
            <ul className="footer-links">
              <li><Link to="/products?category=electronics">Electronics</Link></li>
              <li><Link to="/products?category=beauty">Beauty</Link></li>
              <li><Link to="/products?category=furniture">Furniture</Link></li>
              <li><Link to="/products?category=groceries">Groceries</Link></li>
              <li><Link to="/products?category=smartphones">Smartphones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <div className="contact-icon-wrapper">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-text-group">
                  <span className="contact-label">Email Us</span>
                  <span className="contact-value">support@shopstack.com</span>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-text-group">
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">+91 98765 43210</span>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-text-group">
                  <span className="contact-label">Visit Us</span>
                  <span className="contact-value">Hyderabad, India</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright-text">© 2026 <strong className="brand-accent">ShopStack</strong>. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>

    </footer>
  );
};
