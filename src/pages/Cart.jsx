import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--primary)' }}>
          <ShoppingBag size={48} />
        </div>
        <h1 style={{ marginBottom: '16px' }}>Your cart is empty</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Looks like you haven't added any accessories yet.</p>
        <Link to="/products" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', margin: '40px 0 32px' }}>Shopping Cart</h1>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Cart Items */}
        <div style={{ flex: '1 1 600px' }}>
          <div className="card" style={{ padding: '24px' }}>
            {cart.map((item, index) => (
              <div key={item.id} style={{ 
                display: 'flex', 
                gap: '24px', 
                padding: '24px 0', 
                borderBottom: index !== cart.length - 1 ? '1px solid var(--border)' : 'none',
                alignItems: 'center'
              }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} 
                />
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 style={{ fontSize: '1.125rem' }}>{item.name}</h3>
                    </Link>
                    <span style={{ fontWeight: '700', fontSize: '1.125rem' }}>₦{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '16px' }}>{item.category}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '4px' }}>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ background: 'none', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}
                      >
                        <Minus size={16} />
                      </button>
                      <span style={{ fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ background: 'none', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)' }}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: 'none', color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: '500' }}
                    >
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div style={{ flex: '1 1 350px' }}>
          <div className="card" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Order Summary</h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--text-muted)' }}>
              <span>Subtotal</span>
              <span>₦{cartTotal.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--text-muted)' }}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', margin: '24px 0', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>Total</span>
              <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>₦{cartTotal.toLocaleString()}</span>
            </div>
            
            <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
              Proceed to Checkout <ArrowRight size={20} />
            </Link>
            
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <Link to="/products" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.875rem' }}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
