import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full bg-linear-to-r from-yellow-400 to-amber-600  py-16 px-6 flex flex-col items-center justify-center text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-black/80 max-w-xl mb-8">
        Stay updated with the latest articles, projects, and exclusive updates
        — delivered straight to your inbox.
      </p>

      {/* Input + Button */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full sm:flex-1 px-4 py-3 rounded-md border border-black/30 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300"
        >
          Subscribe
        </button>
      </form>

      {/* Subtext */}
      <p className="text-sm text-black/60 mt-4">
        No spam, unsubscribe anytime.
      </p>
    </section>
  );
};

export default Newsletter;
