import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mt-16 p-8 bg-gray-800 rounded-xl text-center shadow-2xl border border-yellow-500/30"
    >
      <h3 className="text-3xl font-bold text-white mb-2">
        Ready to Plan Your Adventure?
      </h3>
      <p className="text-lg text-gray-400 mb-6">
        Don't just read about it, experience it! Contact us to book your dream
        trip.
      </p>
      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full text-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform"
        >
          <FaMapMarkerAlt className="w-7 h-7 mr-1 inline-block" />
          Start Booking
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default BlogCTA;
