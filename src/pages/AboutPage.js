import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#13072e]">
     <main className="container mx-auto mt-8 p-4 bg-[#13072e] text-white">
       <h1 className="text-4xl font-bold text-center text-white mb-8">About Virtudress</h1>
      
       <section className="bg-[#1f0f47] rounded-lg shadow-md p-10 mb-8">
         <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
         <p className="text-gray-300 mb-4">
           Virtudress was born from a simple idea: make online shopping as intuitive and enjoyable as trying on clothes in a physical store. Founded in 2020, our team of fashion enthusiasts and tech innovators came together to revolutionize the e-commerce experience.
         </p>
         <p className="text-gray-300">
           We believe that technology should enhance the joy of fashion, not complicate it. That's why we've created a virtual dressing room that's not just accurate, but fun to use.
         </p>
       </section>

       <section className="bg-[#1f0f47] rounded-lg shadow-md p-10 mb-8">
         <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
         <p className="text-gray-300">
           At Virtudress, our mission is to empower shoppers with the confidence to make informed fashion choices online. We strive to reduce returns, increase satisfaction, and make online shopping more sustainable by helping customers find the perfect fit, every time.
         </p>
       </section>

       <section className="bg-[#1f0f47] rounded-lg shadow-md p-10 mb-8">
         <h2 className="text-2xl font-semibold text-white mb-4">The Virtudress Difference</h2>
         <ul className="list-disc list-inside text-gray-300">
           <li>Cutting-edge AI and AR technology for accurate virtual try-ons</li>
           <li>Personalized recommendations based on your body type and style preferences</li>
           <li>Seamless integration with top fashion retailers</li>
           <li>Commitment to user privacy and data security</li>
           <li>Continuous innovation to improve your shopping experience</li>
         </ul>
       </section>

       <section className="bg-[#1f0f47] rounded-lg shadow-md p-10 mb-8">
         <h2 className="text-2xl font-semibold text-white mb-4">Join the Virtudress Community</h2>
         <p className="text-gray-300 mb-4">
           We're more than just a technology company – we're building a community of fashion-forward individuals who believe in the power of innovation to transform the way we shop.
         </p>
         <Link to="/contact" className="inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">Get in Touch</Link>
       </section>
     </main>
    </div>
  );
};

export default AboutPage;