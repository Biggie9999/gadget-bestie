import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: 'var(--secondary)', 
        color: 'white', 
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract Background Element */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          opacity: 0.3,
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', marginBottom: '24px' }}>
            New Collection 2026
          </span>
          <h1 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '24px', maxWidth: '800px' }}>
            Upgrade Your Tech with <span style={{ color: 'var(--primary-light)' }}>Premium Accessories</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '40px', maxWidth: '600px' }}>
            Discover our curated collection of high-quality cases, stands, and chargers designed to protect and enhance your devices.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/products" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '16px 32px', fontSize: '1.125rem' }}>
              Shop Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--primary)' }}>
                <Truck size={32} />
              </div>
              <h3>Fast Nationwide Delivery</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Get your accessories delivered to your doorstep swiftly.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--primary)' }}>
                <ShieldCheck size={32} />
              </div>
              <h3>Premium Quality</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Authentic products with warranty for your peace of mind.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--primary)' }}>
                <Headphones size={32} />
              </div>
              <h3>24/7 Customer Support</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>We are always here to help you with your queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container" style={{ padding: '80px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Featured Products</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Handpicked accessories just for you</p>
          </div>
          <Link to="/products" className="btn btn-outline" style={{ display: 'none' }} className="desktop-only">
            View All
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
