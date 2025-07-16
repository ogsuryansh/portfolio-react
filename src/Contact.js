// src/Contact.js
import React from "react";
import "./Contact.css"; // We'll move styles here

const Contact = () => (
  <div className="contact-container">
    <h1>Contact Me</h1>
    <form action="https://formsubmit.co/suryansh1885@gmail.com" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <div className="social-links">
      <p>Or connect with me on:</p>
      <a href="https://github.com/ogsuryansh" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/ogsuryansh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </div>
);

export default Contact;