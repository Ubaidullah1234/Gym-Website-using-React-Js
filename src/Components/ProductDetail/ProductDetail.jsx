import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gymproduct1 from '../../assets/gymproduct1.jpg';
import gymproduct2 from '../../assets/gymproduct2.png';
import gymproduct3 from '../../assets/gymproduct3.jpg';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = {
    1: {
      name: 'Whey Protein',
      image: gymproduct1,
      price: '$29.99',
      description: 'High-quality whey protein for muscle growth.',
    },
    2: {
      name: 'Protein Drink',
      image: gymproduct2,
      price: '$19.99',
      description: 'Delicious protein drink for energy.',
    },
    3: {
      name: 'Protein Drink',
      image: gymproduct3,
      price: '$19.99',
      description: 'Another great protein drink option.',
    },
  };

  const product = products[id];

  const handleAddToCart = () => {
    // Navigate to cart page with product details
    navigate('/cart', { state: { product } });
  };

  return (
    <div className="product-detail">
      {product ? (
        <>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} className="product-image" />
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <button className="add-to-cart" onClick={handleAddToCart}>Buy Now</button>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
