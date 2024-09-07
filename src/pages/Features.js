import React from 'react';
import '../styles/Features.css';

function Features() {
  return (
    <div className="features">
      <h1>Our Features</h1>
      <ul>
        <li>
          <h3>Easy Integration</h3>
          <p>Seamlessly integrate our virtual try-on technology into your existing e-commerce platform.</p>
        </li>
        <li>
          <h3>Realistic 3D Rendering</h3>
          <p>Provide your customers with lifelike 3D models of your clothing items.</p>
        </li>
        <li>
          <h3>Mobile-Friendly</h3>
          <p>Our technology works flawlessly on both desktop and mobile devices.</p>
        </li>
        <li>
          <h3>Analytics Dashboard</h3>
          <p>Gain valuable insights into customer behavior and preferences.</p>
        </li>
      </ul>
    </div>
  );
}

export default Features;