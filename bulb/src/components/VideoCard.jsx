import React from 'react'
import { motion } from "framer-motion";

const VideoCard = ({ videoSrc, caption, animation, className = "" }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animation}
      className={`relative rounded-2xl h-80 w-60 overflow-hidden shadow-lg group text-center ${className}`}
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all"></div>
      <p className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-lg">
        {caption}
      </p>
    </motion.div>
  );
};

export default VideoCard;
