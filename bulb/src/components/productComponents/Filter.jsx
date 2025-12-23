import React, { useState, useEffect } from 'react';
import { productsAPI } from '../../services/api';

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await productsAPI.getAll();
      const uniqueCategories = ['All', ...new Set(response.data.map(p => p.category).filter(Boolean))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Filter by Category</h2>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-yellow-500 text-black font-semibold'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
