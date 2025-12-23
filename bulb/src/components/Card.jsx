import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ title, src, description, price }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        className="
          relative flex justify-center items-center 
          bg-amber-500 
          h-[280px] w-[200px] 
          sm:h-70 sm:w-50 
          md:h-[290px] md:w-[250px] 
          lg:h-[300px] lg:w-[250px] 
          xl:h-[300px] xl:w-[250px]
          mt-10 shrink-0 rounded-xl overflow-hidden 
          snap-center shadow-lg cursor-pointer
        "
        whileHover={!showDetails ? { scale: 1.05 } : {}}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
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
            className="
              absolute left-1/2 bottom-3 transform -translate-x-1/2 
              bg-amber-200 text-black px-3 py-2 rounded 
              font-semibold shadow-md hover:bg-amber-300 transition
              text-sm sm:text-base
            "
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
              transition={{ type: 'spring', stiffness: 150, damping: 12 }}
              className="
                absolute inset-0 bg-white/95 text-gray-800 
                flex flex-col items-center justify-center 
                p-4 rounded-xl shadow-2xl
              "
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-center">
                {title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center mb-3 px-2">
                {description}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold mb-4 text-amber-600">
                ₹{price}
              </p>
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={() => setShowDetails(false)}
                  className="bg-gray-300 text-black px-3 py-2 rounded-md hover:bg-gray-400 transition text-sm sm:text-base"
                >
                  Close
                </button>
                <button
                  className="bg-amber-500 text-white px-3 py-2 rounded-md hover:bg-amber-600 transition text-sm sm:text-base"
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