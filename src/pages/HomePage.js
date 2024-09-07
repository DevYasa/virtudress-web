import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-purple-900 text-white min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Revolutionize Your Online Fashion Store!</h1>
          <p className="text-xl mb-8">
            Boost sales and reduce returns with our cutting-edge virtual try-on technology
          </p>
          <Link to="/signup" className="bg-white text-purple-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100">
            Start Free Trial →
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Virtudress?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Increase Conversions</h3>
              <p>Help customers make confident purchases with realistic virtual try-ons</p>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Boost Engagement</h3>
              <p>Provide an interactive and fun shopping experience for your customers.</p>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Reduce Returns</h3>
              <p>Let customers see how products look before buying, minimizing returns.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
              <p>Choose a plan that fits your store's needs.</p>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Integrate</h3>
              <p>Easily add our try-on button to your product pages</p>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Grow</h3>
              <p>Watch your sales increase and returns decrease.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;