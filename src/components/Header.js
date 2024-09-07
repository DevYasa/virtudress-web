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
        <Link to="/login" className="bg-white text-[#13072e] px-4 py-2 rounded-full hover:bg-purple-100">
          Login →
        </Link>
      </div>
    </header>
  );
};

export default Header;