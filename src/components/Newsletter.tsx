import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-amber-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          Get Weekly Recipe Inspiration
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive new recipes, cooking tips, and exclusive content directly to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full py-3 px-4 pr-12 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <button 
            type="submit"
            className="absolute right-1 top-1 bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
        
        {isSubmitted && (
          <p className="text-green-600 mt-3 animate-fadeIn">
            Thanks for subscribing! Check your email soon.
          </p>
        )}
        
        <p className="text-gray-500 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;