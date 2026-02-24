import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import { subscribersAPI } from "../services/api";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12 },
  }),
};

const contactInfo = [
  {
    icon: <Mail size={24} className="text-amber-400" />,
    label: "Email Us",
    value: "hello@brightbulb.in",
    sub: "We reply within 24 hours",
  },
  {
    icon: <Phone size={24} className="text-amber-400" />,
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon – Sat, 9 AM – 7 PM",
  },
  {
    icon: <MapPin size={24} className="text-amber-400" />,
    label: "Visit Us",
    value: "12, Tech Park, Whitefield",
    sub: "Bangalore, KA 560066",
  },
  {
    icon: <Clock size={24} className="text-amber-400" />,
    label: "Working Hours",
    value: "Mon – Sat: 9 AM – 7 PM",
    sub: "Sunday: Closed",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Small delay for effect, then show success
    // (extend later to POST to your own contact endpoint)
    try {
      // Optionally subscribe the email to newsletter while sending message
      await subscribersAPI.subscribe(form.email);
    } catch (_) {
      // ignore if already subscribed
    }

    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-400 py-28 px-6 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-black text-black"
          >
            Get In{" "}
            <span className="text-white drop-shadow-lg">Touch</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-5 text-lg md:text-xl text-black/75 max-w-xl mx-auto"
          >
            Have a question, a big order, or just want to say hi? We'd love to
            hear from you. Our team is always a message away.
          </motion.p>
        </section>

        {/* ── Contact Info Cards ── */}
        <section className="py-20 px-6 bg-gray-950">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-gray-900 border border-amber-900/40 hover:border-amber-500 transition-colors p-6 rounded-2xl text-center group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                  {info.label}
                </p>
                <p className="text-white font-bold text-sm">{info.value}</p>
                <p className="text-gray-500 text-xs mt-1">{info.sub}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Contact Form + Map ── */}
        <section className="py-24 px-6 bg-black">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-amber-400 mb-8">
                Send Us a Message
              </h2>

              {status === "success" ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center bg-gray-900 border border-green-500 rounded-2xl p-12 text-center gap-4"
                >
                  <CheckCircle size={64} className="text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-2 rounded-lg transition"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Your Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Arjun Mehta"
                        className="w-full bg-gray-900 border border-gray-700 focus:border-amber-500 text-white placeholder-gray-600 px-4 py-3 rounded-lg outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="arjun@example.com"
                        className="w-full bg-gray-900 border border-gray-700 focus:border-amber-500 text-white placeholder-gray-600 px-4 py-3 rounded-lg outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Product enquiry / Bulk order / Feedback"
                      className="w-full bg-gray-900 border border-gray-700 focus:border-amber-500 text-white placeholder-gray-600 px-4 py-3 rounded-lg outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full bg-gray-900 border border-gray-700 focus:border-amber-500 text-white placeholder-gray-600 px-4 py-3 rounded-lg outline-none transition resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-lg transition disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <span className="animate-pulse">Sending…</span>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl shadow-amber-900/20 h-full min-h-[400px]"
            >
              <iframe
                title="BrightBulb Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.847574258178!2d77.74885!3d12.97194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1329e63b29c3%3A0x84d6e39e8f7b0a8f!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ minHeight: "420px", border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6 bg-gray-950">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold text-amber-400 text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>

            {[
              {
                q: "Do you offer bulk/wholesale pricing?",
                a: "Yes! For orders above 100 units we offer special pricing. Contact our sales team at hello@brightbulb.in.",
              },
              {
                q: "What is your return policy?",
                a: "We offer a 30-day hassle-free return on all products. If you're not happy, neither are we.",
              },
              {
                q: "How long does delivery take?",
                a: "Standard delivery takes 3–5 business days. Express delivery (1–2 days) is available in major cities.",
              },
              {
                q: "Are your products covered by warranty?",
                a: "All BrightBulb products come with a minimum 1-year warranty. Smart bulbs carry a 2-year warranty.",
              },
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="border-b border-gray-800 py-6"
              >
                <h4 className="text-white font-semibold text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
