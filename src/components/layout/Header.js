import { ArrowRight } from 'lucide-react';
import React from 'react';

const VirtudressHeader = () => {
  return (
    <header className="bg-[#18012b] text-white">
      <nav className="container mx-auto flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-3xl font-bold">V</span>
          <span className="ml-2 text-xl font-semibold">Virtudress</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a href="#" className="font-semibold hover:text-purple-300 transition duration-300">Home</a>
          <a href="#" className="font-semibold hover:text-purple-300 transition duration-300">Pricing</a>
          <a href="#" className="font-semibold hover:text-purple-300 transition duration-300">About</a>
          <a href="#" className="font-semibold hover:text-purple-300 transition duration-300">Contact</a>
        </div>

        {/* Login Button */}
        <button className="bg-white text-[#18012b] px-6 py-2 rounded-full font-semibold flex items-center hover:bg-gray-100 transition duration-300">
          Login
          <ArrowRight className="ml-2" size={16} />
        </button>
      </nav>
    </header>
  );
};

export default VirtudressHeader;