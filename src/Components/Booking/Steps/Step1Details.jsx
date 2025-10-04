import { motion } from "framer-motion";
import CustomInput from "../CustomInput";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiCalendar, FiUsers } from "react-icons/fi";

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
      Icon={
        <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      }
      placeholder="Destination (e.g., Kyoto, Japan)"
      value={formData.destination}
      onChange={(e) => handleChange("destination", e.target.value)}
    />

    <CustomInput
      Icon={
        <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      }
      placeholder="Start Date"
      type="date"
      value={formData.startDate}
      onChange={(e) => handleChange("startDate", e.target.value)}
    />

    <CustomInput
      Icon={
        <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      }
      placeholder="End Date"
      type="date"
      value={formData.endDate}
      onChange={(e) => handleChange("endDate", e.target.value)}
    />

    <CustomInput
      Icon={
        <FiUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      }
      placeholder="Number of Travelers"
      type="number"
      value={formData.travelers}
      onChange={(e) => handleChange("travelers", e.target.value)}
    />
  </motion.div>
);

export default Step1Details;
