import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaGlobeAsia, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight, FaUser } from "react-icons/fa6";

const mockBlogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Solo Travel in Southeast Asia",
    excerpt:
      "Discover hidden gems, stay safe, and budget effectively while exploring the wonders of Thailand, Vietnam, and Cambodia.",
    image: "https://placehold.co/600x400/4F46E5/ffffff?text=Asia+Adventure",
    date: "October 1, 2025",
    author: "Jane Doe",
    category: "Adventure",
    to: "/blog/solo-travel-asia",
  },
  {
    id: 2,
    title: "Luxurious Winter Escapes: Chalets and Ski Resorts",
    excerpt:
      "From the Swiss Alps to Whistler Blackcomb, find the most breathtaking destinations for your next premium winter vacation.",
    image: "https://placehold.co/600x400/06B6D4/ffffff?text=Winter+Chalet",
    date: "September 25, 2025",
    author: "Alex Smith",
    category: "Luxury",
    to: "/blog/winter-escapes",
  },
  {
    id: 3,
    title: "Packing Like a Pro: The Minimalist Traveller's Checklist",
    excerpt:
      "Learn the secrets to packing light, avoiding baggage fees, and having everything you need for a two-week journey.",
    image: "https://placehold.co/600x400/EC4899/ffffff?text=Travel+Essentials",
    date: "September 18, 2025",
    author: "Chris Lee",
    category: "Tips & Guides",
    to: "/blog/packing-checklist",
  },
  {
    id: 4,
    title: "The Most Underrated European Cities for Foodies",
    excerpt:
      "Move beyond Paris and Rome! Explore the culinary delights of Porto, Lyon, and Bologna for an authentic taste of Europe.",
    image: "https://placehold.co/600x400/F59E0B/ffffff?text=European+Cuisine",
    date: "September 10, 2025",
    author: "Maria Garcia",
    category: "Food",
    to: "/blog/underrated-food-cities",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-300 p-4 sm:p-8 font-inter">
      {/* Header Section */}
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
        {mockBlogPosts?.map((post) => (
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
                  {post.category}
                </span>
                <div className="flex items-center text-sm">
                  <FaUser className="w-[14px] h-[14px] mr-2 text-yellow-500" />
                  <span>{post?.author}</span>
                </div>
              </div>
              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-400 text-base mb-4 flex-grow">
                {post.excerpt}
              </p>

              {/* Metadata */}
              <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-700 pt-4 mt-auto">
                <div className="flex items-center">
                  <FaCalendarAlt className="w-4 h-4 mr-1 text-yellow-500" />
                  <span>{post.date}</span>
                </div>

                {/* Read More Link */}
                <Link
                  to={post.to}
                  className="group flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                >
                  Read More
                  <FaArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA part */}
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
    </div>
  );
};

export default Blog;
