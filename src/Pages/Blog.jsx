import { motion } from "framer-motion";
import { FaGlobeAsia } from "react-icons/fa";
import { blogPosts } from "../Assets/data/dataBank";
import BlogCTA from "../Components/Blog/BlogCTA";
import BlogCard from "../Components/Blog/BlogCard";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-300 p-4 sm:p-8 font-inter">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto py-12 text-center border-b border-gray-700 mb-12"
      >
        <FaGlobeAsia className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
        <h1 className="text-5xl font-extrabold text-white tracking-tight">
          WindTravels Blog
        </h1>
        <p className="mt-3 text-xl text-gray-400">
          Your journey starts here. Explore our travel tips, guides, and
          destination highlights.
        </p>
      </motion.div>

      {/* Blog Post Grid */}
      <motion.div
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogPosts?.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </motion.div>

      {/* CTA part */}
      <BlogCTA />
    </div>
  );
};

export default Blog;
