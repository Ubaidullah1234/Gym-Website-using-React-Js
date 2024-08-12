import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Background from './Components/Background/Background';
import Shop from './Components/Shop/Shop';
import Title from './Components/Title/Title';
import Workouts from './Components/Workouts/Workouts';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import ProductDetail from './Components/ProductDetail/ProductDetail'; 
import Membership from './Components/Membership/Membership';
import Checkout from './Components/Checkout/Checkout';
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';

const App = () => {
  const location = useLocation();

  // Check if the current path is either the Cart or Checkout page
  const isSpecialPage = 
    location.pathname === '/cart' || 
    location.pathname === '/checkout' || 
    location.pathname.startsWith('/product/');
  

  return (
    <>
      {!isSpecialPage && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Background />
            <Title />
            <Workouts />
          </>
        } />
        
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* ProductDetail page */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
      {!isSpecialPage && <Footer />}
    </>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
