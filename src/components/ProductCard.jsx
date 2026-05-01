import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Link to={`/product/${product.id}`} style={{ display: 'block', textDecoration: 'none' }}>
        <div style={{ position: 'relative', paddingBottom: '100%', overflow: 'hidden' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
          <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
            <span className="badge badge-blue">{product.category}</span>
          </div>
        </div>
      </Link>
      
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>{product.name}</h3>
        </Link>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '16px', flexGrow: 1 }}>
          {product.description}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>
            ₦{product.price.toLocaleString()}
          </span>
          <button 
            className="btn btn-primary" 
            style={{ padding: '8px 16px', fontSize: '0.875rem' }}
            onClick={() => addToCart(product)}
          >
            <ShoppingBag size={16} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
