import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-[#13072e] text-white min-h-screen">
      {/* Hero section with shaped background */}
      <div className="p-4 md:p-8 mb-16">
        <div className="relative overflow-hidden rounded-[25px] bg-gradient-to-br from-[#13072e] to-[#3f2182]">
          <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Revolutionize Your Online Fashion Store!</h1>
              <p className="text-xl md:text-4xl mb-8">
                Boost sales and reduce returns<br />with our cutting-edge virtual<br />try-on technology
              </p>
              <Link to="/signup" className="bg-white text-[#13072e] px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 inline-block">
                Start Free Trial →
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="rounded-3xl overflow-hidden">
                <img src="/images/hero-image.png" alt="Virtual try-on technology" className="w-full h-auto" />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Rest of the content */}
      <main className="container mx-auto px-10">
        {/* Why Choose Virtudress section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Virtudress?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Increase Conversions</h3>
              <p>Help customers make confident purchases with realistic virtual try-ons</p>
            </div>
            <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Boost Engagement</h3>
              <p>Provide an interactive and fun shopping experience for your customers.</p>
            </div>
            <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Reduce Returns</h3>
              <p>Let customers see how products look before buying, minimizing returns.</p>
            </div>
          </div>
        </section>

        {/* How It Works section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
              <p>Choose a plan that fits your store's needs.</p>
            </div>
            <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Integrate</h3>
              <p>Easily add our try-on button to your product pages</p>
            </div>
            <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-6 rounded-2xl">
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