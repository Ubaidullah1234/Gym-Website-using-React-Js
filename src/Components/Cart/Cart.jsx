import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const handlePurchase = () => {
    // Handle purchase logic here
    alert('Purchased Successfully!');
    navigate('/');
  };

  return (
    <div className="cart">
      {product ? (
        <>
          <h1>Product</h1>
          <div className="cart-details">
            <img src={product.image} alt={product.name} className="cart-image" />
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <button className="purchase-button" onClick={handlePurchase}>Complete Purchase</button>
          </div>
        </>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
};

export default Cart;
