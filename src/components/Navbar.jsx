import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaBirthdayCake } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <FaBirthdayCake className="logo-icon" />
            <span>A B Bakery</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 