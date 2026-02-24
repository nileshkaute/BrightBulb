import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { productsAPI } from "../../services/api";
import { ShoppingCart, Eye, Check } from "lucide-react";
import { useCart } from "../../context/CartContext";

const ProductSection = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quickView, setQuickView] = useState(null);
  const [addedItems, setAddedItems] = useState({});

  const { addToCart } = useCart();

  useEffect(() => {
    productsAPI
      .getAll()
      .then((r) => setProducts(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
    setAddedItems((prev) => ({ ...prev, [product._id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product._id]: false }));
    }, 2000);
  };

  const filtered =
    selectedCategory && selectedCategory !== "All"
      ? products.filter((p) => p.category === selectedCategory)
      : products;

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-800 rounded-2xl h-80 animate-pulse" />
        ))}
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-gray-500">
        <div className="text-6xl mb-4">💡</div>
        <p className="text-xl font-semibold text-gray-400">No products found</p>
        <p className="text-sm mt-1">Try selecting a different category</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filtered.map((product, i) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group bg-gray-900 border border-gray-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-amber-900/20 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

              {/* Category */}
              {product.category && (
                <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-amber-300 text-xs px-2.5 py-1 rounded-full">
                  {product.category}
                </span>
              )}

              {/* Quick View overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => setQuickView(product)}
                  className="flex items-center gap-2 bg-white text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-amber-400 transition"
                >
                  <Eye size={15} /> Quick View
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-white font-bold text-base mb-1">{product.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-1">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-amber-400 font-black text-xl">
                  ₹{product.price?.toLocaleString()}
                </span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleAddToCart(e, product)}
                  className={`flex items-center gap-1.5 font-bold px-4 py-2 rounded-lg transition ${
                    addedItems[product._id]
                    ? "bg-green-500 text-black"
                    : "bg-amber-500 hover:bg-amber-400 text-black"
                  }`}
                >
                  {addedItems[product._id] ? (
                    <><Check size={15} /> Added</>
                  ) : (
                    <><ShoppingCart size={15} /> Add</>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick View Modal */}
      {quickView && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setQuickView(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-gray-900 border border-amber-500/30 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={quickView.imageUrl}
              alt={quickView.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-white font-black text-2xl">{quickView.title}</h2>
                <span className="text-amber-400 font-black text-xl">
                  ₹{quickView.price?.toLocaleString()}
                </span>
              </div>
              {quickView.category && (
                <span className="inline-block bg-amber-500/20 text-amber-300 text-xs px-2.5 py-1 rounded-full mb-3">
                  {quickView.category}
                </span>
              )}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{quickView.description}</p>
              <div className="flex gap-3">
                <button 
                  onClick={(e) => {
                    handleAddToCart(e, quickView);
                    setQuickView(null);
                  }}
                  className="flex-1 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => setQuickView(null)}
                  className="px-5 py-3 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 rounded-xl transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProductSection;