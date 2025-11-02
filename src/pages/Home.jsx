import React from "react";
import { animate, motion } from 'framer-motion';
import Featured from "../components/Featured";
import ShowcaseVideo from "../components/showcasevideo";
import CallToAction from "../components/CallToAction";
import Divider from "../components/Divider";
import WhyChoose from "../components/WhyChoose";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* ---------------------- Hero Section ---------------------- */}
      <Hero/>
      {/* divider */}
      <Divider />
      {/* ...............feature product................ */}
      <Featured />

      {/* divider */}
      <Divider />

      {/*----------- why choose us----------------- */}
     <WhyChoose/>
       {/* divider */}
      <Divider />

      {/* video section */}
      <ShowcaseVideo />

       {/* divider */}
      <Divider />

      {/* cta section */}
      <CallToAction />
      
      {/* divider */}
      <Divider />

      <Newsletter/>



       {/* divider */}
      <Divider />
      
      <Footer/>

    </div>
  );
}