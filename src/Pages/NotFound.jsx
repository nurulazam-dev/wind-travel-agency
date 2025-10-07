import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHouse } from "react-icons/fa6";
import { BiSolidError } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center p-4 font-inter bg-slate-800 min-h-screen">
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
        initial="hidden"
        animate="visible"
        className="text-center p-8 md:p-12 w-full"
      >
        <BiSolidError className="w-16 h-16 mx-auto text-red-600 mb-1 animate-pulse" />

        <h1 className="text-7xl md:text-8xl font-extrabold mb-1 tracking-tighter text-slate-200">
          4 0 4
        </h1>

        <h2 className="text-3xl font-bold mb-1 text-slate-300">
          Page Not Found
        </h2>

        <p className="text-lg text-slate-400 mb-4 leading-6">
          Oops! The journey took us off-track. The page you are looking for
          doesn't exist or has moved.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px -5px rgba(252, 211, 77, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center mx-auto px-8 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full text-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform"
          >
            <FaHouse className="w-5 h-5 mr-2" />
            Go Back Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
