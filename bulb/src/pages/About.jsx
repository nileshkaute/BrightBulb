import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Leaf, Zap, Award, Users, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const stats = [
  { label: "Products Sold", value: "50,000+", icon: <Lightbulb size={28} /> },
  { label: "Happy Customers", value: "20,000+", icon: <Users size={28} /> },
  { label: "Countries Served", value: "15+", icon: <Globe size={28} /> },
  { label: "Industry Awards", value: "12", icon: <Award size={28} /> },
];

const values = [
  {
    icon: <Zap size={32} className="text-amber-400" />,
    title: "Energy Efficiency",
    desc: "All our products are designed to consume up to 80% less energy than traditional bulbs, saving you money and the planet.",
  },
  {
    icon: <Leaf size={32} className="text-amber-400" />,
    title: "Eco-Friendly",
    desc: "We use sustainable materials and packaging, with zero mercury in all LED products. A brighter future starts with greener choices.",
  },
  {
    icon: <Award size={32} className="text-amber-400" />,
    title: "Premium Quality",
    desc: "Each product undergoes rigorous quality testing with a minimum lifespan of 25,000 hours. We stand behind everything we make.",
  },
];

const team = [
  {
    name: "Arjun Mehta",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Rahul Gupta",
    role: "CTO",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Sneha Nair",
    role: "Marketing Lead",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-400 py-32 px-6 text-center overflow-hidden">
          <motion.div
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.12 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Lightbulb size={500} className="text-black" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-black text-black relative z-10"
          >
            Illuminating{" "}
            <span className="text-white drop-shadow-lg">Every Space</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-6 text-lg md:text-xl text-black/80 max-w-2xl mx-auto relative z-10"
          >
            BrightBulb was born from a simple idea — lighting should be
            beautiful, smart, and kind to the earth. Since 2018, we've been
            turning that idea into reality, one bulb at a time.
          </motion.p>
        </section>

        {/* ── Stats ── */}
        <section className="bg-black py-20 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col items-center gap-3"
              >
                <div className="text-amber-400">{s.icon}</div>
                <p className="text-4xl font-black text-amber-300">{s.value}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Our Story ── */}
        <section className="py-24 px-6 bg-gray-950">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-amber-400 mb-6">Our Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                It started in a small Bangalore apartment where our founder, Arjun Mehta,
                was frustrated with dull, energy-guzzling lights. He set out to build
                something better — lights that were smarter, prettier, and planet-friendly.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                What began as a garage project quickly grew into India's fastest-growing
                smart lighting brand. Today, BrightBulb products illuminate homes,
                offices, hotels, and public spaces across 15 countries.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe the right light can transform a mood, a room — and even a life.
                That's why we pour our hearts into every single product we make.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/30"
            >
              <img
                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=700&h=500&fit=crop"
                alt="BrightBulb office"
                className="w-full h-72 md:h-80 object-cover"
              />
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ── Values ── */}
        <section className="py-24 px-6 bg-black">
          <div className="max-w-5xl mx-auto text-center mb-14">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl font-bold text-amber-400"
            >
              What We Stand For
            </motion.h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-gray-900 border border-amber-900/40 p-8 rounded-2xl hover:border-amber-400 transition-colors group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Team ── */}
        <section className="py-24 px-6 bg-gray-950">
          <div className="max-w-5xl mx-auto text-center mb-14">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl font-bold text-amber-400"
            >
              Meet the Team
            </motion.h2>
            <p className="text-gray-400 mt-3">The people who keep BrightBulb shining.</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-amber-500 group-hover:border-amber-300 transition-colors shadow-lg shadow-amber-900/30">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 font-bold text-white">{member.name}</p>
                <p className="text-sm text-amber-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
