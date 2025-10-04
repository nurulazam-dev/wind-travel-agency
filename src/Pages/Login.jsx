import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import SocialLogin from "../Components/Shared/SocialLogin";
import { RiLoader2Line } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4 font-inter">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", damping: 15 }}
        className="w-full max-w-md p-8 sm:p-10 bg-gray-900 rounded-xl shadow-xl border border-gray-700"
      >
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Login to WindTravels
        </h1>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <motion.div
            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #F59E0B" }}
            className="relative rounded-lg shadow-inner-lg overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-yellow-500 transition duration-300"
          >
            <FaRegEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 pl-10 pr-4 bg-gray-700 text-white placeholder-gray-500 focus:outline-none"
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #F59E0B" }}
            className="relative rounded-lg shadow-inner-lg overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-yellow-500 transition duration-300"
          >
            <MdOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-10 pr-4 bg-gray-700 text-white placeholder-gray-500 focus:outline-none"
            />
          </motion.div>

          {/* Forgot Password Link */}
          {/* <div className="flex justify-end text-sm border">
            <Link
              to="/forgot-password"
              className="font-medium text-yellow-500 hover:text-yellow-400 transition duration-300"
            >
              Forgot Password?
            </Link>
          </div> */}

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.01,
              boxShadow: "0 10px 20px rgba(252, 211, 77, 0.4)",
            }}
            whileTap={{ scale: 0.99 }}
            disabled={isLoading}
            className={`w-full flex items-center justify-center py-3 px-4 rounded-xl text-lg font-bold transition duration-300 transform ${
              isLoading
                ? "bg-yellow-800 cursor-not-allowed"
                : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
            }`}
          >
            {isLoading ? (
              <>
                <RiLoader2Line className="w-5 h-5 mr-2 animate-spin" />
                Logging in...
              </>
            ) : (
              <>
                <FiLogIn className="w-5 h-5 mr-2" />
                Sign In
              </>
            )}
          </motion.button>
        </form>

        {/* Signup Link */}
        <div className="my-3 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-yellow-500 hover:text-yellow-400 transition duration-300"
          >
            Create your account.
          </Link>
        </div>

        {/* Divider & Social Login */}
        <SocialLogin />
      </motion.div>
    </div>
  );
};

export default Login;
