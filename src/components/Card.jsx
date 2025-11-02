import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ title, src, description, price }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        className="relative flex justify-center items-center bg-amber-500 h-[400px] w-[320px] mt-10 shrink-0 rounded-xl overflow-hidden snap-center shadow-lg cursor-pointer"
        whileHover={!showDetails ? { scale: 1.05 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        
      >
        {/* Product Image */}
        <img
          className="h-full w-full object-cover"
          src={src}
          alt={title}
        />

        {/* Show View Details button initially */}
        {!showDetails && (
          <motion.button
          
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(true);
            }}
            className="absolute left-1/2 bottom-3 transform -translate-x-1/2 bg-amber-200 text-black px-4 py-2 rounded font-semibold shadow-md hover:bg-amber-300 transition"
          >
            View Details
          </motion.button>
        )}

        {/* Popup Details */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
            
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="absolute inset-0 bg-white/95 text-gray-800 flex flex-col items-center justify-center p-4 rounded-xl shadow-2xl"
            >
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-sm text-gray-600 text-center mb-3">
                {description}
              </p>
              <p className="text-lg font-bold mb-4 text-amber-600">
                ₹{price}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDetails(false)}
                  className="bg-gray-300 text-black px-3 py-2 rounded-md hover:bg-gray-400 transition"
                >
                  Close
                </button>
                <button
                  className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition"
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Card;
