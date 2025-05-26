import React from 'react';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Recipes' },
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'lunch', name: 'Lunch' },
  { id: 'dinner', name: 'Dinner' },
  { id: 'dessert', name: 'Desserts' },
  { id: 'vegetarian', name: 'Vegetarian' },
  { id: 'vegan', name: 'Vegan' },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Browse Categories</h2>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;