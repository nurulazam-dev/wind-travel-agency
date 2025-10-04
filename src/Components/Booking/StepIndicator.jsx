import { FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsCreditCard2Back } from "react-icons/bs";

const StepIndicator = ({ currentStep }) => {
  const steps = [
    {
      name: "Trip Details",
      icon: (
        <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      ),
      step: 1,
    },
    {
      name: "Traveler Info",
      icon: (
        <FiUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      ),
      step: 2,
    },
    {
      name: "Review & Pay",
      icon: (
        <BsCreditCard2Back className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      ),
      step: 3,
    },
  ];

  return (
    <div className="flex justify-between items-center mb-8 w-full max-w-lg mx-auto">
      {steps.map((step, index) => (
        <div key={step.step} className="flex flex-col items-center flex-1">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
              currentStep > step.step
                ? "bg-yellow-500 text-gray-900"
                : currentStep === step.step
                ? "bg-yellow-500 text-gray-900 ring-4 ring-yellow-500/30"
                : "bg-gray-700 text-gray-400"
            }`}
          >
            {currentStep > step.step ? (
              <FaCheck className="w-4 h-4" />
            ) : (
              step?.step
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

export default StepIndicator;
