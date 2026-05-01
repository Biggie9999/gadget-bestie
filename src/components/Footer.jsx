import React from 'react';
import { Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <Link to="/" className="logo" style={{ marginBottom: '16px', display: 'inline-block' }}>
              <img src={logo} alt="Gadget Bestie" style={{ height: '48px', width: 'auto' }} />
            </Link>
            <p style={{ marginTop: '16px' }}>Your premium plug for the best gadget accessories. We deliver nationwide.</p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a href="#" style={{ color: 'white', fontWeight: 'bold' }}>Facebook</a>
              <a href="#" style={{ color: 'white', fontWeight: 'bold' }}>Twitter</a>
              <a href="#" style={{ color: 'white', fontWeight: 'bold' }}>Instagram</a>
            </div>
          </div>
          
          <div>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop All</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="#">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3>Customer Service</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Shipping Policy</Link></li>
              <li><Link to="#">Returns & Exchanges</Link></li>
              <li><Link to="#">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gadget Bestie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
