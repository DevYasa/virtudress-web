import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#13072e] text-white pt-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold ml-2">Virtudress</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-purple-300">Home</Link></li>
            <li><Link to="/pricing" className="hover:text-purple-300">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-purple-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-purple-300">Contact</Link></li>
          </ul>
        </nav>
        <Link to="/auth" className="bg-purple-600 text-white hover:bg-purple-700 transition duration-300 px-4 py-2 rounded-full">
          Login →
        </Link>
      </div>
    </header>
  );
};

export default Header;