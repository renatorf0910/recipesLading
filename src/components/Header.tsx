import React, { useState, useEffect } from 'react';
import { Menu, Search, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-serif font-bold text-amber-800">Culinary<span className="text-amber-500">Canvas</span></a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-amber-500 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-amber-500 transition-colors">Categories</a>
          <a href="#" className="text-gray-700 hover:text-amber-500 transition-colors">Popular</a>
          <a href="#" className="text-gray-700 hover:text-amber-500 transition-colors">Recent</a>
          <a href="#" className="text-gray-700 hover:text-amber-500 transition-colors">About</a>
          
          <button className="flex items-center text-gray-700 hover:text-amber-500 transition-colors">
            <Search size={20} />
          </button>
        </nav>
        
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 animate-fadeIn">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-amber-500 transition-colors py-2 border-b border-gray-100">Home</a>
            <a href="#" className="text-gray-700 hover:text-amber-500 transition-colors py-2 border-b border-gray-100">Categories</a>
            <a href="#" className="text-gray-700 hover:text-amber-500 transition-colors py-2 border-b border-gray-100">Popular</a>
            <a href="#" className="text-gray-700 hover:text-amber-500 transition-colors py-2 border-b border-gray-100">Recent</a>
            <a href="#" className="text-gray-700 hover:text-amber-500 transition-colors py-2 border-b border-gray-100">About</a>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search recipes..." 
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="absolute top-3 left-3 text-gray-400" size={16} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;