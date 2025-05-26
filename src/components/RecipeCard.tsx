import React from 'react';
import { Clock, Users } from 'lucide-react';

export interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {recipe.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${
            recipe.difficulty === 'Easy' ? 'bg-green-500' :
            recipe.difficulty === 'Medium' ? 'bg-amber-500' : 'bg-red-500'
          }`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-amber-500 transition-colors">
          {recipe.title}
        </h3>
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{recipe.prepTime} prep</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 pt-2 border-t border-gray-100">
        <button className="w-full bg-amber-50 hover:bg-amber-100 text-amber-600 font-medium py-2 rounded-lg transition-colors">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;