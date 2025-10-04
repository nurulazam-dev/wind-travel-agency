import CustomInput from "../CustomInput";
import { motion } from "framer-motion";
import { BsCreditCard2Back } from "react-icons/bs";

const Step3Review = ({ formData }) => {
  const basePrice = 450;
  const travelers = parseInt(formData.travelers, 10) || 1;
  const subtotal = basePrice * travelers;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

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

      {/* Payment Input */}
      <CustomInput
        Icon={
          <BsCreditCard2Back className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        }
        placeholder="Credit Card Number"
        required={false}
        type="text"
        value="XXXX-XXXX-XXXX-4242"
        onChange={() => {}}
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

export default Step3Review;
