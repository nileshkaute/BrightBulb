import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  return (
   <div className="relative min-h-screen flex items-center justify-center text-3xl font-bold text-center">
        {/* Background Video */}
        <video
          src="video/hero2.mp4"
          muted
          autoPlay
          loop
          playsInline
          controls={false}
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover border-red-500"
        />

        {/* Overlay Text */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 2,
            delay: 1
          }}
          className="w-full px-4"
        >
          <h1
            className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 sm:px-6"
            style={{ mixBlendMode: "difference" }}
          >
            Bright ideas deserve brighter light.
          </h1>
          <br />
          <h2 className="relative z-10">
            <span className="bg-amber-300 p-2 sm:p-3 rounded-2xl text-black text-lg sm:text-xl">
              Shop Now
            </span>
          </h2>
        </motion.div>
      </div>
  )
}

export default Hero