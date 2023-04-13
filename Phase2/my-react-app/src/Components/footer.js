import React from 'react';
import './footer.css';

function Footer() {
  return (
      <footer className="footer">
          <div className="footer-col">
              <h3>Get To Know Us</h3>
              <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press Releases</a></li>
                  <li><a href="#">Amazon Science</a></li>
              </ul>
          </div>
          <div className="footer-col">
              <h3>Connect With Us</h3>
              <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
              </ul>
          </div>
          <div className="footer-col">
              <h3>Make Money with Us</h3>
              <ul>
                  <li><a href="#">Sell on Amazon</a></li>
                  <li><a href="#">Fulfillment By Amazon</a></li>
                  <li><a href="#">Advertise Your Products</a></li>
                  <li><a href="#">Amazon Pay on Merchants</a></li>
              </ul>
          </div>
          <div className="footer-col">
              <h3>Let Us Help You</h3>
              <ul>
                  <li><a href="#">Your Account</a></li>
                  <li><a href="#">Returns Centre</a></li>
                  <li><a href="#">Amazon App Download</a></li>
              </ul>
          </div>
      </footer>

  );
}

export default Footer;
