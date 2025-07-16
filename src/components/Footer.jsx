import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">OG_suryansh</h3>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li>
            <a href="https://works.ogsuryansh.space" target="_blank" rel="noopener noreferrer">Work</a>
          </li>
          <li><a href="#services">Services</a></li>
          <li>
            <a href="https://contact.ogsuryansh.space/" target="_blank" rel="noopener noreferrer">Contact</a>
          </li>
        </ul>
        <div className="footer-social">
          <a href="https://github.com/ogsuryansh" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://t.me/OG_suryansh" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://instagram.com/_ogsuryansh" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Suryansh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;