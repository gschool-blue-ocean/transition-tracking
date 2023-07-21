import React from 'react';
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Transition Tracker. All rights reserved.</p>
        <p>
          {/* Add links to important pages, e.g., Privacy Policy, Terms of Service */}
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
