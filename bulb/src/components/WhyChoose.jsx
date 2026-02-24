import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, Sprout, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Save up to 80% on your electricity bill. Our LEDs last 25x longer than incandescent bulbs.",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/30 hover:border-yellow-400",
    iconColor: "text-yellow-400",
  },
  {
    icon: Activity,
    title: "Long Lifespan",
    description: "Built to last 25,000+ hours with premium-grade components and rigorous quality testing.",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30 hover:border-amber-400",
    iconColor: "text-amber-400",
  },
  {
    icon: Sprout,
    title: "Eco-Friendly",
    description: "Zero mercury, recyclable packaging, and sustainably-sourced materials in every product.",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/30 hover:border-green-400",
    iconColor: "text-green-400",
  },
  {
    icon: Cpu,
    title: "Smart Control",
    description: "Wi-Fi enabled and compatible with Alexa, Google Home, and Apple HomeKit out of the box.",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30 hover:border-blue-400",
    iconColor: "text-blue-400",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-gray-950 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            ✦ Why BrightBulb
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            Why Choose Us?
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Choosing BrightBulb means choosing a greener tomorrow. Innovation that's kind to the
            planet — and easy on your wallet.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-gradient-to-br ${f.color} border ${f.border} rounded-2xl p-7 transition-all duration-300 group`}
              >
                <div className={`${f.iconColor} mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon size={36} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            Learn more about us <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;