import React from 'react'
import Cards from './Cards'
import { Zap, Activity, Sprout, Component } from 'lucide-react';

const WhyChoose = () => {
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

  return (
    <section className="bg-linear-to-r from-yellow-400 to-amber-600 py-24 flex flex-col items-center min-h-[700px]"

    >
      <h1 className="text-gray-900 underline text-3xl font-bold mb-16 mt-8 text-center">
        Why Choose Us?
      </h1>
     
      <div className="flex flex-wrap justify-center gap-12 w-full max-w-6xl px-5">
        <Cards
          title="Energy Efficient"
          description="Save up to 80% energy with our smart LED design."
          icon={Zap}
          animation={fadeLeft}
        />
        <Cards
          title="Long Lifespan"
          description="Built to last with high-quality components for longer use."
          icon={Activity}
          animation={fadeLeft}
        />
        <Cards
          title="Eco-Friendly"
          description="Sustainable materials that reduce environmental impact."
          icon={Sprout}
          animation={fadeRight}
        />
        <Cards
          title="Modern Design"
          description="Sleek and minimalistic design that suits any home decor."
          icon={Component}
          animation={fadeRight}
        />
      </div>
       <p className='text-gray-700 text-center w-[50%] mt-20 font-semibold '>Choosing us means choosing a greener tomorrow. Every product we create is designed to reduce energy consumption while enhancing your lifestyle. From sustainable materials to long-lasting brightness, we promise innovation that’s kind to the planet — and easy on your wallet.</p>
    </section>
  )
}

export default WhyChoose