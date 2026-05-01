import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Filter } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="container">
      <div style={{ padding: '40px 0', borderBottom: '1px solid var(--border)', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>All Products</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
          Browse our complete collection of premium gadget accessories.
        </p>
      </div>

      <div className="products-layout">
        {/* Sidebar Filters */}
        <div style={{ width: '250px', flexShrink: 0 }} className="desktop-only">
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <Filter size={20} /> Categories
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {categories.map(category => (
                <li key={category}>
                  <button 
                    onClick={() => setActiveCategory(category)}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: activeCategory === category ? 'var(--primary)' : 'var(--text-main)',
                      fontWeight: activeCategory === category ? '700' : '500',
                      textAlign: 'left',
                      width: '100%',
                      cursor: 'pointer'
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div style={{ flex: 1 }}>
          {/* Mobile Categories Dropdown */}
          <div style={{ marginBottom: '24px' }} className="mobile-only">
            <select 
              value={activeCategory} 
              onChange={(e) => setActiveCategory(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              No products found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
