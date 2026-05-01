import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Truck, ShieldCheck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <p style={{ marginTop: '16px', marginBottom: '24px', color: 'var(--text-muted)' }}>The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', color: 'var(--text-muted)', marginBottom: '32px', fontWeight: '500' }}
      >
        <ArrowLeft size={20} /> Back
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
        {/* Product Image */}
        <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--background)' }}>
          <div style={{ paddingTop: '100%', position: 'relative' }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>

        {/* Product Info */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="badge badge-blue" style={{ alignSelf: 'flex-start', marginBottom: '16px' }}>{product.category}</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{product.name}</h1>
          <p style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '24px' }}>
            ₦{product.price.toLocaleString()}
          </p>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '32px' }}>
            {product.description}
          </p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
            <button 
              onClick={handleAddToCart}
              className={`btn ${added ? 'btn-success' : 'btn-primary'}`} 
              style={{ flex: 1, padding: '16px', fontSize: '1.125rem', backgroundColor: added ? 'var(--success)' : 'var(--primary)' }}
            >
              {added ? <><Check size={20} /> Added to Cart</> : <><ShoppingBag size={20} /> Add to Cart</>}
            </button>
          </div>

          {/* Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Truck size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Fast Nationwide Delivery</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Get it within 2-5 business days</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Genuine Product</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>100% authentic with manufacturer warranty</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
