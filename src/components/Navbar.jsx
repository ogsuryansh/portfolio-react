import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Hamburger menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // Theme state
  const [lightTheme, setLightTheme] = useState(
    () => localStorage.getItem("theme") === "light"
  );

  // Apply theme to body and save to localStorage
  useEffect(() => {
    document.body.classList.toggle("light-theme", lightTheme);
    localStorage.setItem("theme", lightTheme ? "light" : "dark");
  }, [lightTheme]);

  // Close menu on link click (for mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/images/main_logo.png" alt="Logo" />
        <span>Suryansh</span>
      </div>
      <ul className={`nav-links${menuOpen ? " active" : ""}`}>
        <li>
          <a href="/" onClick={handleLinkClick}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>About</a>
        </li>
        <li>
          <a href="#services" onClick={handleLinkClick}>Services</a>
        </li>
        <li>
          {/* Use Link for SPA navigation to /works */}
          <Link to="/works" onClick={handleLinkClick}>
            Works
          </Link>
        </li>
        <li>
          {/* Use Link for SPA navigation to /contact */}
          <Link
            to="/contact"
            className="contact-btn"
            onClick={handleLinkClick}
          >
            Get in Touch
          </Link>
        </li>
      </ul>
      <div className="nav-actions">
        {/* Theme Toggle */}
        <div
          className="theme-toggle"
          title="Toggle Theme"
          onClick={() => setLightTheme((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          <span className="icon sun">☀️</span>
          <span className="icon moon">🌙</span>
        </div>
        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          style={{ cursor: "pointer" }}
        >
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;