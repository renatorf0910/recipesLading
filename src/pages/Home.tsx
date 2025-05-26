import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import RecipeGrid from '../components/RecipeGrid';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import recipes from '../data/recipeData';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredRecipes = recipes.filter(recipe => {
    if (searchQuery) {
      return recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setActiveCategory('all');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-8">
          Find Your Next Culinary Adventure
        </h2>
        
        <SearchBar onSearch={handleSearch} />
        
        {!searchQuery && (
          <CategoryFilter 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        )}
        
        {searchQuery && (
          <div className="mb-8">
            <p className="text-gray-700">
              Showing results for "{searchQuery}" ({filteredRecipes.length} recipes found)
            </p>
          </div>
        )}
        
        <RecipeGrid 
          recipes={filteredRecipes} 
          activeCategory={activeCategory} 
        />
        
        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No recipes found</h3>
            <p className="text-gray-500">Try adjusting your search or browse our categories</p>
          </div>
        )}
      </main>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;