import CustomInput from "../CustomInput";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

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
      Icon={
        <FiUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      }
      placeholder="Primary Traveler Full Name"
      value={formData.fullName}
      onChange={(e) => handleChange("fullName", e.target.value)}
    />

    <CustomInput
      Icon={
        <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      }
      placeholder="Contact Phone Number"
      type="tel"
      value={formData.phone}
      onChange={(e) => handleChange("phone", e.target.value)}
    />

    <CustomInput
      Icon={
        <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      }
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

export default Step2Traveler;
