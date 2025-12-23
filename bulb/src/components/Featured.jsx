import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { productsAPI } from "../services/api";

const Featured = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await productsAPI.getFeatured();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="featured h-[700px] bg-linear-to-r from-amber-600 to-yellow-400 p-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="text-gray-900 text-4xl font-bold underline mb-6 mt-5">
            Featured Products
          </h1>
          <p className="text-gray-700">
            The future of light is here — and it's glowing in your home.
          </p>

          {/* Horizontal Scroll Container */}
          <div className="flex gap-10 overflow-x-auto no-scrollbar no-vertical-scrollbar snap-x snap-mandatory mt-12 px-4">
            {loading ? (
              <div className="text-gray-700">Loading products...</div>
            ) : products.length === 0 ? (
              <div className="text-gray-700">No featured products yet. Add some from the admin panel!</div>
            ) : (
              products.map((product) => (
                <Card
                  key={product._id}
                  title={product.title}
                  src={product.imageUrl}
                  description={product.description}
                  price={product.price}
                />
              ))
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Featured;
