import React, { useState } from 'react';

const Filter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const categories = ["LED Bulbs", "Table Lamps", "Smart Bulbs", "Tube Lights", "Decorative Bulbs", "Night Bulbs"];
  const prices = ["Low Price", "High Price"];
  const brands = ["Philips", "Syska", "Wipro", "Bajaj", "Orient Electric"];

  const handleCheckboxChange = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedBrands([]);
  };

  return (
    <div className="bg-gray-50 shadow-md p-5 flex flex-col gap-5 w-full h-full">
      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="border border-gray-400 px-4 py-2 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-100 transition"
      >
        Reset Filters
      </button>

      {/* Category Filter */}
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="flex flex-col gap-1">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category, selectedCategories, setSelectedCategories)}
                className="accent-blue-500"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex flex-col gap-1">
          {prices.map((price) => (
            <label key={price} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedPrices.includes(price)}
                onChange={() => handleCheckboxChange(price, selectedPrices, setSelectedPrices)}
                className="accent-blue-500"
              />
              {price}
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold mb-2">Brand</h3>
        <div className="flex flex-col gap-1">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleCheckboxChange(brand, selectedBrands, setSelectedBrands)}
                className="accent-blue-500"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
