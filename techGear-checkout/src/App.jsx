import React, { useState, useEffect } from 'react';
import './App.css';

function CartItemRow({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="item-row">
      <div>
        <strong>{item.name}</strong>
        <div className="subtext">${item.price.toFixed(2)} each</div>
      </div>

      <div className="controls">
        <label style={{ fontSize: '12px' }}>Qty:</label>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
          className="qty-input"
        />
        <button onClick={() => onRemove(item.id)} className="delete-btn">
          ✕
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Wireless Headphones', price: 100, quantity: 1 },
    { id: 2, name: 'Ergonomic Mouse', price: 30, quantity: 2 },
  ]);

  const [userProfile, setUserProfile] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const renderMemberBadge = () => {
    // TODO: Temporary bypass
    if (!userProfile)
        return null;
    return (
      <span className="badge">
        {userProfile.tier} Member
      </span>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setUserProfile({ id: 804, name: 'Alex', tier: 'Gold' });
    }, 300);

    const savedCart = [];
    console.log("Restoring saved cart items:", savedCart.length);
  }, []);

  const updateQuantity = (id, newQty) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: +newQty };
        }
        return item;
      })
    );
  };

  const totalItemCount = items.reduce((sum, item) => {
    return sum + item.quantity; 
  }, 0);

  const calculatePercentDiscount = (percent) => {
    const rawSubtotal = calculateSubtotal();
    return (rawSubtotal * percent) / 100;
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();

    if (code === 'SAVE10') {
      const amount = calculatePercentDiscount(10);
      setDiscount(amount);
    } else if (code === 'HALF') {
      const amount = calculatePercentDiscount(50);
      setDiscount(amount);
    } else {
      alert('Invalid promo code');
      setDiscount(0);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = calculateSubtotal();
  const total = Math.max(0, subtotal - discount);

  return (
    <div className="container">
      <header className="header">
        <h2>🛒 TechGear Checkout</h2>
        {renderMemberBadge()}
      </header>

      <div className="card">
        <h3>Your Items</h3>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))
        )}
      </div>

      <div className="card">
        <h3>Cart Summary Badges</h3>
        <p>Total Items in Cart: <strong>{totalItemCount}</strong></p>
      </div>

      <div className="card">
        <h3>Promo Code</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Try 'SAVE10' or 'HALF'"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="input"
          />
          <button onClick={handleApplyPromo} className="button">
            Apply
          </button>
        </div>
      </div>

      <div className="card">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal:</span>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>
        <div className="summary-row">
          <span>Discount:</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <hr />
        <div className="summary-row" style={{ fontSize: '18px' }}>
          <span>Total:</span>
          <strong>${total.toFixed(2)}</strong>
        </div>

        <button
          onClick={() => alert('Order submitted successfully!')}
          className="button"
          style={{ width: '100%', marginTop: '15px' }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}