import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { BsCreditCard2Back } from "react-icons/bs";
import { RiLoader2Line } from "react-icons/ri";

const Check = (props) => (
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
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const CreditCard = (props) => (
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
    <rect width="22" height="16" x="1" y="4" rx="2" />
    <line x1="1" x2="23" y1="10" y2="10" />
  </svg>
);

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { name: "Trip Details", icon: <FaMapMarkerAlt />, step: 1 },
    { name: "Traveler Info", icon: <FiUsers />, step: 2 },
    { name: "Review & Pay", icon: <BsCreditCard2Back />, step: 3 },
  ];

  return (
    <div className="flex justify-between items-center mb-8 w-full max-w-lg mx-auto">
      {steps.map((step, index) => (
        <div key={step.step} className="flex flex-col items-center flex-1">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
              currentStep > step.step
                ? "bg-yellow-500 text-gray-900" // Completed
                : currentStep === step.step
                ? "bg-yellow-500 text-gray-900 ring-4 ring-yellow-500/30" // Current
                : "bg-gray-700 text-gray-400" // Pending
            }`}
          >
            {currentStep > step.step ? (
              <Check className="w-4 h-4" />
            ) : (
              step.step
            )}
          </div>
          <span
            className={`mt-2 text-xs text-center hidden sm:block ${
              currentStep >= step.step ? "text-white" : "text-gray-500"
            }`}
          >
            {step.name}
          </span>
          {index < steps.length - 1 && (
            <div
              className={`absolute h-0.5 w-1/3 mt-4 transform -translate-x-1/2 -z-10 ${
                currentStep > step.step ? "bg-yellow-500" : "bg-gray-700"
              }`}
              style={{
                left: `${(index + 1) * (100 / steps.length)}%`,
                top: "130px",
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

// Custom Input Field Component for consistency
const CustomInput = ({
  Icon,
  placeholder,
  value,
  onChange,
  type = "text",
  required = true,
}) => (
  <motion.div
    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #F59E0B" }}
    className="relative rounded-lg overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-yellow-500 transition duration-300"
  >
    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full py-3 pl-10 pr-4 bg-gray-700 text-white placeholder-gray-500 focus:outline-none"
    />
  </motion.div>
);

// --- STEP COMPONENTS ---

const Step1Details = ({ formData, handleChange }) => (
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-white mb-4">1. Select Your Trip</h2>

    <CustomInput
      Icon={FaMapMarkerAlt}
      placeholder="Destination (e.g., Kyoto, Japan)"
      value={formData.destination}
      onChange={(e) => handleChange("destination", e.target.value)}
    />

    <CustomInput
      Icon={FiCalendar}
      placeholder="Start Date"
      type="date"
      value={formData.startDate}
      onChange={(e) => handleChange("startDate", e.target.value)}
    />

    <CustomInput
      Icon={FiCalendar}
      placeholder="End Date"
      type="date"
      value={formData.endDate}
      onChange={(e) => handleChange("endDate", e.target.value)}
    />

    <CustomInput
      Icon={FiUsers}
      placeholder="Number of Travelers"
      type="number"
      value={formData.travelers}
      onChange={(e) => handleChange("travelers", e.target.value)}
    />
  </motion.div>
);

const Step2Traveler = ({ formData, handleChange }) => (
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-white mb-4">
      2. Traveler Information
    </h2>

    <CustomInput
      Icon={<FiUsers />}
      placeholder="Primary Traveler Full Name"
      value={formData.fullName}
      onChange={(e) => handleChange("fullName", e.target.value)}
    />

    <CustomInput
      Icon={<FaPhoneAlt />}
      placeholder="Contact Phone Number"
      type="tel"
      value={formData.phone}
      onChange={(e) => handleChange("phone", e.target.value)}
    />

    <CustomInput
      Icon={<FaMapMarkerAlt />}
      placeholder="Billing Address (Street, City, ZIP)"
      value={formData.address}
      onChange={(e) => handleChange("address", e.target.value)}
    />

    <div className="p-4 bg-gray-700 rounded-lg text-sm text-gray-400">
      *Ensure the information matches the primary cardholder for payment
      validation.
    </div>
  </motion.div>
);

const Step3Review = ({ formData }) => {
  // Mock Price Calculation
  const basePrice = 450;
  const travelers = parseInt(formData.travelers, 10) || 1;
  const subtotal = basePrice * travelers;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  // Helper to format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-4">
        3. Review and Confirmation
      </h2>

      {/* Trip Summary Card */}
      <div className="bg-gray-700 p-6 rounded-xl space-y-4">
        <h3 className="text-xl font-semibold text-yellow-400">
          Your Booking Summary
        </h3>
        <div className="space-y-2 text-gray-300">
          <div className="flex justify-between border-b border-gray-600 pb-1">
            <span className="font-medium">Destination:</span>
            <span>{formData.destination || "Not Selected"}</span>
          </div>
          <div className="flex justify-between border-b border-gray-600 pb-1">
            <span className="font-medium">Dates:</span>
            <span>
              {formatDate(formData.startDate)} - {formatDate(formData.endDate)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Travelers:</span>
            <span>{formData.travelers || 0}</span>
          </div>
        </div>
      </div>

      {/* Pricing Details */}
      <div className="bg-gray-700 p-6 rounded-xl space-y-3">
        <h3 className="text-xl font-semibold text-yellow-400">
          Payment Breakdown
        </h3>
        <div className="space-y-1 text-gray-300">
          <div className="flex justify-between">
            <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b border-gray-600 pb-2">
            <span>Taxes & Fees (8%):</span> <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2 text-2xl font-extrabold text-yellow-500">
            <span>Total Due:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Payment Input (Mock) */}
      <CustomInput
        Icon={CreditCard}
        placeholder="Credit Card Number (Mock)"
        required={false}
        type="text"
        value="XXXX-XXXX-XXXX-4242"
        onChange={() => {}} // Disabled for mock
      />

      <div className="flex items-start pt-4">
        <input
          id="pay-terms"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
        />
        <label htmlFor="pay-terms" className="ml-2 text-sm text-gray-400">
          I confirm all information is correct and authorize the payment.
        </label>
      </div>
    </motion.div>
  );
};

const BookNow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [formData, setFormData] = useState({
    destination: "Paris, France", // Default value for easy testing
    startDate: "2025-11-10",
    endDate: "2025-11-17",
    travelers: "2",
    fullName: "",
    phone: "",
    address: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (
        !formData.destination ||
        !formData.startDate ||
        !formData.endDate ||
        !formData.travelers
      ) {
        setError("Please fill out all trip details.");
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.fullName || !formData.phone || !formData.address) {
        setError("Please enter all traveler information.");
        return;
      }
    }
    setError(null);
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setError(null);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinalBooking = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsBooked(true);
    }, 2500);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1Details formData={formData} handleChange={handleChange} />;
      case 2:
        return (
          <Step2Traveler formData={formData} handleChange={handleChange} />
        );
      case 3:
        return <Step3Review formData={formData} />;
      default:
        return null;
    }
  };

  if (isBooked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 font-inter">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", damping: 15 }}
          className="w-full max-w-md p-10 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 text-center"
        >
          <Check className="w-16 h-16 mx-auto text-yellow-500 mb-6" />
          <h1 className="text-3xl font-extrabold text-white mb-3">
            Booking Confirmed!
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Your WindTravels adventure to **{formData.destination}** is secured.
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
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 sm:p-8 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", damping: 15 }}
        className="w-full max-w-xl p-8 sm:p-10 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700"
      >
        <h1 className="text-3xl font-extrabold text-white text-center mb-5">
          Book Your Next Trip
        </h1>

        {/* Progress Indicator */}
        <StepIndicator currentStep={currentStep} />
        <div className="my-8 border-b border-gray-700"></div>

        {/* Content Area */}
        <div className="min-h-[300px] relative">
          {error && (
            <div className="p-3 bg-red-800/50 text-red-300 border border-red-700 rounded-lg text-sm text-center font-medium mb-4">
              {error}
            </div>
          )}
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
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

          {/* Next/Submit Button */}
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
                  <CreditCard className="w-5 h-5 ml-2" />
                ) : (
                  <FaChevronRight className="w-5 h-5 ml-2" />
                )}
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BookNow;
