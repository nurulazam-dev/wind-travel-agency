import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRight, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <motion.div
      key={post?.id}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px rgba(252, 211, 77, 0.15)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-900 border rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={post?.image}
          alt={post?.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/374151/ffffff?text=Image+Missing";
          }}
        />
      </div>

      <div className="p-6 pt-2 flex flex-col flex-grow">
        {/* Category Tag */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold text-yellow-400 uppercase tracking-widest">
            {post?.category}
          </span>
          <div className="flex items-center text-sm">
            <FaUser className="w-[14px] h-[14px] mr-2 text-yellow-500" />
            <span>{post?.author}</span>
          </div>
        </div>
        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
          {post?.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-400 text-base mb-4 flex-grow">
          {post?.excerpt}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-700 pt-4 mt-auto">
          <div className="flex items-center">
            <FaCalendarAlt className="w-4 h-4 mr-1 text-yellow-500" />
            <span>{post?.date}</span>
          </div>

          {/* Read More Link */}
          <Link
            to={post?.to}
            className="group flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
          >
            Read More
            <FaArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
