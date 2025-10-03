import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Mail = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const Lock = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const LogIn = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" x2="3" y1="12" y2="12" />
  </svg>
);
const Plane = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.8 17.8 10 12V3h3l7 6-2 2h3zM3 12h5v4H3z" />
  </svg>
);
const Google = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 11.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 8c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-10c-3.31 0-6 2.69-6 6h1.5c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5h1.5c0-3.31-2.69-6-6-6zM12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);
const Facebook = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8v-7h-3v-3h3V9c0-3.1 1.9-4.7 4.5-4.7.9 0 1.8.1 2.5.2v2.8h-1.7c-1.2 0-1.5.6-1.5 1.4V12h3.1l-.5 3h-2.6v7h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 font-inter">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", damping: 15 }}
        className="w-full max-w-lg p-8 sm:p-10 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <Plane className="w-10 h-10 mx-auto text-yellow-500 mb-3" />
          <h1 className="text-3xl font-extrabold text-white">
            Welcome Back to WindTravels
          </h1>
          <p className="text-gray-400 mt-2">
            Sign in to manage your bookings and personalized trips.
          </p>
        </div>

        {/* Social Login Options */}
        <div className="flex space-x-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "#4285F4" }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center py-3 px-4 bg-white text-gray-900 rounded-xl font-semibold transition duration-300 shadow-md"
            onClick={() => console.log("Google Sign-in clicked")}
          >
            <Google className="w-5 h-5 mr-2" />
            Google
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "#1877F2" }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center py-3 px-4 bg-gray-700 text-white rounded-xl font-semibold transition duration-300 shadow-md"
            onClick={() => console.log("Facebook Sign-in clicked")}
          >
            <Facebook className="w-5 h-5 mr-2" />
            Facebook
          </motion.button>
        </div>

        {/* Divider */}
        <div className="relative flex justify-center text-xs uppercase mb-8">
          <span className="bg-gray-800 px-2 text-gray-600">
            Or continue with email
          </span>
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <div className="w-full border-t border-gray-700"></div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <motion.div
            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #F59E0B" }}
            className="relative rounded-lg shadow-inner-lg overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-yellow-500 transition duration-300"
          >
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
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
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
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
          <div className="flex justify-end text-sm">
            <Link
              to="/forgot-password"
              className="font-medium text-yellow-500 hover:text-yellow-400 transition duration-300"
            >
              Forgot Password?
            </Link>
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
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Logging in...
              </>
            ) : (
              <>
                <LogIn className="w-5 h-5 mr-2" />
                Sign In
              </>
            )}
          </motion.button>
        </form>

        {/* Footer Link for Signup */}
        <div className="mt-8 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-yellow-500 hover:text-yellow-400 transition duration-300"
          >
            Create your account.
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
