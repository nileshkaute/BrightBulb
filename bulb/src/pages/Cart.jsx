import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateQty, itemsPrice } = useCart();
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/login?redirect=checkout");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col uppercase-none">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-10 pt-24 pb-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-amber-500 p-2 rounded-xl">
            <ShoppingCart className="text-black" size={24} />
          </div>
          <h1 className="text-4xl font-black text-white">Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-16 text-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-800 text-gray-600 rounded-full mb-6">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              Looks like you haven't added anything to your cart yet. Let's find some bright ideas!
            </p>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-full transition shadow-lg shadow-amber-500/20"
            >
              Start Shopping <ArrowRight size={20} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.product}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex items-center gap-6"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-gray-800">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <button
                        onClick={() => removeFromCart(item.product)}
                        className="text-gray-500 hover:text-red-500 transition p-1"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-amber-500 font-black text-lg mb-3">₹{item.price?.toLocaleString()}</p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-black border border-gray-700 rounded-lg p-1">
                        <button
                          onClick={() => updateQty(item.product, Math.max(1, item.qty - 1))}
                          className="p-1 hover:text-amber-500 transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center text-white font-bold">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.product, item.qty + 1)}
                          className="p-1 hover:text-amber-500 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)} items)</span>
                    <span>₹{itemsPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span className="text-green-500 font-bold">FREE</span>
                  </div>
                  <div className="pt-4 border-t border-gray-800 flex justify-between items-end">
                    <span className="text-lg font-bold text-white">Total</span>
                    <span className="text-3xl font-black text-amber-500">₹{itemsPrice.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={checkoutHandler}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  Proceed to Checkout <ArrowRight size={20} />
                </button>

                <Link
                  to="/product"
                  className="block text-center text-gray-500 hover:text-white mt-4 text-sm font-bold transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
