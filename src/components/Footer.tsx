import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">Culinary<span className="text-amber-500">Canvas</span></h3>
            <p className="text-gray-400 mb-4">
              Discover delicious recipes curated by professional chefs and food enthusiasts from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Popular Recipes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Recent Additions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Culinary Street</li>
              <li>Foodie City, FC 12345</li>
              <li>contact@culinarycanvas.com</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} CulinaryCanvas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;