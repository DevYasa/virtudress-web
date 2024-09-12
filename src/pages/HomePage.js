import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-[#13072e] text-white min-h-screen">
      {/* Hero section */}
      <div className="p-4 md:p-8 mb-16">
        <div className="relative overflow-hidden rounded-[25px] bg-gradient-to-br from-[#13072e] to-[#3f2182]">
          <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Revolutionize Your Online Fashion Store!</h1>
              <p className="text-xl md:text-4xl mb-8">
                Boost sales and reduce returns<br />with our cutting-edge virtual<br />try-on technology
              </p>
              <Link to="/pricing" className="bg-white text-[#13072e] px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 inline-block">
                Get Our Service →
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

      {/* Why Choose Virtudress section */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Virtudress?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-8 rounded-2xl">
            <img src="/images/img-convertions.png" alt="Increase Conversions" className="w-full h-65 object-cover rounded-xl mb-4" />
            <h3 className="text-x1 font-semibold mb-2">Increase Conversions</h3>
            <p>Help customers make confident purchases with realistic virtual try-ons</p>
          </div>
          <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-8 rounded-2xl">
            <img src="/images/img-boost.png" alt="Boost Engagement" className="w-full h-65 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Boost Engagement</h3>
            <p>Provide an interactive and fun shopping experience for your customers.</p>
          </div>
          <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-8 rounded-2xl">
            <img src="/images/img-return.png" alt="Reduce Returns" className="w-full h-65 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reduce Returns</h3>
            <p>Let customer see how product look before buying, minimizing returns.</p>
          </div>
        </div>
      </section>

      {/* How It Works section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold mb-8 text-center">How It Works?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-8 rounded-2xl">
            <img src="/images/img-subscribe.png" alt="Subscribe" className="w-full h-65 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
            <p>Choose a plan that fits your store's needs.</p>
          </div>
          <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-8 rounded-2xl">
            <img src="/images/img-integrate.png" alt="Integrate" className="w-full h-65 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Integrate</h3>
            <p>Easily add our try-on button to your product pages</p>
          </div>
          <div className="bg-gradient-to-br from-[#13072e] to-[#3f2182] p-8 rounded-2xl">
            <img src="/images/img-grow.png" alt="Grow" className="w-full h-65 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Grow</h3>
            <p>Watch your sales increase and returns decrease.</p>
          </div>
        </div>
      </section>

      {/* Call to Action section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <img src="/images/img-store.png" alt="Transform Your Online Store" className="w-64 h-auto mx-auto mb-8" />
        <h2 className="text-4xl font-bold mb-4">Ready To Transform Your Online Store?</h2>
        <p className="text-xl mb-8">Join Hundreds of satisfied fashion retailers using Virtudress!</p>
        <Link to="/pricing" className="bg-white text-[#13072e] px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 inline-block">
          Get Started Now →
        </Link>
      </section>
    </div>
  );
};

export default HomePage;