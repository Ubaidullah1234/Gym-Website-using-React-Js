import React, { useEffect, useState } from 'react';
import { Link,useLocation  } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 800 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const isShopPage = location.pathname === '/shop';
  const isAboutPage = location.pathname === '/about';
  const isRegistrationPage = location.pathname === '/registration';
  const isContactPage = location.pathname === '/contact'
  

  let navbarClass = 'light-nav'; // Default class
  if (isShopPage) {
    navbarClass = 'dark-nav'; // Color for Shop page
  } else if (isAboutPage) {
    navbarClass = 'dark-nav'; // Color for About page (define this class in CSS)
  } else if (isRegistrationPage) {
    navbarClass = 'dark-nav'; // Color for Registration page (define this class in CSS)
  } else if(isContactPage) {
    navbarClass= 'dark-nav'

  }


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} ${navbarClass}`}>
      <p className='bronx'>
        Bron
        <p className='inline1'>X</p>
        <p className='inline2'>Club</p>
      </p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/registration">Membership</Link></li>
        <li><Link to="/contact"><button className='btn1'>Contact Us</button></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
