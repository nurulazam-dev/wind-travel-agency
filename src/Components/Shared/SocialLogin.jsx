import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      {/* Divider */}
      <div className="relative flex justify-center text-xs uppercase my-5">
        <span className="bg-gray-800 px-2 text-gray-500 rounded-full">
          Or continue with
        </span>
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="w-full border-t border-gray-700"></div>
        </div>
      </div>

      {/* Social Login */}
      <div className="flex space-x-4">
        <motion.button
          whileHover={{
            scale: 1.03,
            backgroundColor: "#4285F4",
            color: "#fff",
          }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 flex items-center justify-center py-3 px-4 bg-white text-gray-900 rounded-xl font-semibold transition duration-300 shadow-md"
          onClick={() => console.log("Google Sign-in clicked")}
        >
          <FcGoogle className="w-5 h-5 mr-2" />
          Google
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.03, backgroundColor: "#1877F2" }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 flex items-center justify-center py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold transition duration-300 shadow-md"
          onClick={() => console.log("Facebook Sign-in clicked")}
        >
          <FaFacebook className="w-5 h-5 mr-2" />
          Facebook
        </motion.button>
      </div>
    </div>
  );
};

export default SocialLogin;
