import React from 'react';
import { motion } from "framer-motion";


const Cards = ({ title, description,icon:Icon,animation }) => {
  return (
    <motion.div
    variants={animation}
   
      initial="hidden"
      whileInView="visible"
    
     
      
      // viewport={{ once: true }}
    className="h-60 w-60 bg-yellow-50 cursor-pointer rounded-2xl flex flex-col justify-center items-center text-center p-6 shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="w-11 h-11 bg-gray-300 rounded-full flex justify-center items-center mb-3">
      {Icon && <Icon className="w-6 h-6 text-yellow-700" />}
      </div>
      <h2 className="underline font-bold mb-2 text-black">{title}</h2>
      <p className="text-gray-800">{description}</p>
    </motion.div>
  );
};

export default Cards;
