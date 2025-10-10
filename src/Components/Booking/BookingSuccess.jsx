import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const BookingSuccess = ({ formData }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4 font-inter">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", damping: 15 }}
        className="w-full max-w-md p-10 bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 text-center"
      >
        <FaCheck className="w-16 h-16 mx-auto text-yellow-500 mb-6" />
        <h1 className="text-3xl font-extrabold text-white mb-3">
          Booking Confirmed!
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Your MNA-Travels adventure to **{formData?.destination}** is secured.
        </p>
        <p className="text-gray-500 text-sm">
          A detailed itinerary and confirmation email have been sent to your
          provided contact.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            console.log("Go to Dashboard");
          }}
          className="mt-8 px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full text-lg hover:bg-yellow-400 transition duration-300"
        >
          View My Trips
        </motion.button>
      </motion.div>
    </div>
  );
};

export default BookingSuccess;
