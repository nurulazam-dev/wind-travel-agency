import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import SocialLogin from "../Components/Shared/SocialLogin";
import { FaUser } from "react-icons/fa6";
import { RiLoader2Line } from "react-icons/ri";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", damping: 15 }}
        className="w-full max-w-md p-8 sm:p-10 bg-gray-900 rounded-xl shadow-xl border border-gray-700"
      >
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Register to MNA-Travels
        </h1>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Error Message Display */}
          {error && (
            <div className="p-3 bg-red-800/50 text-red-300 border border-red-700 rounded-lg text-sm text-center font-medium">
              {error}
            </div>
          )}

          {/* Name Input */}
          <motion.div
            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #F59E0B" }}
            className="relative rounded-lg overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-yellow-500 transition duration-300"
          >
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-3 pl-10 pr-4 bg-gray-700 text-white placeholder-gray-500 focus:outline-none"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #F59E0B" }}
            className="relative rounded-lg overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-yellow-500 transition duration-300"
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
            className="relative rounded-lg overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-yellow-500 transition duration-300"
          >
            <MdOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="password"
              placeholder="Password (min. 8 characters)"
              required
              minLength="8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-10 pr-4 bg-gray-700 text-white placeholder-gray-500 focus:outline-none"
            />
          </motion.div>

          {/* Confirm Password Input (Crucial for UX) */}
          <motion.div
            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #F59E0B" }}
            className="relative rounded-lg overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-yellow-500 transition duration-300"
          >
            <MdOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-3 pl-10 pr-4 bg-gray-700 text-white placeholder-gray-500 focus:outline-none"
            />
          </motion.div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              required
              className="mt-1 w-4 h-4 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-yellow-500 hover:text-yellow-400 font-medium"
              >
                Terms and Conditions
              </Link>
            </label>
          </div>

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
                Creating Account...
              </>
            ) : (
              <>
                <FiUserPlus className="w-5 h-5 mr-2" />
                Sign Up Now
              </>
            )}
          </motion.button>
        </form>

        {/* Login link */}
        <div className="my-3 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-yellow-500 hover:text-yellow-400 transition duration-300"
          >
            Sign In here.
          </Link>
        </div>

        {/* Divider & Social Login */}
        <SocialLogin />
      </motion.div>
    </div>
  );
};

export default Register;
