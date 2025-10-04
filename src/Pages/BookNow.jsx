import { useState } from "react";
import { motion } from "framer-motion";
import Step1Details from "../Components/Booking/Steps/Step1Details";
import Step2Traveler from "../Components/Booking/Steps/Step2Traveler";
import Step3Review from "../Components/Booking/Steps/Step3Review";
import StepIndicator from "../Components/Booking/StepIndicator";
import BookingSuccess from "../Components/Booking/BookingSuccess";
import NavigationButtons from "../Components/Booking/NavigationButtons";

const BookNow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [formData, setFormData] = useState({
    destination: "Paris, France",
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
    return <BookingSuccess formData={formData} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4 sm:p-8 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", damping: 15 }}
        className="w-full max-w-lg p-8 sm:p-10 bg-gray-900 rounded-xl shadow-xl border border-gray-700"
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
        <NavigationButtons
          currentStep={currentStep}
          isLoading={isLoading}
          handleBack={handleBack}
          handleNext={handleNext}
          handleFinalBooking={handleFinalBooking}
        />
      </motion.div>
    </div>
  );
};

export default BookNow;
