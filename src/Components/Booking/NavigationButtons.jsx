import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsCreditCard2Back } from "react-icons/bs";
import { RiLoader2Line } from "react-icons/ri";

const NavigationButtons = ({
  currentStep,
  isLoading,
  handleBack,
  handleNext,
  handleFinalBooking,
}) => {
  return (
    <div className="flex justify-between pt-6 border-t border-gray-700 mt-6">
      {/* Back Button */}
      <motion.button
        onClick={handleBack}
        disabled={currentStep === 1 || isLoading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-6 py-2 rounded-xl text-lg font-semibold transition duration-300 transform flex items-center ${
          currentStep === 1 || isLoading
            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
            : "bg-gray-600 text-white hover:bg-gray-500"
        }`}
      >
        <FaChevronLeft className="mr-2" />
        Back
      </motion.button>

      {/* Submit Button */}
      <motion.button
        onClick={currentStep < 3 ? handleNext : handleFinalBooking}
        disabled={isLoading}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 10px 20px rgba(252, 211, 77, 0.4)",
        }}
        whileTap={{ scale: 0.99 }}
        className={`px-6 py-2 rounded-xl text-lg font-bold transition duration-300 transform flex items-center ${
          isLoading
            ? "bg-yellow-800 cursor-not-allowed"
            : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
        }`}
      >
        {isLoading ? (
          <>
            <RiLoader2Line className="w-5 h-5 mr-2 animate-spin" />
            {currentStep === 3 ? "Processing Payment..." : "Validating..."}
          </>
        ) : (
          <>
            {currentStep < 3 ? "Next Step" : "Confirm & Pay"}
            {currentStep === 3 ? (
              <BsCreditCard2Back className="w-5 h-5 ml-2" />
            ) : (
              <FaChevronRight className="w-5 h-5 ml-2" />
            )}
          </>
        )}
      </motion.button>
    </div>
  );
};

export default NavigationButtons;
