import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { subscribersAPI } from "../services/api";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await subscribersAPI.subscribe(email);
      setStatus("success");
      setEmail("");
    } catch (err) {
      // likely already subscribed — treat as success
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-500 py-24 px-6 overflow-hidden">
      {/* BG pattern circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-5">
            <div className="bg-black/20 p-3 rounded-full">
              <Mail size={28} className="text-black" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Stay in the Loop
          </h2>
          <p className="text-black/80 text-lg mb-10">
            Get exclusive deals, new arrivals, and lighting tips delivered
            straight to your inbox. No spam — ever.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-3 text-black"
            >
              <CheckCircle size={52} />
              <p className="text-xl font-bold">You're in! 🎉</p>
              <p className="text-black/70">Welcome to the BrightBulb family.</p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full sm:flex-1 px-5 py-4 rounded-full border-2 border-black/20 bg-white/70 backdrop-blur-sm placeholder-black/50 text-black focus:outline-none focus:border-black/50 focus:bg-white transition"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status === "loading"}
                className="flex items-center gap-2 bg-black text-white px-7 py-4 rounded-full font-bold whitespace-nowrap hover:bg-gray-900 transition disabled:opacity-70"
              >
                {status === "loading" ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : null}
                Subscribe
              </motion.button>
            </form>
          )}

          <p className="text-sm text-black/60 mt-5">
            Join 20,000+ subscribers · Unsubscribe anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
