import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

const badges = [
  { icon: <Zap size={14} />, text: "80% Energy Saving" },
  { icon: <ShieldCheck size={14} />, text: "2-Year Warranty" },
  { icon: <Sparkles size={14} />, text: "Smart & Stylish" },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="video/hero2.mp4"
        muted
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Amber glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/20 blur-3xl rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm"
        >
          <Sparkles size={14} />
          <span>India's #1 Smart Lighting Brand</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight"
        >
          Bright ideas deserve
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
            brighter light.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Smart, sustainable, and stunning LED lighting for every corner of your home.
          Over 50,000+ happy customers across India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/product"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-400/40"
          >
            Shop Now <ArrowRight size={20} />
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 border border-white/30 hover:border-amber-400 text-white hover:text-amber-300 font-semibold px-8 py-4 rounded-full text-lg transition-all backdrop-blur-sm"
          >
            Our Story
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          {badges.map((b) => (
            <span
              key={b.text}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full"
            >
              {b.icon} {b.text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-6 bg-amber-400/60 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Hero;