import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-amber-400 mb-4">BrightBulb</h2>
          <p className="text-sm text-gray-400">
            Lighting up spaces with smart, energy-efficient, and beautiful designs.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-300">Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-amber-400">Smart Bulbs</a></li>
            <li><a href="#" className="hover:text-amber-400">Pricing</a></li>
            <li><a href="#" className="hover:text-amber-400">Accessories</a></li>
            <li><a href="#" className="hover:text-amber-400">Energy Saver</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-300">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-amber-400">About Us</a></li>
            <li><a href="#" className="hover:text-amber-400">Careers</a></li>
            <li><a href="#" className="hover:text-amber-400">Blog</a></li>
            <li><a href="#" className="hover:text-amber-400">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-300">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-amber-400">Help Center</a></li>
            <li><a href="#" className="hover:text-amber-400">FAQs</a></li>
            <li><a href="#" className="hover:text-amber-400">Returns</a></li>
            <li><a href="#" className="hover:text-amber-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="my-8 border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} BrightBulb. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a href="#" className="text-gray-400 hover:text-amber-400"><Facebook size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-amber-400"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-amber-400"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-amber-400"><Youtube size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-amber-400"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
