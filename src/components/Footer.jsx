import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-about">
          <h3>A B Bakery</h3>
          <p>Baked with passion since 1995. We are dedicated to creating the most delicious handcrafted treats for our community.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Our Menu</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/products">Order Online</a></li>
          </ul>
        </div>

        <div className="footer-subscribe">
          <h3>Newsletter</h3>
          <p>Get the latest news and special offers delivered to your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} A B Bakery. All Rights Reserved.</p>
        </div>
      </div>
      
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer; 