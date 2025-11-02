import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-[600px] md:min-h-[700px] bg-black text-gray-200 overflow-hidden"
      style={{
       
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 px-6 md:px-0"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Ready to Brighten Your World?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the next generation of smart, sustainable lighting.
          <br />
          Join thousands who’ve already made the switch to a smarter glow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <button className="bg-black text-white px-8 py-3 border rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
            Shop Now
          </button>
          <button className="bg-white text-black px-8 py-3 border rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
