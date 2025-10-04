import { motion } from "framer-motion";

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
    {Icon}
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

export default CustomInput;
