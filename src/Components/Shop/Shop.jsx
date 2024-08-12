import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import gymproduct1 from '../../assets/gymproduct1.jpg';
import gymproduct2 from '../../assets/gymproduct2.png';
import gymproduct3 from '../../assets/gymproduct3.jpg';
import Navbar from '../Navbar/Navbar';

const products = [
  { id: 1, image: gymproduct1, name: 'Whey Protein' },
  { id: 2, image: gymproduct2, name: 'Protein Drink' },
  { id: 3, image: gymproduct3, name: 'Protein Bar' },
];

const Shop = () => {
  return (
    <div className='shop'>
      <Navbar />
      {products.map(product => (
        <div key={product.id} className='shop1'>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className='caption'>
            <p>{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
