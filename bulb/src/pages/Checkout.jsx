import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, CreditCard, MapPin, Truck, Loader2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { ordersAPI } from "../services/api";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const { cartItems, itemsPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("India");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0 && !isSuccess) {
      navigate("/cart");
    }
  }, [cartItems, navigate, isSuccess]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Transform cart items to match Order schema
      const transformedItems = cartItems.map((item) => ({
        name: item.title,
        qty: item.qty,
        image: item.imageUrl,
        price: item.price,
        product: item.product,
      }));

      const orderData = {
        orderItems: transformedItems,
        shippingAddress: { address, city, postalCode, country },
        paymentMethod,
        totalPrice: itemsPrice,
      };

      await ordersAPI.createOrder(orderData);
      setIsSuccess(true);
      clearCart();
    } catch (error) {
      console.error("Order failed", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-black min-h-screen flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gray-900 border border-green-500/30 p-12 rounded-3xl text-center max-w-md shadow-2xl"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-8 text-black">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-3xl font-black text-white mb-4">Order Confirmed!</h1>
          <p className="text-gray-400 mb-8">
            Thank you for your purchase. We've received your order and are preparing it for bright delivery.
          </p>
          <button
            onClick={() => navigate("/product")}
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl transition"
          >
            Keep Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-10 pt-24 pb-20">
        <h1 className="text-4xl font-black text-white mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Billing Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={submitHandler} className="space-y-8">
              {/* Shipping section */}
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
                <div className="flex items-center gap-2 mb-6 text-amber-500">
                  <MapPin size={20} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider">Shipping Address</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-500 text-sm mb-2">Street Address</label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-500 transition"
                      placeholder="123 Light Ave"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">City</label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-500 transition"
                        placeholder="Bangalore"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">Postal Code</label>
                      <input
                        type="text"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-500 transition"
                        placeholder="560123"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment selection */}
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
                <div className="flex items-center gap-2 mb-6 text-amber-500">
                  <CreditCard size={20} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider">Payment Method</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setPaymentMethod("COD")}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                      paymentMethod === "COD" ? "border-amber-500 bg-amber-500/10" : "border-gray-800 hover:border-gray-600"
                    }`}
                  >
                    <span className="text-white font-bold">Cash on Delivery</span>
                    <Truck size={20} className={paymentMethod === "COD" ? "text-amber-500" : "text-gray-600"} />
                  </div>
                  <div
                    onClick={() => setPaymentMethod("Credit Card")}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition flex items-center justify-between opacity-50 cursor-not-allowed ${
                      paymentMethod === "Credit Card" ? "border-amber-500 bg-amber-500/10" : "border-gray-800"
                    }`}
                  >
                    <span className="text-white font-bold">Credit/Debit Card</span>
                    <CreditCard size={20} className="text-gray-600" />
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-4">Credit/Debit card payment coming soon.</p>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-5 rounded-2xl transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Complete Purchase"}
              </button>
            </form>
          </motion.div>

          {/* Checkout Review */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl sticky top-24">
              <div className="flex items-center gap-2 mb-8 text-amber-500">
                <ShoppingBag size={20} />
                <h2 className="text-xl font-bold text-white uppercase tracking-wider">Order Review</h2>
              </div>
              
              <div className="max-h-[300px] overflow-y-auto mb-8 pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.product} className="flex gap-4 mb-4 pb-4 border-b border-gray-800 last:border-0 last:pb-0">
                    <img src={item.imageUrl} alt={item.title} className="w-16 h-16 rounded-lg object-cover border border-gray-800" />
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-sm line-clamp-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs">{item.qty} × ₹{item.price?.toLocaleString()}</p>
                    </div>
                    <p className="text-white font-black">₹{(item.qty * item.price).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-800">
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>₹{itemsPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <span className="text-white font-bold">Amount to Pay</span>
                  <span className="text-3xl font-black text-amber-500">₹{itemsPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
