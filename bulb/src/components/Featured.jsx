import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingCart, Check } from "lucide-react";
import { productsAPI } from "../services/api";
import { useCart } from "../context/CartContext";

const Featured = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedItems, setAddedItems] = useState({}); // Tracking which items were just added

  const { addToCart } = useCart();

  useEffect(() => {
    productsAPI
      .getFeatured()
      .then((r) => setProducts(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems((prev) => ({ ...prev, [product._id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product._id]: false }));
    }, 2000);
  };

  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            ✦ Handpicked for You
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Featured Products
          </h2>
          <p className="text-gray-400 mt-3 max-w-md">
            The future of light is here — glowing brilliantly in your home.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/product"
            className="inline-flex items-center gap-2 border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-semibold px-6 py-3 rounded-full transition-all"
          >
            View All Products <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Cards grid */}
      {loading ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-[400px] bg-gray-900 border border-gray-800 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          No featured products yet. Add some from the admin panel!
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group bg-gray-900 border border-gray-800 hover:border-amber-500/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-amber-900/30"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                {/* Category badge */}
                {product.category && (
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-amber-300 text-xs px-2.5 py-1 rounded-full">
                    {product.category}
                  </span>
                )}
                {/* Featured star */}
                <span className="absolute top-3 right-3 bg-amber-500 p-1 rounded-full">
                  <Star size={12} className="text-black fill-black" />
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg leading-tight mb-1">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-black text-xl">
                    ₹{product.price?.toLocaleString()}
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(product)}
                    className={`flex items-center gap-1.5 font-bold px-4 py-2 rounded-lg transition-all ${
                      addedItems[product._id] 
                      ? "bg-green-500 text-black" 
                      : "bg-amber-500 hover:bg-amber-400 text-black"
                    }`}
                  >
                    {addedItems[product._id] ? (
                      <><Check size={16} /> Added</>
                    ) : (
                      <><ShoppingCart size={16} /> Add</>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Featured;
