import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative w-full max-w-2xl mx-auto mb-8"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes, ingredients, or categories..."
        className="w-full py-3 pl-12 pr-12 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <Search 
        size={20} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
      )}
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white py-1 px-4 rounded-full hover:bg-amber-600 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;