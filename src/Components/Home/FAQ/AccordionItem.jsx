import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div className="border-b border-gray-700 overflow-hidden cursor-pointer">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 px-6 text-left hover:bg-gray-700 transition duration-300"
      >
        <span
          className={`text-lg font-semibold ${
            isOpen ? "text-yellow-500" : "text-white"
          }`}
        >
          {question}
        </span>
        <FaChevronDown
          className={`w-6 h-6 text-yellow-500 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : "transform rotate-0"
          }`}
        />
      </button>

      {/* Answer */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="px-6 text-gray-400 pb-5"
        style={{ height: isOpen ? "auto" : 0 }}
      >
        <div className="py-2">
          <p>{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AccordionItem;
