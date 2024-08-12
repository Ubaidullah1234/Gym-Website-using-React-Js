import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const plan = queryParams.get('plan') || 'Unknown Plan'; // Default value if plan is not found

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (cardNumber.length !== 16) errors.cardNumber = 'Card number must be 16 digits';
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) errors.expiryDate = 'Expiry date must be in MM/YY format';
    if (cvv.length !== 3) errors.cvv = 'CVV must be 3 digits';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert(`You have successfully bought the ${plan} plan!`);
      // Here you would typically handle form submission, e.g., send data to a server
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
   
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry Date</label>
          <input
            type="text"
            id="expiry-date"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          {errors.cvv && <p className="error">{errors.cvv}</p>}
        </div>
        <button type="submit" className="btn">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;
