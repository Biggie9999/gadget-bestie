import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Gadget Bestie" style={{ height: '48px', width: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Shop All</Link>
          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="mobile-actions" style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <Link to="/cart" className="cart-icon" style={{display: 'flex'}} className="desktop-hidden">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div style={{
          backgroundColor: 'var(--surface)',
          padding: '16px 24px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/products" className="nav-link" onClick={closeMenu}>Shop All</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
