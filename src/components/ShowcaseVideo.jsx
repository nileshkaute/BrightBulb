import React from "react";
import VideoCard from "./VideoCard";
import { motion } from "framer-motion";

const ShowcaseVideo = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Text will fade in AFTER cards finish appearing
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 2, ease: "easeOut" },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 2.5, ease: "easeOut" },
    },
  };

  return (
    <div className="py-20 bg-black text-white min-h-[750px]">
      {/* Section Heading */}
      <h1 className="text-4xl underline font-bold text-center mb-16">
        Experience the Glow
      </h1>

      {/* Video Section */}
      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Left side */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.4 }}
        >
          <motion.div variants={fadeLeft}>
            <VideoCard
              videoSrc="video/video1.mp4"
              caption="It Knows When You Need Light"
            />
          </motion.div>
          <motion.div variants={fadeLeft}>
            <VideoCard
              videoSrc="video/video3.mp4"
              caption="Color Your Mood"
            />
          </motion.div>

          {/* Text appears after cards */}
          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl italic text-gray-300 mt-6 md:mt-0"
          >
            When darkness dreams of beauty.
          </motion.h1>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.4 }}
        >
          {/* Text appears after cards */}
          <motion.h1
            variants={fadeDown}
            className="text-2xl sm:text-3xl md:text-4xl italic text-gray-300 mb-6 md:mb-0"
          >
            The light answers with grace.
          </motion.h1>

          <motion.div variants={fadeRight}>
            <VideoCard
              videoSrc="video/video2.mp4"
              caption="Comfort in Every Corner"
            />
          </motion.div>
          <motion.div variants={fadeRight}>
            <VideoCard
              videoSrc="video/video4.mp4"
              caption="Design Meets Brilliance"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShowcaseVideo;
