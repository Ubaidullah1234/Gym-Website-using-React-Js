import React from 'react';
import { Link } from 'react-router-dom';
import './Membership.css';

const Membership = () => {
  return (
    <div className="membership">
      <h2>Choose Your Membership Plan</h2>
      <div className="plans">
        <div className="plan">
          <h3>Basic Plan</h3>
          <p className="price">$29.99 / month</p>
          <ul>
            <li>Access to basic equipment</li>
            <li>1 free personal training session</li>
            <li>Group fitness classes</li>
            <li>Swimming</li>
          </ul>
          <Link to="/checkout?plan=basic" className="btn">Buy Now</Link>
        </div>
        <div className="plan">
          <h3>Standard Plan</h3>
          <p className="price">$49.99 / month</p>
          <ul>
            <li>All Basic Plan features</li>
            <li>Access to premium equipment</li>
            <li>2 free personal training sessions</li>
            <li>Unlimited group fitness classes</li>
          </ul>
          <Link to="/checkout?plan=standard" className="btn">Buy Now</Link>
        </div>
        <div className="plan">
          <h3>Premium Plan</h3>
          <p className="price">$69.99 / month</p>
          <ul>
            <li>All Standard Plan features</li>
            <li>Access to VIP areas</li>
            <li>3 free personal training sessions</li>
            <li>Priority booking for classes</li>
          </ul>
          <Link to="/checkout?plan=premium" className="btn">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Membership;
