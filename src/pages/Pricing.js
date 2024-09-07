import React from 'react';
import '../styles/Pricing.css';

function Pricing() {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <div className="pricing-plans">
        <div className="plan">
          <h2>Starter</h2>
          <p className="price">$99/month</p>
          <ul>
            <li>Up to 100 products</li>
            <li>Basic analytics</li>
            <li>Email support</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p className="price">$299/month</p>
          <ul>
            <li>Up to 1000 products</li>
            <li>Advanced analytics</li>
            <li>Priority support</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="plan">
          <h2>Enterprise</h2>
          <p className="price">Custom</p>
          <ul>
            <li>Unlimited products</li>
            <li>Custom features</li>
            <li>Dedicated support</li>
          </ul>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;