import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, Copy, AlertCircle } from 'lucide-react';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleCompleteOrder = () => {
    setStep(3);
    clearCart();
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (cart.length === 0 && step !== 3) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Progress Steps */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ 
              width: '32px', height: '32px', borderRadius: '50%', 
              backgroundColor: step >= 1 ? 'var(--primary)' : 'var(--border)', 
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' 
            }}>1</div>
            <span style={{ fontWeight: step >= 1 ? '600' : '400', color: step >= 1 ? 'var(--text-main)' : 'var(--text-muted)' }}>Details</span>
            
            <div style={{ width: '40px', height: '2px', backgroundColor: step >= 2 ? 'var(--primary)' : 'var(--border)' }}></div>
            
            <div style={{ 
              width: '32px', height: '32px', borderRadius: '50%', 
              backgroundColor: step >= 2 ? 'var(--primary)' : 'var(--border)', 
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' 
            }}>2</div>
            <span style={{ fontWeight: step >= 2 ? '600' : '400', color: step >= 2 ? 'var(--text-main)' : 'var(--text-muted)' }}>Payment</span>
            
            <div style={{ width: '40px', height: '2px', backgroundColor: step === 3 ? 'var(--primary)' : 'var(--border)' }}></div>
            
            <div style={{ 
              width: '32px', height: '32px', borderRadius: '50%', 
              backgroundColor: step === 3 ? 'var(--primary)' : 'var(--border)', 
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' 
            }}>3</div>
            <span style={{ fontWeight: step === 3 ? '600' : '400', color: step === 3 ? 'var(--text-main)' : 'var(--text-muted)' }}>Done</span>
          </div>
        </div>

        {step === 1 && (
          <div className="card" style={{ padding: '32px' }}>
            <h2 style={{ marginBottom: '24px' }}>Shipping Information</h2>
            <form onSubmit={handleProceedToPayment}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="input-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div className="input-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>

              <div className="input-group">
                <label>Address</label>
                <input type="text" name="address" required value={formData.address} onChange={handleInputChange} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div className="input-group">
                  <label>City</label>
                  <input type="text" name="city" required value={formData.city} onChange={handleInputChange} />
                </div>
                <div className="input-group">
                  <label>State/Province</label>
                  <input type="text" name="state" required value={formData.state} onChange={handleInputChange} />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                <Link to="/cart" style={{ color: 'var(--text-muted)' }}>Back to Cart</Link>
                <button type="submit" className="btn btn-primary">Proceed to Payment</button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="card" style={{ padding: '32px' }}>
            <h2 style={{ marginBottom: '24px' }}>Payment via Bank Transfer</h2>
            
            <div style={{ backgroundColor: 'var(--primary-light)', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '24px' }}>
              <AlertCircle size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
              <p style={{ color: 'var(--primary)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                Please transfer the exact total amount to the bank account provided below. Your order will be processed once we confirm the payment.
              </p>
            </div>

            <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Total Amount:</span>
                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>₦{cartTotal.toLocaleString()}</span>
              </div>
              
              <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '16px 0' }}></div>
              
              <div style={{ marginBottom: '16px' }}>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.875rem', marginBottom: '4px' }}>Bank Name</span>
                <p style={{ fontWeight: '600' }}>Chase Bank</p>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.875rem', marginBottom: '4px' }}>Account Name</span>
                <p style={{ fontWeight: '600' }}>Gadget Bestie LLC</p>
              </div>
              
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.875rem', marginBottom: '4px' }}>Account Number</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <p style={{ fontWeight: '700', fontSize: '1.25rem', letterSpacing: '2px' }}>1234567890</p>
                  <button 
                    onClick={() => copyToClipboard('1234567890')}
                    style={{ background: 'none', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: '600' }}
                  >
                    {copied ? <CheckCircle size={16} color="var(--success)" /> : <Copy size={16} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
              <button onClick={() => setStep(1)} style={{ background: 'none', color: 'var(--text-muted)', fontWeight: '500' }}>Back</button>
              <button onClick={handleCompleteOrder} className="btn btn-primary">I Have Made Payment</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="card" style={{ padding: '60px 32px', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: '#D1FAE5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--success)' }}>
              <CheckCircle size={48} />
            </div>
            <h1 style={{ marginBottom: '16px' }}>Order Placed Successfully!</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto 32px' }}>
              Thank you for shopping with Gadget Bestie. We are verifying your payment and will send a confirmation email shortly.
            </p>
            <div style={{ padding: '24px', backgroundColor: 'var(--background)', borderRadius: 'var(--radius-md)', display: 'inline-block', marginBottom: '40px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Order Reference ID</p>
              <p style={{ fontWeight: '700', fontSize: '1.25rem', letterSpacing: '1px' }}>GB-{Math.floor(Math.random() * 1000000)}</p>
            </div>
            <br />
            <Link to="/" className="btn btn-primary">Return to Home</Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
