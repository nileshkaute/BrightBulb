import React, { useState } from 'react';

const Filter = () => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');

  const handleReset = () => {
    setCategory('');
    setPrice('');
    setBrand('');
  };

  return (
    <>
      {/* Filter Section */}
      <div className="bg-gray-50 shadow-md  p-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {/* Reset Button */}
        <div>
          <button
            onClick={handleReset}
            className="border border-gray-400 px-4 py-2 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Reset Filters
          </button>
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 text-gray-700 bg-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="" disabled>
              By Category
            </option>
            <option value="led">LED Bulbs</option>
            <option value="lamp">Table Lamps</option>
            <option value="smart">Smart Bulbs</option>
            <option value="tube">Tube Lights</option>
            <option value="decorative">Decorative Bulbs</option>
            <option value="night">Night Bulbs</option>
          </select>

          {/* Price Filter */}
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 text-gray-700 bg-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="" disabled>
              By Price
            </option>
            <option value="low">Low Price</option>
            <option value="high">High Price</option>
          </select>

          {/* Brand Filter */}
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 text-gray-700 bg-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="" disabled>
              By Brand
            </option>
            <option value="philips">Philips</option>
            <option value="syska">Syska</option>
            <option value="wipro">Wipro</option>
            <option value="bajaj">Bajaj</option>
            <option value="orient">Orient Electric</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
