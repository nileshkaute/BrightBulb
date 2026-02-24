import React, { useState, useEffect } from "react";
import { productsAPI } from "../../services/api";
import { SlidersHorizontal } from "lucide-react";

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    productsAPI
      .getAll()
      .then((r) => {
        const unique = [
          "All",
          ...new Set(r.data.map((p) => p.category).filter(Boolean)),
        ];
        setCategories(unique);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-fit sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal size={18} className="text-amber-400" />
        <h2 className="text-white font-bold text-lg">Filter</h2>
      </div>

      <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Category</p>

      <div className="flex flex-col gap-2">
        {categories.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
