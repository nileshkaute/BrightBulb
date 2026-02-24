import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="relative bg-black pt-28 pb-16 px-6 text-center overflow-hidden">
      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm px-4 py-1.5 rounded-full mb-6"
        >
          <Sparkles size={14} />
          Premium Lighting Collection
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4"
        >
          Shop{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
            BrightBulb
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-400 max-w-xl mx-auto text-lg mb-8"
        >
          Discover the perfect lighting for every mood, room, and occasion.
          Crafted for beauty. Built to last.
        </motion.p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-md mx-auto rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-900/20"
        >
          <video
            src="video/pBulb.mp4"
            className="w-full h-56 object-cover"
            muted
            autoPlay
            loop
            playsInline
          />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col items-center gap-1 text-gray-600"
        >
          <span className="text-xs uppercase tracking-widest">Browse below</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;
