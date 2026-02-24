import React, { useState } from "react";
import Filter from "../components/productComponents/Filter";
import Divider from "../components/Divider";
import ProductHero from "../components/productComponents/ProductHero";
import ProductSection from "../components/productComponents/ProductSection";
import Footer from "../components/Footer";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="bg-black w-full min-h-screen">
      {/* Hero Section */}
      <ProductHero />

      <Divider />

      {/* Count + Layout */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-6 items-start">
          {/* Sidebar Filter */}
          <div className="w-56 shrink-0 hidden md:block">
            <Filter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Mobile filter row */}
          <div className="md:hidden w-full mb-4">
            <Filter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2 px-6">
              <h2 className="text-white font-bold text-xl">
                {selectedCategory === "All" ? "All Products" : selectedCategory}
              </h2>
            </div>
            <ProductSection selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>

      <Divider />
      <Footer />
    </div>
  );
};

export default Product;
