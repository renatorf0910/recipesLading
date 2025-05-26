import React from 'react';
import RecipeCard, { Recipe } from './RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
  activeCategory: string;
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, activeCategory }) => {
  const filteredRecipes = activeCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category.toLowerCase() === activeCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;