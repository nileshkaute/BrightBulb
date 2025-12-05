import React from "react";

const ProductHero = () => {
  return (
    <section className="bg-black py-16 flex flex-col items-center justify-center text-center">
      {/* Title */}
      <h1 className="text-8xl font-bold mb-6 text-white tracking-wide">
        Shop Now
      </h1>

      {/* Video */}
      <video
        src="video/pBulb.mp4"
        className="w-[30%] h-[30vh] rounded-2xl shadow-lg mb-6 border "
        muted
        autoPlay
        loop
      ></video>

      {/* Button */}
      <button className="px-6 py-3 bg-white text-black font-semibold border rounded-full hover:bg-black hover:text-white transition">
        Explore Collection
      </button>
    </section>
  );
};

export default ProductHero;
