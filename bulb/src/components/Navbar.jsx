import { motion } from "framer-motion";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMoved, setIsMoved] = useState(false);

  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0,opacity: 0 }}
      animate={
        isMoved
          ? {
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
              scale: 1,
              opacity: 1,
              borderRadius: "10%",
              width: 220,
              height: 220,
              position: "fixed",
            }
          : {
              left: "auto",
              top: "auto",
              translateX: 0,
              translateY: 0,
              scale: 1,
              opacity: 1,
              position: "fixed",
              top: "2.5rem",
              right: "2.5rem",
              width: "3rem",
              height: "3rem",
              borderRadius: "9999px",
            }
      }
      transition={{
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 90,
        damping: 14,
      }}
      className="bg-white text-black cursor-pointer shadow-lg z-50 flex items-center justify-center"
      onClick={() => setIsMoved(!isMoved)}
    >
      {/* Toggle icons */}
      {isMoved ? (
        <div
          className="absolute top-2 right-2 text-white rounded-2xl text-xl cursor-pointer bg-black"
          onClick={(e) => {
            e.stopPropagation();
            setIsMoved(false);
          }}
        >
          <X />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full text-black p-1 text-2xl">
          <Menu />
        </div>
      )}

      {/* Menu links */}
      {isMoved && (
        <div className="flex flex-col items-center justify-center gap-3 mt-8 text-black text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/product" className="hover:underline">
            Products
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      )}
    </motion.div>
  );
}
