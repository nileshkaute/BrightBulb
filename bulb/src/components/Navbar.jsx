import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Menu, ShoppingCart, User as UserIcon, LogOut, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/product" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
      {/* Floating Header info */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-3">
        <Link to="/" className="text-white font-black text-2xl tracking-tighter hover:text-amber-500 transition">
          Bright<span className="text-amber-500">Bulb</span>
        </Link>
      </div>

      {/* Floating toggle buttons */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        {/* Cart Button */}
        <Link
          to="/cart"
          className="relative w-12 h-12 bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300"
        >
          <ShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Menu Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.3 }}
          onClick={() => setOpen(true)}
          className="w-12 h-12 bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </motion.button>
      </div>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              key="panel"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="fixed top-0 right-0 h-full w-80 bg-black border-l border-white/10 z-50 flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-amber-400 font-black text-xl">BrightBulb</span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* User Section */}
              <div className="p-6 bg-gray-950 border-b border-white/5">
                {user ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{user.name}</p>
                        <p className="text-gray-500 text-xs">{user.email}</p>
                      </div>
                    </div>
                    <button onClick={logout} className="text-gray-500 hover:text-red-500 transition">
                      <LogOut size={18} />
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between group p-3 bg-white/5 rounded-xl hover:bg-amber-500 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-amber-500 transition">
                        <UserIcon size={20} />
                      </div>
                      <span className="text-white group-hover:text-black font-bold">Sign In</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-600 group-hover:text-black" />
                  </Link>
                )}
              </div>

              {/* Links */}
              <div className="flex flex-col gap-1 p-6 flex-1">
                <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] mb-3 ml-4">Browse</p>
                {navLinks.map((link, i) => {
                  const active = location.pathname === link.to;
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.35 }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-lg font-semibold transition-all ${
                          active
                            ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <Link
                  to="/cart"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 text-white font-bold p-4 rounded-xl transition"
                >
                  <div className="flex items-center gap-2">
                    <ShoppingCart size={18} />
                    <span>View Cart</span>
                  </div>
                  <span className="bg-amber-500 text-black text-xs px-2 py-0.5 rounded-full font-black">
                    {cartCount}
                  </span>
                </Link>
                <Link
                  to="/product"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl transition shadow-lg shadow-amber-500/20"
                >
                  Shop Now ✦
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
