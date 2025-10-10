import { motion } from "framer-motion";
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
        className="max-w-6xl mx-auto text-center mb-8"
      >
        <h1 className="text-sm font-semibold uppercase tracking-widest text-yellow-400 mb-1">
          Our Latest blog
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          MNA-Travels Blog
        </h1>
        <p className="mt-2 text-lg text-gray-400">
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
