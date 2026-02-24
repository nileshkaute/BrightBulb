import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Glowing background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm px-4 py-1.5 rounded-full mb-8"
        >
          <ShoppingBag size={14} />
          Limited Time Offer — Free Shipping above ₹999
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
        >
          Ready to Brighten
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
            Your World?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Join 20,000+ homeowners who've made the switch to smarter, more
          beautiful lighting. Your perfect glow is just one click away.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/product"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg shadow-amber-500/30"
          >
            Shop Now <ArrowRight size={20} />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 border border-gray-600 hover:border-amber-400 text-white hover:text-amber-300 font-semibold px-10 py-4 rounded-full text-lg transition-all"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm"
        >
          {["⭐ 4.9/5 Rating", "🚚 Free Shipping", "↩ 30-Day Returns", "🔒 Secure Payments"].map((item) => (
            <span key={item} className="hover:text-gray-300 transition-colors">{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
