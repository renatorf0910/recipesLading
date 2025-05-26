import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 -z-10"></div>
      <div 
        className="absolute inset-0 opacity-20 -z-10 bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
      ></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Discover Delicious <span className="text-amber-500">Recipes</span> For Every Occasion
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore our collection of chef-curated recipes that are easy to follow and guaranteed to impress. From quick weeknight dinners to special celebrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-500 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors flex items-center justify-center">
              Explore Recipes <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Browse Categories
            </button>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-amber-300 rounded-full opacity-20"></div>
          <img 
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Featured Recipe" 
            className="rounded-lg shadow-xl relative z-10 transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-500 rounded-full opacity-20"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 md:mt-24">
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <h3 className="text-amber-500 font-bold text-3xl md:text-4xl">500+</h3>
            <p className="text-gray-600">Recipes</p>
          </div>
          <div className="text-center">
            <h3 className="text-amber-500 font-bold text-3xl md:text-4xl">24k+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="text-center">
            <h3 className="text-amber-500 font-bold text-3xl md:text-4xl">12+</h3>
            <p className="text-gray-600">Categories</p>
          </div>
          <div className="text-center">
            <h3 className="text-amber-500 font-bold text-3xl md:text-4xl">98%</h3>
            <p className="text-gray-600">Positive Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;